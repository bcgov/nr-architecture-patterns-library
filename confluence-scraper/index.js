'use strict'
import {setOutput} from '@actions/core';
import fs, {promises as fs_promises} from 'fs';
import TurndownService from 'turndown';
import http from 'https';
import axios from 'axios';
import { tidy } from 'htmltidy2';
import {load} from 'cheerio';

const turndownService = new TurndownService();
import turndownPluginGfm from 'turndown-plugin-gfm';
const gfm = turndownPluginGfm.gfm;
turndownService.use(gfm);
const server = http.createServer();
server.listen(3002); // just to make the process does not exit.
const BASE_URL = process.env.BASE_URL;
const PAGE_ID_LIST = process.env.PAGES?.split(','); // expected to be comma separated page ids.
const options = {
  auth: {
    username: process.env.CONFLUENCE_USER_NAME,
    password: process.env.CONFLUENCE_TOKEN
  }
};
function formatHTMLWithCheerio(html) {
  const $ = load(html);
  // Remove all blank elements
  $('*').each((i, el) => {
    if ($(el).children().length === 0 && $(el).text().trim() === '') {
      $(el).remove();
    }
  });

  // Remove all styles from span elements
  $('span').replaceWith(function () {
    return $(this).contents();
  });
  // remove all the styles from table elements
  $('table').removeAttr('style');

  // Get the updated HTML
  return $.html();
}
async function processAPIResponse(filePath, data, isUpdated, updateIndividually, page_id, folderPath, pageTitle, sideBar, markdown) {
  if (fs.existsSync(filePath)) {
    const fileData = await fs_promises.readFile(filePath, 'utf-8');
    if (fileData !== JSON.stringify(data)) {
      if (!isUpdated) {
        isUpdated = true;
      }
      updateIndividually = true;
    } else {
      console.info('It is already the latest version', page_id);
    }
  } else {
    fs.mkdirSync(folderPath, {recursive: true});
    updateIndividually = true;
    if (!isUpdated) {
      isUpdated = true;
    }
  }
  if (updateIndividually) {
    await fs_promises.writeFile(filePath, JSON.stringify(data));
    await fs_promises.writeFile(folderPath + `/${pageTitle}.md`, sideBar + markdown);
  }
  return isUpdated;
}
async function processChildPages(folderPath, page_id) {
  let childPagesUpdated= false;
  const childPages = await axios.get(`${BASE_URL}/rest/api/content/${page_id}/child/page?expand=body.storage&limit=200`, options);
  let sideBarPosition = 1;
  if(childPages.data?.results?.length > 0) {
    for(const childPage of childPages.data.results) {
      const sideBar = `---\nsidebar_position: ${sideBarPosition}\n---\n`;
      const filePath = `${folderPath}/${childPage.title}/data.json`;
      const html = childPage?.body?.storage?.value;
      const updatedHtml = formatHTMLWithCheerio(html);
      const markdown = turndownService.turndown(updatedHtml);
      const isUpdated = await processAPIResponse(filePath, childPage, false, false, childPage.id, `${folderPath}/${childPage.title}`, childPage.title, sideBar, markdown);
      console.log(`isUpdated: ${isUpdated} for child page ${page_id}`);
      if(!childPagesUpdated && isUpdated) {
        childPagesUpdated = isUpdated;
      }
    }
  }
  return childPagesUpdated;
}
async function processPageIdList() {
  const options = {
    auth: {
      username: process.env.CONFLUENCE_USER_NAME,
      password: process.env.CONFLUENCE_TOKEN
    }
  };
  let i = 1;
  let isUpdated = false; // used to set the output variable for GitHub action.
  for (const page_id of PAGE_ID_LIST) {
    let updateIndividually = false;
    try {
      const sideBar = `---\nsidebar_position: ${i++}\n---\n`;
      const response = await axios.get(`${BASE_URL}/rest/api/content/${page_id}?expand=body.storage`, options);
      const folderPath = `../patterns/docs/${response.data.title}`;
      const pageTitle = response.data.title;
      const filePath = `${folderPath}/data.json`;
      const html = response?.data?.body?.storage?.value;
      const updatedHtml = formatHTMLWithCheerio(html);
      tidy(updatedHtml,  {
        indent: true,
        bare: true,
        breakBeforeBr: true,
        fixUri: true,
        wrap: 0,

        doctype: 'html5',
        hideComments: false, //  multi word options can use a hyphen or "camel case"
      },async (err, formattedHtml) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        const markdown = turndownService.turndown(formattedHtml);
        const parentPageUpdated = await processAPIResponse(filePath, response.data, isUpdated, updateIndividually, page_id, folderPath, pageTitle, sideBar, markdown);
        console.log(`isUpdated: ${parentPageUpdated} for ${page_id}`);
        if(!isUpdated && parentPageUpdated) { // update to true only once.
          isUpdated = true;
        }
        const isChildPagesUpdated = await processChildPages(folderPath, page_id);
        console.log(`isChildPagesUpdated: ${isChildPagesUpdated} for parent page ${page_id}`);
        if(!isUpdated && isChildPagesUpdated) {
          isUpdated = true;
        }

      });

    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }
  setOutput('updated', isUpdated);
}

processPageIdList().then(() => {
  console.info('process completed.');
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});

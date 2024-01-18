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
      const filePath = `${folderPath}/data.json`;
      const html = response?.data?.body?.storage?.value;
      const $ = load(html);
      // Remove all blank elements
      $('*').each((i, el) => {
      if ($(el).children().length === 0 && $(el).text().trim() === '') {
        $(el).remove();
      }
      });

      // Remove all styles from span elements
      $('span').replaceWith(function() {
        return $(this).contents();
      });

      // Get the updated HTML
      const updatedHtml = $.html();
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
        if (fs.existsSync(filePath)) {
          const fileData = await fs_promises.readFile(filePath, 'utf-8');
          if (fileData !== JSON.stringify(response.data)) {
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
          await fs_promises.writeFile(filePath, JSON.stringify(response?.data));
          await fs_promises.writeFile(folderPath + `/${response.data.title}.md`, sideBar + markdown);
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

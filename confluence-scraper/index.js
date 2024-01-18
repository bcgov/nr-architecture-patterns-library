'use strict'
import { setOutput } from '@actions/core';
import fs from 'fs';
import { promises as fs_promises } from 'fs';
import TurndownService from 'turndown';
import http from 'https';
import axios from 'axios';
const turndownService = new TurndownService();

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
  let i=1;
  let isUpdated = false;
  for (const page_id of PAGE_ID_LIST) {
    try {
      const sideBar = `---\nsidebar_position: ${i++}\n---\n`;
      const response = await axios.get(`${BASE_URL}/rest/api/content/${page_id}?expand=body.storage`, options);
      const folderPath = `../patterns/docs/${response.data.title}`;
      const filePath = `${folderPath}/data.json`;
      if (fs.existsSync(filePath)) {
        const fileData = await fs_promises.readFile(filePath,'utf-8');
        if (fileData !== JSON.stringify(response.data)) {
          await fs_promises.writeFile(filePath, JSON.stringify(response?.data));
          const markdown=turndownService.turndown(response?.data?.body?.storage?.value);
          await fs_promises.writeFile(folderPath + `/${response.data.title}.md`, sideBar+markdown);
          if(!isUpdated){
            isUpdated = true;
          }
        }else{
          console.info('It is already the latest version', page_id);
        }
      } else {
        fs.mkdirSync(folderPath, { recursive: true });
        await fs_promises.writeFile(filePath, JSON.stringify(response?.data));
        const markdown=turndownService.turndown(response?.data?.body?.storage?.value);
        await fs_promises.writeFile(folderPath + `/${response.data.title}.md`, sideBar+markdown);
        if(!isUpdated){
          isUpdated = true;
        }
      }
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

'use strict'
import {setOutput} from '@actions/core'
const fs = require('fs');
const fs_promises = require('fs').promises;
const TurndownService = require('turndown');
const turndownService = new TurndownService();

const http = require('https');
const server = http.createServer();
server.listen(3002); // just to make the process does not exit.
const axios = require('axios').default;
const BASE_URL = process.env.BASE_URL;
console.log(BASE_URL);
const PAGE_ID_LIST = process.env.PAGES?.split(','); // expected to be comma separated page ids.
async function processPageIdList() {
  const options = {
    auth: {
      username: process.env.CONFLUENCE_USER_NAME,
      password: process.env.CONFLUENCE_TOKEN
    }
  };
  let i=1;
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
          setOutput('updated', true);
        }else{
          console.info('It is already the latest version', page_id);
          setOutput('updated', false);
        }
      } else {
        fs.mkdirSync(folderPath, { recursive: true });
        await fs_promises.writeFile(filePath, JSON.stringify(response?.data));
        const markdown=turndownService.turndown(response?.data?.body?.storage?.value);
        await fs_promises.writeFile(folderPath + `/${response.data.title}.md`, sideBar+markdown);
        setOutput('updated', true);
      }
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }
}

processPageIdList().then(() => {
  console.info('process completed.');
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});

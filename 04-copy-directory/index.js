const fs = require('fs').promises;
const path = require('path');


let folder = path.join(__dirname, 'files1');

async function copyFiles() {
  // let ask = await fs.access(folder)
  // console.log(ask);
  await fs.mkdir(folder)
}

copyFiles();

let fs = require("fs");
let path = require("path");
let folderPath = path.join(__dirname, "../random-json");
let totalFiles = 10;

async function createFiles() {
  try {
    for (let index = 0; index < totalFiles; index++) {
      let content = JSON.stringify({ id: 1, value: Math.random() });
      const fileName = `file${index}.json `;
      const pathFile = path.join(folderPath, fileName);
      await fs.promises.writeFile(pathFile, content);
      console.log(`file${index} created successfully`);
    }
  } catch (err) {
    console.error("Error in creating files");
    throw err;
  }
}

setTimeout(() => {
  createFiles();
}, 1000);

async function deleteFiles() {
  let files = await fs.promises.readdir(folderPath);

  for (let file of files) {
    let filePath = path.join(folderPath, file);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await fs.promises.unlink(filePath);
    console.log(`${file} deleted`);
  }
}

setTimeout(() => {
  deleteFiles();
}, 2000);

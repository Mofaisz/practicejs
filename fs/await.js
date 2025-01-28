let fs = require("fs");
let path = require("path");
let folderPath = path.join(__dirname, "./json3");
let totalFiles = 5;

async function createFiles() {
  try {
    await fs.promises.mkdir(folderPath, { recursive: true });
    console.log("Directory created successfully");
    for (let index = 0; index < totalFiles; index++) {
      let content = `this is the ${index} file`;
      let fileName = `file${index}.json`;
      let filePath = path.join(folderPath, fileName);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      await fs.promises.writeFile(filePath, content);
      console.log(`File ${index} created`);
    }
  } catch (err) {
    console.log(err);
  }
}

async function deleteFiles() {
  try {
    let files = await fs.promises.readdir(folderPath);

    for (let file of files) {
      let filePath = path.join(folderPath, file);
      await fs.promises.unlink(filePath);
      console.log(`${file} deleted`);
    }
  } catch (err) {
    console.log(err);
  }
}

(async () => {
  await createFiles();
  await deleteFiles();
})();

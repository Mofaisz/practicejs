let fs = require("fs");
let path = require("path");
let folderPath = path.join(__dirname, "../random-json");
let totalFiles = 10;

function createFile() {
  return new Promise((resolve, reject) => {
    let file = [];
    for (let index = 1; index < totalFiles + 1; index++) {
      let fileName = `file${index}.json`;
      let filePath = path.join(folderPath, fileName);
      let content = JSON.stringify({ id: 1, value: Math.random() });
      let writeFile = fs.promises
        .writeFile(filePath, content)
        .then(() => {
          console.log(`file${index} created`);
        })
        .catch((err) => {
          console.error("Error in creating files", err);
        });
      file.push(writeFile);
    }
    Promise.all(file)
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
}

createFile();

function deleteFiles() {
  return new Promise((resolve, reject) => {
    let deletePromiseFiles = [];
    fs.promises.readdir(folderPath).then((files) => {
        let count = 0
      for (let file of files) {
        count +=1
        let filePath = path.join(folderPath, file);
        deletePromiseFiles.push(
          setTimeout(() => {
            fs.promises.unlink(filePath).then(() => {
              console.log(`${file} deleted `);
            });
          }, count * 1000)
        );
      }
    });

    Promise.all(deletePromiseFiles)
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
}


setTimeout(() => {
  deleteFiles();
}, 1000);

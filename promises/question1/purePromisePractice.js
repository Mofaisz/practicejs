let fs = require("fs");
let path = require("path");
let folderPath = path.join(__dirname, "./json2-practice");
let totalFile = 10;

function createFiles() {
  return new Promise((resolve, reject) => {
    fs.promises.mkdir(folderPath, { recursive: true }).then(() => {
      console.log("Folder created successfully");

      let filesPromise = [];

      for (let index = 1; index < totalFile + 1; index++) {
        let content = JSON.stringify({
          id: 1,
          val: Math.floor(Math.random() * 20),
        });
        let filePath = path.join(folderPath, `file${index}.json`);
        let data = fs.promises
          .writeFile(filePath, content)
          .then(() => {
            console.log(`file${index} created `);
          })
          .catch((err) => {
            console.log(err);
          });
        filesPromise.push(data);
      }
      Promise.all(filesPromise)
        .then(() => {
          resolve("All files created successfully");
        })
        .catch(() => {
          reject("Some error");
        });
    });
  });
}

function deleteFiles() {
  return new Promise((resolve, reject) => {
    fs.promises.readdir(folderPath).then((files) => {
      let count = 0;
      let deleteFiles = files.map((file) => {
        count += 1;
        let filePath = path.join(folderPath, file);
        setTimeout(() => {
          return fs.promises
            .unlink(filePath)
            .then(() => {
              console.log(`${file} deleted`);
            })
            .catch((err) => {
              console.log(err);
            });
        }, count * 1000);
      });
      Promise.all(deleteFiles)
        .then(() => {
          resolve("All files deleted successfully");
        })
        .catch(() => {
          reject("Error in deleting files");
        });
    });
  });
}

setTimeout(() => {
  createFiles()
    .then((res) => {
      console.log(res);
    })
    .then(() => {
      return deleteFiles();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}, 1000);

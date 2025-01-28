let fs = require("fs");
let path = require("path");
let folderPath = path.join(__dirname, "./json2");
let totalFile = 3;

function createFiles() {
  return new Promise((resolve, reject) => {
    fs.mkdir(folderPath, { recursive: true }, (err) => {
      if (err) {
        reject(err);
      }
      console.log("Directory created successfuly");
      let allFiles = [];
      for (let index = 1; index < totalFile + 1; index++) {
        let content = `this is file${index}`;
        let fileName = `file${index}.json`;
        let filePath = path.join(folderPath, fileName);
        allFiles.push(
          new Promise((resolve, reject) => {
            fs.writeFile(filePath, content, (err) => {
              if (err) {
                reject(err);
              }
              console.log(`file${index} created `);
              resolve();
            });
          })
        );
      }
      Promise.all(allFiles)
        .then(() => {
          console.log("All files created succefully");
          resolve();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
}

function deleteFiles() {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
      }
      let deletePromise = files.map((file) => {
        return new Promise((resolve, reject) => {
          filePath = path.join(folderPath, file);
          fs.unlink(filePath, (err) => {
            if (err) {
              reject(err);
            }else{
                console.log(`${file} deleted`);
            resolve();

            }
            
          });
        });
      });
      Promise.all(deletePromise)
      .then((res) =>{
        console.log("All files deleted succefully")
        resolve()
      })
    });
  });
}

  
  createFiles()
  setTimeout(() => {
deleteFiles()

}, 100);
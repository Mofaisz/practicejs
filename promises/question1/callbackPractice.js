let fs = require("fs");
let path = require("path");
let folderPath = path.join(__dirname, "./json3");
let totalFile = 10;

function createFiles() {
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.log("Problem in creation of directory");
    }
    console.log("Directory created");
    for (let index = 1; index < totalFile+1; index++) {
      let filePath = path.join(folderPath, `file${index}.json`);
      let content = JSON.stringify({
        id: 1,
        value: Math.floor(Math.random() * 20),
      });
      fs.writeFile(filePath, content, (err) => {
        if (err) {
          console.log("error in creating file");
        }
        console.log(`file${index} created`);
      });
    }
  });
}

function deleteFiles() {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.log("Error in reading file");
    }
    files.forEach((file, index) => {
      let filePath = path.join(folderPath, file);
      setTimeout(() => {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log("Error in deleting files");
          }
          console.log(`${file} deleted`);
        });
      }, index * 1000);
    });
  });
}

setTimeout(() => {
  createFiles();
}, 1000);

setTimeout(() => {
  deleteFiles();
}, 2000);

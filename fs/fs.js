let fs = require("fs");
let path = require("path");
let totalFiles = 5;
let folderPath = path.join(__dirname, "./random-file");

function createFiles(cb) {
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      cb(err);
    }
    console.log("Directory created successfully");


    for (let index = 1; index < totalFiles + 1; index++) {
      let content = String(Math.floor(Math.random() * 100));
      let fileName = `file${index}.txt`;
      let filePath = path.join(folderPath, fileName);

      fs.writeFile(filePath, content, (err) => {
        if (err) {
          cb(err);
        }
        console.log(`file${index} created`);
      });
    }
  });
}

function deleteFiles() {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.log(err);
    }
    files.forEach((file) => {
      let filePath = path.join(folderPath, file);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
        }
        console.log(`${file} deleted`);
      });
    });
  });
}

createFiles((err) => {
  if (err) {
    console.log(err);
  }
  console.log("All operation is successful");
});

setTimeout(() => {
  deleteFiles();
}, 100);

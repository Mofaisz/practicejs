let fs = require("fs");

let path = require("path");

let totalFiles = 10;
let folderPath = path.join(__dirname, "../random-json");
function createFiles() {
  setTimeout(() => {
    for (let index = 0; index < totalFiles; index++) {
      let files = JSON.stringify({ id: 1, value: Math.random() });
      const filePath = path.join(folderPath, `file ${index}.json`);
      fs.writeFile(filePath, files, (err) => {
        if (err) {
          console.log("Error in this");
        } else {
          console.log(`file${index} created`);
        }
      });
    }
    console.log("Files created succesfull");
  }, 1000);
}
function deleteFiles() {
  fs.readdir("../random-json", (err, files) => {
    if (err) {
      console.log("Erorr");
    }

    files.forEach((file, index) => {
      setTimeout(() => {
        let filePath = path.join(folderPath, file);

        fs.unlink(filePath, (err) => {
          if (err) {
            console.log("Error");
          }

          console.log(`${file} deleted`);
        });
      }, index * 1000);
    });
  });
}
createFiles();
setTimeout(() => {
  deleteFiles();
}, 2000);

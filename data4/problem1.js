// const data = require("./data");
// // console.log(data);

// function allage() {
//   let result = data
//     .filter((Element) => Element.age > 30)
//     .map(({ name }) => name);
//   //   console.log(result);
//   return result;
// }

// //console.log(allage(data));

// function allagebyreduce() {
//   let result = data.reduce((acc, index) => {
//     let age = index.age;
//     // console.log(age);
//     let name = index.name;
//     //console.log(name);
//     if (age > 30) {
//       acc.push(name);
//     }
//     return acc;
//   }, []);
//   return result;
// }
// //console.log(allagebyreduce(data));

// //20-25
// //26-30
// //31-35

// function aveargeage() {
//   let result = data.reduce((acc, index) => {
//     let age = index.age;
//     let score = index.score;

//     //   console.log(age);
//     if (age >= 20 && age < 26) {
//       if (!acc["firstgrp"]) {
//         acc["firstgrp"] = { score: 0, count: 0, avearge: 0 };
//       }
//       acc["firstgrp"].score += score;
//       acc["firstgrp"].count++;
//       acc["firstgrp"].avearge = acc["firstgrp"].score / acc["firstgrp"].count;
//     }

//     if (age >= 26 && age < 31) {
//       if (!acc["secondgrp"]) {
//         acc["secondgrp"] = { score: 0, count: 0, avearge: 0 };
//       }
//       acc["secondgrp"].score += score;
//       acc["secondgrp"].count++;
//       acc["secondgrp"].avearge =
//         acc["secondgrp"].score / acc["secondgrp"].count;
//     }
//     if (age >= 31 && age < 36) {
//       if (!acc["thirdgrp"]) {
//         acc["thirdgrp"] = { score: 0, count: 0, avearge: 0 };
//       }
//       acc["thirdgrp"].score += score;
//       acc["thirdgrp"].count++;
//       acc["thirdgrp"].avearge = acc["thirdgrp"].score / acc["thirdgrp"].count;
//     }
//     return acc;
//   }, []);
//   return result;
// }

// console.log(aveargeage(data));

// function createfile() {
//   return new Promise((resolve, reject) => {
//     files.forEach((file, index) => {
//       let data = `this is data of ${index} `;
//       fs.writeFile(file, data, (err) => {
//         if (err) {
//           console.log("error in file");
//         }

//       });
//     });
//   });
// }

const fs = require("fs");

let files = ["file1.js", "file2.js", "file3.js"];

// function createfile(callback) {
//   let count = 0;
//   files.forEach((file, index) => {
//     let data = `this is data of ${index}`;
//     fs.writeFile(file, data, (err) => {
//       if (err) {
//         callback(err);
//       }
//       count++;
//       console.log(`${index + 1} file created`);

//       if (count == file.lenght) {
//         callback(nul);
//       }
//     });
//   });
// }
function createFile(callback) {
  function all(index = 0) {
    if (index > files.length) {
      callback("all created");
    }
    let data = `this is data of ${index + 1}`;
    fs.writeFile(files[index], data, (err) => {
      if (err) {
        callback(err);
      }
      all(index + 1);
    });
  }
  all();
}

createFile((err) => {
  if (err) {
    console.log("erro");
  }
  console.log("all file created");
});
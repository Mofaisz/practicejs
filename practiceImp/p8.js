const fs = require("fs");

async function asyncFunc() {
  console.log("asyncFunc start"); 
  await new Promise((resolve) => setImmediate(resolve));
  console.log("asyncFunc end"); 
}


console.log("script start"); 

setTimeout(() => {
  console.log("setTimeout"); 
}, 0);

asyncFunc();

fs.readFile(__filename, () => {
  console.log("File read"); 
});

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("script end"); 

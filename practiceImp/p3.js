
console.log("start");
new Promise((resolve) => {
  setTimeout(() => {
    console.log("Inside Promise Timeout");
    resolve();
  }, 1000);
}).then(() => {
  console.log(`Promise then`);
});

setTimeout(() => {
  console.log("Outside Timeout");
}, 500);

console.log("End");

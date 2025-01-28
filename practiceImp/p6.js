async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2 start");
  await async3();
  console.log("async2 end");
}

async function async3() {
  console.log("async3 start");
  return Promise.resolve().then(() => {
    console.log("async3 resolved");
  });
}

console.log("script start");

setTimeout(() => {
  console.log("set Timeout");
}, 0);

async1();

new Promise((resolve, reject) => {
  console.log("Promise 1");
  resolve();
}).then(() => {
  console.log("Promise 2");
});

console.log("Script end");

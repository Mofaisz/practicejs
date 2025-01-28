async function asyncA() {
  console.log("asyncA start");
  await asyncB();
  console.log("asyncA end");
}

async function asyncB() {
  console.log("asyncB start");
  return Promise.resolve().then(() => {
    console.log("asyncB resolved");
  });
}

console.log("script start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

asyncA();

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

console.log("script end");

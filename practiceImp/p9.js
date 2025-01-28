console.log("start");

setTimeout(() => {
  console.log("timeout 1");
  Promise.resolve()
    .then(() => {
      console.log("promise in timeout 1");
    })
    .then(() => {
      console.log("promise in timeout 1 - 2");
    });
}, 0);

setTimeout(() => {
  console.log("timeout 2");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("promise 1");
    return Promise.resolve();
  })
  .then(() => {
    console.log("promise 2");
    setTimeout(() => {
      console.log("timeout in promise 2");
    }, 0);
  });

console.log("end");

async function first() {
  console.log("First start");
  await second();
  console.log("First end");
}

async function second() {
  console.log("Second Start");
  await third();
  console.log("Second end");
}

async function third() {
  console.log("third start");
  return Promise.resolve().then(() => {
    console.log("Third resolved");
  });
}

console.log("Global start");   
setTimeout(() => {
  console.log("timeOut");
}, 0);

first();
console.log("Global End");

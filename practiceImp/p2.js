async function test() {
  console.log("start");
  const result = await new Promise((resolve, reject) => {
    resolve("Resolved");
  });
  console.log(result);

await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  console.log("After Timeout")
}

test();
console.log("End");

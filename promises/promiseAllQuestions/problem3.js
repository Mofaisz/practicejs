// **Create four promises**:
//     - `p1`: Resolves after 2 seconds with the value `"Resolved p1"`.
//     - `p2`: Rejects after 1 second with the error `"Error in p2"`.
//     - `p3`: Resolves after 3 seconds with the value `"Resolved p3"`.
//     - `p4`: Resolves after 4 seconds with the value `"Resolved p4"`.
// 2. **Use `Promise.all`** to wait for all promises to settle. If all promises resolve, log the results as an array. If any promise rejects, log the error message.

// 3. **Use `Promise.allSettled`** to wait for all promises to settle (resolve or reject). Log the results as an array of objects, each containing the status and value/error of the promise.

// 4. **Use `Promise.any`** to log the first resolved value among the promises. If all promises reject, log the error message.

// 5. **Use `Promise.race`** to log the result of the first promise that settles (either resolves or rejects). Log the value or error of the first settled promise.

function promiseProblem(promise) {
 return  Promise.all(promise);
}


let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(true)
  }, 2000);
});


let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error in p2");
  }, 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved p3");
  }, 3000);
});

let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved p4");
  }, 4000);
});

promiseProblem([p1, p2, p3, p4])
  .then((res) => {
    console.log(`the promise value which got resolved:`,res);
  })
  .catch((err) => {
    console.log(err);
  });

// custom function for promise all

function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject("The promise is not the array");
    }

    let result = [];
    let count = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          result[index] = res;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
          return;
        });
    });
  });
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(false);
  }, 1000);
});

let p2 = new Promise((resolve) => {
  resolve("Faiz");
});

let p3 = new Promise((resolve, reject) => {
  resolve("Age:21");
});

customPromiseAll([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

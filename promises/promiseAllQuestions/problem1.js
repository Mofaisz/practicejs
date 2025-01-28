// Basic Promise.all Usage

//     Create three promises:
//         The first resolves with a value of "First" after 1 second.
//         The second resolves with a value of "Second" after 2 seconds.
//         The third resolves with a value of "Third" after 3 seconds.
//     Use Promise.all to log all resolved values as an array.

let p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("First promise");
  }, 1000);
});

let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Second");
  }, 2000);
});

let p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Third");
  }, 3000);
});

let result = Promise.all([p1, p2, p3]);

result.then((result) => {
  console.log("All files resolved", result);
});

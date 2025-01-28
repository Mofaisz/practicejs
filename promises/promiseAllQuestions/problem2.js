const endpoints = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];
let p1 = new Promise((resolve, reject) => {
  resolve(fetch(endpoints[0]));
});

let p2 = new Promise((resolve, reject) => {
  resolve(fetch(endpoints[1]));
});

let p3 = new Promise((resolve, reject) => {
  resolve(fetch(endpoints[2]));
});

let result = Promise.all([p1, p2, p3]);
result.then((res) => {
  console.log(res);
});

function customMap(obj, cb) {
  let result = {};
  for (let key in obj) {
    result[key] = cb(obj[key]);
  }
  return result;
}

let obj = { age: 25, end: 67 };
console.log(
  customMap(obj, (val) => {
    return val + 5;
  })
);

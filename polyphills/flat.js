function customFlat(arr) {
  let result = [];
  for (let value of arr) {
    if (Array.isArray(value)) {
      result = result.concat(customFlat(value));
    } else {
      result.push(value);
    }
  }
  return result;
}

console.log(customFlat([1, 2, [[5],3, 4]]));


// object invert
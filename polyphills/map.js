let array = [1, 2, 3, 4, 3, 5, 4, 6, 5, 387];
function map(array, callback) {
  for (let value of array) {
    callback(value);
  }
}

let temp = [];
map(array, (val) => {
  temp.push(val * 2);
  if (temp.length == array.length) {
    console.log(temp);
  }
});

function filter(array, cb) {
  let result = [];
  for (let value of array) {
    if (cb(value)) {
      result.push(value);
    }
  }
  return result;
}

console.log(
  filter(array, (val) => {
    if (val % 2 == 0) {
      return true;
    } else {
      return false;
    }
  })
);

// reduce polyphills

function reduce(array, cb, initialValue) {
  let accumulator = initialValue != undefined ? initialValue : array[0];

  for (let value of array) {
    accumulator = cb(accumulator, value);
  }
  return accumulator;
}

let res = reduce(
  array,
  (accumulator, value) => {
    return accumulator + value;
  },
  10
);
console.log(res);

// flattens pollyphills
let nestedArray = [1, 2, 3, [44, 89], [98, [90.65, [78]]]];
let depth = 1;
function flat(nestedArray, depth) {
  let result = [];
  for (let value of nestedArray) {
    if (Array.isArray(value) && depth != 0) {
      result = result.concat(flat(value, depth - 1));
    } else {
      result.push(value);
    }
  }
  return result;
}

console.log(flat(nestedArray, depth));

// map object

// function mapObject(object)

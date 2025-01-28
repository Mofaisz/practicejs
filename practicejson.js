let data = require("./jsondata.js");

// 1. Basic Parsing: Parse the JSON and log all user names.
function logUserNames(data) {
  let users = data.users;
  let result = users.reduce((accumulator, value) => {
    accumulator.push(value.name);
    return accumulator;
  }, []);
  return result;
}

// 2. Filtering: Find all active users.
function getActiveUsers(data) {
  // Logic goes here
  let users = data.users;
  const result = users.reduce((accumulator, value) => {
    if (value.isActive) {
      accumulator.push(value.name);
    }
    return accumulator;
  }, []);
  return result;
}

// 3. Mapping: Create an array of all product names.
function getProductNames(data) {
  // Logic goes here
  let products = data.products;
  const result = products.reduce((accumulator, value) => {
    accumulator.push(value.name);
    return accumulator;
  }, []);

  return result;
}

// 4. Nested Access: Extract and log the city for each user.
function logUserCities(data) {
  //   console.log("Logging cities for each user:");
  // Logic goes here
}

// 5. Aggregate Operations: Calculate the total stock of all products.
function calculateTotalStock(data) {
  //   console.log("Calculating total stock of all products:");
  // Logic goes here
  let productDetail = data.products;

  let result = productDetail.reduce((accumulator, value) => {
    if (!accumulator[value.name]) {
      accumulator[value.name] = 0;
    }
    accumulator[value.name] += value.stock;
    return accumulator;
  }, {});

  return result;
}

// 6. Complex Operations: Calculate the total amount spent by a user based on their orders.
function calculateUserSpending(data) {
  //   console.log(`Calculating total spending for user ID: ${userId}`);
  // Logic goes here

  let ordersDetail = data.orders;
  let result = data.users.reduce((accumulator, value) => {
    ordersDetail.forEach((element) => {
      if (element.userId == value.id) {
        if (!accumulator[value.name]) {
          accumulator[value.name] = 0;
        }
        accumulator[value.name] += element.totalAmount;
      }
    });
    return accumulator;
  }, {});
  return result;
}

// 7. Updates: Add a new product or user to the dataset.
function addNewUser(data) {
  console.log("Adding a new user:");
  // Logic goes here
}

function addNewProduct(data) {
  console.log("Adding a new product:");
  // Logic goes here
}

// // 8. Search: Find orders for a specific user by `userId`.
// function findOrdersByUserId(data) {
//   console.log(`Finding orders for user ID: ${userId}`);
//   // Logic goes here
// }

// Example Usage:// Placeholder for JSON data
console.log(logUserNames(data));
console.log(getActiveUsers(data));
console.log(getProductNames(data));
console.log(logUserCities(data));
console.log(calculateTotalStock(data));
console.log(calculateUserSpending(data));
// addNewUser(data, { id: 4, name: "New User", ... });
// addNewProduct(data, { id: 104, name: "New Product", ... });
// findOrdersByUserId(data, 2);

let data = require("./data.js");

function nameAndContact(data) {
  departmentDetails = data.company.departments;
  let result = departmentDetails.reduce((accumulator, value) => {
    value.employees.forEach((val) => {
      if ((val.name = "Alice")) {
        accumulator[val.name] = val.contact;
      }
    });
    return accumulator;
  }, {});
  return result;
}

console.log(nameAndContact(data));

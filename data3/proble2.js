// Find the Average Salary in Each Department:
//     Group employees by their department and calculate the average salary for each group.

let employees = require("./data3");

function averageSalary(employees) {
  let collection = employees.reduce((accumulator, value) => {
    let intSalary = Number(value.salary.replace("$", ""));
    if (!accumulator[value.department]) {
      accumulator[value.department] = [];
    }
    accumulator[value.department].push(intSalary);
    return accumulator;
  }, {});
  
  
  let finalResult = Object.keys(collection).reduce((accumulator, value) => {
    let total = 0;
    let count = 0;
    collection[value].forEach((value) => {
      total += value;
      count += 1;
    });
    let average = total / count;

    accumulator[value] = average;
    return accumulator;
  }, {});
  return finalResult;
}

console.log(averageSalary(employees));

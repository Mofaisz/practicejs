// Find out which age group has the highest total salary across all professions.

const people = require("./data");

function getHighestSalaryAgeGroup() {
  let result = people.reduce((accumulator, value) => {
    if (!accumulator[value.age]) {
      accumulator[value.age] = 0;
    }
    accumulator[value.age] += Number(value.salary);
    return accumulator;
  }, {});

  let finalage = 0;
  let maxSalary = 0;
  for (let key in result) {
    if (result[key] > maxSalary) {
      maxSalary = result[key];
      finalage = key;
    }
  }
  return `Maximum age grp is ${finalage}:${maxSalary}`;
}

console.log(getHighestSalaryAgeGroup());

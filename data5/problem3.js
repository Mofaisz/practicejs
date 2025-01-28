// Total Salary by Age Group

// Group people into age groups (e.g., 20-29, 30-39, etc.), and calculate the total salary for each age group.

let people = require("./data");

function groupSalariesByAge(people) {
  let result = people.reduce((accumulator, value) => {
    if (!accumulator["20-29"]) {
      accumulator["20-29"] = 0;
    }
    if (value.age > 19 && value.age < 30) {
      accumulator["20-29"] += value.salary;
    }
    if (!accumulator["30-39"]) {
      accumulator["30-39"] = 0;
    }
    if (value.age > 30 && value.age < 40) {
      accumulator["30-39"] += value.salary;
    }
    return accumulator;
  }, {});
  return result;
}

console.log(groupSalariesByAge(people));

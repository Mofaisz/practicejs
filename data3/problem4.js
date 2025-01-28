// List All Unique Skills Across Employees:

//     Extract and list all unique skills across the entire dataset.

let employees = require("./data3");

function uniqueSkills(employee) {
  let result = employee.reduce((accumulator, value) => {
    accumulator.push([...value.skills]);
    return accumulator;
  }, []);

  let wholeSkills = result.flat();
  let uniqSkills = [...new Set(wholeSkills)];
  return uniqSkills;
}

console.log(uniqueSkills(employees));




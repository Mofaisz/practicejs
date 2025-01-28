let company = require("./harshData.js");
// List all the names of employees working in the company.
// What is the capacity of room 1 in the building?

function capaityOfRoom(company) {
  let roomDetails = company.location.address.building.rooms;

  let result = Object.keys(roomDetails).reduce((accumulator, value) => {
    if (value == 1) {
      accumulator.push(roomDetails[value].capacity);
    }
    return accumulator;
  }, []);
  return result;
}

function allTheNames(company) {
  let departmentDetails = company.departments;
  const result = departmentDetails.reduce((accumulator, value) => {
    value.employees.forEach((val) => {
      accumulator.push(val.name);
    });
    return accumulator;
  }, []);
  return result;
}

// Get a list of all the skills that the employees have (avoid duplicates).
function skillsOfEmployees(company) {
  let departmentDetails = company.departments;
  let result = departmentDetails.reduce((accumulator, value) => {
    value.employees.forEach((val) => {
      accumulator.push(...val.skills);
    });
    return accumulator;
  }, []);

  let finalResult = [];
  result.forEach((val) => {
    if (!finalResult.includes(val)) {
      finalResult.push(val);
    }
  });
  return finalResult;
}

// Sort the employees based on their names.

function sortedNames(company) {
  let departmentDetails = company.departments;
  let result = departmentDetails.reduce((accumulator, value) => {
    value.employees.forEach((val) => {
      accumulator.push(val.name);
    });
    return accumulator;
  }, []);
  return result.sort();
}

// Sort the projects for each employee based on their deadline (ascending).
function project(company) {
  departmentDetails = company.departments;
  let result = departmentDetails.reduce((accumulator, value) => {
    value.employees.forEach((val) => {
      val.projects.forEach((element) => {
        accumulator.push({ name: element.name, deadline: element.deadline });
      });
    });
    return accumulator;
  }, []);
  return result.sort((a, b) => a.deadline.localeCompare(b.deadline));
}

// Find the building name where the company is located.
function getBulidingName(company) {
  return company.location.address.building.name;
}

// Add a new employee named "Charlie", a "Tester" with skills ["JavaScript", "Cypress"], and assign them to room 1 on floor 2.

function addEmployee(company) {
  let departmentDetails = company.departments;
  departmentDetails.forEach((val) => {
    val.employees.push({
      Name: "Charlie",
      profession: "Tester",
      skills: ["JavaScript", "Cypress"],
    });
  });
  return departmentDetails;
}

// Loop through each room in the building and print the room type along with its capacity.

function typeAndCapacity(company) {
    let roomDetails = company.location.address.building.rooms;
    let result = Object.keys(roomDetails).reduce((accumulator,value) =>{
        if(!accumulator[roomDetails[value].type]){
        accumulator[roomDetails[value].type] = 0;
        }
        accumulator[roomDetails[value].type] += parseInt(roomDetails[value].capacity)
        return accumulator
    },{})
    return result;
}

console.log(capaityOfRoom(company));
console.log(allTheNames(company));
console.log(skillsOfEmployees(company));
console.log(sortedNames(company));
console.log(project(company));
console.log(getBulidingName(company));
console.log(addEmployee(company));
console.log(typeAndCapacity(company));

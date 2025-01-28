// top 3 highest salary by each profession

let people = require("./data");
function top3highestSalary(people) {
  let result = people.reduce((accumulator, value) => {
    if (!accumulator[value.profession]) {
      accumulator[value.profession] = [];
    }
    accumulator[value.profession].push(value.salary);
    return accumulator
  }, {});

  

  let finalResult = Object.keys(result).reduce((accumulator,value) =>{

    let arrOfSal = [...result[value]]
    accumulator[value] =  arrOfSal.sort().slice(arrOfSal.length-3,arrOfSal.length);
    return accumulator

  }, {})
  return finalResult
}

console.log(top3highestSalary(people))
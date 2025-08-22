// Questions:

//     Remove Dollar Signs from Salaries:
//         Create a new dataset where the salary field is converted from a string to a number by removing the $ sign.






let employees = require("./data3.js")

function salaryInInteger(employees){
    let salary = employees.reduce((accumulator,value) =>{
        let intSalary = Number(value.salary.replace("$",""));
        accumulator.push(intSalary)
        return accumulator

    },[]);

    let deepCopyData = JSON.parse(JSON.stringify(employees));
    let index = 0
    salary.forEach((val) =>{
        deepCopyData[index].salary = val
        index+=1
    })
    return deepCopyData;
}
console.log(salaryInInteger(employees))


// function salaryInString(employees){

//     let copyEmployees = JSON.parse(JSON.stringify(employees));
//     // console.log(copyEmployees)

//     let result = employees.reduce((acuumulator,value) =>{
        
//         let salaryInInt = Number(value.salary.replace("$", ""))
//         acuumulator.push(salaryInInt);
//         return acuumulator;
//     }, [])
//     // return result;

//     console.log(employees)

//     let index = 0 
//     for(let sal of result){
//         copyEmployees[index].salary = sal;
//         index+=1
//     }
//     return copyEmployees;
// }
// console.log(salaryInString(employees))
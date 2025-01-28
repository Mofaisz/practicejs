// List All Employees with Experience Greater Than 5 Years:

//     Filter the employees who have more than 5 years of experience and display their names, department, and salary.

let employees = require("./data3");

function filterEmployee(employees){


    let result  = employees.reduce((accumulator,value) =>{

        if(value.experience>5){
            accumulator.push({name:value.name, department:value.department, salary:value.salary})
        }
        return accumulator

    },[])
    return result
}
console.log(filterEmployee(employees))
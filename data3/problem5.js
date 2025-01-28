// Find the Employee with the Highest Salary:

//     Identify the employee who has the highest salary.

let employees = require("./data3");

function employeeWithHighestSalary(employees){
    let name=null;
    let highestSalary = 0
    employees.forEach((value) =>{
        sal = value.salary.replace("$","");
        if(sal>highestSalary){
            highestSalary = sal;
            name = value.name
        }
    })
    return {name:name,Salary:highestSalary}
}

console.log(employeeWithHighestSalary(employees))
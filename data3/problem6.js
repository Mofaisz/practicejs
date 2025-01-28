//     Total Salary Expense for Each Department:
//         Calculate the total salary expense for employees grouped by department.
let employees = require("./data3");

function salaryExpense(employees){

    let result  = employees.reduce((accumulator,value) =>{
        let sal = Number(value.salary.replace("$" ,""));
        if(!accumulator[value.department]){
            accumulator[value.department] = 0
        }
        accumulator[value.department] += sal;
        return accumulator;
    },{})
    return result
}
console.log(salaryExpense(employees));
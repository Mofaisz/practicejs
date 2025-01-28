//     Find Employees with Specific Skills:
//         Return all employees who have "JavaScript" or "Excel" in their skills array.
let employees = require("./data3")

function employeesWithSpecificSkills(employees){

    let result  = employees.reduce((accumulator,value) =>{
        let skills = [...value.skills];
        if(skills.includes("JavaScript") || skills.includes("Excel")){
            accumulator.push(value.name)
        }
        return accumulator;
    },[])
    return result ;
}

console.log(employeesWithSpecificSkills(employees));
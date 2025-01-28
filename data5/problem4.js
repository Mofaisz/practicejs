// Write a function that takes an array of professions as input and returns a new array where each entry includes:

// The profession.
// The average salary.
// The count of people in that profession.

let people = require("./data")
function professionAndSalary(people){

    let result = people.reduce((accumulator,value) =>{

        if(!accumulator[value.profession]){
            accumulator[value.profession] = []
        }
        accumulator[value.profession].push(value.salary);
        return accumulator;
    },{})
    
    
    let final = Object.keys(result).reduce((accumulator,value) =>{
        let total = 0;
        let count =0
        result[value].forEach((val) =>{
            total+=val
            count+=1
        })
        let average = total/count
        accumulator.push({Profession:value , average:average , totalPeople:count})
        return accumulator
    },[])
    return final
}

console.log(professionAndSalary(people))
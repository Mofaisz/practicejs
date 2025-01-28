let employeeRecords =  require("./13Decemberdataset.js");

// Access and List All Unique Professions:

// Extract and list all unique professions in the dataset.

function onlyUnique(employeeRecords){

    let result = employeeRecords.reduce((accumulator, value) =>{

        if(!accumulator.includes(value.profession)){
            accumulator.push(value.profession)
        }
        return accumulator;
    },[]);
    return result;
}

console.log(onlyUnique(employeeRecords));


// average of the profession

function averageOfProfession(employeeRecords){

    let result = employeeRecords.reduce((accumulator,value) =>{

        if(!accumulator[value.profession]){
            accumulator[value.profession] = []

        }
        accumulator[value.profession].push(value.salary)
        return accumulator;
    },{})

    console.log(result)
    let finalResult = Object.keys(result).reduce((accumulator,value) =>{
        let total = 0;
        let count = 0;
        result[value].forEach((val) =>{
            total+=parseFloat(val);
            count+=1
        })
        let average = total/count;

        accumulator[value] = average;
        return accumulator
    },{})
    return finalResult
}

console.log(averageOfProfession(employeeRecords));


// Employees without any project


function withoutAnyProject(employeeRecords){

    let result = employeeRecords.reduce((accumulator, value) =>{
        if([...value.projects === undefined]){

        }
    })
}
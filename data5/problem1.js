let people = require("./data.js");

function youngestAndOldestInEachProfession(people){

    let result = people.reduce((accumulator,value) =>{

        if(!accumulator[value.profession]){
            accumulator[value.profession]= [];
        }
        accumulator[value.profession].push({name:value.name, age:value.age})
        return accumulator;
    } ,{})
    // return result;


    let final = Object.keys(result).reduce((accumulator,value) =>{
        let youngestAge = 100;
        let oldestAge = 0
        let YoungestName = null
        let oldestName = null;
        result[value].forEach((val) =>{
            if(val.age<youngestAge){
                youngestAge = val.age
                YoungestName = val.name
            }
            if(val.age>oldestAge){
                oldestAge = val.age;
                oldestName = val.name
            }
        })
        accumulator[value] = {youngestName:YoungestName, age: youngestAge, oldestName:oldestName,oldestage:oldestAge}
        return accumulator;
    },{})
    return final

}
console.log(youngestAndOldestInEachProfession(people))
// Most Frequent Age per Profession

// Determine the most common age in each profession.



const people = require('./data');

function getCommonAge(){
  let result  = people.reduce((accumulator,value) =>{
    if(!accumulator[value.profession]){
        accumulator[value.profession] = {}
    }
    if(!accumulator[value.profession][value.age]){
        accumulator[value.profession][value.age] = 0
    } 
    accumulator[value.profession][value.age] +=1
    return accumulator;
  },{})

  

  let final = {}
  for(let key in result){
    let max = -1
  let age =0
    for(let key2 in result[key]){
        if(result[key][key2]>max){
            max =result[key][key2];
            age = key2
        }
    }
    final[key] = {age:age, numberOfTimes:max}

  }
  return final

}


console.log(getCommonAge());

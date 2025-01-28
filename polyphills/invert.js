

function customInvert(obj){

    let result ={}
    for(let key in obj){
        result[obj[key]] = key;

    }
    return result ;
}

let obj = {age:21,name : "faiz"}

console.log(customInvert(obj))
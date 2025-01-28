

function customMap(arr,cb){

    for(let value of arr){

        cb(value)
    }
}

let arr = [1,2,3,4,5,6]
let result = []
customMap(arr,(val) =>{

    result.push(val)
    if(result.length == arr.length){
        console.log(result)
    }
    
})



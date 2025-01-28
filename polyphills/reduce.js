
// function customReduce(arr,cb,initialValue){

//     let accumulator = initialValue != undefined ? initialValue :arr[0];

//     for(let value of arr){
//         accumulator = cb(accumulator,value)
//     }
//     return accumulator
// }
// let arr = [76,34,56]
// console.log(customReduce(arr,((acc,val) =>{
//     return acc+val
// }),0)
// )


function customReduce(arr,cb,initialValue){

    let accumulator = initialValue != undefined ? initialValue : elements[0]
    for(let value of arr){
        accumulator = cb(accumulator,value)
    }
    return accumulator;
}

let arr = [1,2,3,4,3,2]

console.log(customReduce(arr,(a,b) =>{
    return a+b;
}, 10))
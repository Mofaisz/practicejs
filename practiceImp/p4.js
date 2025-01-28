console.log('Start');

setTimeout(() => { 
    console.log('Timeout');
},0);

Promise.resolve()
.then(() =>{
    console.log('Promise 1')
    return Promise.resolve().then(() => {
        console.log('Promise 2');
})
})
.then(() =>{

    console.log('Promise 3');
})
console.log("End");

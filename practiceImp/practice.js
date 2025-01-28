const { setTimeout } = require("node:timers");

function add(a,b){
    console.log(a)
    console.log(b)
   setTimeout(() => {
    console.log(a+b)
   }, 0);
}
add(1,2)
console.log("faiz");

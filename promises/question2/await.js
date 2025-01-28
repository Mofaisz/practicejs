// create 10 files in 1 sec simultaneously and delete one by one sequentially in 1 sec it will take total 11 sec 1 for creating 10 for deleting
// print 1-10 in 10 sec and also in 55 sec
// make a promise.all function and make promise.all manual hAS 2 METHODS
//write a function which returns a random number from 1-20 and if the number is less than 5 only then it will resolve otherwise reject and if got reject retry atleast 3 times and then end the program.


// async function printNumber() {
//   for (let index = 0; index < 10; index++) {
//     await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, 1000);
//     });

//     console.log(index);
//   }
// }

// printNumber();

// using promises

// function number(){

//     return new Promise((resolve, reject) => {

//         for(let index =0 ;index<10;index++){

//            console.log(index)
//         }
//     })
// }

// using callback

// function printNumbers(cb) {
//   let number = 0;
//   function nextNumber() {
//     number += 1;
//     if (number < 11) {
//       cb(number);
//       setTimeout(() => {
//         nextNumber();
//       }, 1000);
//     } else {
//       console.log("Completed");
//     }
//   }
//   nextNumber();
// }

// printNumbers((num) => {
//   console.log(num);
// });

// print number 1 to 10 using promises

// function printNumber(number) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(number);
//       resolve();
//     }, 1000);
//   });
// }

// let samplePromise = Promise.resolve();

// for (let number = 0; number < 10; number++) {
//  samplePromise = samplePromise.then(() => {
//     return printNumber(number);
//   });
// }



// async 


async function printNumber(){

    for(let index = 0; index<10 ; index++){

       await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(index);
            resolve()
        }, 1000);
            
       })

    }
}


printNumber()
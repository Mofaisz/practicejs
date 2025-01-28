// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async 1 end");
//   }
  
//   async function async2() {
//     console.log("async2 start");
//     await async3();
//     console.log("async2 end");
//   }
  
//   async function async3() {
//     console.log("async3 start");
//     new Promise((resolve, reject) => {
//       console.log("enter in the promise 1");
//       resolve();
//     });
//     console.log("async3 end");
//   }
  
//   setTimeout(() => {
//     console.log("timeout1");
//   }, 0);
  
//   console.log("start");
//   async1();
//   new Promise((resolve, reject) => {
//     console.log("promise 2");
//     resolve("promise 2 resolve");
//   })
//     .then((string) => {
//       return new Promise((resolve, reject) => {
//         console.log("promise 3");
//         resolve();
//       });
//     })
//     .then(() => {
//       console.log("promise 3 resolved");
//     });
  
//   console.log("end");


  // ques 2

// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
//   }
  
//   async function async2() {
//     console.log("async2");
//   }
  
//   console.log("script start");
  
//   setTimeout(() => {
//     console.log("setTimeout");
//   }, 0);
  
//   async1();
  
//   new Promise((resolve) => {
//     console.log("promise1");
//     resolve();
//   }).then(() => {
//     console.log("promise2");
//   });
  
//   console.log("script end");

// console.log("script start");

// async function foo() {
//   console.log("foo start");
//   await bar();
//   console.log("foo end");
// }

// async function bar() {
//   console.log("bar start");
//   await Promise.resolve();
//   console.log("bar end");
// }

// foo();

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise1");
// });

// console.log("script end");



// console.log("start");

// async function asyncFunc() {
//   console.log("asyncFunc start");
//   await new Promise(resolve => {
//     console.log("Promise inside asyncFunc");
//     resolve();
//   });
//   console.log("asyncFunc end");
// }

// asyncFunc();

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// new Promise(resolve => {
//   console.log("Promise 1");
//   resolve();
// }).then(() => {
//   console.log("Promise 2");
// });

// console.log("end");



// console.log("start");

// async function foo() {
//   console.log("foo start");
//   await bar();
//   console.log("foo end");
// }

// async function bar() {
//   console.log("bar start");
//   return Promise.resolve().then(() => {
//     console.log("bar promise resolved");
//   });
// }

// foo();

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// new Promise(resolve => {
//   console.log("Promise 1");
//   resolve();
// }).then(() => {
//   console.log("Promise 2");
// });

// console.log("end");
// console.log("start");

// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2 start");
//   await async3();
//   console.log("async2 end");
// }

// async function async3() {
//   console.log("async3 start");
//   await new Promise(resolve => {
//     console.log("async3 promise");
//     resolve();
//   });
//   console.log("async3 end");
// }

// async1();

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise1");
// });

// console.log("end");


// console.log("start");

// async function asyncFunc() {
//   console.log("asyncFunc start");
//   await new Promise(resolve => {
//     console.log("Promise inside asyncFunc");
//     resolve();
//   });
//   console.log("asyncFunc end");
// }

// asyncFunc();

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// new Promise(resolve => {
//   console.log("Promise 1");
//   resolve();
// }).then(() => {
//   console.log("Promise 2");
// });

// console.log("end");

// console.log("start");

// async function asyncFunc() {
//   console.log("asyncFunc start");
//   await new Promise(resolve => {
//     console.log("Promise inside asyncFunc");
//     resolve();
//   }).then(() => {
//     console.log("Promise inside then");
//   });
//   console.log("asyncFunc end");
// }

// asyncFunc();

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// new Promise(resolve => {
//   console.log("Promise 1");
//   resolve();
// }).then(() => {
//   console.log("Promise 2");
// });

// console.log("end");


// console.log("start");

// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2 start");
//   await new Promise(resolve => {
//     console.log("async2 promise");
//     resolve();
//   });
//   console.log("async2 end");
// }

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// async1();

// new Promise(resolve => {
//   console.log("Promise 1");
//   resolve();
// }).then(() => {
//   console.log("Promise 2");
// });

// console.log("end");

// async function secondFunction() {
//     console.log("Second function starts"); // 3
//     new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("inside setTimeout"); //9
//             resolve("resolve in promise");//10
//             console.log("after resolve");//11
//         }, 2000);
//         console.log("after setTimeout");//8
//     });
//     console.log("Second function ends"); //5
// }

// async function firstFunction() {
//     console.log("First function starts"); // 2
//     secondFunction();
//     console.log("First function ends"); //4
// }

// console.log("Start"); // 1
// firstFunction().then(() => console.log("All done"));//7
// console.log("Code continues..."); //6



// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
//   }
  
//   async function async2() {
//     console.log("async2 start");
//     await async3();
//     console.log("async2 end");
//   }
  
//   async function async3() {
//     console.log("async3 start");
//     await new Promise((resolve) => {
//       console.log("async3 promise start");
//       resolve();
//     });
//     console.log("async3 promise resolved");
//   }
  
//   console.log("script start");
  
//   async1();
  
//   setTimeout(() => {
//     console.log("setTimeout1");
//   }, 0);
  
//   new Promise((resolve) => {
//     console.log("promise1");
//     resolve();
//   }).then(() => {
//     console.log("promise2");
//   });
  
//   console.log("script end");

// console.log("start");

// new Promise((resolve) => {
//   console.log("Promise 1");
//   setTimeout(() => {
//     console.log("setTimeout 1");
//     new Promise((resolve) => {
//       console.log("Nested Promise inside setTimeout");
//       resolve();
//     }).then(() => {
//       console.log("Nested Promise resolved inside setTimeout");
//     });
//   }, 0);

//   resolve();
// }).then(() => {
//   console.log("Promise 1 resolved");

//   setTimeout(() => {
//     console.log("setTimeout 2");
//     new Promise((resolve) => {
//       console.log("Nested Promise inside second setTimeout");
//       resolve();
//     }).then(() => {
//       console.log("Nested Promise resolved inside second setTimeout");
//     });
//   }, 0);
// });

// // console.log("end");
// console.log("start");

// new Promise((resolve) => {
//   console.log("Promise 1");
  
//   setTimeout(() => {
//     console.log("setTimeout 1");
    
//     new Promise((resolve) => {
//       console.log("Nested Promise inside first setTimeout");
//       resolve();
//     }).then(() => {
//       console.log("Nested Promise resolved inside first setTimeout");
      
//       setTimeout(() => {
//         console.log("setTimeout 2 inside first setTimeout");
        
//         new Promise((resolve) => {
//           console.log("Nested Promise inside second setTimeout");
//           resolve();
//         }).then(() => {
//           console.log("Nested Promise resolved inside second setTimeout");
//         });
//       }, 0);
//     });
//   }, 0);

//   resolve();
// }).then(() => {
//   console.log("Promise 1 resolved");
  
//   setTimeout(() => {
//     console.log("setTimeout 3");
//     new Promise((resolve) => {
//       console.log("Nested Promise inside third setTimeout");
//       resolve();
//     }).then(() => {
//       console.log("Nested Promise resolved inside third setTimeout");
//     });
//   }, 0);
// });

// console.log("end");


console.log("start");
new Promise((resolve) => {
  console.log("Promise 1");
  
  setTimeout(() => {
    console.log("setTimeout 1");
    new Promise((resolve) => {
      console.log("Nested Promise inside first setTimeout");
      resolve();
    }).then(() => {
      console.log("Nested Promise resolved inside first setTimeout");
      setTimeout(() => {
        console.log("setTimeout 2 inside first setTimeout");
        new Promise((resolve) => {
          console.log("Nested Promise inside second setTimeout");
          resolve();
        }).then(() => {
          console.log("Nested Promise resolved inside second setTimeout");
        });
      }, 0);
    });
  }, 0);
  resolve();
}).then(() => {
  console.log("Promise 1 resolved");
  setTimeout(() => {
    console.log("setTimeout 3");
    new Promise((resolve) => {
      console.log("Nested Promise inside third setTimeout");
      resolve();
    }).then(() => {
      console.log("Nested Promise resolved inside third setTimeout");
    });
  }, 0);
});

console.log("end");


// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout 1");
//   new Promise((resolve) => {
//     console.log("Promise inside setTimeout");
//     resolve();
//   }).then(() => {
//     console.log("Promise resolved inside setTimeout");
//   });
// }, 0);

// new Promise((resolve) => {
//   console.log("Promise 1");
//   resolve();
// }).then(() => {
//   console.log("Promise 2");
//   return new Promise((resolve) => {
//     console.log("Promise 3");
//     resolve();
//   });
// }).then(() => {
//   console.log("Promise 4");
// });

// console.log("end");



// console.log("start");

// async function async1() {
//   console.log("async1 start");
//   await new Promise((resolve) => {
//     console.log("Promise inside async1");
//     resolve();
//   }).then(() => {
//     console.log("Promise resolved inside async1");
//   });
//   console.log("async1 end");
// }

// async1();

// new Promise((resolve) => {
//   console.log("Promise 1");
//   resolve();
// }).then(() => {
//   console.log("Promise 2");
// });

// setTimeout(() => {
//   console.log("setTimeout 1");
//   new Promise((resolve) => {
//     console.log("Promise inside setTimeout");
//     resolve();
//   }).then(() => {
//     console.log("Promise resolved inside setTimeout");
//   });
// }, 0);

// console.log("end");

// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout 1");

//   async function async1() {
//     console.log("async1 start");
//     await new Promise((resolve) => {
//       console.log("Promise inside async1");
//       resolve();
//     }).then(() => {
//       console.log("Promise resolved inside async1");
//     });
//     console.log("async1 end");
//   }

//   async1();

//   new Promise((resolve) => {
//     console.log("Promise inside setTimeout 1");
//     resolve();
//   }).then(() => {
//     console.log("Promise resolved inside setTimeout 1");
//   });
// }, 0);

// new Promise((resolve) => {
//   console.log("Promise 1");
//   resolve();
// }).then(() => {
//   console.log("Promise 2");
// });

// console.log("end");

// console.log("start");

// new Promise((resolve) => {
//   console.log("Promise 1");
//   resolve();
// }).then(() => {
//   console.log("Promise 2");
//   return new Promise((resolve) => {
//     console.log("Promise inside then");
//     resolve();
//   });
// }).then(() => {
//   console.log("Promise resolved inside then");
// });

// setTimeout(() => {
//   console.log("setTimeout 1");
//   new Promise((resolve) => {
//     console.log("Promise inside setTimeout");
//     resolve();
//   }).then(() => {
//     console.log("Promise resolved inside setTimeout");
//   });
// }, 0);

// async function async1() {
//   console.log("async1 start");
//   await new Promise((resolve) => {
//     console.log("Promise inside async1");
//     resolve();
//   }).then(() => {
//     console.log("Promise resolved inside async1");
//   });
//   console.log("async1 end");
// }

// async1();

// console.log("end");

// console.log("start");
// setTimeout(() => {
//   console.log("setTimeout 1");

//   new Promise((resolve) => {
//     console.log("Promise inside setTimeout 1");
//     resolve();
//   }).then(() => {
//     console.log("Promise resolved inside setTimeout 1");

//     setTimeout(() => {
//       console.log("setTimeout 2");
//       new Promise((resolve) => {
//         console.log("Promise inside setTimeout 2");
//         resolve();
//       }).then(() => {
//         console.log("Promise resolved inside setTimeout 2");
//       });
//     }, 0);
//   });
// }, 0);
// new Promise((resolve) => {
//   console.log("Promise 1");
//   resolve();
// }).then(() => {
//   console.log("Promise 2");
//   return new Promise((resolve) => {
//     console.log("Promise inside then");
//     resolve();
//   });
// }).then(() => {
//   console.log("Promise resolved inside then");
// });
// async function async1() {
//   console.log("async1 start");
//   await new Promise((resolve) => {
//     console.log("Promise inside async1");
//     resolve();
//   }).then(() => {
//     console.log("Promise resolved inside async1");
//   });
//   console.log("async1 end");
// }
// async1();
// console.log("end");
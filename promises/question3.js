//write a function which returns a random number from 1-20 and if the number is less than 5 only then it will resolve otherwise reject and if got reject retry atleast 3 times and then end the program.

// async function number() {
//   let number = Math.floor(Math.random() * 20);

//   let resolvedValue = await new Promise((resolve, reject) => {
//     if (number < 5) {
//       resolve(`Resolved ${number}`);
//     } else {
//       reject(`Rejected number ${number}`);
//     }
//   });
//   return resolvedValue;
//   //   return resolvedValue
// }

// number()
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((val) => {
//     console.error(val);
//   });

function getRandomNumber() {
  return Math.floor(Math.random() * 20);
}

function resRej() {
  return new Promise((resolve, reject) => {
    let randomNumber = getRandomNumber();
    if (randomNumber < 5) {
      resolve(randomNumber);
      console.log(randomNumber);
    } else {
      reject(randomNumber);
    }
  });
}

async function main() {
  let totalAttempts = 3;
  let currentAttempts = 1;

  while (currentAttempts < totalAttempts + 1) {
    try {
      const result = await resRej();
      console.log(`${result}:Number resolved in ${currentAttempts} attempts`);
      return;
    } catch (error) {
      console.log(
        `Number not resolved in ${currentAttempts} attempts, number: ${error}`
      );
      currentAttempts++;
    }
  }
  console.log("PRogram ends");
  return;
}
main();

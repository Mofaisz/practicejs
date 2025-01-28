// const originalBook = {
//     name: 'Harry Potter',
//     writer: 'J K Rowling',
//     book_details: {
//         content: 'abc',
//         pages: 500
//     }
// }

// let duplicateCopy = JSON.parse(JSON.stringify(originalBook))
// duplicateCopy.name = "Faiz";
// duplicateCopy.book_details.pages = 500;
// console.log(duplicateCopy)


let user = { name: 'John', age: 25, location: 'USA' };
let {name, age, location} = user

console.log(`My name is ${name} and I live in ${location}`)

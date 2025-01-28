const university = require("./data2.js")
let data = require("./data2.js")

// Write a function addNewCourse that:

//     Accepts the university object, a department name, and a new course object.
//     Adds the new course to the specified department.

// function addNewCourse(data){

//     departmentDetails = university.departments;
//     for(let value of departmentDetails){
//         coursesDetail=value.courses
//         let addCourse={
//             title: "Machine Learning",
//             credits: 3,
//             instructor: "Prof. Sarah Lee",
//             enrolledStudents: []
//           };
//         coursesDetail.push(addCourse)
//         return coursesDetail;
//     }
// }

// console.log(addNewCourse(data))



// Write a function filterStudentsByYear that:

//     Accepts the university object and a year (e.g., "Junior").
//     Returns a list of all students (names) across all courses and departments who belong to the given year.

function filterStudentsByYear(data){
    let result =[]
    departmentDetails = university.departments
    for(let value of departmentDetails){
        coursesDetails = value.courses
        for(let element of coursesDetails){
            enrolledStudentsDetails = element.enrolledStudents
            for(let student of enrolledStudentsDetails){
                if(student.year=="Junior"){
                    result.push(student.name)
                }
            }
        }
    }
    return result;
}

console.log(filterStudentsByYear(data))
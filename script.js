const university = {
    name: "Global Tech University",
    location: "Silicon Valley",
    departments: [
      {
        name: "Computer Science",
        head: "Dr. Alice Smith",
        courses: [
          {
            title: "Data Structures",
            credits: 4,
            instructor: "Prof. John Doe",
            enrolledStudents: [
              { name: "Ethan Hunt", year: "Sophomore" },
              { name: "Lara Croft", year: "Junior" }
            ]
          },
          {
            title: "Artificial Intelligence",
            credits: 3,
            instructor: "Prof. Emily Davis",
            enrolledStudents: [
              { name: "Tony Stark", year: "Senior" },
              { name: "Bruce Wayne", year: "Junior" }
            ]
          }
        ]
      },
      {
        name: "Electrical Engineering",
        head: "Dr. Bob Johnson",
        courses: [
          {
            title: "Circuit Design",
            credits: 4,
            instructor: "Prof. Jane Foster",
            enrolledStudents: [
              { name: "Clark Kent", year: "Junior" },
              { name: "Diana Prince", year: "Senior" }
            ]
          },
          {
            title: "Renewable Energy Systems",
            credits: 3,
            instructor: "Prof. Peter Parker",
            enrolledStudents: [
              { name: "Steve Rogers", year: "Senior" },
              { name: "Natasha Romanoff", year: "Sophomore" }
            ]
          }
        ]
      }
    ]
  };







// Write a function addNewCourse that:

//     Accepts the university object, a department name, and a new course object.
//     Adds the new course to the specified department.


function addNewCourse(university){
    
}



//   Write a function getCoursesByDepartment that:

//     Accepts the university object and a department name (e.g., "Computer Science").
//     Returns an array of course titles offered by that department.


// function getCoursesByDepartment(university){
//     let result = []

//     for(let value of university.departments){
//         if(value.name=="Computer Science"){
//             for(let val of value.courses){
//                 result.push(val.title)
//             }
//         }
//     }
//     return result;
// }

// console.log(getCoursesByDepartment(university));




// Write a function getStudentsInCourse that:

//     Accepts the university object and a course title (e.g., "Data Structures").
//     Returns an array of student names enrolled in that course.


// function getStudentsInCourse(university){

//     const names = []

//     for(let value of university.departments){
//         for(let val of value.courses){
//             if(val.title=="Data Structures"){
//                 for(let res of val.enrolledStudents){
//                     names.push(res.name)
//                 }
//             }
//         }
//     }
//     return names;
// }

// console.log(getStudentsInCourse(university));



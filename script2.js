const data = require("./data.js");

// Accessing Properties:

//     What is the name of the company?
//     Which city is the company located in?
// //     How many departments does the company have?

// function practice(data) {
//   //   let name = null;
//   //   let location = null;
//   //   for (let key in data) {
//   //     name = data[key].name;
//   //     locationDetail = data[key].location;
//   //     location = locationDetail.city;
//   //   }
//   //   return location;

//   // let count=0
//   // DepartmentDetail=data.company.departments
//   // for(let value of DepartmentDetail){
//   //     count+=1;
//   // }
//   // return count;

//   // Accessing Nested Arrays:

//   // What is the name of the first employee in the Engineering department?
//   // List the skills of Bob.

//   DepartmentDetail = data.company.departments;
//   for (let value of DepartmentDetail) {
//     // if(value.name==="Engineering"){
//     //     employeesDetail=value.employees;
//     //     for(let val of employeesDetail){
//     // return val.name      Answer - Alice
//     // if(val.name=="Bob"){
//     //     return val.skills.join(" ")
//     // }

//     // What is the email of the Marketing Manager?
//     // What is the price of "SuperApp"?

//     //             if(value.name=="Marketing"){
//     //                 // console.log(value.employees)
//     //                 employ=value.employees
//     //                 for(let value of employ){
//     //                     if(value.role=="Marketing Manager"){
//     //                         return value.contact.email;
//     //                     }
//     //                 }
//     //             }

//     //         // }

//     //     // }
//     // }

//     // Retrieve the names of employees who have "JavaScript" as a skill.
//     let resuult = []
//     DepartmentDetail = data.company.departments;
//     for (let value of DepartmentDetail) {
//       employeeDetail = value.employees;
//       for (let employee of employeeDetail) {
//         if(employee.skills.includes("JavaScript")){
//             resuult.push(value.name)
//         }
//       }
//     }
//     return resuult;
//   }
// }



// Write a function to get the average rating for the product "SuperApp".

// function  averageRating(data){
//     productDetails = data.company.products;
//     let result = [];
//     for(let value of productDetails){
//         if(value.name=="SuperApp"){
//             reviewDetails=value.reviews;
//             for(let element of reviewDetails){
//                 result.push(parseFloat(element.rating));
//             }
//         }
//     }
//     let finalResult = 0
//     for(let average of result){
//         finalResult+=average
//     }
//     return finalResult/result.length;
// }
// console.log(averageRating(data));


//Access the comment made by "user3" for "TechHub".

// function comment(data){
//     productDetails = data.company.products;
//     for(let value of productDetails){
//         reviewDetails=value.reviews
//         for(let element of reviewDetails){
//             if(element.user == "user3"){
//                 return element.comment;
//             }
//         }
//     }
// }

// zip code of the company location

// function zipCode(data){
//     for(let company in data){
//        locationDetail =  data[company].location
//        return locationDetail.zip
//     }
// }
// console.log(zipCode(data))


//San Francisco

// function checkCity(data){
//     for(let company in data){
//         companyDetails=data[company]
//         value = companyDetails.location
//         if(value.city=="San Francisco"){
//             return "Found"
//         }
//     }
// }

// console.log(checkCity(data))

// function city(data){
//     for(let company in data){
//         return  data[company][location]
//     }
// }
// console.log(city(data))


// email of alice

// function email(data){
//     departmentDetails = data.company.departments
//     for(let value of departmentDetails){
//         employeeDetails  = value.employees
//         for(let employee of employeeDetails){
//             if(employee.name == "Alice"){
//                 return employee.contact.email
//             }
//         }
//     }
// }

// console.log(email(data))


// What is the name of the organization?
// What year was the organization founded?
// What is the ZIP code of the organization's headquarters?
// Retrieve the name of the CEO.
// Access the city where the organization's headquarters is located.


// function nameOfOrganization(data){
//     // for(let organization in data){
//     //     return data.organization.name
//     // }

//     return data.organization.name
// }


// function zip(data){
//     for(let organization in data){
//         if(data[organization].leadership.CEO.name=="John Smith"){
//             return data[organization].leadership.CEO.contact.phone
//         }
        
//     }
// }
// console.log(zip(data))


// Check if the organization’s revenue increased from 2021 to 2023. Return true or false.


function organizationRevenue(data){

    for(let organization in data){
        details = data[organization]
        
            let r2021=details.stats.revenue.year2021;
            let r2023 = details.stats.revenue.year2023
            if(r2023>r2021){
                return "true"
            }
        
    }
}

console.log(organizationRevenue(data))
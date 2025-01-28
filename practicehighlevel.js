let data = require("./highleveldataset.js");


// List all products available in the "Smartphones" subcategory.

function smartphoneList(data) {
  let categoriesDetails = data.categories;

  let result = categoriesDetails.reduce((accumulator, value) => {
    value.subcategories.forEach((val) =>{
        val.products.forEach((element) =>{
            accumulator.push(element.name);
        })
    })
    return accumulator
  } ,[]);
  return result;
}


// Find the average rating for each product in the "Laptops" subcategory.

function averageRating(data){
    
}

console.log(smartphoneList(data));



// Find the average rating for each product in the "Laptops" subcategory.


// List all products available in the "Smartphones" subcategory.
// Find the average rating for each product in the "Laptops" subcategory.
// Get the names and total prices of all orders made by customer "Alice".
// Find the most expensive product across all categories.
// List all reviews for products in the "Electronics" category.
// Find the total number of products in the "Home Appliances" category.
// Add a new product to the "Smartphones" subcategory with product details (name, price, reviews).
// Find all customers who have ordered a "MacBook Pro".
// Update the email address of customer "Bob".
// Calculate the total sales for the "Laptops" subcategory.

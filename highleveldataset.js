const ecommerceData = {
    platform: "ShopMate",
    categories: [
      {
        id: 1,
        name: "Electronics",
        subcategories: [
          {
            id: 101,
            name: "Smartphones",
            products: [
              {
                id: 1001,
                name: "iPhone 15",
                price: 999,
                reviews: [
                  { user: "Alice", rating: 5, comment: "Excellent product!" },
                  { user: "Bob", rating: 4, comment: "Good, but expensive." },
                ],
              },
              {
                id: 1002,
                name: "Samsung Galaxy S23",
                price: 849,
                reviews: [
                  { user: "Charlie", rating: 4, comment: "Great phone, but battery life could be better." },
                  { user: "Diana", rating: 5, comment: "Love this phone!" },
                ],
              },
            ],
          },
          {
            id: 102,
            name: "Laptops",
            products: [
              {
                id: 2001,
                name: "MacBook Pro",
                price: 1999,
                reviews: [
                  { user: "Eve", rating: 5, comment: "Best laptop ever!" },
                  { user: "Frank", rating: 4, comment: "Expensive but powerful." },
                ],
              },
              {
                id: 2002,
                name: "Dell XPS 13",
                price: 1299,
                reviews: [
                  { user: "Grace", rating: 4, comment: "Great performance, but I wish the battery lasted longer." },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Home Appliances",
        subcategories: [
          {
            id: 201,
            name: "Refrigerators",
            products: [
              {
                id: 3001,
                name: "LG Smart Refrigerator",
                price: 1199,
                reviews: [
                  { user: "Hank", rating: 5, comment: "Keeps everything fresh and is very energy efficient." },
                ],
              },
            ],
          },
          {
            id: 202,
            name: "Washing Machines",
            products: [
              {
                id: 4001,
                name: "Samsung Front Load Washer",
                price: 899,
                reviews: [
                  { user: "Ivy", rating: 4, comment: "Does a great job washing clothes, but a bit noisy." },
                ],
              },
            ],
          },
        ],
      },
    ],
    customers: [
      {
        id: 1001,
        name: "Alice",
        email: "alice@example.com",
        orderHistory: [
          { orderId: 5001, productId: 1001, quantity: 1, totalPrice: 999 },
          { orderId: 5002, productId: 3001, quantity: 1, totalPrice: 1199 },
        ],
      },
      {
        id: 1002,
        name: "Bob",
        email: "bob@example.com",
        orderHistory: [
          { orderId: 5003, productId: 2002, quantity: 1, totalPrice: 1299 },
        ],
      },
    ],
  };

  module.exports = ecommerceData;

  
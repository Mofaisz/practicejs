const data = {
    "users": [
      {
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "age": 25,
        "isActive": true,
        "roles": ["admin", "editor"],
        "address": {
          "street": "123 Main St",
          "city": "New York",
          "state": "NY",
          "zip": "10001"
        }
      },
      {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob@example.com",
        "age": 30,
        "isActive": false,
        "roles": ["viewer"],
        "address": {
          "street": "456 Elm St",
          "city": "San Francisco",
          "state": "CA",
          "zip": "94101"
        }
      },
      {
        "id": 3,
        "name": "Charlie Brown",
        "email": "charlie@example.com",
        "age": 35,
        "isActive": true,
        "roles": ["editor"],
        "address": {
          "street": "789 Oak St",
          "city": "Chicago",
          "state": "IL",
          "zip": "60601"
        }
      }
    ],
    "products": [
      {
        "id": 101,
        "name": "Laptop",
        "price": 999.99,
        "category": "Electronics",
        "stock": 50,
        "tags": ["computer", "technology", "portable"]
      },
      {
        "id": 102,
        "name": "Headphones",
        "price": 49.99,
        "category": "Accessories",
        "stock": 150,
        "tags": ["audio", "music", "wireless"]
      },
      {
        "id": 103,
        "name": "Coffee Mug",
        "price": 12.99,
        "category": "Kitchen",
        "stock": 200,
        "tags": ["beverage", "ceramic", "office"]
      }
    ],
    "orders": [
      {
        "orderId": "ORD001",
        "userId": 1,
        "date": "2024-12-01",
        "items": [
          {
            "productId": 101,
            "quantity": 1
          },
          {
            "productId": 103,
            "quantity": 2
          }
        ],
        "totalAmount": 1025.97
      },
      {
        "orderId": "ORD002",
        "userId": 3,
        "date": "2024-12-02",
        "items": [
          {
            "productId": 102,
            "quantity": 2
          }
        ],
        "totalAmount": 99.98
      }
    ]
  }
  

  module.exports = data;
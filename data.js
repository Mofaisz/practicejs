const data = {
    "company": {
      "name": "TechCorp",
      "location": {
        "city": "San Francisco",
        "state": "California",
        "zip": "94107"
      },
      "departments": [
        {
          "name": "Engineering",
          "employees": [
            {
              "id": 1,
              "name": "Alice",
              "role": "Software Engineer",
              "skills": ["JavaScript", "Python", "React"],
              "contact": {
                "email": "alice@techcorp.com",
                "phone": "123-456-7890"
              }
            },
            {
              "id": 2,
              "name": "Bob",
              "role": "DevOps Engineer",
              "skills": ["Docker", "Kubernetes", "AWS"],
              "contact": {
                "email": "bob@techcorp.com",
                "phone": "123-555-7890"
              }
            }
          ]
        },
        {
          "name": "Marketing",
          "employees": [
            {
              "id": 3,
              "name": "Carol",
              "role": "Marketing Manager",
              "skills": ["SEO", "Content Marketing", "Google Ads"],
              "contact": {
                "email": "carol@techcorp.com",
                "phone": "123-444-7890"
              }
            }
          ]
        }
      ],
      "products": [
        {
          "id": 101,
          "name": "SuperApp",
          "category": "Software",
          "price": 49.99,
          "features": ["Real-time Sync", "Cloud Backup", "Multi-Platform"],
          "reviews": [
            {
              "user": "user1",
              "rating": 4.5,
              "comment": "Great app, but could use more features."
            },
            {
              "user": "user2",
              "rating": 5,
              "comment": "Absolutely love it!"
            }
          ]
        },
        {
          "id": 102,
          "name": "TechHub",
          "category": "Hardware",
          "price": 299.99,
          "features": ["High-speed processor", "Wireless connectivity", "Long battery life"],
          "reviews": [
            {
              "user": "user3",
              "rating": 3.5,
              "comment": "Decent hardware, but a bit overpriced."
            },
            {
              "user": "user4",
              "rating": 4.7,
              "comment": "Very durable and efficient."
            }
          ]
        }
      ]
    }
  }
module.exports = data;
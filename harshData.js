const company = {
    name: "TechCorp",
    location: {
      country: "USA",
      state: "California",
      city: "San Francisco",
      address: {
        street: "123 Tech Lane",
        zip: "94107",
        building: {
          name: "TechHub",
          floors: 10,
          rooms: {
            1: { type: "conference", capacity: 20 },
            2: { type: "office", capacity: 5 },
            3: { type: "lounge", capacity: 50 },
            4: { type: "office", capacity: 10 },
            5: { type: "conference", capacity: 15 },
            6: { type: "office", capacity: 7 },
          },
        },
      },
    },
    departments: [
      {
        name: "Engineering",
        manager: "Alice",
        employees: [
          {
            name: "Alice",
            position: "Senior Developer",
            skills: ["JavaScript", "React", "Node.js"],
            office: { room: 2, floor: 3 },
            salary: 100000,
            projects: [
              { name: "Project A", deadline: "2024-12-31", status: "ongoing" },
              { name: "Project B", deadline: "2025-03-15", status: "completed" },
            ],
          },
          {
            name: "Eve",
            position: "Junior Developer",
            skills: ["JavaScript", "Vue.js"],
            office: { room: 3, floor: 4 },
            salary: 60000,
            projects: [
              {
                name: "Project C",
                deadline: "2025-06-01",
                status: "not started",
              },
            ],
          },
        ],
      },
      {
        name: "Design",
        manager: "Bob",
        employees: [
          {
            name: "Bob",
            position: "Lead Designer",
            skills: ["Figma", "Photoshop", "Illustrator"],
            office: { room: 5, floor: 2 },
            salary: 95000,
            projects: [
              {
                name: "Project D",
                deadline: "2025-06-01",
                status: "not started",
              },
            ],
          },
          {
            name: "Charlie",
            position: "UI/UX Designer",
            skills: ["Sketch", "Illustrator"],
            office: { room: 6, floor: 1 },
            salary: 70000,
            projects: [
              { name: "Project E", deadline: "2025-02-01", status: "ongoing" },
            ],
          },
        ],
      },
      {
        name: "Marketing",
        manager: "David",
        employees: [
          {
            name: "David",
            position: "Marketing Lead",
            skills: ["SEO", "Social Media", "Content Writing"],
            office: { room: 4, floor: 5 },
            salary: 85000,
            projects: [
              { name: "Project F", deadline: "2025-05-01", status: "completed" },
            ],
          },
          {
            name: "Grace",
            position: "Content Writer",
            skills: ["Writing", "SEO", "Blogging"],
            office: { room: 2, floor: 6 },
            salary: 55000,
            projects: [
              { name: "Project G", deadline: "2025-04-01", status: "ongoing" },
            ],
          },
        ],
      },
    ],
  };
  
  module.exports = company;
  
  // Questions Based on This Data
  // Accessing Data:
  
  // What is the name of the company?
  // What is the city where the company is located?
  // What is the zip code for the company's address?
  // What is the capacity of room 1 in the building?
  // Filtering/Mapping:
  
  // List all the names of employees working in the company.
  // Get a list of all the skills that the employees have (avoid duplicates).
  // Find out which projects Alice is working on and their deadlines.
  // Sorting:
  
  // Sort the employees based on their names.
  // Sort the projects for each employee based on their deadline (ascending).
  // Finding Specific Data:
  
  // Find the project(s) that have a deadline of 2025-03-15.
  // Find the employee who works in room 2 on floor 3.
  // Find the building name where the company is located.
  // Aggregating:
  
  // Calculate the total number of floors in the building.
  // Calculate how many employees are working on projects that have a deadline in 2025.
  // Conditional Logic:
  
  // Check if the company has any employees working in the "lounge" room.
  // Find out if there’s any employee who knows "React" and works on "Project A".
  // Modifying Data:
  
  // Add a new employee named "Charlie", a "Tester" with skills ["JavaScript", "Cypress"], and assign them to room 1 on floor 2.
  // Change the address zip code to "94000".
  // Update Alice's "Project B" deadline to 2025-01-01.
  // Nested Iterations:
  
  // Loop through each employee and list their projects along with the project deadlines.
  // Loop through each room in the building and print the room type along with its capacity.
  // Recursion:
  
  // Write a recursive function to list all the room types in the building.
  // Edge Cases:
  
  // What happens if you try to access an employee who does not exist in the employees array (e.g., company.employees[3])?
  // What if there’s no building property in the location object?
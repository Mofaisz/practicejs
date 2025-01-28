// using `async`/`await` and the `fetch` API, perform the following tasks:

// 1. **Create an async function** that fetches data from a public API (e.g., `https://jsonplaceholder.typicode.com/posts`) and logs the response.
// 2. **Handle errors gracefully** in case the fetch request fails (e.g., if the URL is incorrect or there's a network error).
// 3. In the fetched data, find the post with **ID 5**, and log its title and body to the console.
// 4. **Create a second async function** that fetches data from a second API (`https://jsonplaceholder.typicode.com/users`), then **find the user** with **ID 2** and log their name and email.
// 5. Use `Promise.all` to execute both async functions **simultaneously**, but wait for both to finish before logging "Data fetch completed" to the console.

async function fetchData() {
  try {
    let data  = await fetch('https://jsonplaceholder.typicode.com/posts');
    return data

  } catch (err) {
    throw new Error(err);
    
  }

}

async function fetchData2() {
  
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    return data
  } catch (err) {

    throw new Error(err);
    
  }
}

(
  async () =>{
    let data1  =await fetchData()
    let data2 = await fetchData2()
    console.log(data1)
    console.log(data2)
    Promise.all([data1,data2])
    .then(() =>{
      console.log("Both data fetched successfully")
    })
  }
)()

















// const api = "https://jsonplaceholdher.typicode.com/posts";

// async function fetchData() {
//   try {
//     return await fetch(api);
//   } catch (err) {
//     throw new Error("Error in fetching data");
//   }
// }

// (async () => {
//   console.log(await fetchData());
// })();

// async makes a function return a Promise
// await makes a function wait for a Promise

import fetch from "node-fetch";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
}

fetchData("https://jsonplaceholder.typicode.com/users");

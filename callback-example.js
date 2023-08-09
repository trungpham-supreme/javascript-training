// A callback is a function passed as an argument to another function
// JavaScript solves this problem using callbacks.
// A callback function can run after another function has finished

// example 1
function sayHi() {
  console.log('Hello');
}

function meetUp(callback) {
  callback();
}

// meetUp(sayHi);

// example 2
function fetchData(callback) {
  setTimeout(() => {
    const data = { message: 'Done!' };
    callback(null, data);
  }, 1000);
}

function processData(err, data) {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Data:', data);
  }
}

fetchData(processData);

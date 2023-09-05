// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise has three states:
// Pending: The initial state, indicating that the async operation is still in progress.
// Fulfilled (Resolved): The state that represents a successful completion of the async operation, resulting in a value being returned.
// Rejected: The state that indicates an error occurred during the async operation, and a reason for the failure is provided.

// example 1
const sayHi = new Promise((resolve, reject) => {
  const data = 'Hi';
  if (data) {
    resolve(console.log(data));
  } else {
    reject(console.log('Error'));
  }
});

// example 2
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: 'Hi' };
      if (data) {
        resolve(data);
      } else {
        reject(new Error('Error'));
      }
    }, 500);
  });
}

fetchData()
  .then((data) => {
    return (data = { message: 'Hello' });
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

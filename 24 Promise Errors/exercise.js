const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
  if (isLogged) {
    setTimeout(() => {
      const randomNumber = Math.random();
      resolve(randomNumber);
    }, 1000); 
  } else {
    reject(new Error("User is not logged in")); // Using the Error class
  }
});

firstPromise
  .then((randomNumber) => {
    console.log("Resolved:", randomNumber);
  })
  .catch((error) => {
    console.error("Rejected:", error.message); // Accessing the error message
  });

const secondPromise = (inputNumber) => {
  return new Promise((resolve, reject) => {
    if (inputNumber > 0.5) {
      setTimeout(() => {
        resolve({ name: "John", age: 24 });
      }, 1000);
    } else {
      reject(new Error("Input number is not greater than 0.5")); // Using the Error class
    }
  });
};

const inputNumber = 0.7;
secondPromise(inputNumber)
  .then((data) => {
    console.log("Resolved:", data);
  })
  .catch((error) => {
    console.error("Rejected:", error.message); // Accessing the error message
  })
  .finally(() => {
    console.log("Second promise has been resolved or rejected.");
  });

firstPromise
  .then((randomNumber) => {
    console.log("First Promise Resolved:", randomNumber);
    return secondPromise(randomNumber);
  })
  .then((data) => {
    console.log("Chained Promise Resolved:", data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Chained promise has been resolved or rejected.");
  });

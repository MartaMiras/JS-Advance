const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
    if (isLogged) {
        setTimeout(() => {
            const randomNumber = Math.random();
            resolve(randomNumber);
        }, 1000); // Delay using setTimeout for demonstration purposes
    } else {
        reject("User is not logged in");
    }
});

firstPromise
    .then((randomNumber) => {
        console.log("Resolved:", randomNumber);
    })
    .catch((error) => {
        console.error("Rejected:", error);
    });

const secondPromise = (inputNumber) => {
    return new Promise((resolve, reject) => {
        if (inputNumber > 0.5) {
            setTimeout(() => {
                resolve({ name: "John", age: 24 });
            }, 1000);
        } else {
            reject("Input number is not greater than 0.5");
        }
    });
};

const inputNumber = 0.7;
secondPromise(inputNumber)
    .then((data) => {
        console.log("Resolved:", data);
    })
    .catch((error) => {
        console.error("Rejected:", error);
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
        console.error("Error:", error);
    });

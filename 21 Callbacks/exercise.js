function repeatHello(callback) {
    const intervalId = setInterval(callback, 1000); // Executes the callback every 1000 milliseconds (1 second)

    setTimeout(() => {
        clearInterval(intervalId); // Clear the interval after 5 seconds
    }, 5000); // 5000 milliseconds = 5 seconds
}

const helloCallback = () => {
    console.log("Hello");
};

repeatHello(helloCallback);
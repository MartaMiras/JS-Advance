function printAsyncName(callback, name) {
    setTimeout(() => {
        callback();
        setTimeout(() => {
            console.log(name);
        }, 2000);
    }, 1000);
}

function helloCallback() {
    console.log("Hello");
}

printAsyncName(helloCallback, "John");

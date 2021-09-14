const promise: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise Resolved");
    },1000);
});

promise.then(data => console.log(data.split(' '))); //output: ['Promise','Resolved']
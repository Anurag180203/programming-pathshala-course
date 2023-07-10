const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({"Name":"Rahul"});
     },5000)
});
promise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
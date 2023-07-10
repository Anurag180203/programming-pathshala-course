// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({"Name":"Rahul"});
//      },5000)
// });
// promise.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

//promises -- it is an object that represents the eventual completion or failure of an asynchronous operation
//it has three states -- pending, fulfilled, rejected
//it has two methods -- then and catch
//then is called when the promise is fulfilled and catch is called when the promise is rejected
//promise chaining -- when we return a promise from a then block then we can chain another then block to it . this is used to avoid callback hell

// ES6 -- await and async

// function foo1() {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("foo1");
//             res({"Name":"Rahul"});
//          },1000)
//     });   
// }

// function foo2() {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("foo2");
//             res({"Name":"Rahul"});
//          },5000)
//     }); 
// }

// function foo3() {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("foo3");
//             res({"Name":"Rahul"});
//          },2000)
//     });    
// }

// async function f(){
//     await foo1();
//     await foo2();
//     await foo3();
// }
// // async await is used to avoid promise chaining
// async function g(){
//     await foo3();
//     await foo1();
//     await foo2();
// }
// f();
// g();
// this is alternative to 
// foo1().then(() => {
//     foo2().then(() => {
//         foo3().then(() => {

//         })
//     })
// })

// for(var i=0;i<10;i++)
// {var x = 10;}
// console.log(x);
// console.log(i); // 10, 10 because var is function scoped and not block scoped

// // lexical environment
// // closure -- when a function is defined inside another function then the inner function has access to the variables of the outer function even after the outer function has returned
// function f(){
//     let x = "Anurag";
//     function g(greet){
//         console.log(greet + " " + x);
//     }
//     return g;
// }
// g = f();
// g("Hi"); // Hi Anurag

// var x = "Bhargav"
// function f1(){
//     function g1(greet){
//         console.log(greet + " " + x);
//     }
//     return g1;
// }
// g1 = f1();
// x = "Shane"
// g1("Hi"); // Hi Anurag

// for(let i=0;i<=5;i++){
//     setTimeout(() => {
//         console.log(i);
//     },i*1000)
// }

// for(var i=0;i<=5;i++){
//     setTimeout(() => {
//         console.log(i);
//     },i*1000)
// }

// Microtask queue and macrotask queue
// macrotask queue -- setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
// microtask queue -- process.nextTick, Promises, Object.observe, MutationObserver   -- these are executed after the macrotask queue is empty
// callback queue -- when the macrotask queue is empty then the microtask queue is executed and when the microtask queue is empty then the callback queue is executed

// constructor function

function User(first_name,last_name)
{
    this.first_name = first_name;
    this.last_name = last_name;
}
let user1 = new User("Anurag","Sharma");
let user2 = new User("Anju","Sharma");
let user3 = new User("Rajesh","Sharma");
console.log(user1);
console.log(user2);
console.log(typeof(User));
console.log(typeof(user1));

// User.greet = function(){
//     console.log("Hello");
// }
// user1.greet(); // error
// User.greet(); // Hello


// prototype -- it is an object that is shared among all the instances of the constructor function
// prototype is used to add properties and methods to the constructor function

user1.greet = () => {
    console.log("Hello");
}

User.prototype.greet = function() {
    console.log("Hello "+this.first_name + " " + this.last_name);
}
user1.greet();
user2.greet();

// __proto__ -- it is a property of an object that points to the prototype of the object

console.log(user1.__proto__ === User.prototype); // true

user2.__proto__.greet = function() {
    console.log("Hello "+this.first_name + " " + this.last_name + " Bye");
}
user3.greet();

// prototype chain -- when we try to access a property or method of an object then first it is searched in the object itself and if it is not found then it is searched in the prototype of the object and if it is not found there then it is searched in the prototype of the prototype of the object and so on till the prototype of the object is null
// prototype of an object is null when we use Object.create(null) or when we use the object literal syntax


Object.prototype.greet = function(){
    console.log("Yo");
}

let obj = {}
obj.greet(); // Yo

class Person{ // in ES6 we have classes
    constructor(first_name,last_name){
        this.first_name = first_name;
        this.last_name = last_name;
    }
    greet(){
        console.log("Hello "+this.first_name + " " + this.last_name);
    }
}

let x1 = new Person("Anurag","Sharma");
let x2 = new Person("Anju","Sharma");

x1.greet();
x2.greet();
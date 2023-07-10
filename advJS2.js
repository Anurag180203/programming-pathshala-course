// V8 engine is used to run JS code in chrome
// Node.js is used to run JS code in server
// JS is a single threaded language that can be non-blocking
// JS is a synchronous language  

// DOM Manipulation

//execution context -- memory part and code part
//execution context is created in two phases
//1. creation phase
//2. execution phase


// global execution context
function ab() {
    var x = 3;
    var y = 4;
    console.log(x+y);
}

let x = 5;
let y = 6;
ab();
console.log(x+y); // web api


//call stack and recursion
function foo(a) {
    a=2
    console.log(a);
}
let a = 3;
foo(a);
console.log(a);

function fool(a) {
    a[1]=2
    console.log(a);
}
let az = [3,4]; // if a is an array then it will be passed by reference
fool(az);
console.log(az);

//LEGB rule
//L - local
//E - enclosing
//G - global
//B - built-in

// const btn = document.getElementById('btn');
// const sp = document.getElementById('sp');
// btn.addEventListener('click', () => {
//     document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
//     let z = sp.textContent;
//     z = parseInt(z) + 1;
//     sp.textContent = z;
// })

// event propagation - capturing and bubbling
document.getElementsByTagName('body')[0].addEventListener('click', () => {
    console.log("body clicked")
}, false);

document.getElementsByTagName('div')[0].addEventListener('click', (e) => {
    console.log("div clicked")
},true); //true for capturing and false for bubbling
// that means if we click on div then first body event will be fired and then div event will be fired
document.getElementsByTagName('button')[0].addEventListener('click', (e) => {
    console.log("button clicked")
    e.stopPropagation();
},true);

//callbacks -- it means passing a function as an argument to another function and then calling it inside the function
//higher order functions -- functions that take other functions as arguments
//forEach, map, filter, reduce, find, some, every, sort, etc are higher order functions

setTimeout(() => {
    console.log("hello")
},5000)

console.log("hi")

//browser api -- DOM, AJAX, Timeout, etc

// callback queue -- when the stack is empty then the callback queue is checked and if there is any callback then it is pushed to the stack

//callback hell -- when we have to do a lot of callbacks then it is called callback hell. this happens when we want to do a lot of asynchronous operations one after another
// solution is promises and async await  // see advJS3.js
// var finalScore = 1 + score ;
// score = 88;
// console.log(finalScore);

// o/p : ReferenceError: score is not defined
    
// var finalScore = 1 + score ;
// var score = 88;
// console.log(finalScore);

// o/p : NaN

// Optional chaining (?.) operator is used to avoid ReferenceError and NaN error. 
// It returns undefined if the expression is null or undefined. 
// It is used to avoid deep nesting of if-else statements. 
// It is used to avoid null pointer exception. 
// It is used to avoid undefined value.
//  It is used to avoid NaN value. 
// It is used to avoid ReferenceError. 
// It is used to avoid SyntaxError..
//  It is used to avoid EvalError. It is used to avoid URIError. 
// It is used to avoid TypeError. 
// It is used to avoid RangeError. 




// function transform(arr) {
//     console.log(arr[99]);
    
// }
// transform();

// o/p : TypeError: Cannot read properties of undefined (reading '99')


// function transform(arr) {
//     console.log(arr?.[99]);
    
// }
// transform();
// o/p : undefined


// function transform(arr) {
//     console.log(arr?.[99]);
    
// }
// transform(10);
// o/p : undefined

// function transform(arr) {
//     console.log(arr?.[0]);
    
// }
// transform([10]);
// o/p  : 10


// console.log(add(2, 3));  // ReferenceError: Cannot access 'add' before initialization
// const add = (a, b) => a + b;
// o/p : ReferenceError: Cannot access 'add' before initialization

// console.log(add(2, 3)); 
// var add = (a, b) => a + b;
// o/p : TypeError: add is not a function
// Unlike const and let, var declarations are fully hoisted and initialized with undefined during the creation phase of the execution context. This means that at the start of the script, var add exists but is initialized to undefined.
// When you try to execute add(2, 3), you're effectively doing undefined(2, 3), which causes a TypeError because undefined is not a function


// console.log(sum);
// var sum  = 10; // hoised and intialized
// o/p : undefined


// console.log(sum);
// let sum = 10;  // hoisted but not initialized 
// it's same for let and const
// ReferenceError: Cannot access 'sum' before initialization


// example of IIFE(immediately invoked function expression)

// (function() {
//     var message = 'Hello!';
//     console.log(message);  // "Hello!"
// })();

// console.log(message);  // ReferenceError: message is not defined


// function declaration
// function test() {
//     console.log("hello");
// }
// test();
// o/p : hello


// function expression
// var newTest = function() {
//     console.log("hello");
// }
// newTest();
// o/p : hello

// greet();
// const greet = function() {
//     console.log("Hello!");
// };
 // ReferenceError: Cannot access 'greet' before initialization


// greet();
// var greet = function() {
//      console.log("Hello!");
// };
  //TypeError: greet is not a function


// function greet(greeting, punctuation) {
//     console.log(greeting + ', ' + this.name + punctuation);
// }
// const person = { name: 'Alice' };

// greet.call(person, 'Hello', '!');  // "Hello, Alice!"
// greet.apply(person, ['Hi', '?']);  // "Hi, Alice?"
// const boundGreet = greet.bind(person, 'Hey');
// boundGreet('!');  // "Hey, Alice!"

// call,apply,bind

// example of closure
// function outer() {
//     let count = 0;
//     console.log(count + " before return");
    
//     return function inner() {
//         console.log("inner "+ count);
        
//         count++;
//         console.log(count);
//     };
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2

// o/p :
// 0 before return
// inner 0
// 1
// inner 1
// 2


// function outer() {
//     let count = 0;
//     console.log(count + " before return");
//     return count;
//     return function inner() {
//         console.log("inner "+ count);
        
//         count++;
//         console.log(count);
//     };
// }
// // outer()
// console.log(outer());

// const counter = outer();
// counter(); // 1
// counter(); // 2
// outer()

// How has ES6 altered the approach to working with "this" in JavaScript?(pending)
// var Timer = (() => {
//     this.seconds = 0;
//     setInterval(() => {
//         this.seconds++;
//         console.log(this.seconds);
//     }, 1000);
// });
// Timer(10)

// # prototype


// console.log(alert());
// console.log(window);



//  Person(() => {
//     this.age = 0;
//     console.log(this.age);
    
    
//     setInterval(() => {
//         this.age++; // `this` refers to the Person object
//         console.log(this.age);
//     }, 1000);
// });
// Person(); // 0
// new Person();/





function multiplyBy(multiplier) {
    console.log(multiplier);
    return function(value) {
        console.log(value);
        return multiplier * value;
    };
}
const double = multiplyBy(2);
// console.log(double(5));  // 10


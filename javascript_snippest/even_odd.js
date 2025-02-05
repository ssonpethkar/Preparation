// run program : node index.js

const num = 6;
const result = (num % 2  != 0) ? "odd" : "even";
// display the result
console.log(`Number is ${result}.`)

// o/p : Number is even.

function x (){
    var i=10;
    setTimeout(() => {
        console.log(i);
    }, 3000);
    console.log("Good morning");
}
x();

// o/p : 
// Good morning
//  10 (after 3 sec gets value)

// using let varible
function y (){
    for (let i = 1; i <=5 ; i++) {
        setTimeout(() => {
            console.log(i);
        }, i* 1000);
    }
    console.log("Good morning");
}
y();
// o/p :
// 1
// 2
// 3
// 4
// 5

// using var veriable
function z (){
    for (var i = 1; i <=5 ; i++) {
        setTimeout(() => {
            console.log(i);
        }, i* 1000);
    }
    // console.log("Good morning");
}
z();
// o/p:
// 6
// 6
// 6
// 6
// 6
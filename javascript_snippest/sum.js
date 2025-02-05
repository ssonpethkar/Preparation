// passed arguments 

function sum(num1, num2) {
    return arguments[0]+ arguments[1];
}

console.log(sum(10,20));
;

// o/p : 30 

function sum1(num1, num2) {
    num1 = 100;
    num2 =300;
    return arguments[0]+ arguments[1];
}

console.log(sum1(10,20));


// o/p : 400

function sum2(num1, num2) {
    "use strict";
    num1 = 100;
    num2 =300;
    return arguments[0]+ arguments[1];
}

console.log(sum2(10,20));


// o/p : 30
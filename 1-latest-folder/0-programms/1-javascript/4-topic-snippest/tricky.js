// var x = 10;

// function test() {
//     console.log(x);
//     var x = 20;
// }

// test();

// // o/p : undefined

// ********************************************

// var x = 10;

// function test() {
//     console.log(x);
//     x = 20;
// }

// test();
// // o/p : 10

// *******************************************
// console.log(1 + "2" + "2"); // o/p : 122
// console.log(1 + +"2" + "2"); // 32
// console.log(1 + -"1" + "2"); // 02
// console.log(+"1" + "1" + "2"); // 112
// console.log("A" - "B" + "2"); // NaN2
// console.log("A" - "B" + 2); // NaN

// *******************************************

function foo(n) {
    if (n === 0) return;
    console.log(n);
    foo(n - 1);
    console.log(n);
}

foo(3);

//  o/p : 
// 3
// 2
// 1
// 1
// 2
// 3 
// *******************************************

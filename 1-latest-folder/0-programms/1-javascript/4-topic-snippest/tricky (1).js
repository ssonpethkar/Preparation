let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map((number) => number * 2);
// console.log(numbers);

console.log(numbers.reduce((total, num) => total + num));
// o/p : 30 

// ************************************************************************

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
// o/p : [1,2,3,4,5,6]

// ************************************************************************

const arr4 = [1, 2, 3];
const arr5 = [...arr4];

arr5.push(4);

console.log(arr4); // [1,2,3]
console.log(arr5); // [1,2,3,4,]

// *************************************************************************

const obj = { a: 1, b: 2, c: 3 };
const { a, b } = obj;
console.log(a, b);
// o/p : 1 2

// ************************************************************************

let x = 5;
{
  let x = 10;
  console.log(x);
}
console.log(x);

// o/p : 
// 10 
// 5

// ************************************************************************

console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);
console.log(null == undefined);

// ************************************************************************

let a1 = {};
let b1 = { key: "b1" };
let c1 = { key: "c1" };

a1[b1] = 123;
a1[c1] = 456;

console.log(a1[b1]);

// Explaination : 
// b1.toString(); // "[object Object]"
// c1.toString(); // "[object Object]"
// a1["[object Object]"] = 123;
// a1["[object Object]"] = 456; // This overwrites the previous value!

// console.log(a1[b1]);
// console.log(a1["[object Object]"]); // 456


// ************************************************************************

let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);

// o/p : new value another value new value

// ************************************************************************

const companies = [
    { id: "1", name: "Facebook" },
    { id: "2", name: "Apple" },
    { id: "3", name: "Google" },
  ];
  
companies.sort((a, b) => (a.name > b.name ? -1 : 1));
console.log(companies);

// ************************************************************************

console.log(typeof 42); // number
console.log(typeof "Hello"); // string
console.log(typeof true);  // boolean
console.log(typeof [1, 2, 3]); // object
console.log(typeof { name: "John", age: 25 }); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof function () {}); // function

// ************************************************************************


for (var i = 1; i <= 3; i++) {
    console.log(i);
    setTimeout(() => console.log(i), 1000);
  }
// Output: 4 4 4 (because of var scoping)

// Fix with let:
for (let i = 1; i <= 3; i++) {
  console.log("*************");
  console.log(i);
  setTimeout(() => console.log(i), 1000);
}
//   o/p : 1 2 3


// using immediately invoked function we can get correct o/p using var
for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
  


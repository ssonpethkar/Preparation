// // ###✅ 1. **Closure Example**
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}
const counter = outer();
counter(); // 1
counter(); // 2

// **Concept:** Closure captures `count` even after `outer()` has returned.



// // ###✅ 2. **Debounce Function**

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}


// **Use case:** Avoid excessive API calls or keypress events.



// // ###✅ 3. **Flatten Nested Array**

const arr1 = [1, [2, [3, [4]]]];
const flat = arr1.flat(Infinity);
console.log(flat); // [1, 2, 3, 4]




// // ###✅ 4. **Check if a String is a Palindrome**

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam")); // true




// // ###✅ 5. **Anagram Check**

function isAnagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(isAnagram("listen", "silent")); // true




// // ###✅ 6. **Find Duplicates in an Array**

const arr = [1, 2, 3, 2, 1];
const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log([...new Set(duplicates)]); // [2, 1]




// // ###✅ 7. **FizzBuzz (Classic)**

for(let i = 1; i <= 15; i++) {
  let output = '';
  if(i % 3 === 0) output += 'Fizz';
  if(i % 5 === 0) output += 'Buzz';
  console.log(output || i);
}




// // ###✅ 8. **Promise.all Example**

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [1, 2, 3]
});




// // ###✅ 9. **Shallow Copy vs Deep Copy**


const obj = { a: 1, b: { c: 2 } };
const shallow = { ...obj };
const deep = JSON.parse(JSON.stringify(obj));




// // ###✅ 10. **Currying Function**

function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}
console.log(sum(1)(2)(3)); // 6



// ### ✅ 11. **Recursive Factorial**


function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120




// ### ✅ 12. **Variable Hoisting**

console.log(a); // undefined
var a = 5;

function test() {
  console.log(b); // undefined
  var b = 10;
}

//  `var` is hoisted but not initialized. Let/const would throw an error instead.




// ### ✅ 13. **Type Coercion Quiz**

console.log(1 + "2"); // "12"
console.log("2" - 1); // 1
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0




// ### ✅ 14. **SetTimeout Inside Loop**


for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 4 4 4 (because of var scoping)
// Fix with let:
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 1 2 3




// ### ✅ 15. **Object Destructuring**

const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name); // Alice




// ### ✅ 16. **Swap Two Variables**


let a3 = 5, b3 = 10;
[a3, b3] = [b3, a3];
console.log(a3, b3); // 10 5




// ### ✅ 17. **Remove Falsy Values from Array**


const mixed = [0, "hello", false, "", 42, null];
const truthy = mixed.filter(Boolean);
console.log(truthy); // ["hello", 42]




// ### ✅ 18. **Get Unique Values from Array**


const nums = [1, 2, 2, 3, 4, 4];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4]




// ### ✅ 19. **Convert Array to Object**

const entries = [["name", "John"], ["age", 30]];
const obj1 = Object.fromEntries(entries);
console.log(obj1); // { name: 'John', age: 30 }




// ### ✅ 20. **Throttle Function (for scroll or resize events)**

function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}


// ✅ 30. Explain call, apply, bind
const obj3 = { name: "Alice" };
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

greet.call(obj3, "Hello");   // Hello, Alice
greet.apply(obj3, ["Hi"]);   // Hi, Alice
const bound = greet.bind(obj3);
bound("Hey");               // Hey, Alice


// check number is prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
  



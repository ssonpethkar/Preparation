// 1. sorting
// x – y sorts in ascending order, while y – x sorts in descending order.
// sort() compares elements and arranges them based on the provided function.
let a = [1,5,2,4,3];
a.sort((x,y)=> x-y); // accending 
console.log(a);

a.sort((x,y)=> y-x);
console.log(a);

// 2. max number and min 
// The spread operator …a passes array elements as arguments to Math.max or Math.min.
// Math.max finds the largest number; Math.min finds the smallest.
let x = [100, 56,77,39]
let max = Math.max(...x)
console.log(max);
let min = Math.min(...x)
console.log(min);


// 3. removing duplicates from an array
// Set stores unique values, and … creates a new array.
// Duplicates are automatically removed by the Set object.
let dupArr = [1,1,3,5,3,8,9]
let unique = [...new Set(dupArr)];
console.log(unique);


// 4. creating a new array after mapping
// map() applies a function (x ** 2) to each element.
// The result is a new array without modifying the original.
let n = [2, 5, 6]
let square = n.map((x)=> x**2);
console.log(n);
console.log(square);

// 5. createing new array after filtering
// filter() creates a new array with elements meeting the condition.
// Here, elements greater than 22 are included.
// map() created a new array with given result in true false
let filData = [23, 15, 16]
let newFilterData = filData.filter((x)=> x>22);
let mapdata = filData.map((x)=> x>22)
console.log(mapdata);
console.log(newFilterData);


// 6. find an element matching a condition
// find() stops and returns the first match it encounters.
// This is ideal when only one element is needed.
let f = [5, 10, 15, 20];
let found = f.find(x => x > 10);
console.log(found);

// 8. Find the Index of an Element Matching a Condition
// findIndex() returns the index of the first matching element.
// If no match is found, it returns -1.
let indexArr = ['apple', 'banana', 'orange', 'banana'];
let idx = indexArr.findIndex(x => x === 'banana');
console.log(idx);


// 9. sum of all elements in an array 
// reduce() accumulates values (total) while iterating through the array.
// 0 is the initial value of the accumulator.
let b = [3, 6, 9];
let sum = b.reduce((total, x) => total + x, 0);
console.log(sum);

// 10. reverse a string 
// split(”) converts the string into an array, reverse() reverses it, and join(”) creates the reversed string.
// Ideal for palindromes or reversing text.
let s = "hello";
let rev = s.split('').reverse().join('');
console.log(s.split(''));
console.log(s.split('').reverse());
console.log(rev);


// 12. Clone an Array
// The spread operator … copies all elements into a new array.
// Modifying the clone does not affect the original array.

let v = [1, 2, 3];
let clone = [...v];
console.log(clone);
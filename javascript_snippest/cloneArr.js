var arr = [7,5,4,5,6]
var newArr = [...arr] // creates a shallow copy
var newArr1 = arr  // creates refrenceto to the same array

console.log(newArr);
console.log(newArr1);

// newArr is a new array with the same elements — changes to newArr won't affect arr.
// newArr1 is just another name for the original array — changes to newArr1 will also affect arr.

// note :
// The spread operator … copies all elements into a new array.
// Modifying the clone does not affect the original array.
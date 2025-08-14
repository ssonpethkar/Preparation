// 1. Sorting an Array (in-built function)
let arr = [2,4,5,3,2,3]

let ascOrder = arr.sort((a,b)=>a-b);
console.log("Ascending Order : "+ascOrder);

let descOrder = arr.sort((a,b)=> b-a);
console.log("Descending Order"+descOrder);

// without inbuilt function 


const fruits = ["banana", "apple","apqa", "Orange", "grape", "kiwi"];
console.log([...fruits].sort()); 
// o/p : [ 'Orange', 'apple', 'banana', 'grape', 'kiwi' ]


console.log([...fruits].sort().reverse()); 
// o/p : [ 'kiwi', 'grape', 'banana', 'apple', 'Orange' ]


// Task 1: Sort the array of fruits in alphabetical order (default behavior)
// Task 2: Sort the array of fruits in descending alphabetical order
// Task 3: Sort the array of fruits based on the length of the fruit names in ascending order
// Task 4: Sort the array of fruits in ascending order by the second character of each fruit name
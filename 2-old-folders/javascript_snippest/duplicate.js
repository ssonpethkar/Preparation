// 4. Removing Duplicates from an Array
let arr = [2,4,5,3,2,2,3]

let duplicateElements = [...new Set(arr)]
console.log("After removing duplicates : "+duplicateElements);

// find duplicates number from an array 

let duplicates = arr.filter((item, index)=> arr.indexOf(item) !== index)
console.log("Finding duplicates : ",duplicates); // o/p : [ 2, 2, 3 ]

// for unique duplicates we are using set 
let uniqueDuplicates = [... new Set(duplicates)];
console.log("Unique Duplicates : "+uniqueDuplicates); // concat using + gives string
console.log("Unique Elements : ",uniqueDuplicates); // concat using , give in []

// o/p : 
// After removing duplicates : 2,4,5,3
// Finding duplicates :  [ 2, 2, 3 ]
// Unique Duplicates : 2,3
// Unique Elements :  [ 2, 3 ]  
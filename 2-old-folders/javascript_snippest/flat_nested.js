var a = [1,2,3,[3,4],[5,6,[6,7]]];
var flatenArr = a.flat(Infinity);
console.log(flatenArr);

// o/p : [  1, 2, 3, 3, 4, 5, 6, 6, 7]

var flatenArr1 = a.flat();
console.log(flatenArr1);

// if removes infinity we get bellow o/p
// o/p : [ 1, 2, 3, 3, 4, 5, 6, [ 6, 7 ] ] 

// flat(Infinity) flattens all nested levels into one.
// Infinity ensures deeply nested arrays are fully flattened.


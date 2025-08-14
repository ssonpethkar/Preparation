var arr = ['apple', 'banana', 'grapes'];

var matchIndex = arr.findIndex(x=> x === 'grapesss');
console.log("Matching index : ",matchIndex);

// findIndex() returns the index of the first matching element.
// If no match is found, it returns -1.

var matchFind = arr.find(x => x == 'grapes')
console.log("Matching value : ",matchFind);

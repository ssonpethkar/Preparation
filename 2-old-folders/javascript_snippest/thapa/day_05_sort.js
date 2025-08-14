//  sort an array 

const sortAscending = (arr) => {
    // return arr.sort() // converts it into string so traat 10 as 1 and given o/p : [ 10, 3, 5, 7 ]
    // return arr.sort((a,b) => a- b) // ascending o/p : [ 3, 5, 7, 10 ]
    return arr.sort((a,b) => b- a) // descending o/p : [ 10, 7, 5, 3 ]
}

console.log(sortAscending([5,7,3,10]));


// set is used to remove duplicates from array
const sortAscendingRemove = (arr) => {
    return [...new Set(arr)].sort((a, b) => a - b);
};

console.log(sortAscendingRemove([5, 7, 3, 10, 3, 5, 7]));



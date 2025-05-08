var arr = [1,3,5,4,6]

// use map : Transform elements of an array into a new one.
let squareNumber = arr.map(a => a ** 2)
console.log("Square number using map",squareNumber);


// use filter : Filter elements based on a specific condition.
let filteredElement = arr.filter(a => a > 3)
console.log("Filtered element using filter",filteredElement);

// use reduce : Combine array elements into a single value
let sum = arr.reduce((accumulator, currentValue)=> accumulator+ currentValue, 0)
console.log("Sum of all elements using reduce",sum);



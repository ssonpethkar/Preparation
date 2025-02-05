// 1. Find the Maximum Value in an Array

// With Built-in Function:

let numbers = [15, 22, 8, 19, 31, 6];

let maxValue = Math.max(...numbers);

console.log("Maximum value:", maxValue); // Output: 31
// Without Built-in Function:

let numbers = [15, 22, 8, 19, 31, 6];

let maxValue = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log("Maximum value:", maxValue); // Output: 31


// ************************************************************************************
// 2. Reverse a String

// With Built-in Function:

let string = "Interview";

let reversedString = string.split('').reverse().join('');

console.log("Reversed string:", reversedString); // Output: weivretnI
// Without Built-in Function:

let string = "Interview";
let reversedString = '';

for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
}

console.log("Reversed string:", reversedString); // Output: weivretnI


// ************************************************************************************
// 3. Find the Frequency of Each Element in an Array

// With Built-in Function:

let letters = ["a", "b", "a", "c", "b", "a"];

let frequency = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
}, {});

console.log(frequency);
// Output: { a: 3, b: 2, c: 1 }
// Without Built-in Function:

let letters = ["a", "b", "a", "c", "b", "a"];
let frequency = {};

for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}

console.log(frequency);
// Output: { a: 3, b: 2, c: 1 }


// ************************************************************************************
// 4. Check if an Array Contains a Specific Value

// With Built-in Function:

let fruits = ["apple", "banana", "cherry", "date"];
let search = "cherry";

let containsValue = fruits.includes(search);

console.log(containsValue); // Output: true
// Without Built-in Function:

let fruits = ["apple", "banana", "cherry", "date"];
let search = "cherry";
let containsValue = false;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === search) {
        containsValue = true;
        break;
    }
}

console.log(containsValue); // Output: true


// ************************************************************************************
// 5. Sort an Array in Ascending Order

// With Built-in Function:

let numbers = [3, 1, 4, 1, 5, 9, 2, 6];

numbers.sort((a, b) => a - b);

console.log(numbers);
// Output: [1, 1, 2, 3, 4, 5, 6, 9]


// Without Built-in Function:
let numbers = [3, 1, 4, 1, 5, 9, 2, 6];

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            // Swap the elements
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log(numbers);
// Output: [1, 1, 2, 3, 4, 5, 6, 9]



// ************************************************************************************
// 6. Capitalize the First Letter of Each Word in a String

// With Built-in Function:

let string = "this is a test sentence.";

let capitalizedString = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log("Result:", capitalizedString); // Output: This Is A Test Sentence.
// Without Built-in Function:

let string = "this is a test sentence.";
let capitalizedString = '';
let words = string.split(' ');

for (let i = 0; i < words.length; i++) {
    capitalizedString += words[i][0].toUpperCase() + words[i].slice(1) + ' ';
}

capitalizedString = capitalizedString.trim();

console.log("Result:", capitalizedString); // Output: This Is A Test Sentence.


// ************************************************************************************
// 7. Merge Two Arrays and Remove Duplicates

// With Built-in Function:

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

let mergedArray = [...new Set([...array1, ...array2])];

console.log(mergedArray); 
// Output: [1, 2, 3, 4, 5, 6]


// Without Built-in Function:

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let mergedArray = [];

for (let i = 0; i < array1.length; i++) {
    if (mergedArray.indexOf(array1[i]) === -1) {
        mergedArray.push(array1[i]);
    }
}

for (let i = 0; i < array2.length; i++) {
    if (mergedArray.indexOf(array2[i]) === -1) {
        mergedArray.push(array2[i]);
    }
}

console.log(mergedArray); 
// Output: [1, 2, 3, 4, 5, 6]


// ************************************************************************************
// 8. Find the Position of a Value in an Array

// With Built-in Function:
let array = [10, 20, 30, 40, 50];
let search = 40;
let position = array.indexOf(search);
console.log("Position:", position); // Output: 3


// Without Built-in Function:
let array = [10, 20, 30, 40, 50];
let search = 40;
let position = -1;

for (let i = 0; i < array.length; i++) {
    if (array[i] === search) {
        position = i;
        break;
    }
}

console.log("Position:", position); // Output: 3
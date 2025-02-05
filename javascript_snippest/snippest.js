
// **************************************************************************
// 1. Find the Second Largest Number in an Array

// With Built-in Function:

let numbers = [10, 5, 8, 20, 15];

let secondLargest = numbers.sort((a, b) => b - a)[1];

console.log("Second Largest:", secondLargest); // Output: 15
// Without Built-in Function:

let numbers = [10, 5, 8, 20, 15];

let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        secondMax = max;
        max = numbers[i];
    } else if (numbers[i] > secondMax && numbers[i] !== max) {
        secondMax = numbers[i];
    }
}

console.log("Second Largest:", secondMax); // Output: 15

// **************************************************************************
// 2. Check for a Palindrome

// With Built-in Function:

let str = "racecar";

let isPalindrome = str === str.split('').reverse().join('');

console.log("Is Palindrome:", isPalindrome); // Output: true
// Without Built-in Function:

let str = "racecar";
let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log("Is Palindrome:", isPalindrome); // Output: true


// **************************************************************************
// 3. Flatten a Nested Array

// With Built-in Function:

let nestedArray = [1, [2, 3], [4, [5, 6]]];

let flattenedArray = nestedArray.flat(Infinity);

console.log("Flattened Array:", flattenedArray); 
// Output: [1, 2, 3, 4, 5, 6]
// Without Built-in Function:

let nestedArray = [1, [2, 3], [4, [5, 6]]];

function flatten(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = result.concat(flatten(array[i]));
        } else {
            result.push(array[i]);
        }
    }
    return result;
}

let flattenedArray = flatten(nestedArray);

console.log("Flattened Array:", flattenedArray); 
// Output: [1, 2, 3, 4, 5, 6]


// **************************************************************************
// 4. Remove Duplicates from an Array

// With Built-in Function:

let array = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray = [...new Set(array)];

console.log("Unique Array:", uniqueArray); 
// Output: [1, 2, 3, 4, 5]
// Without Built-in Function:

let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [];

for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
    }
}

console.log("Unique Array:", uniqueArray); 
// Output: [1, 2, 3, 4, 5]


// **************************************************************************
// 5. Find the Intersection of Two Arrays

// With Built-in Function:

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

let intersection = array1.filter(value => array2.includes(value));

console.log("Intersection:", intersection); 
// Output: [3, 4]
// Without Built-in Function:

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let intersection = [];

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
            intersection.push(array1[i]);
            break;
        }
    }
}

console.log("Intersection:", intersection); 
// Output: [3, 4]


// **************************************************************************
// 6. Fibonacci Sequence

// With Built-in Function:

let n = 7;
let fibonacci = [0, 1];

for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

console.log("Fibonacci Sequence:", fibonacci); 
// Output: [0, 1, 1, 2, 3, 5, 8]
// Without Built-in Function:

let n = 7;
let fibonacci = [0, 1];

for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Fibonacci Sequence:", fibonacci); 
// Output: [0, 1, 1, 2, 3, 5, 8]


// **************************************************************************
// 7. Check if Two Strings are Anagrams

// With Built-in Function:

let str1 = "listen";
let str2 = "silent";

let isAnagram = str1.split('').sort().join('') === str2.split('').sort().join('');

console.log("Are Anagrams:", isAnagram); // Output: true
// Without Built-in Function:

let str1 = "listen";
let str2 = "silent";

function sortString(str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join('');
}

let isAnagram = sortString(str1) === sortString(str2);

console.log("Are Anagrams:", isAnagram); // Output: true



// **************************************************************************
// 8. Sum of All Numbers in an Array

// With Built-in Function:

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Sum:", sum); // Output: 15
// Without Built-in Function:

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum:", sum); // Output: 15


// **************************************************************************
// 9. Rotate an Array by k Positions

// With Built-in Function:

let array = [1, 2, 3, 4, 5];
let k = 2;

let rotatedArray = array.slice(-k).concat(array.slice(0, -k));

console.log("Rotated Array:", rotatedArray); 
// Output: [4, 5, 1, 2, 3]
// Without Built-in Function:

let array = [1, 2, 3, 4, 5];
let k = 2;

for (let i = 0; i < k; i++) {
    let lastElement = array.pop();
    array.unshift(lastElement);
}

console.log("Rotated Array:", array); 
// Output: [4, 5, 1, 2, 3]


// **************************************************************************
// 10. Find the First Non-Repeating Character in a String

// With Built-in Function:
let string = "swiss";

let firstNonRepeatingChar = string.split('').find(char => string.indexOf(char) === string.lastIndexOf(char));

console.log("First Non-Repeating Character:", firstNonRepeatingChar); 
// Output: "w"


// Without Built-in Function:

let string = "swiss";
let firstNonRepeatingChar = null;

for (let i = 0; i < string.length; i++) {
    let isNonRepeating = true;
    for (let j = 0; j < string.length; j++) {
        if (i !== j && string[i] === string[j]) {
            isNonRepeating = false;
            break;
        }
    }
    if (isNonRepeating) {
        firstNonRepeatingChar = string[i];
        break;
    }
}

console.log("First Non-Repeating Character:", firstNonRepeatingChar); 
// Output: "w"




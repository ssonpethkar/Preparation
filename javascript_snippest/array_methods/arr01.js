// 1. find largest number in an array 

// with in built function
let arr = [12,34,32,11,20]
let maxValue = Math.max(...arr)
console.log("Largest number with inbuilt function is "+ maxValue);

// withput inbuilt function
let arr1 = [12,32,11,20,34]
let maxval = arr1[0]

for ( i= 1; i<arr1.length; i++){
    // console.log(arr1[i]);
    // console.log(maxval);
    
    if (arr1[i] > maxval) {
        maxval = arr1[i]
    }
    // console.log(maxval);
    
}
console.log("Largest number without inbuilt function is"+ maxval);

// # 2.  find smallest number in an array
// with in built function

let arr2 = [12,34,32,11,20]
let minVal = Math.min(...arr2)
console.log("Smallest number with inbuilt function is "+ minVal);

// without inbuilt function 
let minValue = arr2[0]

for (i =0; i<arr2.length; i++){
    if(arr2[i]< minValue){
        minValue = arr2[i]
    }
}
console.log("Smallest Number without inbuilt finction is "+ minValue);

// 3. Reverse string 

// with built in 
let str1 = "Hello World"
let reverseString = str1.split("").reverse().join("")
console.log("Reverse string using built in function" + reverseString);

//  without in built function
let reversedString1 = ""
for (let i  = str1.length-1; i>=0; i--) {
    reversedString1 += str1[i]
}
console.log("Reverse string without ibuilt function"+ reversedString1);

// 4. find duplicate in array
// with inbuilt function

let arr3 = [12,34,32,32,11,11,20]
let duplicate = arr3.filter((item, index) => arr3.indexOf(item) !== index)
console.log("Duplicate number with inbuilt function is "+ duplicate);

// without inbuilt function
let duplicate1 = []

for (let i = 0; i < arr3.length; i++) {
    for (let j = i + 1; j < arr3.length; j++) {
        if (arr3[i] == arr3[j]) {
            duplicate1.push(arr3[i])
        }
    }
}
console.log("Duplicate number without inbuilt function is "+ duplicate1);

// 5. find duplicate in string

// with inbuilt function
let str2 = "Hello World"
// let duplicate2 = [...str2].filter((item, index) => str2.indexOf(item) !== index)
let duplicate2 = [...str2].filter((item, index) => str2.indexOf(item) !== index)
console.log(duplicate2);
// console.log(...str2);
// console.log([..."Hello World"]); // ['H', 'e', 'l', 'l',  'o', ' ', 'W', 'o','r', 'l', 'd']
// console.log(..."Hello World"); // H e l l o   W o r l d


// without inbuilt function
let duplicate3 = []
for (let i = 0; i < str2.length; i++) {
    for (let j = i + 1; j < str2.length; j++) {
        if (str2[i] == str2[j]) {
            duplicate3.push(str2[i])
        }
    }
}
console.log(duplicate3);

// 
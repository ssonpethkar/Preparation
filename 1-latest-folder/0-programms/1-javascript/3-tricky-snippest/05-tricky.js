console.log(3+ true);  // true = 1 and false = 0
// o/p : 4

console.log(3 ** 2); // treat as 3 square so o/p : 9
console.log(2**4); // treat as  2 rest to 4 so o/p : 16

function show() {
    {
        var a = 10;
        var b = 8;
    }
    console.log(a,b); 
}

// o/p : 10,8

function show1() {
    {
        let a = 10;
        let b = 8;
    }
    console.log(a,b); 
}
//  o/P : referrence error because we use let keyword
// so let is blocked scope

function show2() {
    (function () {
        var a = 10;
        var b = 8;
    })();
    console.log(a,b); 
}
// show2()
// o/P : referrence error. we use var varible but IIFE function


// var a=10;
// let b=5;
// function show() {
// 	var c = 15;
// 	let d = 20;
//     {
//         let e = 10;
//         let f = 8;
//     }
//     console.log(a,b,c,d,e,f); // o/p : referrence error e is not defined 
// }
// show();
// console.log(a,b,c,d,e,f); // not executed because above console given referrence error 

// character count

let str = "hare hare hare krishna hare raam"

let obj = {}

for (const x of str) {
    if (obj[x]) {
        obj[x] += 1;        
    } else {
        obj[x] = 1;
    }
}

// console.log(obj);
// o/p : { h: 5, a: 7, r: 6, e: 4, ' ': 5, k: 1, i: 1, s: 1, n: 1, m: 1 }


// add param required ES6 feature
function checkParam() {
    throw new Error("Param required");
    
}

function paramReq(name = checkParam()) {
    console.log(name);  
}

// paramReq()
// o/p : Error: Param required


console.log(4+"3"); // o/p : 43
console.log(4 + + "3"); // o/p : 7
console.log(typeof (4 + + "3")); // o/p : 7
console.log((5 + 4 -"3")); // o/p : 6 (9-3)
console.log(5 + "4" - 3); // o/p : 51 (54-3)
console.log(5 - -"3"); // o/p : 8 ( - - : it gives addition and converts string to number)
console.log("5" - -3); // o/p : 8

console.log(..."Hello");
// o/p : H e l l o

console.log(...new Set("hello")); // set used to remove duplicates
// o/p : h e l o


setTimeout(() => {
    console.log("hello after 1000");
}, 1000)

const intervalTime = setInterval(() => {
    console.log("every 2000");
    clearInterval(intervalTime);
},2000)


function abc(a,b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
    return rest;
}

console.log(abc(10, 1, 2, 3, 4, 5)); 


function abc1(a, b, c) {
    console.log("Spread operator");
    console.log(a);
    console.log(b);
    console.log(c);
    return a + b + c;
}
    
console.log(abc1(...[1, 2, 3])); 



function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  greet("Alice", () => console.log("Good morning!"));
  



console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 0);

console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
for (let index = 0; index < 10; index++) {
    // const element = array[index];
    console.log("End "+index);
    
}


console.log( 3+2+"7" ); // o/p : 57 


console.log(false == []);
// false == ""  ( converts into string)
// 0 == 0  
// o/p : true 

console.log(false == ![]);
// false == false ([] is truthy value)
// o/p : true 


const arr = [1,2 ,4 ]
arr[10] = 28
console.log(arr);
// o/p : [ 1, 2, 4, <7 empty items>, 28 ]


const student = {
    name : "Swati",
    course : {
        math : {
            grade : "A"
        }
    }
}
// console.log(student.course.history.grade);
// o/p : TypeError: Cannot read properties of undefined (reading 'grade')

console.log(student.course.history?.grade);
// o/p : undefined ( using optional chaining we handle error of undefined)



{
    let a = 10;
    let b = 20; 

    console.log(a);
    console.log(b); 
}

console.log(a);
console.log(b);

// o/p : 
// 10
// 20
//  Error : console.log(a); on line number 206
// ReferenceError: a is not defined
console.log(a);
var a = 9 

// o/p : undefined 

// console.log(b);
// let b = 20
// // o/p : reference error : Cannot access 'b' before initialization


// shadowing 
var x = 30 ; 
function foo() {
    console.log(x);
    var x = 20; // o/p : undefined
    // x = 10      // o/p : 30
}

foo()
// o/p : undefined 

// memory creation phase 
// code execution  phase 

// foo1()
// var foo1 = 20;
// function foo1() {
//     console.log("calling");
    
// }
// foo1()
// // o/p : calling
// // D:\Preparation\javascript_snippest\tricky_most_asked\tricky_02.js:31
// // foo1()
// // ^
// // TypeError: foo1 is not a function


function outer() {
    function inner() {
        console.log(x);
        
    }
    const x = 20;
    return inner;
}
const inner = outer()
inner()
// o/p : 20


function fetchData(callback) {
    setTimeout(() => {
        console.log("In FetchData");
    //   callback("Data loaded");
      console.log("after callback FetchData");
    }, 1000);

    callback("Data loaded");

  }
  
  fetchData((message) => {
    console.log(message); // Output: Data loaded
  });


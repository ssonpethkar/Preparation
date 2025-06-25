What is Ecmascript in Javascript
● What is difference between let ,cons and var
    - var : var is global scoped, it can be redeclared and reassigned
    - let : let is function scoped , it can be reassigned only , can't  be redecalred
    - const : const is blocked scoped, it can't be reassigned and redeclared

● what is hoisting 
    - hoisting is javascript behaviour of moving values and functions to the top of the code before execution.

● What is spread operator, Rest operator , default parameter
    - spread operator is used to unpack elements from the array or object
    - Rest operatoe is used to collect the remaining element from array or object 
    - default parameter allows functions to have default values if no arguments are passed 

● What is deep copy and shallow copy in Javascript
    - deep copy - Creates a new clone, including all nested structures
    - Shallow copy - Copies only the first level. Nested objects still refer to the same memory 

● What is promise , callback function , async await in in Javascript
    - Callback function 
        - is a function that can passed argument as a function to another function. It is executed after the completion of that function .
        - callback can lead to callback hell if nested too deeply
        - callback used for  Compatibility with older JS code or libraries

    - Promise : 
        - a promise is an object representing the eventual completion or failure of an aynchronous operation 
        There are 3 states : 
            pending 
            resolved 
            rejected 
        - promises help avoid callback hell by chanining .then and .catch 
        - promises used when Multiple async tasks in sequence or parallel
        
    - aync/await : 
        - async/await is a synthetic sugar over promises. IT makes asynchronous code look like synchronous code which improves readability 
        - await only works inside a async function 
        - aync/await is used Simple, synchronous-like flow



● What is difference between promise and callback in Javascript
    Promises - 
        - an object that representing the eventual completion or failure of an aynchronous operation 
        - object based with .then and .catch 
        - No need to handles error manually 

    Callback - 
        - callback is a function that can passed function as an argument to another function. It is executed after the completion of that function 
        - it is function based 
        - need to handles error manually 
 
    - ✅ Use Promises (or async/await) for modern, cleaner async code.
    - ⚠️ Use callbacks when dealing with legacy code or simple event handlers.

● What is event delegation , event loop 
    Event delegation : 
        
        - Event delegation is a technique where you attach single event listener on parent function instead of attaching on every child functions 

    Event loop : 
        - javascript is a single threded language 
        - event loop is what allow to javascript to handle asynchronous operations like setTimeout, promises, or DOM events without blocking the thread. 


● What is event bubbling and event capturing in Javascript
    Event bubbling : 
        The event start from its child element then bubbles up to its parent element 
        Event buddling is a default behavior ( eg. delegation)
    Event Capturing : 
        The event start from parent element and then travels down to child element
        Event capturing is rarely use ( eg. interception)

● What is higher order function in Javascript
    - higher order function is a function that can passed argument as a function in another function and returns new function with additional features.

● Explain different-2 types of function in Javascript
    - function expression : 
        - A function stored a variable or constant , but not hoisted
    - function declaration (also called named function)
        - A named function that is hoisted but called before its defination
    - anonymous function 
        - the function without name , usually used a callback  
    - Immediately invoked function expression (IIFE)
        - a function that runs immediately after defination 
        - a self executing function , used to create a private scope
    - aync function 
        - async function that simplifies working with promises
        - a function that returns a promise and allow use of await
    - arrow functions 
        - a shorter function syntax with no own this, argument or super 
    - constructor function 
    - generator function 

● What is arrow function in Javascript
    - A arrow function is a shorter way to write a function in javascript , introduced in ES 6 features. 
    - it is oftened to used for simple and concise function expressions 

● Why we use call, apply bind method in Javascript
    - call :
        calls a function immediately with specific this and individual arguments 
    - apply :
        same as call but argument passed in array 
    - bind :
        Return a new function with this permanently bound to a specific object- useful for later use.

● How many way to create object in Javascript
    - 1. Object Literal (most common way)
    - 2. Using new Object()
    - 3. Constructor Function
    - 4. Object.create()
    - 5. Using ES6 class

What is prototype inheritance in Javascript
● What is typescript

● What are the array method , string method
    - array methods : 
        - pop, push, shif, unshift, map, filter, reduce , join , concat
    - string methods : 
        - reverse, indexOf, lastIndexOf, includes, startsWith, endsWith, replace, toUpperCase, toLowerCase

● What is difference between java and javascript
● What is throttling and debouncing in js
    Debouncing : 
        Debouncing ensures that a function runs only once after certain periods of inactivity 
        Debouncing is a method whenever stop the triggeing the event then after that its run 
    Throttling :
        Throttling ensures that a function is called at most once on every x miliseconds, no matter how often the event is triggered.
        Throttling works after some time duration its run continuously no matter how much time it is triggering


● What is Null and undefined in javascript
    null means the variable is declared with no value or empty value has passed.
    undefined is variable is declared but value is not assigned yet

● What are the falsy values in javascript
     false ,0 ,-0 , null, undefined , NaN

What are the truthy values in javascript
    true, 1 , [],{},""

● What is execution context, event loop ,stack, call queue,microtask queue in Javascript
● What is setTimeOut and setInterval in Javascript
    - setTimeout executes only once after the specific time delay 
    - for clearing events use clearTimeout 
    - setInterval executes repetedly after the given time delay 
    - for clearing interval it uses clearInterval method 

● What is object.seal and object.freeze in Javascript
    - Object.seal() – Partially locks an object : 
        - object.seal prevents adding or removing properties, but allows modifying existing values 
    
    - Object.freeze() – Fully locks an object : 
        - object.freeze makes an object completely immutable - no changes at all 

● What is difference between map and set in Javascript

| Feature           | **Map**                                   | **Set**                                  |
| ----------------- | ----------------------------------------- | ---------------------------------------- |
| Purpose           | Stores **key-value pairs**                | Stores **unique values** (no duplicates) |
| Key Type          | Any type (objects, functions, primitives) | Only stores **values**, no keys          |
| Value Type        | Any type                                  | Any type                                 |
| Order             | Maintains insertion order                 | Maintains insertion order                |
| Duplicate entries | Keys must be unique                       | Values must be unique                    |
| Iteration         | Iterates over `[key, value]` pairs        | Iterates over **values only**            |
| Use Case          | When you need key-value mapping           | When you need a list of unique items     |

● What is Weakmap and Weakset in Javascript
● What is sessionStorage, localStorage , cookie,
● Write a program to sort an array
● What is use of json.stringify and json parse() method in Javascript

● What are is map, filter , reducer in javascript
    - All three methods are non-mutating – they do not change the original array.
    map : 
        map is used to transform each element from the array and its return with new array 
    filter : 
        filter is used to filter elements in an array based on a condition and return a new array of elements that passed the condition 
    reduce : 
        reduce is used to reduce all elements of an array with single value 
    
● What is generator function in Javascript

● How to stop event propagation in Javascript
    using e.stopPropogation 

● What is closure in Javascript
    - Closure is a function that the variable of outer function is accessible in inner function even after the outer function has finished the execution 

● What is dead zone in Javascript
● What is function currying in Javascript
    - Currying is a technique of transforming a function that takes multiple arguments into a sequence of function that take one argument. 

● What is mutation observer in Javascript
● What is memorization in javascript

● difference between splice and slice 

| Feature                      | `splice()`                       | `slice()`                              |
| ---------------------------- | -------------------------------- | -------------------------------------- |
| **Modifies original array?** | ✅ Yes (mutates the array)        | ❌ No (returns a new array)             |
| **Purpose**                  | Add/remove items in an array     | Extract a portion of the array         |
| **Returns**                  | Removed elements as a new array  | A new array with selected items        |
| **Common Use**               | In-place insert, delete, replace | Copying or extracting part of an array |



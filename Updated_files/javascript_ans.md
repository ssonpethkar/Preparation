
## 🔥 # *# *Most Important JavaScript Interview Questions# *# *

1. 🔥 What is the difference between `==` and `===`?
    - == : 
        - it is loose equality
        - its compares only value not a type after coercion
    - === : 
        - It is strictly equality  
        - its compares value and type of variable

2. 🔥 What is hoisting in JavaScript?
    - Hoisting is a JS default behavior of moving values and variables to the top of the code before execution 
    - Variables are declared with var are hoisted and initialized with undefined
    - let and const are hoisted but not initialized , leading to temporal dead zone 
    - functions declared using functions are fully hoisted 


3. 🔥 What is a closure in JavaScript?
    - Closure is a javascript function that the inner function still get accessed of outer function varible if the outer function has finished excuting. 
    - Closure is a javascript function that remembers variables from its outer score, even after that outer function has finished executing.

4. 🔥 What is the difference between `var`, `let`, and `const`?
    var : 
        - var is global scoped
        - variable declaration with var can be redeclared and reassigned 
        - it is hoisted but initialized with undefined

    let :
        - let is function scoped
        - variable declaration with let can be reassigned but can't be redeclared
        - it is hoisted but not initialized ( in temporal dead zone)
    const :
        - const is blocked scoped
        - variable declaration with const can't be redeclared and reassigned.
        - must be initialized at the time of declaration 

5. 🔥 What is the event loop in JavaScript?
    - Event loop is a mechanism that handles aynchronous operation like setTimeout , promises etc. 
    - it runs in a single threaded enviornment and works with 
        - callstack
        - web APIs
        - callback queue 
        - Microtask queue
    - Call Stack empty → Check Microtask Queue → Check Callback Queue → Repeat


---

## 📚 # *# *Topic-wise JavaScript Interview Questions# *# *

### 🧠 JavaScript Basics

# * What is JavaScript?
    
    - javascript is a scripting language used to create dynamic content for website. It is lightweight, cross-platform and single threaded programming laguage. by default javascript executes code synchronously but it can handle aynchronous operation using callback, promise, and aync/await 
    - features : 
        - event driven 
        - dynamically typed
        - client side scripting 
        - object oriented and functional 
        - aynchronous scripting


# * What are the different data types in JavaScript?
    there are two types of data types 
        1. primitive datatyes : string, number, null, boolean, bigInt , undefined, symbol 
        2. non-primitive datatypes : array, object , function

# * What is the difference between `null` and `undefined`?
    - null : 
        - explicitly assigned a value by the programmer to indicate no value or empty
        - null means value is assigned 
    - undefined : 
        - automatically assiged by javascript 
            - when variable is declared but not assigned 
            - a function does not return value
        - variable is declared but value is not assigned yet


# * What is the use of `typeof` operator?
    - typeOf operator is used to determine the datatype 

# * What is NaN and how can you check for it? 
    - NaN stands for not a number
    - NaN appears when you perform a mathematical operation that doesn't make sense 
    

# * What are truthy and falsy values in JavaScript?


---

### 🔁 Variables and Scope

# * What are `var`, `let`, and `const`? How do they differ?
    - var : 
        - var is global scoped
        - In var, it can be redeclared and reassigned variable
        - variable is hoiseted and initialized as undefined 
    - let 
        - let is function scoped 
        - can't be redeclared but can assigned 
        - variable is hoisted but not initialized 
    - const 
        - const is blocked scoped 
        - can't be redeclared and reassigned 
        - must be initialized at the time of declarations

# * What is hoisting in JavaScript?
    - hoisting is javascript befault behaviour of moving variables and functions are moved to the top of code before execution
    - variables are declared with var is hoisted and initialized with undefined 
    - variabled declared with let and const are not initialized , its leading to temporal dead zone
    - functions are fully declared 

# * What is scope in JavaScript?
    - scope determines where in your code you can access (read/write) variables.
    - There are 3 types of scoped 
        1. global scoped
            - In global scoped, variable declared outside any function or block 
            - accessible everywhere in code
        2. function scoped 
            - variable declared with var inside a function are accessible only within that function 
        
        3. block scoped 
            - variables declared with let and const are limited to the block ({}) where they are defined 

# * What is lexical scope?
    - Lexical scope means javascript determines variable scope based on where functions or blocks are written in code, not where they are called.

---

### 🧩 Functions

# * What is a function in JavaScript?
    - A function is a reuable block of code designed to perform a specific task. it runs only when it is called/invoked.

# * What is a callback function?
    - A callback function is a function that can passed as an argument to another function and is executed later( after some event or task)
    - used often in aynchrnous operation like setTimeout, event listeners or API calls.

# * What is an arrow function?
    - Arrow function is a shorter way to write function which are introduced in ES6.
    - 
# * What is the difference between function declaration and function expression?
    - Function declaration : 
        - function greet(){}
        - it is hoisted can be used before declartion
        - must have name
        - Not stored in variable

    - Function Expression :
        - const num = function (){} 
        - it is not hoisted must be declared 
        - can be anonymous or name
        - Assigned to a variable

# * What are higher-order functions?
    - HIgher order function is a function that can passed as an argument to another function or return new function as a result
    - higher order function are map, filter, reduce, setInterval, setTimeout

# * What are IIFEs (Immediately Invoked Function Expressions)?
    - A iife is a function that runs immediately after it is defined.


# * What is a closure in JavaScript?
    - closure is a function that can accessed outer function variable to its inner functions after the outer function execution has finished.
    
# What is function currying? 
    - Currying breaks down a function that takes multiple parameter into a chain function that each take one parameter 

# Pure functions : 
    - A pure functions return the same output given the same input and has no side effects

# Memoization 
    - Memoization is a optimization technique to cache the  results of expensive function calls 
    
### ⏱️ Asynchronous JavaScript

# * What is the event loop in JavaScript?
    - event loop is a mechanisum to handle code asynchronously like setTimeout, promises
    - it runs in a single threaded enviornment and works with 
        - call stack 
        - web APIs
        - callback queue 
        - microtask queue 
    - it follows flow like 
        - when call stack empty then check micostask queue then check callback queue and repeat   

# * What is the difference between synchronous and asynchronous JavaScript?   
    - javascript is a single threaded language which means it can only execute the one task at a time.

    - Synchronous : 
        - code executed line by line if one of the code execution taking time then it waits to execute and block it till execution

    - Asynchronous : 
        - non blocking execution 
        - to use javascript as asynchronous then use callback, promise or asyn/await
        - 
# * What is `setTimeout` and `setInterval`?
    - setTimeout : 
        - setTimeout is a in built  function that executes a function once after a specified delay
        - setTimeout(callback, delay);
        - to clear event used clearTimeout(timerId)

    - setInterval : 
        - setInterval is used to repeatedly execute a function at fixed time intervals 
        - setInterval(callback, interval);
        - to clear event used clearInterval(timerId)

# * How do JavaScript timers (`setTimeout`, `setInterval`) work internally?
    - javascript is single threaded, it handles timers using the event loop and web API's 
    - step by step process : 
        - The timer is set using setTimeout or setInterval
        - the timer is handled by the browser's Web API, not the main JS thread
        - After timers ends, the callback is placed in the callback queue. 
        - the event loop is checks if the stack is empty
        - if yes, the callback is pushed to the call stack and executed.

# * What is a promise in JavaScript?
    - A promise is an object in javascript that represents a future result of an asynchronous operation 
    - It has 3 possible states : 
        - fulfilled/resolved : The operation completed successfully
        - rejected : the operation failed
        - pending :  The operation is still ongoing

# * What is async/await in JavaScript?
    - async/await is a synthetic sugar that allow to handle asynchronous code and behave like synchronous code
    - it is used with promises to simplify handling asynchronus operations
    - async function : 
        - declares that function will return a promise 
        - automatically wraps return values in a promise 
    - await keyword : 
        - can only be used inside async functio 
        - pause the function until the promise is resolved or rejected 
    `Ex :`
        async function fetchData() {
          let response = await fetch("https://api.example.com");
          let data = await response.json();
          console.log(data);
        }


# * How does `async`/`await` handle errors?
    - using try catch

---

### 🛠️ Arrays and Objects

# * What are `map()`, `filter()`, and `reduce()` methods in arrays?
    - map : map is higher order function and introduce in ES6. it is used to transform each element and return a new array 
    - filter : it is used to iterate for a specific conditions only and returns a new array 
    - reduce : it is used to return a single value 

    - map - map is method that creates a new array by applying a function on each element of the original array
    - filter ; filter is method that creates a new array containing only the element that pass a test
    - reduce : reduce method applies a function to accumulate array values into a single result 

# * What is the difference between `Array.forEach()` and `Array.map()`?
    - forEach : 
        - execute a function on each array element
        - doesn't return any value
        - Doesn't change the original array
        - used for performing side effects 

    - map : 
        - Transform each element and return a new array 
        - return a new array 
        - Doesn;t change any value 
        - used for transforming data


# * What is the difference between `Array.slice()` and `Array.splice()`?
    - slice : 
        - extract a portion of the array 
        - doesn't modified original array
        - a new shallow copy

    - splice : 
        - add/remove elements from the array 
        - modified original array 
        - removed element as a new array


# * What is destructuring in JavaScript?
    - destructuring allows you to unpack values from array or properties from object into distinct variables.

# * What is the spread operator and rest operator?
    - spread :
        - used to expand elements from an array or object

    - rest : 
        - used to collect remaining elements or arguments into a new array or object

# * How do you clone an object in JavaScript?
    - there are multiple ways to clone an object depending on whether you need a shallow copy or deep copy
    - shallow copy methods : 
        - using Object.assign()
        - using spread operator
    - deep copy methods : 
        - using libraries like lodash 
        - using JSON.parse(JSON.stringify(obj))


# * What is the difference between shallow copy and deep copy?
    - shallow copy : 
        - it copies only outer object. doesn;t copy nested object
        - its faster
    - deep copy : 
        - it create same object reference and copies all nested object 
        - its slower

---

### 🧬 Objects and Inheritance

# * How does prototypal inheritance work in JavaScript?
    - javascript uses prototypal inheritence, meaning object inherit from other objects via their [[ProtoType]]
    - concepts : 
        - every object has an internal link to another object called its prototype 
        - when you access a property on an object, javascript first checks the object itself 
            - if not found, it looks up the prototype chain until it finds the property 

# * What are the different ways to create objects in JavaScript?

| Method                      | Description                                | Inheritance From          |
| --------------------------- | ------------------------------------------ | ------------------------- |
| **1. Object literal# *# *       | Most common and simple                     | `Object.prototype`        |
| **2. `new Object()`# *# *       | Constructor-based object                   | `Object.prototype`        |
| **3. `Object.create()`# *# *    | Creates object with custom prototype       | Custom prototype          |
| **4. Constructor function# *# * | Traditional OOP-style object creation      | via `prototype` property  |
| **5. ES6 `class` syntax# *# *   | Syntactic sugar over constructor functions | via `extends` + prototype |


# * What is the purpose of the `Symbol` type in JavaScript?
    - The symbol type is a primitive data type introduced in ES6. 
    - Its main purpose is to create unique identifiers for object properties. 
    - Features : 
        - Uniqueness : Every symbol is guaraneted to be unique 
        - Avoid property name collisions: 
            - Useful in objects where you want to avoid overwriting or interfering with other properties 
        - Hidden/internal properties : 
            - symbols can be used to define non-enumerable, non-string keys, useful for defining internal object behavior (eg.Symbol.iterator)

# * What is the difference between `==` and `Object.is()`?
| Feature        | `==` (Loose Equality)                  | `Object.is()`                         |
| -------------- | ---------------------------------------| ------------------------------------- |
| Type coercion  | Yes                                    | No                                    |
| `+0` vs `-0`   | `+0 == -0` → `true`                    | `Object.is(+0, -0)` → `false`         |
| `NaN` equality | `NaN == NaN` → `false`                 | `Object.is(NaN, NaN)` → `true`        |
| General usage  | For comparisons with type coercion     | For strict, edge-case-safe comparison |
| Same as `===`? | No, `===` is similar to `Object.is()`  |
                   but not identical in edge cases. |     |

# * What is the difference between a deep freeze and a shallow freeze in JavaScript?
    - Shallow Freeze : 
        - Uses Object.freeze() on the top-level object
        - Only prevents modifications to the immediate properties, not nested object
    - Deep Freeze : 
        - Recursively applies Object.Freeze() to the object and all nested objects
        - Prevents modifications at any depth
        - Use a deep freeze when full immutability is required, such as in Redux state management.
---

### 📦 Miscellaneous

# * What is the DOM (Document Object Model)?
    - DOM stands for document object model 
    - DOM represents a web page as a tree like structure that can access and manupulate the content of the structure

# * What are JavaScript events?
    onclick, onchange, submit, mouseover, onblur, onload

# * What is event delegation in JavaScript?
    - Event delegation is a technique that can attach event listeners on parent component instead of applying event listeners  on every child component. 
    - THis works because of event bubbling : events on child elements bubble up to parent 

# * What is the `this` keyword in JavaScript?
    - this refers to the object that is executing the current function 
    - its value depends on how the function is called : 
        | Context               | Value of `this`                               |
        | --------------------- | --------------------------------------------- |
        | In a method           | The object that owns the method               |
        | In a regular function | `undefined` in strict mode, else `window`     |
        | In an arrow function  | Inherits from its surrounding (lexical) scope |
        | In event handlers     | The DOM element that triggered the event      |

# * What is the difference between call, apply, and bind?
    call : 
        - invoke immediately, pass args individually
    apply : 
        - invoke immediately , pass arguments as an array 
    bind : 
        - returns a new function with bound this 
        
    - Use call/apply when you want to invoke immediately with a specific this.
    - Use bind when you want to save a function with a bound this to use later.


# * How do you handle errors in JavaScript? (try/catch vs promises)
    1. Handling Errors with try...catch (Synchronous Code)
        - Used to catch runtime errors in synchronous code and prevent the app from crashing.
    2. Handling Errors in Promises (Asynchronous)
        - Use .catch() to handle errors that occur in asynchronous operations.
    3. Handling Errors with async/await + try...catch
        - When using async/await, wrap it in a try...catch block to catch asynchronous errors like you would with synchronous code.
    
# * What are generators in JavaScript?
    - Generator is a special function in javascript that can be paused and resumed. its define using function syntax and uses the yeild keyword to pause execution
    - uses : 
        - lazy evaluation
        - infinite sequence 
        - implementing iterators 
        - managing async flows (used with Redux-Saga)

# * How does optional chaining (`?.`) work in JavaScript?
    - optional chaining allows you to safely access deeply nested properties without throwing an error if a property doesn't exists. 

# * How is garbage collection handled in JavaScript?
    - javascript uses automatic garbage collection to free up memory thats no longer needed
    - works : 
        - JS engine tracks references to objects
        - if an object is no longer reachable its considered as a garbage and is automatically removed from memory

# * What is memory leak in JavaScript and how to avoid it?
    - A memory leak happens when memory that is no longer needed is not released, causing the app to use more memory over time.

# * How do you debounce or throttle a function in JavaScript?
    - Both techniques to limit the rate of function execution, often for performance 
    - Debounce : 
        execute a function only after a delay since the last call 
        used for search input, resize events
    - Throttle :
        Ensures a function is called at most once every n miliseconds.
        used for scroll, mouseevents




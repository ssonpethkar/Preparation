# ###################################################################################################

### **Basic JavaScript Questions**  

1. What are the differences between `var`, `let`, and `const`?  
    var : function scoped, reassigned, redclared
    let : block scoped , reassigned values but can't be reclared in same scope
    const : block scoped , can't changed value and can't be reclared

    However, `let` and `const` are hoisted but remain in the **temporal dead zone (TDZ)** until initialized.  


2. Explain the difference between `==` and `===`.  
    == : check value quality but allows type coersion
    === : check value and type  both 

3. What are data types in JavaScript?  
    string, number , bigint, boolean, null, undefined, object, symbol

4. What is `undefined` vs. `null` in JavaScript?  
    undefined : means variable is declared but not assigned any values 
    null : variable is declared but value assigned to  "no value" ,empty or null

5. How does the `typeof` operator work?
    
6. What is hoisting in JavaScript? 
    - hoising is a javascript behaviour of moving variable and functions declared on the top of their scope before code execution 


7. What are truthy and falsy values in JavaScript? 
    - truthy : true, non zero number, {}, [], true, function
    - falsy : false, 0, -0, "", null, undefined, NaN
    

8. What is the difference between function declaration and function expression?  
 -function declaration : a function with a name and can be called before its defination due to hoisting
 Characteristics:
        ✅ Hoisted: Can be used before it's defined.
        ✅ Always named: Has a function name.
        ✅ Global/Local Scope: Available throughout the scope where it is defined.
    Example without hoisting: 
        function greet() {
            console.log("Hello, World!");
        }
        greet(); // ✅ Works (Hoisting allows calling before declaration)

    Example with hoisting:
        hello(); // ✅ Works due to hoisting

        function hello() {
            console.log("Hello from function declaration!");
        }

 - function expression : assigns a function to a variable its not hoisted. it must be defined before being used.
 Characteristics:
        ❌ Not Hoisted: Cannot be used before definition.
        ✅ Can be Anonymous: No function name required.
        ✅ More Flexible: Can be used as a callback or assigned dynamically.

    Example with hoisting :
        const greet = function() {
            console.log("Hello, World!");
        };

        greet(); // ✅ Works, but only after definition

    Example without hoisting :
        sayHello(); // ❌ Error: Cannot access 'sayHello' before    initialization
    
        const sayHello = function() {
            console.log("Hello from function expression!");
        };

    ## Key Differences Table
    Feature	                Function Declaration	                    Function Expression
    Hoisting	        ✅ Yes (can be called before definition)	    ❌ No (must be defined first)
    Naming	            ✅ Always named	                            ✅ Can be anonymous or named
    Usage in Callbacks	❌ Less common	                            ✅ Commonly used in callbacks
    Recursion Support	✅ Yes (easier due to naming)	            ✅ Only if named
    Flexibility	        ❌ Less flexible (fixed name)	            ✅ More flexible (can assign dynamically)


9. Explain the concept of **closures** in JavaScript.
 closure is a function that the variable of outer function is accessible in inner function even after the execution of outer function has finished

function counter() {
    let count = 0; // Private variable
    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment(); // 1
increment(); // 2
increment(); // 3

10. What is the difference between synchronous and asynchronous programming?  

- synchronous programming : 
    - code is executed line by line, blocking further execution until the current execution 
    - if a task(like api request, file reading) taking time then entire program waits for it to finish before moving on

- asynchronous programming : 
    - code execution does not wait for a task to complete, it continues while the task runs in the background
    - uses callback, promises, async/await to handle operations like api calls, database queries, and timers
    - prevents blocking and allows non- blocking I/O operations

    - Key Differences
        Feature	            Synchronous	                                            Asynchronous
        Execution	      Line-by-line (blocking)	                    Executes non-blocking tasks in the background
        Performance	      Slower if tasks are heavy	                    More efficient, handles multiple tasks at once
        Example	          Reading a file before moving forward	        Fetching data from an API while continuing execution
        Use Cases	      Simple calculations, basic scripts	        API requests, file handling, databases, user interactions
---
When to Use Asynchronous Programming?
    - Fetching API data (e.g., fetch() requests)
    - Database queries
    - File reading/writing
    - User interactions (e.g., button clicks)
    - Timers (setTimeout, setInterval)

### **Intermediate JavaScript Questions**  
11. What is **event delegation**, and why is it useful?  
    - Event delegation is a technique in javascript where you attach a single event listeners to a parent element instead of multile event listeners to individual child elements.
    - Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.


12. What are **arrow functions**, and how do they differ from regular functions? 

Feature	                    Regular Functions	                                Arrow Functions
Syntax	                Defined using the function keyword.	            Uses concise => syntax.
this Binding	        this depends on the calling context.	        Inherits this from the surrounding scope.
Arguments Object	    Has its own arguments object.	                Does not have its own arguments object.
Constructor Usage	    Can be used as a constructor with new.	        Cannot be used as a constructor.
Hoisting	            Function declarations are hoisted.	            Not hoisted; behaves like variables. 
Implicit Return	        Requires return for returning values.	        Supports implicit return for single expressions.
Methods as Object 	    Suitable for object methods with proper this.	Not suitable for methods due to lexical this.
Properties


13. Explain **call(), apply(), and bind()** with examples.  
    call : call is a function with a specific this and arguments passed individually
    apply : similar to call, but arguments passed as an array 
    bind : Returns a new function with this bound and provided context

```javascript
const obj = { name: "John" };
function greet(age) { 
    console.log(`Hello ${this.name}, age ${age}`); 
}

greet.call(obj, 25);    // Hello John, age 25
greet.apply(obj, [25]); // Hello John, age 25
const boundFunc = greet.bind(obj);
boundFunc(30); // Hello John, age 30
```

14. What is **currying** in JavaScript?  
    Curring breaks down a function that takes multiple parameters into a chain function that each take one parameter

// Regular function
function simpleFunction(param1, param2, param3) {
    return param1 + param2 + param3;
}

// Curried function
function curriedFunction(param1) {
    return function(param2) {
        return function(param3) {
            return param1 + param2 + param3;
        };
    };
}


15. How does the **this** keyword work?  

    this refers to the object that is calling the function.

    Example:
    const obj = {
        name: "John",
        greet: function() {
            console.log(this.name);
        }
    };
    obj.greet(); // "John"

    
    In regular functions, this refers to the global object (window in browsers).
    In arrow functions, this is inherited from the surrounding scope.

16. What are **prototypes**, and how does prototypal inheritance work?  


17. Explain **higher-order functions** and give an example.  
    - higher order function is a function that takes one or more functions as a arguments or return a fucntion as a result 
    - Higher-order functions help with abstraction, customization, and dynamic behavior.
    - Common examples in JavaScript include methods like .map(), .filter(), .reduce(), and setTimeout().

18. What is the difference between `.map()`, `.filter()`, and `.reduce()`?  
    map() : transforms each element of an array and returns a new array 
    filter : returns an new array with elements that satisfy a condition
    reduce : reduce an array to a single value

    ```javascript
    const numbers = [1, 2, 3, 4, 5];  
    console.log(numbers.map(num => num * 2)); // [2, 4, 6, 8, 10]  
    console.log(numbers.filter(num => num > 2)); // [3, 4, 5]  
    console.log(numbers.reduce((sum, num) => sum + num, 0)); // 15  
    ```


19. What is **debouncing** and **throttling**, and when should you use them?  
    **Answer:**  
- **Debouncing**: Limits how often a function is executed, ensuring it runs only after a specified delay after the last event.  
- **Throttling**: Ensures a function executes at most once every specified time interval.  

    **Debounce Example:**  
    ```javascript
    function debounce(func, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    }
    ```

    **Throttle Example:**  
    ```javascript
    function throttle(func, limit) {
        let lastCall = 0;
        return function (...args) {
            const now = Date.now();
            if (now - lastCall >= limit) {
                lastCall = now;
                func(...args);
            }
        };
    }
    ```

20. How does JavaScript handle memory management and garbage collection?  
    memory management : 
        in javascript memory is allocated to variables and function at the time of executions.
        in this javascript uses Automatic memory management. 
    Garbage collection : 
        garbage collection identifies which variable is reachable and should be kept in memory 
        objects that are no longer referenced (unreachable) are collected and their memory is free
 
---

### **Advanced JavaScript Questions**  
21. What are Promises, and how do they work?
    - a promise in javascript is an object that represents the eventual outcome( success or failure ) of an asynchronous operation, allowing you to handle the result of an action that might not be completed immediately.

    Pending: The task is in the initial state.
    Resolved(Fulfilled): The task was completed successfully, and the result is available.
    Rejected: The task failed, and an error is provided.

    let promise = new Promise((resolve, reject) => {
        // Perform async operation
        if (operationSuccessful) {
            resolve(“Task successful”);
        } else {
            reject(“Task failed”);
        }
    });

22. What is `async/await`, and how does it improve working with Promises?  

**Answer:**  
`async/await` allows handling asynchronous code in a synchronous way. It makes code more readable and avoids callback hell. 

```javascript
async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
}
fetchData();
```



23. What is the event loop, and how does JavaScript handle asynchronous operations?  
    - event loop is a mechanism that allows javascript to handle asychronous operations using a call stack, web apis and task queue.

    ```javascript
    console.log("Start");
    setTimeout(() => console.log("Delayed"), 0);
    console.log("End");

    // Output: Start -> End -> Delayed
    ```


24. Explain the difference between `localStorage`, `sessionStorage`, and `cookies`.  
| Storage Type      | Expiry       | Scope                   | Size Limit |
|-------------      |--------      |------                   |-----------|
| `localStorage`    | Never        | Per origin              | 5MB |
| `sessionStorage`  | On tab close | Per tab                 | 5MB |
| Cookies           | Set manually | Sent with HTTP requests | 4KB |


### **DOM & Browser APIs**  
31. What is the **DOM**, and how do you manipulate it with JavaScript?  
    DOM(document object model) is a programming interface that represents the structure of that a web page in a way of that programming language like javascript can understand and manipulate.

    DOM methods :
        getElementById(id) - Selects an element by its ID.
        getElementsByClassName(class) - Selects all elements with a given class.
        querySelector(selector) - Selects the first matching element.
        querySelectorAll(selector) - Selects all matching elements.
        createElement(tag) - Creates a new HTML element.
        appendChild(node) - Adds a child node to an element.
        remove() - Removes an element from the DOM.


32. What is **event bubbling** and **event capturing**?  
    Event Capturing (or Trickle Down): 
        The event starts from the outermost element (root) and travels down to the target element.
    Event Bubbling: 
        The event starts at the target element and bubbles up to the outermost element (root).
        

33. what is javascript? 
    javascript is high level, interpreted programming language that is used to make web pages interactive. 
    it is client side server language. it is also used on the server side with node.js

34. primitive and non primitive datatype 


35. What are rest and spread operators (...)?

    Rest Operator (...): Collects multiple arguments into an array.
    Spread Operator (...): Expands an array into individual elements.

    // Rest operator
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    console.log(sum(1, 2, 3, 4)); // 10

    // Spread operator
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    console.log(arr2); // [1, 2, 3, 4, 5]



19. What is the difference between deep copy and shallow copy?

    Shallow Copy: Copies only the reference, not the actual object. Changes in the copied object affect the original.
    Deep Copy: Creates a completely new object, independent of the original.

    let obj1 = { name: "Alice", address: { city: "NYC" } };

    // Shallow Copy
    let obj2 = { ...obj1 };
    obj2.address.city = "LA";
    console.log(obj1.address.city); // "LA" (changes original)

    // Deep Copy using JSON
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj3.address.city = "Chicago";
    console.log(obj1.address.city); // "LA" (original remains unchanged)


23. What is setTimeout and setInterval?

    setTimeout(): Runs a function once after a delay.
    setInterval(): Runs a function repeatedly at a specified interval.


    // setTimeout
    setTimeout(() => console.log("Hello after 2 seconds"), 2000);

    // setInterval
    let counter = 0;
    let interval = setInterval(() => {
        counter++;
        console.log("Count:", counter);
        if (counter === 5) clearInterval(interval); // Stops after 5 times
    }, 1000);

30. How to handle errors in JavaScript?

    1. Using try...catch
        try {
            let result = x / 0; // x is not defined
        } catch (error) {
            console.log("An error occurred:", error.message);
        }

    2. Using .catch() with Promises:
        fetch("invalid-url")
          .then(response => response.json())
          .catch(error => console.error("Fetch error:", error));


45. What is the Temporal Dead Zone (TDZ) in JavaScript?

    TDZ is the period between variable declaration and initialization where accessing the variable throws an error.
    
    Ex. console.log(a); // ReferenceError: Cannot access 'a' before initialization
        let a = 10;


46. can javascript call self invoking functions?
    Yes, JavaScript can call self-invoking functions, also known as Immediately Invoked Function Expressions (IIFE). These functions execute immediately after they are defined.
    Ex.
    (function() {
        console.log("This function runs immediately!");
    })();

    - Arrow Function IIFE:

    (() => {
        console.log("Arrow function IIFE executed!");
    })();



    - IIFE with Parameters:

    (function(name) {
        console.log(`Hello, ${name}!`);
    })("Alice");

    - Named IIFE (For Debugging Purposes)
    (function selfInvoke() {
        console.log("Named IIFE executed!");
    })();



### 1. **Callbacks**  
- A **callback** is a function you pass into another function **to be called later**.
- It's the old-school way of handling async stuff (like reading files, fetching data).

```javascript
function getData(callback) {
  setTimeout(() => {
    callback("Here is your data");
  }, 1000);
}

getData((data) => {
  console.log(data); // prints after 1 second
});
```
🔵 **Problem**: Callbacks can get messy ("callback hell") if you have a lot of them nested.



### 2. **Promises**  
- A **Promise** is an object that represents the **future result** of an async operation.
- It can be in 3 states: **pending**, **fulfilled**, or **rejected**.
- You use `.then()` for success and `.catch()` for errors.

```javascript
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here is your data");
    }, 1000);
  });
};

getData()
  .then((data) => console.log(data))   // on success
  .catch((err) => console.error(err)); // on failure
```

🔵 **Benefit**: Cleaner than callbacks, especially for chaining operations.



### 3. **async/await**  
- **async/await** is just **syntactic sugar** over Promises to make async code look **synchronous** and clean.
- You write `async` before a function, and inside it you can `await` Promises.

```javascript
const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Here is your data");
    }, 1000);
  });
};

async function fetchData() {
  const data = await getData();
  console.log(data);
}

fetchData();
```
🔵 **Benefit**: Code looks neat, readable, and feels like normal step-by-step instructions.



**Summary:**
| Method        | Style        | Pros                          | Cons                  |
|---------------|--------------|-------------------------------|-----------------------|
| Callbacks     | Old way       | Simple cases                  | Messy for complex flows |
| Promises      | Modern way    | Better error handling, chaining | Still a bit verbose   |
| Async/Await   | Newest & cleanest | Clean, easy to read        | Must be inside `async` |



 **simple real-world example** using all three ways:  
Let’s say we want to **"fetch user info"** after **1 second**.

---

### 1. **Using Callback**

```javascript
function fetchUser(callback) {
  setTimeout(() => {
    callback("👤 User data (callback)");
  }, 1000);
}

fetchUser((user) => {
  console.log(user);
});
```
**Problem:**  
- If you need to fetch posts *after* fetching user... and comments *after* posts... it becomes crazy nested (callback hell).

---

### 2. **Using Promise**

```javascript
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("👤 User data (promise)");
    }, 1000);
  });
}

fetchUser()
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.error(err);
  });
```
**Better:**  
- You can **chain** `.then()` easily for multiple steps.

---

### 3. **Using Async/Await**

```javascript
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("👤 User data (async/await)");
    }, 1000);
  });
}

async function displayUser() {
  const user = await fetchUser();
  console.log(user);
}

displayUser();
```
**Best:**  
- Looks like normal, sequential code.
- Easier to add `try/catch` for error handling too:

```javascript
async function displayUser() {
  try {
    const user = await fetchUser();
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}
```

---

> ⚡ **In short**:  
> - **Callback** = Pass a function and pray for order 😂  
> - **Promise** = Neater and allows chaining.  
> - **Async/Await** = Looks like magic, but it's built on Promises.

---

### Slice vs Splice

       Feature          |              slice()                           |               splice()
Purpose                 | Returns a part of an array without             | Changes (adds/removes) elements in the original array.
                            modifying the original array. 
Mutates Original Array? | ❌ No (returns a new array)                    | ✅ Yes (modifies the original array)
Return Value            | A new array containing the extracted elements. | An array containing the deleted elements (if any).
Arguments               | slice(start, end)                              | splice(start, deleteCount, item1, item2, ...)
Use Case                | To copy or extract a portion of an array.      | To remove, replace, or add elements in an array.


## uses of slice and splice 
    - Use slice() when you want a copy without changing the original array.
    - Use splice() when you want to modify the original array by adding, removing, or replacing items.


## Ex. slice (array.slice(startIndex, endIndex);)
const fruits = ["apple", "banana", "cherry", "date", "fig"];

const slicedFruits = fruits.slice(1, 4);

console.log(slicedFruits); // Output: ["banana", "cherry", "date"]
console.log(fruits);       // Original array is unchanged



## Ex, splice (array.splice(startIndex, deleteCount, item1, item2, ...);)

<!-- Example 1 - Remove elements: -->
const fruits = ["apple", "banana", "cherry", "date", "fig"];
const removedFruits = fruits.splice(2, 2);

console.log(removedFruits); // Output: ["cherry", "date"]
console.log(fruits);        // Output: ["apple", "banana", "fig"]


<!-- Example 2 - Add elements: -->
const fruits = ["apple", "banana", "fig"];
fruits.splice(2, 0, "cherry", "date");

console.log(fruits); // Output: ["apple", "banana", "cherry", "date", "fig"]


<!-- Example 3 - Replace elements: -->
const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "blueberry");
console.log(fruits); // Output: ["apple", "blueberry", "cherry"]



parent = root
child = target

## data structures in javascripts

In JavaScript, **data structures** are used to store and organize data efficiently. Below is a list of **common data structures** in JavaScript, categorized into **primitive**, **non-primitive (complex)**, and **special structures**:

---

## 🧱 1. **Primitive Data Types** (Not structures, but foundation)
These are basic data types:
- `Number`
- `String`
- `Boolean`
- `Null`
- `Undefined`
- `BigInt`
- `Symbol`

They are **not** collections or containers, but are used **within** structures.

---

## 📦 2. **Non-Primitive Data Structures (Objects)**

### a. **Array**
- Ordered collection of elements (indexed).
- Mutable and dynamic.
```javascript
const fruits = ["apple", "banana", "cherry"];
```

✅ Use case: List of items.

---

### b. **Object**
- Key-value pairs.
- Keys are strings (or symbols), values can be anything.
```javascript
const person = {
  name: "Alice",
  age: 25,
  isStudent: false
};
```

✅ Use case: Represent structured data (like JSON).

---

### c. **Map**
- Like objects, but allows any data type as keys.
- Maintains insertion order.
```javascript
const map = new Map();
map.set('name', 'Bob');
map.set(123, 'value');
```

✅ Use case: When you need keys of any type or ordered iteration.

---

### d. **Set**
- Stores unique values (no duplicates).
- Values can be of any type.
```javascript
const set = new Set([1, 2, 2, 3]);
console.log(set); // Set(3) {1, 2, 3}
```

✅ Use case: Remove duplicates, check existence.

---

## ⛓ 3. **Advanced / Custom Data Structures**
You can implement more complex data structures using objects or classes:

### a. **Stack (LIFO)**  
```javascript
const stack = [];
stack.push(1);   // Add to top
stack.pop();     // Remove from top
```

✅ Use case: Undo functionality, function call stack.

---

### b. **Queue (FIFO)**
```javascript
const queue = [];
queue.push(1);     // Add to end
queue.shift();     // Remove from front
```

✅ Use case: Task scheduling, print queue.

---

### c. **Linked List**
- Not built-in, but can be implemented with objects.
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

✅ Use case: Efficient inserts/removals, dynamic memory allocation.

---

### d. **Tree, Graph, Heap, Trie**
- These are **not built-in** but can be **implemented manually** for complex use cases like:
  - **Tree**: DOM, JSON
  - **Graph**: Networks, routes
  - **Heap**: Priority queues
  - **Trie**: Auto-complete

---

## 📌 Summary Table

| Structure   | Ordered | Unique | Key Type       | Example Use Case         |
|-------------|---------|--------|----------------|--------------------------|
| Array       | ✅      | ❌     | Index-based    | Lists, Iteration         |
| Object      | ❌      | ❌     | Strings/Symbols| Key-value storage        |
| Map         | ✅      | ✅     | Any type       | Ordered key-value pairs  |
| Set         | ✅      | ✅     | Value only     | Unique value collections |
| Stack       | ✅      | ❌     | Index          | Undo, backtracking       |
| Queue       | ✅      | ❌     | Index          | Task queues              |


*********************************************************************************************************

In JavaScript, **control structures** (also called **control flow statements**) determine the **execution flow** of a program. They allow you to make decisions, repeat code, and handle branching logic.

---

## ✅ **Types of Control Structures in JavaScript**

### 1. **Conditional Statements**

Used to **make decisions** based on conditions.

#### a. `if`, `else if`, `else`
```javascript
let age = 18;

if (age < 18) {
  console.log("Minor");
} else if (age === 18) {
  console.log("Just turned adult");
} else {
  console.log("Adult");
}
```

#### b. `switch`
Used for multiple condition checks.
```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Just another day");
}
```

---

### 2. **Looping (Iteration) Statements**

Used to **repeat** a block of code multiple times.

#### a. `for`
```javascript
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}
```

#### b. `while`
```javascript
let i = 0;
while (i < 3) {
  console.log("i is", i);
  i++;
}
```

#### c. `do...while`
```javascript
let j = 0;
do {
  console.log("j is", j);
  j++;
} while (j < 3);
```

#### d. `for...of` (arrays, strings, etc.)
```javascript
const fruits = ["apple", "banana"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

#### e. `for...in` (objects)
```javascript
const person = { name: "John", age: 30 };
for (const key in person) {
  console.log(key, person[key]);
}
```

---

### 3. **Jumping Statements**

#### a. `break`
Stops the loop immediately.
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
```

#### b. `continue`
Skips the current iteration.
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
```

#### c. `return` (inside functions)
Exits a function and returns a value.
```javascript
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Alice"));
```

---

### 4. **Exception Handling (Flow control on errors)**

#### a. `try...catch`
```javascript
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.log(error.message);
}
```

---

## 🧠 Summary of JavaScript Control Structures

| Category           | Statement              | Purpose                        |
|--------------------|------------------------|--------------------------------|
| Conditional         | `if`, `else`, `switch` | Decision making                |
| Looping             | `for`, `while`, `do`   | Repetition                     |
| Iteration Helpers   | `for...of`, `for...in` | Loop over data structures      |
| Jumping             | `break`, `continue`    | Control loop execution         |
| Functions           | `return`               | Exit and return from function  |
| Error Handling      | `try...catch...finally`| Handle exceptions gracefully   |

---



### array methods 

# 1. push()
Purpose: Adds one or more elements to the end of an array and returns the new length of the array.
Example:
    let arr = [1, 2, 3];
    arr.push(4); // arr is now [1, 2, 3, 4]

# 2. pop()
Purpose: Removes the last element from an array and returns that element.
Example:
    let arr = [1, 2, 3];
    let last = arr.pop(); // last is 3, arr is now [1, 2]


# 3. shift()
Purpose: Removes the first element from an array and returns that element.
Example:

    let arr = [1, 2, 3];
    let first = arr.shift(); // first is 1, arr is now [2, 3]

# 4. unshift()
Purpose: Adds one or more elements to the beginning of an array and returns the new length of the array.
Example:

    let arr = [1, 2, 3];
    arr.unshift(0); // arr is now [0, 1, 2, 3]

# 5. splice()
Purpose: Adds or removes elements from an array at a specific index.
Example:

    let arr = [1, 2, 3, 4];
    arr.splice(1, 2); // arr is now [1, 4]
    arr.splice(1, 0, 'a', 'b'); // arr is now [1, 'a', 'b', 4]

# 6. slice()
Purpose: Returns a shallow copy of a portion of an array into a new array object.
Example:

    let arr = [1, 2, 3, 4];
    let newArr = arr.slice(1, 3); // newArr is [2, 3], arr is unchanged

# 7. concat()
Purpose: Merges two or more arrays into a new array.
Example:

    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let mergedArr = arr1.concat(arr2); // mergedArr is [1, 2, 3, 4]

# 8. forEach()
Purpose: Executes a provided function once for each array element.
Example:

let arr = [1, 2, 3];
arr.forEach(function(item) {
  console.log(item); // logs 1, then 2, then 3
});

# 9. map()
Purpose: Creates a new array with the results of calling a provided function on every element in the calling array.
Example:

    let arr = [1, 2, 3];
    let doubled = arr.map(function(item) {
      return item * 2;
    }); // doubled is [2, 4, 6]

# 10. filter()
Purpose: Creates a new array with all elements that pass the test implemented by the provided function.
Example:

    let arr = [1, 2, 3, 4];
    let even = arr.filter(function(item) {
      return item % 2 === 0;
    }); // even is









33. How do you prevent the default action of an event?  
34. What is `document.readyState`, and why is it useful?  
35. Explain how `setTimeout` and `setInterval` work.  
36. What is `requestAnimationFrame`, and how does it improve performance?  
37. How do you detect if an element is in the viewport?  
38. What is `MutationObserver`, and how can it be used?  
39. How does JavaScript handle **CORS (Cross-Origin Resource Sharing)**?  
40. What is the **Fetch API**, and how does it differ from `XMLHttpRequest`?  
5. What are **WeakMap** and **WeakSet**, and how do they differ from Map and Set?  
26. What is **dynamic typing** in JavaScript?  
27. How do you deep clone an object in JavaScript?  
28. What are JavaScript **Generators**, and how do they work?  
29. What is **tail call optimization**, and how does it affect recursion?  
30. How does the JavaScript **module system (ES6 modules vs. CommonJS)** work?  

---
---

### **Performance Optimization & Best Practices**  
41. What are some ways to improve JavaScript performance?  
42. How do you handle large datasets in JavaScript efficiently?  
43. What are **web workers**, and when should you use them?  
44. What is **lazy loading**, and how can it be implemented?  
45. How does **tree shaking** work in JavaScript?  
46. What are **memory leaks**, and how do you prevent them?  
47. How can you optimize a JavaScript function that runs too slowly?  
48. What is the **Shadow DOM**, and how does it work?  
49. What are **service workers**, and how do they enable PWA features?  
50. How does JavaScript handle **multithreading**?  

---

### **Security & JavaScript**  
51. What are common JavaScript security vulnerabilities?  
52. How do you prevent **Cross-Site Scripting (XSS)**?  
53. What is **Cross-Site Request Forgery (CSRF)**, and how do you prevent it?  
54. How does **CSP (Content Security Policy)** improve security?  
55. What is the difference between `eval()` and `Function()` constructor?  

---

### **JavaScript in Modern Development**  
56. How does TypeScript improve JavaScript development?  
57. What is **server-side rendering (SSR)** in JavaScript?  
58. What is the difference between ES5, ES6, and ESNext?  
59. How does JavaScript work in Node.js compared to the browser?  
60. What are **progressive web apps (PWA)**, and how do they leverage JavaScript?  

---

# ************************************************************************************
# to prepare 
1. Explain between prototype and _proto_
2. Explain between `this` and `self`
3. What are decorators in javascript 
    Decorators are function that modify classes or methods. They are experimental features

4. What is Object.create() used for?
    it creates new object with a specified prototype

5. What is weakMap and how it is different from map ?
    weakMap : keys are only object and are garbage collected
    map : keys can be any type

6. What is the new keyword used for?
    the new keyword creates an instance of an object from a constrctor function


7. What are generator functions ?
    Generators are special functions that can be pause execution and resume later

8. how can you prevent a function from being called multiple times ?
    you can use a debounce function 

9. Javascript modules 
    modules allows you to organize code into reusable files using import and export 

10. javascript prototypes 
    Prototypes allow object to inherit properties and methods from other objects


11. Javascript ES6 features 
    # 1. Arrow function
    # 2. Template literals
    # 3. let and const
    # 4. Classes
    # 5. Promises
    # 6. async/await
    # 7. Destructuring assignment
    # 8. Spread operator
    # 9. Rest parameter
    # 10. Default parameter
    # 11. Map and set 
    # 12. modules
    # 13. map, filter, reduce methods 



## javascript weird parts
1. zero and empty string 

    0 == false   // true (it's due to implicit type coercion which happens when the loose equality operator is used)
    '0' == false // true ( empty string behaves same)

    - In the above example, false is coerced to 0 and 0 is equal to 0, so it returns true. But if we use strict equality operator (===) it will return false because false is not equal to 0.

2. Null 
    null <= 0 // true (null is coerced to 0)
    null >= 0 // true (null is coerced to 0)

    in javascript, when the comparison operators such as >=, =<, >, < are used with null, it is coerced to 0. So it will return true for >= and <= and false for > and <.

    0 <= 0 // true 
    0 >= 0 // true 

3. NaN 
    NaN == NaN // false (NaN is not equal to NaN)

    The NaN global property in javascript is a value representing Not-A-Number.
    It reperesents the result of an operation that does not produce a well-defined numerical result
    It's a behavior can be confusing as it is not equal to any other value in javascript, including itself.

4. Objects  
{} == {} // false (two different objects)
{} === {} // false (two different objects)
{} == null // false (object is not equal to null)
{} === null // false (object is not equal to null)
 
Ex. 
let obj1 = {name: 'Swati',lastName : 'Sonpethkar'}
let obj2 = {name: 'Swati',lastName : 'Sonpethkar'}

obj1 == obj2 // false (two different objects)
obj1 === obj2 // false (two different objects)

Even though obj1 and obj2 have same structure and content, they are two separate objects stored in different locations in memory.

Primitive values like number, string, boolean, null, undefined are stored in stack & compared by value. and objects are stored in heap and its compared by reference. So even if two objects have same structure and content, they are two different objects stored in different locations in memory.



# 5. substraction of string
'abc' - 'a' // 'bc' (it's due to the way substr action is implemented in javascript) 
'abc' - 'ab' // 'c' (it's due to the way substr action is implemented in javascript)
'ab' - 'cd' // NaN (it's due to the way substr action is implemented in javascript)

when we try to substract one string from another, javascript attempts to convert those string to numbers and then perform the subtraction. If the conversion fails, it returns NaN. If the conversion is successful, it returns the result of the subtraction.  

# 6. logical operators 
- AND (&&) and OR (||) operators in javascript are short-circuit operators. They stop evaluating the expression as soon as they determine the result. 
- AND (&&) operator returns true if both the operands are true. If the first operand is false , it returns false. If the first operand is true, it evaluates the second operand and returns the result.
- OR (||) operator returns true if either of the operands is true. If both the operands are false, it returns false.

true || 'hello' // true (returns the 1st truthy value it encounters or the last value if none are truthy)
true && 'hello' // 'hello' (returs the 1st falsy value it encounters or the last value if none are falsy)


# 7. arrays and loose equality 
Array(3) == ",," // true

Array(3) in js creates a new array with a length of 3, but without initialization the element

means its look like this [undefined, undefined, undefined]

when comparing values of different types using ==, javascript attempts to convert the operands to a common type before making the comparison 

In this case, the array [undefined, undefined, undefined] is converted to a string ",," which is equal to the string ",," on the right side of the == operator. Hence the comparison returns true.


## 1. destructuring
    is a convenient way to extract values from arrays or objects and assign them to variables.
    it is a shorthand for creating variables and assigning them the values from an array or object.
    it is a way to unpack values from arrays or objects into distinct variables.
    it is a way to assign values from an array or object to variables in a more readable and concise way.
    it is a way to create new variables and assign them the values from an array or object.


# Destructuring Arrays
1. Basic Array Destructuring 

    const numbers = [1,2,3,4,5];
    const [first, second, third] = numbers;
    console.log(first) // 1
    console.log(second) // 2
    console.log(third) // 3

    this example takes an array numbers and extracts its value into variables first, second, third.
    each variable holds one value from the array respectively


2. Changing variables names
    const person = {name: 'John', age: 30};
    const {name: newName, age: newAge} = person;    
    console.log(newName) // John
    console.log(newAge) // 30

    this example takes an object person and extracts its value into variables newName and newAge.
    each variable holds one value from the object respectively.
    the name of the variable is changed using the syntax {name: newName, age: newAge


3. Default values 
    const person = {name: 'John', age: 30};
    const {name, age = 25, job: "xcaliber"} = person;
    console.log(name) // John
    console.log(age) // 30
    console.log(job) // xcaliber


# Destructuring objects 
1. basic object destructuring 

const person = {name: 'John', age: 30};
const {name, age} = person;
console.log(name) // John
console.log(age) // 30

in this case we have an object person with two properties name and age.

We  extract these properties directly into variables name and age

2. Skipping values 
you can skip values by not declaring them in the destructuring assignment.
   
    const numbers = [1,2,3,4,5,6]
    const [first, , third] = numbers;
    console.log(first) // 1
    console.log(third) // 3

    Here were still destructing numbers, but we're skipping the second value in the array.
    So  first gets the first value and third gets the third value.
    The second value is skipped.


3. Rest operators ( it collects remaining items into a new array)
    
    const numbers = [1,2,3,4,5,6]
    const [first, ...rest] = numbers;
    console.log(first) // 1
    console.log(rest) // [2,3,4,5,6]

    using rest operator we can collect all the remaining items into a new array called rest.
    


#### Snippest #####
- https://github.com/anil-sidhu/JavaScript-100-objective-based-questions


### array methods

| Method       | Returns             | Mutates? | Common Use              |
| ------------ | ------------------- | -------- | ----------------------- |
| `map()`      | New array           | ❌        | Transforming data       |
| `filter()`   | New array           | ❌        | Filtering data          |
| `reduce()`   | Single value        | ❌        | Summing, combining data |
| `forEach()`  | `undefined`         | ❌        | Looping without return  |
| `find()`     | First matching item | ❌        | Find one item           |
| `some()`     | `true` / `false`    | ❌        | Check if any match      |
| `every()`    | `true` / `false`    | ❌        | Check if all match      |
| `includes()` | `true` / `false`    | ❌        | Check if value exists   |
| `sort()`     | Sorted array        | ✅        | Sorting                 |
| `splice()`   | Modified array      | ✅        | Remove/insert items     |
| `slice()`    | New array (copy)    | ❌        | Copy part of array      |
| `concat()`   | New array           | ❌        | Merge arrays            |
| `flat()`     | New array           | ❌        | Flatten nested arrays   |
| `join()`     | String              | ❌        | Create strings          |
| `reverse()`  | Reversed array      | ✅        | Reverse order           |


Use array methods like:
- map() to render lists.
- filter() to remove items dynamically.
- reduce() to calculate totals in cart apps.
- flatMap() when working with nested data like categories with products.
- some() / every() for validations (e.g., checking required form fields).

## javascript events 

# Mouse Events
| Attribute       | Description              |
| --------------- | ------------------------ |
| `onclick`       | Click on element         |
| `ondblclick`    | Double click             |
| `onmousedown`   | Mouse button pressed     |
| `onmouseup`     | Mouse button released    |
| `onmouseenter`  | Mouse enters the element |
| `onmouseleave`  | Mouse leaves the element |
| `onmousemove`   | Mouse moves over element |
| `onmouseover`   | Mouse moves onto element |
| `onmouseout`    | Mouse moves off element  |
| `oncontextmenu` | Right-click on element   |

# Keyboard events 

| Attribute       | Description                        |
| --------------- | ---------------------------------- |
| `onkeydown`     | Key pressed down                   |
| `onkeyup`       | Key released                       |
| `onkeypress` ⚠️ | (Deprecated) Printable key pressed |

#  Form/Input Events

| Attribute   | Description                            |
| ----------- | -------------------------------------- |
| `oninput`   | Input value is modified (live)         |
| `onchange`  | Value is changed and input loses focus |
| `onsubmit`  | Form submitted                         |
| `onreset`   | Form is reset                          |
| `onfocus`   | Element gains focus                    |
| `onblur`    | Element loses focus                    |
| `oninvalid` | Validation fails                       |
| `onselect`  | Text selected in input                 |

# Window & Document Events

| Attribute        | Description                    |
| ---------------- | ------------------------------ |
| `onload`         | Page or resource has loaded    |
| `onunload`       | Page is unloading (deprecated) |
| `onbeforeunload` | Warn user before leaving page  |
| `onresize`       | Window resized                 |
| `onscroll`       | Element or window scrolled     |
| `onerror`        | Resource loading error         |


# Clipboard Events

| Attribute | Description    |
| --------- | -------------- |
| `oncopy`  | Content copied |
| `oncut`   | Content cut    |
| `onpaste` | Content pasted |


# Drag and Drop Events

| Attribute     | Description              |
| ------------- | ------------------------ |
| `ondrag`      | Element is being dragged |
| `ondragstart` | Dragging has started     |
| `ondragend`   | Dragging has ended       |
| `ondragenter` | Drag enters drop target  |
| `ondragleave` | Drag leaves drop target  |
| `ondragover`  | Drag over target         |
| `ondrop`      | Dropped on a target      |

# 📱 Touch Events (Mobile)

| Attribute       | Description                   |
| --------------- | ----------------------------- |
| `ontouchstart`  | Finger touches screen         |
| `ontouchmove`   | Finger moves on screen        |
| `ontouchend`    | Finger is lifted              |
| `ontouchcancel` | Touch canceled (interruption) |


# media events 

| Attribute        | Description               |
| ---------------- | ------------------------- |
| `onplay`         | Media starts playing      |
| `onpause`        | Media is paused           |
| `onended`        | Media playback ended      |
| `ontimeupdate`   | Playback position changed |
| `onvolumechange` | Volume changed            |
| `onseeked`       | Seek finished             |
| `onseeking`      | Seeking started           |
| `oncanplay`      | Ready to play             |
| `onwaiting`      | Waiting for data          |


| Attribute          | Description                                |
| ------------------ | ------------------------------------------ |
| `onwheel`          | Mouse wheel used                           |
| `onanimationstart` | CSS animation starts                       |
| `onanimationend`   | CSS animation ends                         |
| `ontransitionend`  | CSS transition ends                        |
| `onmessage`        | Message received from another window/frame |

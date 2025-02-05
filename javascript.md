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
    filter : returns an new array with elements that satisfy a conditio
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


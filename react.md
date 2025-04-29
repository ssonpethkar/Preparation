# when to use useContext() hook instead of props in real application

use usecontext() instead of props when you want to avoid prop drilling and access context values directly within deeply nested components. 

## component life cycle methods: 

# component life cycle phases: 
    - Mounting phase ( component creation created): this phase occurs when an instance of a component is being created and inserted into the DOM
    - updating phase (rerender components) : This phase occurs when a component is being rerendered as a result of charges to either its props or state
    - unmounting phase( removal from the DOM): This phase occurs when a component is being removed from the DOM.

## component life cycle methods: 
Component life cycle methods are special methods that get called at various stages of a components life.

# 1. Mounting phase 
    - constructor
    - getDerivedStateFromProps()
    - render()
    - componentDidMount()

# 2. updating phase
    - getDerivedStateFromProps
    - render()
    - shouldComponentUpdate()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()


# 3. Unmounting Phase
    - componentWillUnmount()


## what are constructors in class componetn? when to use them?

constructor is a special method that is called when an instance of class is created.

constructor is used for initializing the components state or performing any setup that is needed before the component is rendered.


## super keyword in constructor
super keyword is used in the constructor of a class component to call the constructor of the parent class

this is necessary to ensure that the initialization logic of the parent class is executed

## role of render() method in component life cycle



## hooks in react :

# 1. useState : manage state in a functional component 

const[count, setCount] = useState(0);

# 2. useEffect : handles side effects like data fetching, subscriptions, or manual DOM updates

useEffect(() => {
    console.log('Component mounted or updated'):
},[dependency]); 

1. Run Once on Component Mount
useEffect(() => {
  fetchData();
}, []); // Empty dependency array means it runs only once.

2. Run on State or Prop Change

const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed to ${count}`);
}, [count]); // Runs whenever `count` changes.

3. Cleanup Effect

useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer running');
  }, 1000);

  return () => {
    clearInterval(timer); // Cleanup the timer when component unmounts.
    console.log('Cleanup on unmount');
  };
}, []);

4. Fetch Data from an API

const [data, setData] = useState([]);

useEffect(() => {
  fetch('https://api.example.com/items')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []); // Fetches data once on mount.


5. Subscribing to Events
useEffect(() => {
  const handleResize = () => console.log('Window resized');
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize); // Cleanup on unmount.
  };
}, []);

6. Synchronizing with External Systems

const [count, setCount] = useState(0);

useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]); // Updates title whenever `count` changes.


7. Conditional Execution
const [shouldLog, setShouldLog] = useState(false);

useEffect(() => {
  if (shouldLog) {
    console.log('Effect runs because shouldLog is true');
  }
}, [shouldLog]); // Runs only when `shouldLog` changes.

8. Debounce Effect

const [searchTerm, setSearchTerm] = useState('');
const [debouncedTerm, setDebouncedTerm] = useState('');

useEffect(() => {
  const handler = setTimeout(() => {
    setDebouncedTerm(searchTerm);
  }, 300); // Wait for 300ms after the user stops typing.

  return () => {
    clearTimeout(handler); // Cleanup previous timeout.
  };
}, [searchTerm]);

9. Polling Data Periodically

useEffect(() => {
  const interval = setInterval(() => {
    console.log('Fetching data...');
  }, 5000);

  return () => clearInterval(interval); // Cleanup on unmount.
}, []);


10. Avoiding Infinite Loops

const [count, setCount] = useState(0);

useEffect(() => {
  console.log('Effect ran');
  setCount((prev) => prev + 1); // Don't use `count` here directly to avoid infinite loop.
}, []); // No dependency or specific dependency array prevents loops.


# 3. useContext : Accesses context values without context.consumer

const value = useContext(MyContext);

# 4. useReducer : manage complex static logic using a reducer function(like redux)
const[state, dispatch] = useReduer(reducer, initialState);

# 5. useRef : Provides a mutable reference to a DOM element or variable

const inputRef = useRef(null);

# 6. useMemo : Optimize performance by memoizing expensive computations 
const memoizedValue = useMemo(() => computeExpensiveValue(data), [data]);

# 7. useCallback: memozes callback functions to prevent unnecessary re-renders

const memoizedCallback = useCallback(() => {
    doSomething();
}, [dependency]);


# 1. what is react 
  -react is javascript library to building user interfaces, developed by facebook. 
  - it follows component based architecture  and used virtual DOM for efficient rendering

# 2. virtual DOM 
  - Virtual dom is a lightweight copy of real DOM that react uses to minimize direct DOM manipulations, making updates more efficient 

# 3. JSX ( javascript XML)
  - is a syntax extention that allow writing html- like code in javascript

# 4. what are components in react ?
  COmponents are reusable building blocks of reacts. 
  There are 2 types of components 
  1. functional  components (stateless, hooks)
  2. class  components (stateful, this.state)

# 5. what is difference between props and state 

Feature                   props                           state 
mutability            immutable                         mutable
usage           passed from parent to child             managed within the components
updates         can't be modified inside components     can be updated using setState() or hooks


# 6 HOC (Higher Order Components):
- HOC is a function that takes a component as an argument and returns a new component with additional props or functionality.
- HOC is used to reuse code, abstract away complexity, and make code more modular and reusable .
- HOC is often used for authentication, authorization, and caching.

# 7. what is context API in react ?
- Context API is a way to share data between components without passing props down manually or via a  HOC.
- Context API is used to manage global state, share data between components, and make code more modular and reusable .
- Context API is often used for authentication, authorization, and caching.
# 8. what is a hook in react ?
- A hook is a special function that allows functional components to use state and other React features.

Types of hooks:
1. useState: used to add state to functional components .
2. useEffect: used to handle side effects in functional components.
3. useContext: used to access context in functional components.
4. useReducer: used to manage state in functional components.
5. useCallback: used to memoize callback functions in functional components.
6. useMemo: used to memoize values in functional components.


# 9. what is a reducer in react ?
- A reducer is a function that takes the current state and an action, and returns a new state .
- A reducer is used to manage state in functional components using the useReducer hook.
- A reducer is often used for complex state management, such as managing multiple state variables or handling asynchronous

# 10. what is a saga in react ?
- A saga is a function that handles side effects in a Redux application .
- A saga is used to handle asynchronous operations, such as API calls, in a Redux application.
- A saga is often used for complex state management, such as managing multiple state variables or handling asynchronous

# 11. what is a middleware in react ?
- A middleware is a function that sits between the action and the reducer in a Redux application .
- A middleware is used to handle side effects, such as API calls, in a Redux application.

# 12. what is a thunk in react ?
- A thunk is a function that returns a function, often used to handle asynchronous operations in a Redux
application.
- A thunk is used to handle side effects, such as API calls, in a Redux application.

# 13. what is a store in react ?
- A store is an object that holds the entire state of a Redux application .
- A store is used to manage state in a Redux application.

# 14. what is a dispatch in react ?
- A dispatch is a function that sends an action to the reducer in a Redux application .
- A dispatch is used to update the state in a Redux application.

# 8. what is a controlled component in react ?
- A controlled component is a component whose state is controlled by the parent component .
- A controlled component is used to manage user input, such as text input, forms, in a React application

# 9. what is an uncontrolled component in react ?
- An uncontrolled component is a component whose state is not controlled by the parent component .
- An uncontrolled component is used to manage user input, such as text input, in a React application

# 10. what is a pure component in react ?
- A pure component is a component that always returns the same output given the same props .
- A pure component is used to optimize performance in a React application.

# 11. what is a memoized component in react ?
- A memoized component is a component that is memoized, meaning its props are compared and if they are the same, the component is not re-rendered .
- A memoized component is used to optimize performance in a React application.

# 12. what is a higher order component in react ?
- A higher order component is a function that takes a component as an argument and returns a new component .
- A higher order component is used to wrap a component with additional functionality, such as authentication or caching

# 13. what is a context in react ?
- A context is a way to share data between components without passing props down manually.
- A context is used to manage global state in a React application.

# 14. what is a provider in react ?
- A provider is a component that provides a context to its children.
- A provider is used to manage global state in a React application.

# 15 explain redux in react ?
- Redux is a state management library for React applications.
- Redux helps to manage global state by providing a single source of truth for the state of the application
- Redux uses the concept of actions, reducers, and stores to manage state.  
- Redux is used to manage complex state in a React application.

# 16 how to use redux in react ?
- First, install the redux library using npm or yarn
- Then, create a store using the createStore function from the redux library
- Next, create actions using the createAction function from the redux library
- After that, create a reducer using the combineReducers function from the redux library
- Finally, connect the store to the React application using the connect function from the react-redux library
- Redux is used to manage complex state in a React application.

# 17 is browser usnderstand jsx?
- No, the browser does not understand JSX. JSX is a syntax extension for JavaScript that is used to write HTML-like code in JavaScript files.
- To use JSX in a browser, it must be compiled to JavaScript using a tool like Babel  

# 18. Explain lifting up
- Lifting state up is a pattern where the state of a child component is moved to its parent component,
allowing multiple child components to share the same state.
- Lifting up is a technique used in React to manage state in a component tree.
- It involves moving state up the component tree to a parent component, so that it can be managed
- Lifting up is used to avoid prop drilling, where props are passed down multiple levels in a component tree
- It is used to manage state in a React application.

# 19 purspse of setState 
- The purpose of setState is to update the state of a React component.
- setState is used to update the state of a component in response to user interactions or other events. 
- setState is used to trigger a re-render of the component with the updated state.

# how does react handle prop  drilling  and how to avoid it ?
- Prop drilling is when you pass a prop down multiple levels in a component tree.
- React handles prop drilling by allowing you to lift the state up to a parent component, so that it can be managed there.
- To avoid prop drilling, you can use the following techniques: 
- Lift the state up to a parent component
- Use a context API to share data between components
- Use a library like Redux to manage global state
- Use a library like MobX to manage global state
- Use a library like React Context API to manage global state
- Use a library like React Hooks to manage global state

# lazy loading in react ?
- Lazy loading is a technique used in React to load components or modules only when they are needed.
- It is used to improve the performance of a React application by reducing the amount of code that needs to be loaded initially.
- Lazy loading is used to load components or modules on demand, rather than loading them all at once .

# how does react handles forms 
- React handles forms by using the controlled component pattern.
- In this pattern, the component's state is used to keep track of the form data, and
the component's props are used to update the state.   
- React also provides a number of built-in components and APIs for handling forms, such as the `useState` hook and the `useForm` hook.

# what are lifecycle methods in class components ?
- Lifecycle methods are methods in a class component that are called at different points in a component's lif ecyle.
- They are used to perform tasks such as setting up and tearing down a component's state, and handling events such as mounting and unmounting.  
- Lifecycle methods include methods such as `componentDidMount`, `componentDidUpdate`, and `componentUnmount`.


# how to handle errors in react ?

# Explain the Redux flow (Action → Reducer → Store → View).
- Redux follows a unidirectional data flow. The core idea is that the state of an application is kept in a single store, and the only way to modify it is by dispatching actions that describe what should change.
- The flow is as follows:
  - An action is dispatched from a component .
  - The action is then passed to the reducer.
  - The reducer then updates the state of the store based on the action.
  - The updated state is then passed to the view, which is then re-rendered with the new
state.

1️⃣ View (User Interaction)
     ⬇️ dispatch(action)
2️⃣ Action (Describes what happens)
     ⬇️ sent to reducer
3️⃣ Reducer (Returns new state)
     ⬇️ updates store
4️⃣ Store (Holds the state)
     ⬇️ UI re-renders
5️⃣ View (Updated UI)

# When to Use Redux?
- When multiple components need shared state.
- When the application state is complex and needs predictable management.
- When debugging and testing state changes is important.


MQTT ( message queuing telemetry transport ) is a lightweight messaging protocol that is used for IoT (Internet of Things) applications.

# tesing in react
- Jest is a popular testing framework for React applications.
- Jest provides a lot of features out of the box, including code coverage, snapshot testing, and mocking.

# What are different types of testing in React?
- Unit testing: Testing individual components or functions.
- Integration testing: Testing how multiple components work together.
- End-to-end testing: Testing the entire application from start to finish.
- Snapshot testing: Testing the visual representation of a component.
- UI testing: Testing the user interface of a component.


# What is the difference between fetch() and Axios?
- `fetch()` is a built-in JavaScript function that allows you to make HTTP requests.
- Axios is a third-party library that provides a simple and intuitive way to make HTTP requests.
- Axios is often used in React applications because it provides a lot of features out of the box,such as automatic JSON data parsing and error handling.
- Axios is also often used in conjunction with Redux to handle state changes in the application.

# what is server side and client side rendering?
- Server-side rendering (SSR) is a technique where the server generates the initial HTML of a web page and sends it to the client's web browser.
- Client-side rendering (CSR) is a technique where the client's web browser generates the HTML of a web page.
- SSR is often used in React applications because it provides a lot of benefits, such as improved SEO and faster page loads.
- CSR is often used in React applications because it provides a lot of benefits, such as improved user experience and faster development time.

# javascript and react default is a client side rendering but react also support server side rendering using Next.js



# optimization performace: 
- lazy loading
- code splitting
- memoization
- caching :  
- tree shaking
- minification
- useMemo and useCallback
- React.memo

# differnce between useContext and useReducer
- useContext is used to share state between components using a context API.
- useReducer is used to manage state changes in a component using a reducer function.
- useContext is often used in conjunction with React Context API to share state between components. 
- useReducer is often used in conjunction with Redux to manage state changes in the application.

# difference between useReducer and Redux
- useReducer is a built-in React hook that allows you to manage state changes in a component using
a reducer function.
- Redux is a third-party library that provides a centralized state management system for React applications.
- useReducer is often used in conjunction with React Context API to manage state changes in a component.
- Redux is often used in conjunction with React to manage state changes in the application.

# difference between useMemo and useCallback
- useMemo is used to memoize a value that depends on one or more props.
- useCallback is used to memoize a function that depends on one or more props.
- useMemo is often used to memoize values that are expensive to compute.
- useCallback is often used to memoize functions that are expensive to compute.

# what is error boundries
- Error boundaries are React components that catch and handle JavaScript errors that occur anywhere in their child components tre .
- Error boundaries are a feature of React that allows you to catch and handle errors in a centralized way .

# scalable react application
- use a state management library like Redux or MobX
- use a routing library like React Router
- use a library like React Query to handle data fetching and caching
- use a library like React Helmet to handle SEO
- use a library like React Loadable to handle code splitting







# #######################################################

https://github.com/sudheerj/reactjs-interview-questions
https://www.geeksforgeeks.org/react-interview-questions/
https://www.interviewbit.com/react-interview-questions/

For react
1. Difference between functional and class component
2. Explain hooks
3. HOC
4. Pure component
5. Lifecycle methods of React
6. Real vs virtual dom difference
7. Stateful vs stateless component
8. Context API
9. Redux, redux middleware
10. Routing in React




Top React Js interview questions to prepare From The video:

1) Hooks: Prepare this in order

- useState
- useEffect
- useContext
- useReducer
- useMemo
- useCallback
- useRef

2) Higher Order Components (HOC):

- What?
- When?
- Why?
- How?

3) Life Cycle Methods of Components:

- Class Components
- Mounting
- Updating
- Unmounting

4) State management (all about data):

- State/Props
- Props drilling
- Context

5) Redux or Zustand:

- How redux works?
- Why?
- When?
- Redux Toolkit (RTK)

6) Custom Hooks:

- When to use?
- Code
- Why? (to make code clean, maintainable, readable, reusable)

7) Lazy Loading (Very imp and highly asked):

- Code splitting
- Chunking
- Suspense

8) Virtual DOM:

- Reconciliation Algorithm
- React Fiber
- Renders
- Diff algorithm
- How does render work?

9) SSR vs CSR (important) :

- What?
- Difference
- SEO and performance (SSR)

10) Routing (Role-based access control-RBAC)

- react-router
- How do you manage protected routes?
- How do you handle routes?
- query params
- Dynamic routing

11) Testing

- React Testing Library
- Unit Testing

Hack for interview: Try to mention that the code you wrote is testable and try to write test cases.

12) Async Tasks

- API Calls
- useEffect in depth
- Events
- Promises
- setTimeout

13) Reusability, Readability, modularity, testability (Coding Practices)

14) Performance 

- Lazy loading
- Asset optimization (how do you optimize js, css code)
- Writing optimized code
- Bundler
- CDN / Server level
- Rendering of components

15) Styling

- Tailwind
- StyleX
- Bootstrap
- Material UI
- Ant UI
- CSS / SCSS

16) Accessibility

17) Security


What are error boundaries?
What is the use of useEffect React Hook?
redux and its usage






## javascript
 Closures
 Execution Context and Scope
 Asynchronous JavaScript
 Promises, async/await, callbacks
 Higher-Order Functions - map, filter, reduce
Event Delegation
Hoisting
Spread and Rest Operators
Execution Context, Call Stack, and Memory Heap




## react 
Component Lifecycle Methods (Class Components)
State and Props
Hooks 
redux
React Router
React State Management
Handling Forms
Performance Optimization
Code Splitting and Lazy Loading
Error Boundaries
 React Context API
 React Refs
 Keys in React
Immutable State
Shallow Rendering

# #####################################################################################################









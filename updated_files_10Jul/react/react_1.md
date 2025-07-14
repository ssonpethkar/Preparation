
# 1. What is React?
	- React is developed by facebook in Mar 2013
	- React is open source javascript library for building user interfaces for crating single page web application. 
	- React uses component based architecture and virtual dom for faster rendering 
	- It allows developer to create reusable UI components 

    Features : 
	- Using component based architecture 
	- uses virtual DOM for faster rendering 
	- uses Hooks for state management and lifecycle features 
	- JSX 
	- Redux
    Advantages : 
	- Strong community support
	- SEO friendly 
	- uses virtual DOM for efficiently updates and faster rendering 
	- Can be used client side rendering and server side rendering 
	- good performance 
	- Easy integration with other libraries and framework 
	 			
# 3. What are the features of React ?
	- uses component based architecture 
	- it can be used virtual dom for faster rendering 
	- unidirectional data flow
	- declarative UI 
	- JSX  
	- hooks 

# 4. What is JSX ?
	- JSX stands for javascript XML 
	- JSX is a syntax extension to write html like code in javascript
	- Browser doesn't understand JSX they use transpiler as babel. Babel converts jsx into javascript to understand browser 

# 5. What is DOM ?
	- DOM stands for document object model 
	- DOM represents web page as a tree like structure which allows to dynamically access and manipulate the content and structure of the web page

# 6. What is Virtual Dom ?
	- Virtual dom is a lightweight copy of real dom 
	- react keeps copy of real dom (means virtual dom) in memory, when changes occur 
		- firstly react updates DOM
		- then compares new virtual DOM to previous one ( using diffing algorithm for comparison)
		- then they applies only necessary changes to the real DOM ( using reconcillation)  
    - it is used to render UI efficiently its only rerender updated part instead of rerendering entire react application 

# what is reconcillation ?
	- reconcillation is the process react uses to updates DOM efficiently when components state and props change.

# 8. What are fragments in react ?
	- fragment is a way to group a list of child component without adding extra node to the DOM.

# 9. What are props in react ?
	- Props is a way to pass parent component data to child component data 
	- props is immutable 
	- In props, data handled from parent component and it passed down 


# 13. What is state in Reactjs?
	- state is an object that holds dynamic data for the component data when state changes then it rerenders 
	- state is mutable 
	- In state, data is handled within component 
 
# 14. What are props ?
	- Props is a way to pass data from parent component to child component
	- props is immutable 
	- we can't modified props data in their child component
	- In props, data handled by parent component and it passing downs
 
# 15. What are the differences between State and Props in react ?
	state : 
		- state is an object that holds dynamic data of the component when state changes then rerenders
		- state is mutable
		- In state, data is handled within component
	Props : 
		- Props is a way to pass data from parent component to child component 
		- props is immutable 
		- in props, data is handled from parent component and passed downs

# 16. What is props drilling ?
	- prop drilling is the process of passing down props to multiple layer of component
	- props drilling occurs when we pass data as a props to multiple nested component if intermediate component doesn't need that data they only accept it and forward to another component. 

# 17. What are the disadvantages of props drilling and How we can avoid props drilling ?
	We can avoid prop drilling 
		- using context API, 
		- using useCallback 
		- using redux 
		- using component composition 
		- using custom hooks 
		- using lifting state up 
	Disadvantages 	
		- hard to debug if any issue arises 
		- code become hard to read and maintain
		- intermediate component forced to accept it and forward it 

# 18. What are Pure components in React ?
	- Pure components is the component only re-renders when its state and props changes using shallow comparisons

# 21. What are Error boundaries ?
	- Error boundries are the react component that catch javascript error in their child component , log those errors and shows fallback UI instead of falling entire app.

# 22. What are Higher order components in react ?
	- Higher order component is a function that passed component as an argument and returns a new component with extra additional features 

# 23. What are the differences between controlled and uncontrolled components ? 
	- Controlled components : 
		- Controlled component is a form input elements like select, textarea , input etc whose value is handled by react state 
		- React has full controlled of the component 
		- we can access state using useSTate and update by onchange on each change 
		- controlled component is used when we need full access of forms , form validation, conditional input, real time data

	- Uncontrolled components : 
		- Uncontrolled component is a form input element that manages its own state internally using DOM 
		- react reads only its value if they needed in Uncontrolled components 
		- we can access its state using refs 
		- uncontrolled component is used for simple forms and dom integrations

# 26. What are keys in React ?
	- Keys helps to identify which items in a list has changed, removed and added.
	- they must be unique among the siblings

# 27. What is Lazy loading in React ?
	- lazy loading refers a technique of loading components when only they are needed , rather than the loading everything at when apps starts
      Why USE : 
	- reduces initial bundle size 
	- speeds up page loading time
	- optimize performance for large apps or multiple UI's 

# 28. What is suspense in React ?
	- React.suspense is a component used to handle the loading state of components that are loaded asynchronously 
    ( for ex. via react.lazy, data fetching with framework like relay or other concurrent features ) 
 
# 29. What are custom hooks ?
	- custom hooks is a javascript function that starts with use and allows you to reuse stateful logic between components . 

# 31. What are Portals in react ?
	- Portals let you render child component outside the parent component 
	- it is used for hide/show models

# 38. What are the different ways to pass data from child component to parent component in react ?
	- using context API ( global or shared ) => shared state in deeply nested trees
	- using state management libraries ( redux, zustand , etc) => centralized and app-wide state
	- using callback functions ( most common and recommended) => simple prop based communication
	- using useRef passed from parent => accessing childs internal value 
	- using forwardRef and useImperativeHandle => calling child function from parent

#  What are the different ways to pass data from  parent component to child component  in react ? 
	- props => direct parent to child component
	- prop functions => child can trigger parent defined logic
	- children prop => rendering JSX inside child component 
	- JSX/component prop => inject render logic
	- context api => avoid prop drilling
	- redux => global state 

# 41. How do you optimize your react application ?
	we can optimize react application using below methods 
		- code splitting 
		- memoization using useMemo, useCallback and React.memo
		- visualization using React.lazy 
		- avoid rerenders 
		- CDN ( content delivery network ) 
		- debouncing

# 42. How would you consume a RESTful JSON API in reactjs?
	using axios and fetch and async/await in useEffect 

# 49. What are the different types of exports and imports ?
 	Types of exports 
		named exports => when we import then use {} and exact name can pass and multiple exports within same components
		default exports => when we import then don;t use {} and you can rename component while importing and only one export per component

	Types of imports 
		Named imports, 
		default imports 
		named and default imports

# 47. what are the different hooks you have used ?
	- useState :
		- useState is a react hook that allow functional component to maintain and update local state
		- useState allows us to track state in functional component 
		- useState is used for simple or independent state ( like tracking user input forms, and toggling UI element)
		- useState accepts initial value and returns array with 2 items
			1. current state 
			2. setter function to update that state
		- Syntax : const [state,setState] = usestate(initialValue)
	
	- useReducer : 
		- useReducer is alternative of useState 
		- useReducer is a react hook that allow functional component to managing complex state logic, especially when state updated depends on previous state or multiple actions 
		- useReducer works by using a reducer function to handle state transition
		- The reducer takes the current state and an action and returns new state
		- useReducer hooks used when complex state logic and when multiple values are updated together (like form validation, redo/undo, ) 
		- syntax : const [state, dispatch] = useReducer(reducerFunction, initialValue)

	- useEffect : 
		- useEffect runs asynchronously
		- useEffect is a react hook that let you perform side effect in functional component - like fetching data , subscribing to the events or updating the DOM.
 		- It is similar to componentDidMount, componentDidUpdate and componentWillUnmount from class component
		- you pass it a function that runs after render(after DOM paints). It also returns a cleanup functions for unmounting 
		- There are 3 ways to use useEffects 
			1. No dependency array : runs function on every render 
			2. empty dependency array : runs only once like componentDidMount
			3. passed dependency array : run when value changes ( used for search items, filter, or prop changes)

	- useLayoutEffect
		- useLayoutEffect runs synchronously
		- useLayoutEffect is a react hook that works like same useEffect but it fires synchronously after all DOM mutations and before browser paints the screen
		- used for DOM measurements 
		- when you want to synchronously update layout before the screen paints

	- useMemo
		- useMemo is a react hook that memoize the value, so its only recalculated when dependencies changes. This improves performance. 
		- useMemo is react hook that memoizes the result of a function so its only recalculated when they needed. 
		- It improves performance by avoiding expensive or repeated calculations on every render 
		- useMemo takes 2 arguments 
			1. the 1st argument is a function that returns a value 
			2. the 2nd argument is dependency array 
			3. react remembers the value from the previous render and only re-runs the function if dependencies (a,b) have changed.
		- useMemo is used when you have a computationally expensive function

	- useCallback	
		- useCallback is a react hook that memoize a function - it returns the same function reference between renders unless dependencies change.
		- it helps avoid unnecessary re-creation of function which is useful when passing callbacks to child component that rely on reference equality (like react.Memo).
		- work :
			- define a function inside useCallback 
			- passed dependency array 
			- react will re-create the function only when one of dependencies changes 
			- otherwise it returns a same function instance helping to avoid unnecessary renders.
		- it is used when you can pass a function as a prop to React.memo components.
		- when your component has frequent renders and you want to optimize performance. 
		- the function is used in event handlers, effect or callbacks that depends om stable references.
 
	- useContext
		- useContext is a react hook that let you access values from content directly without needing a <Context.Consumer> wrapper.
		- it is used to share global data ( like themes, authentication or language) across many components without passing props manually.
		- work : 
			1. create a context
			2. wrap your component with a provider 
			3. access the values with useContext.

	- useRef
		- useRef is a react hook that returns mutable object which persists for the entire lifetime of a component.
		- its mainly used to 
			- access DOM elements 
			- store mutable values that don't trigger re-render.
		- syntax : const myRef = useRef(initialValue)
			- useRef returns an object 
			- you can read/write to myRef.current without causing a re-render
			- the object remains same between renders 
		- uses : 
			- referencing DOM nodes ( eg. focus, scroll, animations)
			- storing mutable variables between renders 
			- avoiding re-renders that happens with useState
			- storing previous values ( like a previous props or state)
	
	

# 7. What is component life cycle of React class component ?
	Component life cycle methods are special methods that get called at various stages of component life cycle 
	There are 3 phases 
	1. Mounting phase 
	2. Updating phase
	3. Unmounting phase 
	
	1. Mounting phase : In Mounting phase, when component is created and added to the DOM 
	there are 4 methods 
		1. constructor
		2. getDerivedStateFromProps
		3. render
		4. componentDidMount => useEffect with empty dependecy array

	2. updating phase : in updating phase , state and props has changed
	There are 5 methods 
		1. getDerivedStateFromProps
		2. shouldComponentUpdate
		3. render
		4. getSnapshotBeforeUpdate
		5. componentDidUpdate => useEffect with dependency array passed

	3. Unmounting phase : in unmounting phase, component is removed and used for cleanup
	There are only one method 
		1. componentWillUnmount => useEffect with return 


# 32. What is context in react ?
	Context in React is a way to share data globally across your component tree without having to pass props manually at every level.
		
# react hook 
	- React Hooks are built-in functions introduced in React 16.8 that let you use state and other React features in functional components — without writing class components.

#  What are the rules that must be followed while using React Hooks?
	- 1. Only Call Hooks at the Top Level
		❌ Don’t call Hooks inside:
			- Loops
			- Conditions
			- Nested functions

	- 2. Only Call Hooks from React Functions
		❌ Don’t call Hooks from:
			- Regular JavaScript functions
			- Event handlers
			- Class components

		✅ Only call them from:
			- Functional components
			- Custom Hooks

# 2. What is useMemo ?
	- useMemo is a react hook that memoize the value, so its only recalculated when dependencies changes. This improves performance. 
	- useMemo is react hook that memoizes the result of a function so its only recalculated when they needed. 
	- It improves performance by avoiding expensive or repeated calculations on every render 
	- useMemo takes 2 arguments 
		1. the 1st argument is a function that returns a value 
		2. the 2nd argument is dependency array 
		3. react remembers the value from the previous render and only re-runs the function if dependencies (a,b) have changed.
	- useMemo is used when you have a computationally expensive function

 	
# 24. What is useCallback ?
	- useCallback is a react hook that memoize a function - it returns the same function reference between renders unless dependencies change.
		- it helps avoid unnecessary re-creation of function which is useful when passing callbacks to child component that rely on reference equality (like react.Memo).
		- work :
			- define a function inside useCallback 
			- passed dependency array 
			- react will re-create the function only when one of dependencies changes 
			- otherwise it returns a same function instance helping to avoid unnecessary renders.
		- it is used when you can pass a function as a prop to React.memo components.
		- when your component has frequent renders and you want to optimize performance. 
		- the function is used in event handlers, effect or callbacks that depends om stable references.


# 30. What is useReducer hook ?
	- useReducer : 
		- useReducer is alternative of useState 
		- useReducer is a react hook that allow functional component to managing complex state logic, especially when state updated depends on previous state or multiple actions 4
		- useReducer works by using a reducer function to handle state transition
		- The reducer takes the current state and an action and returns new state
		- useReducer hooks used when complex state logic and when multiple values are updated together (like form validation, redo/undo, ) 
		- syntax : const [state, dispatch] = useReducer(reducerFunction, initialValue)


# 25. What are the differences between useMemo and useCallback ?
# 34. What is the purpose of callback function as an argument of setState()?
	In React, especially when using class components, the setState() method accepts a second argument, which is a callback function that gets executed after the state has been updated and the component has re-rendered.

# 36. Which lifecycle hooks in class component are replaced with useEffect in functional components ?

| **Class Component Lifecycle**             | **Replaced by `useEffect`**                      | **Explanation**                                  |
| ------------------------------------------| ------------------------------------------------ | ------------------------------------------------ |
| `componentDidMount()`                     | `useEffect(() => { ... }, [])`                   | Runs once after the component mounts             |
| `componentDidUpdate(prevProps, prevState)`| `useEffect(() => { ... }, [deps])`               | Runs after the component updates (based on deps) |
| `componentWillUnmount()`                  | `useEffect(() => { return () => { ... }; }, [])` | Cleanup function runs when component unmounts    |


# 37. What is Strict mode in react ?
	React Strict Mode is a tool for highlighting potential problems in a React application. 
    It doesn’t render any UI and has no effect on the production build — it’s purely for development.

# 43. different design patterns used in react?
Presentational and Container Components
Higher-Order Components (HOC)
Render Props Pattern
Custom Hooks
Compound Components Pattern
Provider Pattern (Context API)
State Reducer Pattern

# 44. context api vs redux
| Feature                | Context API                      | Redux                                     |
| ---------------------- | -------------------------------- | ----------------------------------------- |
| **Purpose**            | Share global data (simple state) | Manage complex, large-scale app state     |
| **Built-in**           | ✅ Yes (React API)                | ❌ No (external library)                   |
| **Boilerplate**        | Minimal                          | More verbose (actions, reducers, store)   |
| **DevTools**           | ❌ No (manual setup)              | ✅ Yes (Redux DevTools)                    |
| **Middleware Support** | ❌ No built-in                    | ✅ Yes (`redux-thunk`, `redux-saga`, etc.) |
| **Performance**        | May re-render many components    | More control over updates                 |
| **Best For**           | Theme, auth, user settings       | Large apps with complex logic             |


# 45. prop types in react(How to apply validation on props in react)
	In React, PropTypes are used to validate the data types of props a component receives. This helps catch bugs during development by ensuring that the right kind of data is passed.
	PropTypes only work in development — they do not affect production performance or behavior.


# 46. What are React Mixins ?
	React Mixins were a pattern used to share reusable logic between class components before modern features like Hooks and Higher-Order Components (HOCs) became standard.
	⚠️ Mixins are deprecated in modern React. They only worked with React.createClass, not ES6 classes.
	A mixin is an object that contains reusable methods or lifecycle hooks that can be shared among multiple components.
	Think of it like copy-pasting common behavior into components automatically.



# 48. What are render props in react ?
	Render Props is a pattern in React where a component uses a function as a prop to determine what to render
	This allows code reuse and dynamic rendering logic, especially for sharing stateful logic between components — similar to what you might use hooks for today.

# What is forwardRef?
	- React.forwardRef is a React API that allows you to pass a ref from a parent component to a child component, even if that child is a functional component.
	- Normally, refs don’t work with functional components unless you explicitly forward them.


# What is Concurrent Rendering in React?
	- Concurrent Rendering is a feature introduced in React 18 that allows React to interrupt, pause, and continue rendering work without blocking the main thread.
	- Think of it as React multitasking — it can stop rendering one part of the UI to prioritize more important updates, like user input or animations.


# What is Batching in React?
	- Batching is the process where multiple state updates are grouped together into a single re-render for performance optimization.
	- Why It Matters:
		- Prevents unnecessary multiple renders

#  How to prevent re-renders in React?
	- 1. React.memo() for Functional Components
	- 2. useMemo() to Memoize Expensive Calculations
	- 3. useCallback() to Memoize Functions
	- 4. Avoid Anonymous Functions in JSX
	- 5. Split Components
	- 6. PureComponent (Class Component Only)
	- 7. Use key Wisely in Lists

#  Does React Hook work with static typing?
	Yes, React Hooks work very well with static typing, especially when using TypeScript.

# What is React Router
	- React Router is a routing library for React that enables you to build single-page applications (SPAs) with navigation without reloading the page.
	- It allows different components to be rendered based on the URL path, while keeping your app fast and dynamic.

| Feature                | Purpose                         |
| ---------------------- | ------------------------------- |
| `<Routes>` & `<Route>` | Define page components for URLs |
| `useNavigate`          | Navigate programmatically       |
| `useParams`            | Access URL parameters           |
| `Link`, `NavLink`      | SPA navigation                  |
| `Outlet`               | Nested routing                  |

# Key Features of React Router
	- Client-side routing (no full-page reloads)
	- Route-based code splitting
	- Dynamic route matching
	- Nested routes
	- Programmatic navigation
	- Route parameters, query strings, redirects

#  Can React Hook replaces Redux?
	-  In many cases, React Hooks can replace Redux, but not always.


# context API
	- The Context API is a built-in React feature that allows you to share state or data globally across your app — without prop drilling (passing props manually through multiple component levels).

# What is GraphQL?
	- GraphQL is a query language for APIs where:
		- You ask only for the data you need
		- It uses a single endpoint
		- It's faster than REST in many cases

	- How to use 
		-  Setup Apollo Client in React
			npm install @apollo/client graphql
	- index.js – Setup ApolloProvider
	- Query Data with useQuery - App.js
	- Mutate Data with useMutation - App.js

| Step                 | Tool / Concept                     |
| -------------------- | ---------------------------------- |
| Setup GraphQL Client | Apollo Client                      |
| Fetch data           | `useQuery()` + GraphQL query       |
| Send data            | `useMutation()` + GraphQL mutation |
| Server               | Needs GraphQL server or public API |
| Schema               | GraphQL schema (types, resolvers)  |


| Resolver             | Function that fetches data from DB |
| useQuery(get,getById)  | Fetch data from server (e.g., users) |
| useMutation            | Send data to server (e.g., create user) |
(add,update,delete) 
======================================================================================================
# 1. What are React Hooks, and how do they improve functional components?
Answer:
React Hooks allow functional components to use state and lifecycle features without needing class components. The most common hooks are:

useState: Manages state within functional components.
useEffect: Handles side effects like fetching data or subscribing to events.
useContext: Provides access to context values without prop drilling.
useReducer: Alternative to useState for complex state logic.
Hooks improve reusability, reduce boilerplate code, and make components easier to test and maintain.

===========================================================================================
# 2. How does Redux work, and when would you use it over Context API?
Answer:
	- Redux is a state management library that maintains a global state for an application. It follows a unidirectional data flow:
		- Actions: Describe state changes.
		- Reducers: Define how the state should change.
		- Store: Holds the global state.
		- Dispatch: Triggers state updates.

Use Redux when:
	- The app has a complex state that multiple components need access to.
	- Predictable state transitions are necessary.
	- Debugging and logging via Redux DevTools is needed.
- Context API is better suited for small-scale apps with simple state management needs.
===========================================================================================
3. What is the difference between useMemo and useCallback?
Answer:

useMemo: Memoizes the result of a function to avoid expensive recalculations.
useCallback: Memoizes the function itself to prevent unnecessary re-creation.
Example:


const memoizedValue = useMemo(() => expensiveCalculation(value), [value]);  
const memoizedFunction = useCallback(() => handleClick(), []);  
Use useMemo for performance optimization when recalculating values, and useCallback to prevent unnecessary function re-renders in child components.
===========================================================================================
4. How do you ensure a React application is responsive?
Answer:

Use CSS Grid and Flexbox for flexible layouts.
Implement media queries for different screen sizes.
Utilize relative units like %, em, and rem instead of fixed pixels.
Use React libraries like Material-UI or Tailwind CSS for responsive components.
Implement mobile-first design for better UX on smaller screens.

===========================================================================================
API Integration (RESTful APIs, Backend Collaboration)
5. How do you handle API integration in React?
Answer:

Use fetch or axios for API calls.
Store API data in the component’s state using useState.
Fetch data inside useEffect to avoid unnecessary requests.
Implement error handling and loading states.
Example:

useEffect(() => {
  axios.get('https://api.example.com/data')
    .then(response => setData(response.data))
    .catch(error => console.error(error));
}, []);

===========================================================================================
6. How do you handle API failures in a React application?
Answer:

Implement try-catch blocks for error handling.
Use retry mechanisms for transient failures.
Display error messages to users gracefully.
Implement fallback UI using ErrorBoundary.
Use status codes (like 401, 403, 500) to determine the right response.


===========================================================================================
Cloud Infrastructure (AWS: Lambda, API Gateway, S3)
7. What is AWS Lambda, and how does it work?
Answer:
AWS Lambda is a serverless compute service that runs code without provisioning servers. It:

Executes code in response to triggers (e.g., API Gateway, S3 events).
Scales automatically based on demand.
Charges only for the execution time used.
Use Lambda for backend tasks, API processing, and event-driven architecture.
===========================================================================================
8. How do you deploy a React application to AWS S3?
Answer:

Build the React app using npm run build.
Upload the build folder to an S3 bucket.
Configure the bucket as a static website.
Enable CORS settings if needed.
Use CloudFront for CDN caching and faster delivery.


===========================================================================================
Performance & Scalability
9. How do you optimize the performance of a React application?
Answer:

Use lazy loading (React.lazy, Suspense) to reduce initial load time.
Optimize re-renders using React.memo, useMemo, and useCallback.
Reduce bundle size with code splitting (React.lazy, import()).
Implement virtualization (react-window, react-virtualized) for large lists.
Optimize API calls using caching and debouncing.

===========================================================================================
10. How would you handle a slow-loading API in a React app?
Answer:

Show a loading indicator while fetching data.
Use caching (localStorage, sessionStorage, or state management tools).
Implement pagination or infinite scrolling.
Use background fetching to update data asynchronously.
Optimize API requests by debouncing or throttling.


===========================================================================================
Collaboration & Problem Solving
11. How do you handle conflicting requirements in a team?
Answer:

Communicate with stakeholders to clarify requirements.
Prioritize tasks based on business needs.
Suggest technical trade-offs and find a balanced solution.
Document decisions for future reference.

===========================================================================================
12. How would you debug a React app that isn't rendering correctly?
Answer:

Check console errors using DevTools.
Inspect React components using React Developer Tools.
Verify state updates using console.log or useEffect.
Test API calls using Postman or the network tab.
Use debugging tools like Redux DevTools if applicable.

===========================================================================================
General Expertise
13. What are CI/CD pipelines, and how do they benefit development?
Answer:
CI/CD (Continuous Integration/Continuous Deployment) automates code integration, testing, and deployment. Benefits include:

Faster code releases with automated deployments.
Reduced bugs via continuous testing.
Efficient collaboration among developers.
Tools: GitHub Actions, Jenkins, CircleCI, AWS CodePipeline
===========================================================================================
14. What are the best practices for writing clean and maintainable React code?
Answer:

Use functional components with hooks.
Follow component-based architecture.
Keep components small and reusable.
Use descriptive variable and function names.
Document complex logic with comments.
Maintain a consistent folder structure.

===========================================================================================
Final Technical Question
15. How would you design a scalable React application?
Answer:

Follow modular architecture with feature-based directories.
Use Redux or Context API for state management.
Implement lazy loading and dynamic imports.
Optimize performance with memoization and virtualization.
Ensure server-side rendering (SSR) or static generation if SEO is important.


===========================================================================================
Behavioral Questions
16. Tell us about a time you solved a complex technical problem.
Answer: (Provide STAR-based response: Situation, Task, Action, Result)

Situation: Faced a performance issue in a React app due to excessive re-renders.
Task: Optimize component rendering without breaking functionality.
Action: Used React.memo, useMemo, and useCallback to minimize unnecessary renders.
Result: Improved load time by 40% and enhanced user experience.






# 50. What are the differences between create element vs clone element in react ?
# 51. When to use useState and useReducer?
# 52. What are protected routes in react ?
# 53. What is react-router has context menu
# 54. What is react query, react profiler
# 55. lifting state up 
# RXJs

# 10. What are synthetic events in react ?
# 11. What are the difference between Package.json and Package.lock.json ?
# 12. What are the differences between client side and server side rendering ?
# 19. What are Ref’s in React?
# 20. What is meant by forward ref ?
# 39. Practical question: How to send data from child to parent using callback functions ?
# 40. Practical question: How to send the data from child component to parent using useRef ?
# 35. Practical question: create a custom hook for increment/decrement counter ?
# 33. Practical question: Give an example of context api usage ?


Basics
What is React.js, and its key features?
What is JSX, and how does it differ from JavaScript?
What is the Virtual DOM, and why is it important?
Components vs. elements in React?
Functional vs. class components?
Purpose of render() in class components?
Significance of key prop in lists?
How does React handle events, and what are synthetic events?
Controlled vs. uncontrolled components?
What are props, and how are they used?

State & Lifecycle
11. What is state, and how does it differ from props?
12. How to update state in React?
13. Purpose of setState() and why is it asynchronous?
14. What are lifecycle methods? Name a few.
15. componentDidMount in functional components?
16. Purpose of shouldComponentUpdate?
17. How to handle side effects in functional components?
18. What happens with multiple setState() calls in a function?
19. Purpose of getDerivedStateFromProps?
20. Prevent unnecessary re-renders?

React Hooks
21. What are React Hooks, and why introduced?
22. What is useState, and how does it work?
23. What is useEffect, and its common use cases?
24. How does useContext work, and when to use it?
25. useReducer vs. useState?
26. Purpose of useCallback?
27. How does useMemo improve performance?
28. Rules of using Hooks?
29. How to create a custom Hook?
30. What is useRef, and its use cases?

Routing & State Management
31. What is React Router, and how to implement it?
32. BrowserRouter vs. HashRouter?
33. How to pass parameters in React Router?
34. What is Redux, and how does it work with React?
35. Actions, reducers, and store in Redux?
36. Purpose of middleware (e.g., Redux Thunk)?
37. How does Context API work for state management?
38. Redux vs. Context API: Pros and cons?
39. Zustand or Recoil vs. Redux?
40. Handle async actions in Redux?

Performance & Optimization
41. Optimize a React app’s performance?
42. What is code-splitting, and how to implement it?
43. React Lazy and Suspense: How do they work?
44. How does React.memo optimize components?
45. Common performance pitfalls in React?
46. Purpose of PureComponent?
47. Use React Profiler for performance issues?
48. What is server-side rendering (SSR), and its benefits?
49. Implement lazy loading of images?
50. Tools to measure and improve React performance?
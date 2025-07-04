
# 1. What is React?
    - React is open source javascript library for building user interfaces for crating single page web application
    - it is maintained by facebook in mar 2013 
    - It is allows developer to build reuable UI components
    - It is used component bases architecturen and virtual DOM for faster rendering
    - It is used for building complex user interfaces and single page applications
# 2. What is useMemo ?
    - useMemo is  a react hook that memoize the result of functions and its only recalculated when its dependecies changes . 
    - It helps to optimize the performance of the applications by reducing number of rerenders and calculations
    - It is used to prevent unnecessary re-renders of components and prevent unnecessary calculations
    - it is used for cache expensive.

# 3. What are the features of React ?
    - Components : React is based on components. Components are reusable pieces of code that can be used to build user interfaces 
    - Virtual dom : virtual dom is lightweight copy of real dom. it is used for faster rendering 
    - JSX : JSX is a syntax extension for JavaScript. it is used for building user interfaces
    - One way data binding : React follows one way data binding. it means that parent component can pass data to child component but child component cannot pass data to parent component
    - Declarative UI : React follows declarative programming. it means that developer need to declare what they want to see in the UI and react will take care of how to achieve it 


# 4. What is JSX ?
    - JSX stands for javascript XML 
    - It is syntax extension to write html like code in javascript file. 
    - brower doesn;t understand JSX so it need to be converted to javascript before it can be executed by browser
    - react uses babel as a transpiler to convert JSX to javascript 
    
# 5. What is DOM ?
    - DOM stands for document object model
    - DOM represent a web pag as a tree like structure to access and manipulate the content or structure of the web page
# 6. What is Virtual Dom ?
    - Virtual DOM is a lightweight copy of real DOM 
    - react keeps copy of real dom in memory when changes occur 
        - first they updates the DOM 
        - it compares new virtual dom to previous virtual dom using diffing algorithm
        - it applies only necessary changes to the real dom using reconcillation
# what is reconcillation 
    - Reconcillation is the process that react uses to update the dom efficienly by comparating new virtual dom to previous virtual dom and applying only necessary changes to the real dom

# 7. What is component life cycle of React class component ?
    -
# 8. What are fragments in react ?
    - Fragments is a way to group a list of childs without adding extra nodes to the DOM

# 9. What are props in react ?
    - Props is a way to pass that from parent component to child components when props changes its rerenders 

# 10. What are synthetic events in react ?
# 11. What are the difference between Package.json and Package.lock.json ?
# 12. What are the differences between client side and server side rendering ?
# 13. What is state in Reactjs?
    - State is an object that holds dynamic data of the component
# 14. What are props ?
    - props is a way to pass data from parent component to child component 

# 15. What are the differences between State and Props in react ?
    - State : 
        - State is an object that holds dyanamic data of the component 
        - state is mutable 
        - in state, data is handled within component
    - props : 
        - props is a way to pass data from parent component to child component 
        - props is immutable 
        - in props, data handled from parent component 

# 16. What is props drilling ?
    - Prop drilling is a technique to pass down data to multiple layers of the component 
    - prop drilling occurs when we pass data from parent component to child component through multiple nested components if intermediate component does't need the data still they need to accept it and forward it to another component.

# 17. What are the disadvantages of props drilling and How we can avoid props drilling ?    
    - Disadvantages of props drilling :
        - it makes to code harder an read and maintain 
        - it makes to code harder to debug and test
    - to avoid prop drilling 
        - i usually use context api 
        - by using Redux or MobX for state management
        - using callback function to pass data from parent component to child component

# 18. What are Pure components in React ?
    - Pure components is a component when its state or props changes then only it rerenders using shallow comparison 

# 19. Whatare Ref’s in React?
    - Refs is a way to access DOM nodes directly or react elements in a component

# 20. What is meant by forward ref ?
    - forward ref is a way to pass refs from parent component to child component

# 21. What are Error boundaries ?
    - Error boundries are the component that catches javascript error in their child component and display a fallback UI instead of calling entire app or react application

# 22. What are Higher order components in react ?
    - Higher order components is a functions that takes component as an argument and returns a new component with additional features

# 23. What are the differences between controlled and uncontrolled components ? 
    - Controlled components : 
        - It is a form input element like select, input and textarea whose value is managed by react state 
        - controlled components are fully controlled by react
        - we can access data directly using use state hook and update by using on change
    - Uncontrolled components :
        - It is a form input element that can managend state internally using dom 
        - but uncontrolled component can reads only data when they are need.
        - we can access data using ref 

# 24. What is useCallback ?
    - useCallback is a react hook that memoize a function - it returns a same function as a reference between renders unless its dependencies changes 
    - it helps to optimize performance by preventing unneccessrry re-creation of functions on every render
    - it is also used to pass function as props to child component
    - useCallback works with dependency array - if dependency array is empty then it will return same function reference on every render 
    - if dependency array is not empty then it will return new function reference on every render when dependency changes
    - useCallback is used to prevent unnecessary re-renders of child components when parent component re-r erenders
    - useCallback is used to memoize a function and returns a new function reference on every render when dependency changes

# 25. What are the differences between useMemo and useCallback ?
    - useMemo is a react hook that memoize a result of a function and returns a value and its only recalculated when its state or props changes
    - it uses when its state updates its on previous state . react remembers is previous state from previous renders and compares it with current state if state is chnaged then only it returns new value other wise it returns previous value and prevents unneccessary rerenders 
    - useMemo is used to memoize a value and return a value


# 26. What are keys in React ?
    Keys helps to identify the list of element which are added, removed and updatedin the list 

# 27. What is Lazy loading in React ?
    - Lazy loading is a loading technique that loads the component when they are needed. Not to load on intial render of the application. so it increases the performance of the application.
    - Lazy loading is used to load the component on demand. It is used to load the component

# 28. What is suspense in React ?
    - Suspense is a feature in react that allows component to wait for something before rendering such as data fetching or code splitting
    - it is used to handle the loading state of the component 

# 29. What are custom hooks ?
# 30. What is useReducer hook ?
# 31. What are Portals in react ?
    Portals is a feature that let you render child component outside the parent component 

# 32. What is context in react ?
    - Context 
# 33. Practical question: Give an example of context api usage ?
# 34. What is the purpose of callback function as an argument of setState()?
# 35. Practical question: create a custom hook for increment/decrement counter ?
# 36. Which lifecycle hooks in class component are replaced with useEffect in functional components ?
# 37. What is Strict mode in react ?
# 38. What are the different ways to pass data from child component to parent component in react ?
# 39. Practical question: How to send data from child to parent using callback functions ?
# 40. Practical question: How to send the data from child component to parent using useRef ?
# 41. How do you optimize your react application ?
     - Use memoization to prevent unnecessary re-renders by using memoize function like useMemo and useCallback
     - Use lazy loading to load components on demand
     - Use suspense to handle loading state of the component
     - Use context api to share data between components
     - Use useReducer to manage state of the application
     - Use useEffect to handle side effects of the component
     - Use shouldComponentUpdate to prevent unnecessary re-renders
     - Use React.memo to prevent unnecessary re-renders of the component

# 42. How would you consume a RESTful JSON API in reactjs?
# 43. different design patterns used in react?
# 44. context api vs redux
# 45. prop types in react(How to apply validation on props in react)
# 46. What are React Mixins ?
# 47. what are the different hooks you have used ?
# 48. What are render props in react ?
# 49. What are the different types of exports and imports ?
# 50. What are the differences between create element vs clone element in react ?
# 51. When to use useState and useReducer?
# 52. What are protected routes in react ?
# 53. What is react-router has context menu
# 54. What is react query, react profiler
# 55. lifting state up 
# RXJs


# 1. What is React?
  - React is a open source javascript library which is used to building user interface(UI) for SPA(single page application)
  - React used component based architecture and virtual DOM for faster rendering.
  - Its allows developer to create reusable UI components 
  - React developed by facebook in 2013. 

# 2. What is useMemo ?

# 3. What are the features of React ?
  - Uses virtual DOM so faster and lightwight 
  - component based architecture 
  - Decalrative UI 
  - Unidirectional data flow 
  - Hooks  


# 4. What is JSX ?
  - JSX stands for javascript XML 
  - JSX is a syntax extension that allows writing HTML-like code in javascript 

# 5. What is DOM ?
  - DOM stands for document object model 
  - DOM represents the web page as a tree-like structure which allows to dynamically access and manipulate the content and structure of web pages.

# 6. What is Virtual Dom ?
  - Virtual DOM is a lightwight copy of real DOM
  - React keeps copy of real DOM( virtual DOM) in memory, when changes occur 
    1. Updates DOM 
    2. Compares new virtual DOM to  previous one (used diffing algorithm for comparison)
    3. Applies only neccessary changes to the real DOM (reconcillation) 

# 7. What is component life cycle of React class component ?
  Component life cycle methods are special methods that get called at various stages of component life cycle
   
  In class component there are `3 phases` : 
    1. `Mounting phase : component is added in DOM`
      In mounting phase there are `4 methods`
        - constructor()
        - static getDerivedStateFromProps
        - renders()
        - componentDidMount

    2. `Updating phase : state or props changes`
      In updating phase there are `5 methods`
        - static getDerivedStateFromProps()
        - shouldComponentUpdate()
        - renders()
        - getSnapShotBeforeUpdate()
        - componentDidUpdate()

    3. Unmounting phase : Cleanup (Clearing timers (setTimeout, setInterval), Unsubscribing from events (WebSocket, window listeners))
      1 method 
        - componentWillUnmount()
        

# 8. What are fragments in react ?
  - Fragment is a group a list of children elements without adding extra nodes to the DOM
  -  `WHY` : to avoid unnnecessary <div> wrappers


# 9. What are props in react ?
  - Props is a way to pass data from parent to child components 
  - Props are immutable (read-only inputs) 

# 10. What are synthetic events in react ?
# 11. What are the difference between Package.json and Package.lock.json ?
# 12. What are the differences between client side and server side rendering ?
# 13. What is state in Reactjs?
  - state is an object that holds dynamic data for a component. when state change component re-renders 
  - state is current data of the component 
  - state is mutable
  - used to handle internal changes 
  - can be updated using hook ot setState()

# 14. What are props ?
  - Props is a way to pass data from parent components to child components 
  - Props are immutable 
  - used for send data to the component 
  - can't be modified within components

# 15. What are the differences between State and Props in react ?
  # state :
  - State is an objects that holds dynamic data for a component. when state changes components re-renders 
  - State is current data of the ccomponent
  - State is mutable 
  - used for handle internal changes
  - can be updated using setState() or hook 

  # props: 
  - Props are a way to pass data from parent component to child component 
  - props are immutable 
  - used to sent data to components 
  - can't be modified within components  

# 16. What is props drilling ?
  - prop drilling is a process of passing down props through multiple layers of a component 
  - props drilling occurs when data is passed through many nested components even if intermediate component don't required that data - they only forwad it.

  # why to avoid ?
  - maintenance : prop drilling can make code harder to maintain to changes an data flow require updates across multiple components
  - complexity : it increase code complexity and reduces code readability 
  - debugging : debugging becomes challenging when props need to be traced through numerous components

  # how to avoid 
  - using context API
  - using redux
  - using component composition
  - using callback functions
  - using custom hooks


# 17. What are the disadvantages of props drilling and How we can avoid props drilling ?
  # Disadvantages : 
  - code becomes hard to read and maintain
  - intermediate components are forced to accepts and forward props 
  - Tightly coupled components 

  # How avoid?
  - react context api
  - using redux
  - custom hooks 
  - react component composition 
  - using callback functions

# 18. What are Pure components in React ?
  - A pure components in a react is a component that only re-renders when its props and state change, using a shallow comparison

# 19. Whatare Ref’s in React?
  - refs provide a way to access DOM nodes or react elements directly
  - Usages : 
    1. managing focus
    2. text selections 
    3. animations 
    4. integrating 3rd party libraries

# 20. What is meant by forward ref ?
  - forwardRef is a technique to passing refs through a component to one of its child DOM nodes
  # usages :  
    - when a parent component needs to interact with a child nodes

# 21. What are Error boundaries ?
# 22. What are Higher order components in react or HOC?
  - HOC stands for higher order components 
  - Higher order components are a function that can passed component as argument and returns a new component with additional features.
                                                `or`
  - Higher order components are a function takes a component as an argument  and return a new component with additional features.
  - HOC is used to reuse code, make code more modular and reusable
  - HOC is often used authorisation, authentication and caching

# 23. What are the differences between controlled and uncontrolled components ? 
# 24. What is useCallback ?
# 25. What are the differences between useMemo and useCallback ?
# 26. What are keys in React ?
# 27. What is Lazy loading in React ?
# 28. What is suspense in React ?
# 29. What are custom hooks ?
# 30. What is useReducer hook ?
# 31. What are Portals in react ?
# 32. What is context in react ?
# 33. Practical question: Give an example of context api usage ?
# 34. What is the purpose of callback function as an argument of setState()?
# 35. Practical question: create a custom hook for increment/decrement counter ?
# 36. Which lifecycle hooks in class component are replaced with useEffect in functional components ?
# 37. What is Strict mode in react ?
# 38. What are the different ways to pass data from child component to parent component in react ?
# 39. Practical question: How to send data from child to parent using callback functions ?
# 40. Practical question: How to send the data from child component to parent using useRef ?
# 41. How do you optimize your react application ?
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
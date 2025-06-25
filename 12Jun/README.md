# React 
- React is open source javascript library to create User interfaces for Single page application 
- It allows developer to create reusable UI components 
- react used coponent based architechture and virtual DOM for faster rendering 

- Features 
    - component based architecture
    - virtual dom
    - unidirectional data flow 
    - declarative UI 
    - hooks 

- Advantages 
    - fast rendering 
    - resuable components 

- Disadvantages
    - fast changing platform 
    - only UI library 

# DOM 
    - DOM stands for document object model 
    - DOm presents the web page as a tree like structure to allows dynamically access and manipulate the content and structure to the DOM 

# VIrtual DOM 
    - virtual DOM is lightweight copy of real dom 
    - react keeps copy of real DOM in memory  and when changes occur then 
        1. updates dom 
        2. compares new virtual dom to previous one ( using diffing algorithm )
        3. applies only necessary changes to the dom ( using reconcillation)


# JSX 
    - JSX stands for javascript XML 
    - JSX is a syntax extension to write html like code in javascript 

# reconcillation 
    - reconcillation is the process react uses to updates the DOM efficiently when a components state or props changed
    
    
# Controlled components and uncontrolled components 
    - Controlled components 
        - data stored in react state
        - Controlled components are accessed through usestate and onchange
        - controlled component in react is an input element (like input, textarea, select) whose value is controlled by react state 
        
    - Uncontrolled components 
        - data stored in DOM( using refs)
        - using useRef().current.value we can access
        - Uncontrolled component manages its own state internally - react does not control the inputs value directly. We use refs to access the value.

    
# JSX, webpack , babel 

    JSX - 
        - stands for javascript XML 
        - syntax extension of javascript to write html like code in javascript

    Webpack 
        - Webpack is module bundler 
        - It bundles all files like js, css, and images etc into a few output files ( usaually bundles.js) so the browser load efficiently 

    Bable 
        - babel is transpiler
        - babel is used to convert jsx into javascript  so that it works in all browser 
        - babel is used to convert latest javaascript( ES6 +) to old ones so it works in all browsers

# Class components and functional componnets 

- Class componnents 
    - ES6 classes 
    - uses  a class and this keyword
    - manages state with this.state
    - - uses old lifecycle methods 


- function components 
    - simple javascript function 
    - uses javascript functions
    - uses hooks like useState, useEffect
    - shorter and easier to write  


# redux 
    - redux is state management library for javascript apps, commonly used in react 
    - Its helps you manage application state in a single global store 

Why 
    - centralized state management 
    - predictable state update
    - easier debugging and testing 
    - middleware support 


# hooks in react js 
    - react hooks are built in function provided by react that allow functional component to use state, lifecycle features and other features 
    - before hooks, class component life cycle methods were used to maintain state in react application
    - to use react hook first we have to import if from act library 

    Types of react : 
        - useState
        - useEffect
        - useLayoutEffect
        - useReducers
        - useContext
        - useRefs
        - useMemo
        - useCallback 

# fragment 
        - fragment is a way to group a list of children without adding extra nodes to the row 
    
# Portals : 
    portals let you render a children into a DOM nodes outside the parent component 

# Higher order components (HOC)
    - HOC stands for higher order components 
    - Higher order components is a functions that can passed component as an arguments and returns a new component with extra features 

# Pure components 
    - Pure components is a component that only re renders only when state and props has changed 

# state : 
    - state is an object that holds dynamic data for a components when state changes then component rerenders 
    - state is a current data of a component 
    - state is mutable 
    - state is used for handle internal changes 
    - can be updated using hook 
    - data managed within components  
    

# props : 
    - props is a way to pass data from parent component to child component 
    - props is immutable 
    - props is used to transfer data from one component to another components 
    
# Optimize react application
    - code splitting 
    - memoize functions using useMemo
    - lazy loading 
    - avoid unnecessary changes 
    - virtualizations 


# prop drilling 
    - prop drilling is the process to passing down props through multiple layers 
    - prop drilling occurs when data is passed through many nested components if intermediate component is don't required that data - they only forward it. 

how to avoid prop drilling 
    - using context API 
    - using custom hooks 
    - using redux 
    - using callback functions 
    - using component composition 

# react query 
    - react query is powerful data fetching and state management library 
    - it helps to fetch , cache, sync and updates server data easily - like API calls to REST, graphQL 
    - it is replacement for manually using useSTate + useEffect + axios/ fetch for data fetching 

# react fibre 
    - react fibre is reconcillation algorithm and rerendering engine is introduced in react 16 to improve rendering performance and enabled advanced features like concurrent rendering, suspence , error boundries 

why react fibre is introduced 
    - react fibre is introduced because the old reconcillation is synchronous and recursive , meaning large components tree could block the main thread and make the UI unresponsive 


# concurrent rendering 
    - 

# suspense 
    - React.suspense is a component used to handle the loading state of component that are loaded asynchronously ( eg. via React.lazy , data fetching with framework like relay or other concurrent features )
    - SUspense wraps this lazy component and shows the fallback UI ( like a loading spinner) until the component finishes loading 


react.suspense is a component used to handle loading state of component that are loaded asynchronously (eg via react.lazy, data fetching with framework like relay or other concureent features )


# Error boundries 



Reacr.suspense is a component used to handle loading state of component that are loaded asynchronously ( eg. via react.lazy, data fetching with framework like relay and other concurrent features)
- react suspense wraps this lazy component and show fallback UI ( like loading spinner) until the component finishes loading
















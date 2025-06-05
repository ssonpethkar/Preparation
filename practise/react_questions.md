#  What is React js
    - React js is a open source javascript library is used to building user interfaces (UI) for single page application 
    - React is developed by facebook
    - React used component based architecture and virtual DOM for faster rendering
    - It allows to developer to create reusable UI components 

`Features` : 
    - uses virtual DOM
    - component based architecture 
    - Declarative UI 
    - Unidirectional data flow
    - Hooks

# What is JSX 
    - JSX stands for javascript XML
    - JSX is a syntax extension that allows writing HTML like code in javascript
#  What is DOM
    - DOM stands for document object model 
    - DOM represents the web page as a tree like structure which allows to dynamically access and manipulate the content and structure of a web page

#  WHat is virtual DOM
    - Virtual DOM is a light weight copy of real DOM 
    - React keeps copy of real DOM ( virtual DOM ) in memory , when chnages occur
        1. Updates DOM
        2. Compares new virtual DOM to previous one (Used diffing algorith for comparison)
        3. Applies only necessary changes to the real DOM ( reconcillation)

#  what is reconcillation 
    - Reconcillation is the process react uses to update the DOM efficiently when a components state or props change

#  What is difference between virtual dom and shallow dom, dom in React js

| Term            | React Feature?   | What It Is                                                       | Purpose                            |
| --------------- | --------------   | ---------------------------------------------------------------- | ---------------------------------- |
| **DOM**         | No               | Browser’s live HTML structure                                    | Used by browser to render the page |
| **Virtual DOM** | ✅ Yes          | Lightweight JS copy of the DOM (used by React)                   | Makes updates efficient and fast   |
| **Shallow DOM** | ❌ No           | Not a React concept; likely testing or confusion with Shadow DOM | N/A                                |
| **Shadow DOM**  | ❌ No (Web API) | Encapsulated DOM used in Web Components                          | Isolates styles/components         |


#  What is controlled and uncontrolled component in React js
`Controlled Components`: 
    - Data stored in react state
    - Controlled components are accessed through useState and onChange
    - react should be controlled 

`Uncontrolled Components`
    - Data stored in DOM (uses refs)
    - using useRef().current.value we can access 
    - react should not be controlled

#  What is jsx, babel, webpack
`jsx`: 
    - JSX stands for javascript XML 
    - JSX is javascript extention that allows to write HTML like code in javascript
`webpack`: 
    - Webpack is a module bundler
    - It bundles all your files (JS,CSS,images etc.) into a few output files (usually bundle.js) so the browser can load them efficiently.

`babel`: 
    - babel is javascript transpiler
    - It converts modern javascript(ES6+) into older javascript(ES5) so that it works in all browsers - especially older ones.

#  What is hooks in React js
    - React hooks are built in function provided by react that allow functional component to use state , lifecycle features and other react features 
    - Before hooks, class component lifecycle methods were used to maintain state in react application
    - to use react hook first we have to import it from react library.

`Types of react`: 
    `1. useState` : add local state to a functional component 
    `2. useEffect` : Handles side effects like( like API call, DOM changes, subscriptions)
    `3. useCallback`: Memoized a functions to avoid unnecessary rerenders
    `4. useMemo`: Memoize expensive calculations
    `5. useContext`: Accesses the context API(global/shared state)
    `6. useRef`:  Persists mutable values across renders (like accessing DOM elements or timers) 
    `7. useReducer`: as an alternative to useState for complex logic
    `8. useLayoutEffect`: like useEffect, but fires synchronously after DOM updates 

#  Difference between class component and function component
`Class component`: 
    - ES6 class syntax
    - Uses a class and 'this' keyword
    - manages state with this.state
    - uses old lifecycle method like componentDidMount
    - was common before react hooks

`Functional component `:
    - Plain JavaScript function / arrow function
    - just a javascript function
    - uses hooks like useState, useEffect
    - shorter and easier to write 
    - preffered in modern react x

#  What is Redux    
    - Redux is a state management library for javascript apps, commonly used in react.
    - It helps you manage application state in a single gloabal store

    WHY : 
        - centralized state management
        - predictable state update 
        - easier debugging and testing 
        - middleware support


#  What is reducer, action, store in Redux
#  What is middleware in Redux
#  Explain data flow in Redux
#  What is Redux-Thunk
#  What is Redux-Saga, Difference between Redux-thunk and Redux-saga


#  How can we implement componentWillUnmount in function component
#  useEffect,UseState, useMemo.useCallback hooks in Details
#  Explain lifecycle method in React js


#  What is difference between export default and export in React js
`default export`:
    - Used to export one main thing from file
    - you can name it anything when importing

`export(named export)`
    - Used to export multiple things from a file 
    - you must use the exact name when importing

#  What is portal in React js
    - Portals let you render children into a DOM node outside the parent component.

#  What is reconciliation in React js
    - Reconcillation is the process react uses to update DOM efficiently when components state or props changes.

#  What is useRef in React js
#  What is server side render in React js


#  What is useStrict in React js
    - useStrict in react doesn't exist as a hook - but you might reffering to <React.Strictmode> , which is common feature of react 

    - <React.StrictMode> is a tool for highlighting potential problems in a React application.

    - It does not render anything to the DOM — it only helps with development and debugging.

`🧠 Purpose`:   It helps you:
    - Find unsafe lifecycle methods
    - Warn about usage of deprecated APIs
    - Detect unexpected side effects
    - Help prepare your app for future React features


#  What is fragment in React js
    - Fragment is a way to group a list of children without adding extra nodes to the row.

#  What is react router in React js
`React routing`: 
    - Routing allows you to create a single page application with navigation, without the need for a full page refresh

`React router`: 
    - React router is a library for handling routing and enables navigation and rendering of different component based on the URL.

#  What is node module in React js
    - Node modules is a folder that stores all dependencies(libraries and packages) your react projects need to run



#  What is the default localhost server port in react js.
| Tool               | Default Port               |
| ------------------ | -------------------------- |
| Create React App   | **3000**                   |
| Vite               | **5173**                   |
| Next.js (Dev)      | **3000**                   |
| Webpack Dev Server | **8080** (if custom setup) |


#  how can we change the local server port
`Option 1`: Use Environment Variable
    - PORT=4000 npm start
On Windows (CMD):
    - set PORT=4000 && npm start
`Option 2`: Create .env file in root:
    env
    PORT=4000


#  What is high order component in React js
    - HOC is a higher order components 
    - Higher order component are a function that can passed component as a argument and returns a new component with additional features. 

#  What is pure component in React js
    - A pure components in react is a component that only re-renders when its props and state change using a shallow comparison.

#  What is difference state and props in React js
`state` : 
    - state is an object that holds dynamic data for a component when state change component re-renders.
    - state is current data of the component
    - state is mutable
    - used to handle internal changes 
    - can be updated using hook of setState()
    - data managed within component

`props` : 
    - Props is a way to pass data from parent component to child component
    - Props are immutable
    - used for send data to the component
    - can't be modified within components
    - data passed from parent component to child component


#  How to optimize React js app
    - code splitting (React.lazy, suspense)
    - memoization (React.memo, useMemo, useCallback)
    - virtualization ( eg. reacct-window)
    - avoid unnecessary renders 
    - lazy loading 

#  What is difference between React js and Angular js
`React JS`:
    - react js is a javascript library
    - developed by facebook
    - Unidirectional data flow
    - react uses component based architecture 
    - uses virtual DOM
    - one way data binding
    - A UI library focused on building user interfaces using components. You handle routing, state, and other parts using separate libraries.

`Angular JS`: 
    - Angular is a framework
    - Developed by google
    - Bidirectional data flow
    - angular uses component based + MVC architechture
    - uses real DOM
    - two way data binding
    -  A full framework with everything built-in — routing, forms, HTTP, state, testing tools, etc.


#  What is prop drilling in React js how to overcome it
    - Prop drilling is the process of passing down props through multiple layers of a component
    - Prop drilling occurs when data is passed throulgh many nested component if intermediate component don't required that data - theu only forward it.

`how to overcome it`:
    - using context API
    - using redux
    - using component composition
    - using callback functions
    - using custom hooks 


#  What is context api in React js


#  What is super, constructor, render function in React js
`constructor`: 
    - a special method in class components. Its called once when the component is created.
    - its used for initialize state and bind methods 

`super(props)`; 
    - super() call the constructor of the parent class(React.component).
    - In class components, you must call super(props) before using this.
    - without it this.props and this.state will not be set up correctly. 

`render`: 
    - render() is required method in every class component. 
    - its tell react what to display on the screen

# what is react query 
    - React query is  a powerful data-fetching and state management library for react apps 
    - It helps you to fetch , cache, sync, and updates server data easily - like API calls to REST , graphQL    
    - it is replacement for manually using useEffect + useState+ Axios/fetch for data fetching

# what is react fibre 
    - React fibre is a reconcillation algorithm and re-rendering engine introduced in react 16 to improve rendering performance and enable advanced feature like concurrent rendering, suspense, error bountries.

    ***why react fibre was introduced 
    - the old reconcillation algorithm (pre-react 16) was `synchronous` and `recursive`, meaning large component trees could block the main thread and make the UI unresponsive


# 1.Concurrent rendering 
# 2. Time Slicing
# 3. Suspense and lazy
# 4. Error boundries
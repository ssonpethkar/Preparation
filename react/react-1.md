
### **1. What is React?**

**React** is an open-source JavaScript library developed by Facebook for building user interfaces, especially for single-page applications (SPAs). It allows developers to create reusable UI components.

**Example:**

```jsx
function Greeting() {
  return <h1>Hello, world!</h1>;
}
```

This simple component can be reused across different parts of your application.

---

### **2. What is useMemo?**

`useMemo` is a React Hook that helps optimize performance by **memoizing the result of a computation**. It only recalculates the memoized value when one of its dependencies changes.

**Syntax:**

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

**Example:**

```jsx
const App = () => {
  const [count, setCount] = useState(0);
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>{expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

---

### **3. What are the features of React?**

* **Component-Based:** Build encapsulated components that manage their state.
* **Virtual DOM:** Efficient diffing and updating of UI.
* **Declarative UI:** Describe what the UI should look like, React handles the rendering.
* **Unidirectional Data Flow:** Data flows from parent to child components via props.
* **Hooks:** Functional components can use state and lifecycle features.

---

### **4. What is JSX?**
- JSX stands for javascript XML
**JSX (JavaScript XML)** is a syntax extension that allows writing HTML-like code inside JavaScript.

**Example:**

```jsx
const element = <h1>Hello, JSX!</h1>;
```

Behind the scenes, JSX is compiled into:

```jsx
React.createElement('h1', null, 'Hello, JSX!');
```

---

### **5. What is DOM?**

**DOM (Document Object Model)** is a programming interface that allows JavaScript to interact with HTML and XML documents. It represents the document as a tree structure where each node is an object representing a part of the document.

**Example:**

```html
<div id="root">Hello</div>
```

JavaScript can access and manipulate this:

```js
document.getElementById("root").textContent = "Hi there!";
```

---



### **6. What is Virtual DOM?**

The **Virtual DOM (VDOM)** is a lightweight JavaScript representation of the actual DOM. React keeps a copy of the real DOM in memory (the Virtual DOM), and when changes occur, it:

1. Updates the VDOM.
2. Compares the new VDOM with the previous one (diffing).
3. Applies only the necessary changes to the real DOM (reconciliation).

**Why?** DOM manipulation is expensive. The VDOM improves performance by minimizing updates.

**Example:**

```jsx
// React will only re-render the part that changes
const App = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};
```

---

### **7. What is the component lifecycle of React class component?**

In class components, React provides lifecycle methods in three main phases:

1. **Mounting** (component is added to the DOM):

   * `constructor()`
   * `static getDerivedStateFromProps()`
   * `render()`
   * `componentDidMount()`

2. **Updating** (state or props change):

   * `static getDerivedStateFromProps()`
   * `shouldComponentUpdate()`
   * `render()`
   * `getSnapshotBeforeUpdate()`
   * `componentDidUpdate()`

3. **Unmounting**:

   * `componentWillUnmount()`

**Example:**

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>Hello</div>;
  }
}
```

---

### **8. What are fragments in React?**

**Fragments** let you group a list of children elements without adding extra nodes to the DOM.

**Why?** To avoid unnecessary `<div>` wrappers.

**Example:**

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);
```

This won’t create an additional wrapper in the DOM like `<div>` would.

---

### **9. What are props in React?**

**Props (short for "properties")** are read-only inputs to a React component. They allow data to be passed from parent to child components.

**Example:**

```jsx
const Welcome = (props) => <h1>Hello, {props.name}</h1>;

// Usage
<Welcome name="John" />
```

Here, `"John"` is passed as a prop to the `Welcome` component.

---

### **10. What are synthetic events in React?**

**Synthetic events** are React's cross-browser wrapper around the browser’s native event system. They normalize events so they behave consistently across different browsers.

**Example:**

```jsx
const handleClick = (event) => {
  console.log(event.type); // "click"
};

return <button onClick={handleClick}>Click me</button>;
```

`event` is a synthetic event with consistent properties and behavior.

---


---

### **11. What are the differences between `package.json` and `package-lock.json`?**

| Feature                 | `package.json`                            | `package-lock.json`                                   |
| ----------------------- | ----------------------------------------- | ----------------------------------------------------- |
| Purpose                 | Lists project dependencies and scripts    | Locks the versions of installed packages              |
| Maintained by           | Developers manually or via `npm install`  | Automatically generated by npm                        |
| Contains version ranges | Yes (e.g., `"^1.0.0"`)                    | Exact version (e.g., `"1.0.3"`)                       |
| Affects reproducibility | No – allows version drift across installs | Yes – ensures consistent installs across environments |

**Example:**

`package.json`:

```json
"dependencies": {
  "react": "^17.0.0"
}
```

`package-lock.json`:

```json
"dependencies": {
  "react": {
    "version": "17.0.2",
    "resolved": "...",
    "integrity": "..."
  }
}
```

---

### **12. What are the differences between client-side and server-side rendering?**

| Feature            | Client-Side Rendering (CSR)     | Server-Side Rendering (SSR) |
| ------------------ | ------------------------------- | --------------------------- |
| Rendering location | Browser                         | Server                      |
| Initial load speed | Slower                          | Faster                      |
| SEO friendliness   | Poor (without additional setup) | Good                        |
| Interactivity      | Starts after JS loads           | Immediate (after HTML load) |

**CSR Example:**
React app created via `create-react-app` renders everything in the browser.

**SSR Example:**
Next.js renders pages on the server and sends pre-rendered HTML to the client.

---

### **13. What is state in ReactJS?**

**State** is an object that holds dynamic data for a component. When state changes, the component re-renders.

**Example (Functional Component):**

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
```

---

### **14. What are props?**

(Already answered in Question 9, but rephrased here.)

**Props** are immutable data passed from a parent to a child component.

**Example:**

```jsx
const Greet = ({ name }) => <h1>Hello, {name}</h1>;

<Greet name="Alice" />
```

Here, `name="Alice"` is a prop sent to the `Greet` component.

---

### **15. What are the differences between State and Props in React?**

| Feature    | State                                   | Props                        |
| ---------- | --------------------------------------- | ---------------------------- |
| Mutability | Mutable (can be changed via `setState`) | Immutable (read-only)        |
| Scope      | Local to the component                  | Passed from parent to child  |
| Usage      | Handle internal changes                 | Send data between components |

**Example:**

```jsx
function Parent() {
  return <Child name="Bob" />;
}

function Child(props) {
  return <h2>Hello {props.name}</h2>; // using props
}

function Counter() {
  const [count, setCount] = useState(0); // using state
  return <p>Count: {count}</p>;
}
```


### **16. What is props drilling?**

**Props Drilling** occurs when data is passed through many nested components, even if intermediate components don’t need that data — they only forward it.

**Problem:** Becomes hard to manage, especially in deeply nested component trees.

**Example:**

```jsx
const App = () => {
  const user = "John";
  return <Parent user={user} />;
};

const Parent = ({ user }) => <Child user={user} />;

const Child = ({ user }) => <GrandChild user={user} />;

const GrandChild = ({ user }) => <p>User: {user}</p>;
```

Here, `user` is passed down 3 levels unnecessarily — that's props drilling.

---

### **17. What are the disadvantages of props drilling and how can we avoid it?**

**Disadvantages:**

* Code becomes hard to read and maintain.
* Intermediate components are forced to accept and forward props.
* Tightly couples components.

**Solutions to avoid props drilling:**

1. **React Context API** – Share data globally without passing props manually.
2. **Redux/Zustand/MobX** – State management libraries.
3. **Custom hooks** – Encapsulate logic and share via hooks.

**Example using Context API:**

```jsx
const UserContext = React.createContext();

const App = () => {
  return (
    <UserContext.Provider value="John">
      <Parent />
    </UserContext.Provider>
  );
};

const GrandChild = () => {
  const user = useContext(UserContext);
  return <p>User: {user}</p>;
};
```

---

### **18. What are Pure Components in React?**

A **PureComponent** in React is a component that **only re-renders when its props or state change**, using a shallow comparison.

**Class-based:**

```jsx
class MyComponent extends React.PureComponent {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

**Functional Equivalent:**
Use `React.memo()`:

```jsx
const MyComponent = React.memo(({ name }) => {
  return <h1>{name}</h1>;
});
```

**Benefit:** Prevents unnecessary renders and improves performance.

---

### **19. What are Refs in React?**

**Refs (short for References)** provide a way to access DOM nodes or React elements directly.

**Common use cases:**

* Managing focus
* Text selection
* Animations
* Integrating with third-party libraries

**Example:**

```jsx
const InputFocus = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
};
```

---

### **20. What is meant by forwardRef?**

**`forwardRef`** is a technique for passing refs through a component to one of its child DOM nodes.

**Use case:** When a parent component needs to interact with a child’s DOM element.

**Example:**

```jsx
const CustomInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

const Parent = () => {
  const inputRef = useRef();

  return (
    <>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
};
```

---

Excellent! Let’s move on to **questions 21 to 25** with thorough explanations and practical examples:

---

### **21. What are Error Boundaries?**

**Error Boundaries** are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the entire app.

**Only class components can be error boundaries.**

**Example:**

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}
```

**Usage:**

```jsx
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

---

### **22. What are Higher Order Components (HOCs) in React?**

A **Higher Order Component (HOC)** is a function that takes a component and returns a new component with additional behavior.

**Purpose:** Reuse component logic (e.g., logging, auth checks, data fetching).

**Example:**

```jsx
function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
}

const Hello = ({ name }) => <h1>Hello, {name}</h1>;

const EnhancedHello = withLogging(Hello);

// <EnhancedHello name="John" /> logs the props before rendering.
```

---

### **23. What are the differences between controlled and uncontrolled components?**

| Feature        | Controlled Component          | Uncontrolled Component       |
| -------------- | ----------------------------- | ---------------------------- |
| Data stored in | React state                   | DOM (via `ref`)              |
| How to access  | via `useState` and `onChange` | via `useRef().current.value` |
| React control? | Yes                           | No                           |

**Controlled Example:**

```jsx
const [value, setValue] = useState('');
<input value={value} onChange={e => setValue(e.target.value)} />
```

**Uncontrolled Example:**

```jsx
const inputRef = useRef();
<input ref={inputRef} />
<button onClick={() => alert(inputRef.current.value)}>Show</button>
```

---

### **24. What is useCallback?**

**`useCallback`** is a React Hook that returns a memoized version of the callback function, which only changes if its dependencies change.

**Why use it?** Prevents unnecessary re-creation of functions — useful when passing callbacks to memoized components.

**Syntax:**

```jsx
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

**Example:**

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

---

### **25. What are the differences between `useMemo` and `useCallback`?**

| Hook          | Returns               | Use Case                          |
| ------------- | --------------------- | --------------------------------- |
| `useMemo`     | Memoized **value**    | Cache expensive computations      |
| `useCallback` | Memoized **function** | Cache event handlers or callbacks |

**Example Difference:**

```jsx
const memoValue = useMemo(() => expensiveCalculation(data), [data]);

const memoCallback = useCallback(() => handleClick(data), [data]);
```

---

Great! Let’s go through **questions 26 to 30** in detail with explanations and examples:

---

### **26. What are controlled components?**

A **controlled component** in React is an input element (like `<input>`, `<textarea>`, `<select>`) whose **value is controlled by React state**.

**Key point:** React state is the **single source of truth**.

**Example:**

```jsx
const ControlledForm = () => {
  const [name, setName] = useState("");

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </form>
  );
};
```

---

### **27. What are uncontrolled components?**

An **uncontrolled component** manages its own state internally — React does **not** control the input's value directly. We use `ref` to access the value.

**Example:**

```jsx
const UncontrolledForm = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};
```

---

### **28. What is the difference between `setState` and `useState`?**

| Feature | `setState` (Class)                   | `useState` (Function)                  |
| ------- | ------------------------------------ | -------------------------------------- |
| Type    | Method from `React.Component` class  | Hook used in functional components     |
| Merge   | Partially merges state automatically | Does **not** merge — must do manually  |
| Syntax  | `this.setState({})`                  | `const [state, setState] = useState()` |

**Example (Class):**

```jsx
this.setState({ count: 1 });
```

**Example (Function):**

```jsx
const [count, setCount] = useState(0);
setCount(count + 1);
```

---

### **29. What are keys in React and why are they important?**

**Keys** help React identify which items in a list have changed, are added, or are removed. They must be **unique among siblings**.

**Why important?**

* Helps React optimize rendering (using reconciliation).
* Prevents unnecessary re-renders or bugs.

**Example (Bad):**

```jsx
items.map((item, index) => <li key={index}>{item}</li>);
```

**Example (Good):**

```jsx
items.map((item) => <li key={item.id}>{item.name}</li>);
```

---

### **30. Why is it not recommended to use index as key in React?**

Using **index** as a key is discouraged when:

* The list can change (e.g., adding, removing, reordering).
* The item content might change over time.

**Problem:** React uses the key to decide whether to update a component — if index is reused, it may wrongly preserve or re-render components.

**Example of issue:**

```jsx
// Bad: if order of items changes, React may reuse DOM nodes incorrectly
items.map((item, index) => <li key={index}>{item.text}</li>);
```

**Use a stable ID instead:**

```jsx
items.map((item) => <li key={item.id}>{item.text}</li>);
```

---

Awesome! Let’s go through **questions 31 to 35** in detail with examples:

---

### **31. What is a Fragment in React?**

A **Fragment** lets you group multiple elements without adding an extra node to the DOM. This is useful when returning multiple components from a render method without wrapping them in a `<div>`.

**Syntax Options:**

```jsx
<React.Fragment>
  <Child1 />
  <Child2 />
</React.Fragment>
```

Or shorthand:

```jsx
<>
  <Child1 />
  <Child2 />
</>
```

**Why use it?** To avoid unnecessary wrappers that may affect styling or DOM structure.

---

### **32. What is the use of `dangerouslySetInnerHTML`?**

React normally escapes HTML to prevent XSS (Cross-Site Scripting). If you absolutely trust the HTML you want to render (e.g., from a CMS), you can use `dangerouslySetInnerHTML`.

**Example:**

```jsx
const htmlContent = "<h1>Hello <em>danger</em>!</h1>";

const MyComponent = () => (
  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
);
```

**Warning:** Be 100% sure the content is safe before using this. Avoid it if you can.

---

### **33. What is JSX?**

**JSX (JavaScript XML)** is a syntax extension for JavaScript that looks like HTML but is used to describe the UI in React.

**Why use JSX?**

* Makes code more readable.
* Easier to write UI components.
* Can embed JavaScript expressions.

**Example:**

```jsx
const name = "Alice";
const greeting = <h1>Hello, {name}!</h1>;
```

JSX is transpiled by Babel into `React.createElement()` calls.

---

### **34. What are the differences between HTML and JSX?**

| Feature              | HTML                 | JSX                                |
| -------------------- | -------------------- | ---------------------------------- |
| Class attribute      | `class="box"`        | `className="box"`                  |
| Inline styles        | `style="color:red;"` | `style={{ color: 'red' }}`         |
| Attributes naming    | lowercase            | camelCase (`onClick`, `readOnly`)  |
| Must return one node | Not applicable       | JSX must return one parent element |

**Example:**

```html
<!-- HTML -->
<div class="container" style="color: red;"></div>
```

```jsx
// JSX
<div className="container" style={{ color: "red" }}></div>
```

---

### **35. What is Redux and why is it used?**

**Redux** is a state management library for JavaScript apps, commonly used with React. It helps you manage application state in a **single global store**.

**Why use Redux?**

* Centralized state management
* Predictable state updates
* Easier debugging and testing
* Middleware support (e.g., for async logic with `redux-thunk`)

**Core Concepts:**

* **Store:** Holds the state
* **Action:** Describes what happened
* **Reducer:** Describes how state changes

**Example:**

```js
const ADD = "ADD";

const addAction = () => ({ type: ADD });

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(reducer);
store.dispatch(addAction());
```

---

Perfect! Let’s now explore **questions 36 to 40** in full detail with examples:

---

### **36. What is the difference between props and state in React?**

| Feature       | Props                                | State                                   |
| ------------- | ------------------------------------ | --------------------------------------- |
| Definition    | Data passed **from parent to child** | Data managed **within a component**     |
| Mutability    | **Read-only**                        | **Mutable** using `useState`/`setState` |
| Controlled by | Parent component                     | Component itself                        |
| Use case      | Customize child components           | Handle dynamic UI changes               |

**Example (Props):**

```jsx
const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
```

**Example (State):**

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```

---

### **37. What are React lifecycle methods?**

React lifecycle methods are **special methods in class components** that run at different stages of a component's life:

| Phase          | Method                                          | Purpose                               |
| -------------- | ----------------------------------------------- | ------------------------------------- |
| Mounting       | `constructor`, `componentDidMount`              | Setup state, fetch data after render  |
| Updating       | `shouldComponentUpdate`, `componentDidUpdate`   | Optimize re-renders                   |
| Unmounting     | `componentWillUnmount`                          | Cleanup (e.g., timers, subscriptions) |
| Error handling | `componentDidCatch`, `getDerivedStateFromError` | Error boundaries                      |

**Example:**

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component mounted");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return <p>Hello</p>;
  }
}
```

---

### **38. What is the use of `useEffect` in React?**

`useEffect` is a **Hook** that lets you perform **side effects** (data fetching, DOM manipulation, subscriptions) in functional components.

**Basic syntax:**

```jsx
useEffect(() => {
  // side effect
}, [dependencies]);
```

**Use cases:**

* Fetching data
* Event listeners
* Cleanup on unmount

**Example:**

```jsx
useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Cleanup on unmount");
  };
}, []);
```

---

### **39. What are custom hooks in React?**

A **custom hook** is a JavaScript function that starts with `use` and allows you to reuse **stateful logic** between components.

**Why use custom hooks?**

* Abstract and reuse logic (e.g., form handling, fetching)
* Keep components clean

**Example – `useWindowWidth`:**

```jsx
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

// Usage
const MyComponent = () => {
  const width = useWindowWidth();
  return <p>Width: {width}</p>;
};
```

---

### **40. What are synthetic events in React?**

React uses **Synthetic Events** to handle events across all browsers. These events wrap native events, providing **consistent behavior**.

**Benefits:**

* Cross-browser compatibility
* Pooling for performance optimization (though pooling is deprecated in React 17+)

**Example:**

```jsx
const handleClick = (e) => {
  e.preventDefault();
  console.log("Clicked!", e.type); // SyntheticEvent
};

return <button onClick={handleClick}>Click me</button>;
```

---

Great! Let’s move on to **questions 41 to 45** with full explanations and examples:

---

### **41. What is reconciliation in React?**

**Reconciliation** is the process React uses to **update the DOM efficiently** when a component’s state or props change.

**Key idea:** React creates a virtual DOM and compares it with the previous one using a **diffing algorithm**. It only updates the real DOM where there are actual changes.

**Example:**

```jsx
// If the only change is <h2> to <h1>, React only updates that node
return (
  <div>
    <h1>Title</h1>
  </div>
);
```

**Benefit:** Improves performance by avoiding full re-renders.

---

### **42. What is the virtual DOM in React?**

The **virtual DOM (VDOM)** is a **lightweight JavaScript representation** of the actual DOM.

**How it works:**

1. You write JSX → React creates a virtual DOM.
2. On updates, React compares the new VDOM with the old one (diffing).
3. It calculates the minimal number of real DOM changes and applies them (patching).

**Why use it?** Real DOM operations are expensive. VDOM allows React to batch and optimize updates efficiently.

---

### **43. What is the difference between virtual DOM and real DOM?**

| Feature     | Virtual DOM                      | Real DOM                               |
| ----------- | -------------------------------- | -------------------------------------- |
| Type        | JavaScript object                | Actual browser DOM                     |
| Speed       | Fast (due to diffing & batching) | Slower (direct manipulation is costly) |
| Updates     | Efficient and selective          | Complete re-rendering if not optimized |
| Abstraction | React manages it internally      | Managed by browser                     |

---

### **44. How does React handle events?**

React wraps browser-native events into **SyntheticEvents** and uses a **delegation model**.

**How it works:**

* React attaches a **single event listener** at the root (`document`) level.
* Events bubble up to this root and React handles them in its synthetic system.

**Example:**

```jsx
function handleClick(e) {
  console.log("Button clicked", e.type); // SyntheticEvent
}

<button onClick={handleClick}>Click</button>
```

**Advantages:**

* Cross-browser consistency
* Better performance (no listeners per node)
* Unified event API

---

### **45. What is the difference between `componentWillMount` and `componentDidMount`?**

| Method               | When It Runs                                     | Use Case                            |
| -------------------- | ------------------------------------------------ | ----------------------------------- |
| `componentWillMount` | **Before** the component is mounted (deprecated) | Used for last-minute changes (rare) |
| `componentDidMount`  | **After** the component is mounted to the DOM    | Ideal for API calls, subscriptions  |

**Note:** `componentWillMount` is deprecated in modern React. Use `constructor` or `useEffect` instead.

**Example (componentDidMount):**

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("DOM is ready");
  }

  render() {
    return <p>Hello</p>;
  }
}
```

---

Excellent! Let’s now move on to **questions 46 to 50**, providing detailed explanations and examples:

---

### **46. What are React Mixins?**

**Mixins** are a pattern from older versions of React (pre-ES6) used to **share common functionality** between components.

**Why they’re discouraged:**

* Cause naming conflicts.
* Difficult to trace behavior.
* Do not work with ES6 classes or functional components.

**Example (legacy usage):**

```jsx
const MyMixin = {
  componentDidMount() {
    console.log("Mounted from mixin");
  },
};

const MyComponent = React.createClass({
  mixins: [MyMixin],
  render() {
    return <div>Hello</div>;
  },
});
```

**Modern alternatives:**

* Higher Order Components (HOCs)
* Render Props
* Custom Hooks

---

### **47. What are the different hooks you have used?**

Some commonly used React hooks:

| Hook                  | Purpose                                     |
| --------------------- | ------------------------------------------- |
| `useState`            | Add state to functional components          |
| `useEffect`           | Perform side effects (fetch, subscriptions) |
| `useContext`          | Access context values                       |
| `useRef`              | Access DOM elements or persist values       |
| `useMemo`             | Memoize expensive computations              |
| `useCallback`         | Memoize functions                           |
| `useReducer`          | Alternative to `useState` for complex state |
| `useLayoutEffect`     | Like `useEffect`, but fires synchronously   |
| `useImperativeHandle` | Expose instance methods with `forwardRef`   |
| `useId`               | Generate unique IDs (React 18+)             |

---

### **48. What are render props in React?**

A **render prop** is a function prop that a component uses to know **what to render**.

**Purpose:** Share component logic via a function instead of inheritance or HOC.

**Example:**

```jsx
const DataProvider = ({ render }) => {
  const data = "Hello from DataProvider";
  return render(data);
};

const App = () => (
  <DataProvider render={(data) => <h1>{data}</h1>} />
);
```

**Alternative syntax (more readable):**

```jsx
<DataProvider>
  {(data) => <h1>{data}</h1>}
</DataProvider>
```

---

### **49. What are the different types of exports and imports in React (JS)?**

| Export Type    | Syntax                        | Import Syntax                      |
| -------------- | ----------------------------- | ---------------------------------- |
| Named Export   | `export const foo = () => {}` | `import { foo } from './file'`     |
| Default Export | `export default MyComponent`  | `import MyComponent from './file'` |
| Multiple Named | `export { A, B }`             | `import { A, B } from './file'`    |

**Example – named export:**

```js
export const greet = () => "Hello";
```

```js
import { greet } from './utils';
```

**Example – default export:**

```js
export default function App() { ... }
```

```js
import App from './App';
```

---

### **50. What are the differences between `React.createElement()` and `React.cloneElement()`?**

| Function                | Purpose                                               |
| ----------------------- | ----------------------------------------------------- |
| `React.createElement()` | Creates a new React element (used by JSX)             |
| `React.cloneElement()`  | Clones an element and optionally adds/overrides props |

**Example – `createElement`:**

```jsx
React.createElement('div', { className: 'box' }, 'Hello');
```

**Example – `cloneElement`:**

```jsx
const child = <button>Click</button>;
const cloned = React.cloneElement(child, { disabled: true });
```

Used when you want to **dynamically modify** an existing React element (e.g., in HOCs or wrapper components).

---


---

### **51. When to use `useState` and `useReducer`?**

Both `useState` and `useReducer` manage state in functional components, but they're best suited for **different scenarios**.

#### 🟢 `useState` – When state is simple

* Ideal for simple or independent pieces of state.
* Straightforward and easier to use.

**Example:**

```jsx
const [count, setCount] = useState(0);
```

---

#### 🟢 `useReducer` – When state logic is complex or interrelated

* Best for complex state transitions.
* Useful when the next state depends on the previous one.

**Example:**

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

**Use this when:**

* You’re building a form with multiple inputs.
* State depends on actions/events.
* You're porting code from Redux.

---

### **52. What are protected routes in React?**

**Protected routes** are routes that only authenticated users can access. If a user is not authenticated, they’re usually redirected to a login page.

**Implementation using React Router v6+:**

```jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // or use context/state
  return isAuthenticated ? children : <Navigate to="/login" />;
};
```

**Usage:**

```jsx
<Routes>
  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
</Routes>
```

---

### **53. What is `react-router`'s context menu?**

⚠️ **Clarification**: The question likely refers to **`react-router` with context** or **context menu behavior** in routing (not an actual feature named “context menu”).

There’s no built-in `context menu` API in `react-router`, but here are two interpretations:

#### A. **React Router Context**

React Router internally uses React Context to pass routing information (e.g., `useLocation`, `useNavigate`).

**Example:**

```jsx
import { useLocation } from 'react-router-dom';

const CurrentRoute = () => {
  const location = useLocation();
  return <p>You are on: {location.pathname}</p>;
};
```

#### B. **Custom Context Menu Handling**

You can show a **custom right-click menu** on route-based components.

**Example:**

```jsx
const MyComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setShowMenu(true); // show custom menu
  };

  return (
    <div onContextMenu={handleContextMenu}>
      Right-click me!
      {showMenu && <div className="context-menu">Custom Menu</div>}
    </div>
  );
};
```

---


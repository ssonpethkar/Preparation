

## ✅ **BASICS**

1. 🔥 **What is React.js, and why is it used?**
    - react js is a open source javascript library to building  user interface for single page application 
    - It is maintained by facebook in 2013 
    - It is used for state management in react application and to create reusable UI components.
    - It is also used for building dynamic user interfaces and single-page applications.

2. 🔥 **What are the key features of React?**
    - component based architecture
    - Virtual DOM
    - declarative UI
    - Redux
    - hooks
    - JSX

3. 🔥 **What is JSX, and how is it different from HTML/JavaScript?**
    - JSX stands for javascript XML 
    - JSX is a syntax extension that allows us to write html like code in javascript
    - It doesn't understand JSX by default, so we need traspiler as babel to transfer JSX to javascript.
    - Babel converts JSX to javascript so that it can be executed by browser

4. 🔥 **What is the Virtual DOM and how does it improve performance?**
    - virtual dom is a lightweight copy of real dom 
    - React keeps copy of real dom in memory and when changes occur 
        - update the DOM 
        - comparate previous virtual dom with current virtual dom using diffing algorithm for comparisons 
        - applies only necessary changes to the real dom using reconcillation 

5. 🔥 **How does React compare with other frameworks like Angular or Vue?**
    React - is a library for building user interface components for single page application
    Angular - is a full-fledged framework for building complex web applications
    Vue - is a progressive and flexible framework for building web applications
    - React is more lightweight and easier to learn than Angular and Vue.
    - React is more suitable for building complex user interfaces and single-page applications.
    - Angular and Vue are more suitable for building complex web applications.

6. What is the role of Babel and Webpack in a React application?
    - babel is a transpiler that converts JSX into javascript 
    - Webpack is module bundler that bundles all files into one file so that it can be executed by browser.
    - Babel and Webpack are used to optimize and bundle the code for production.

7. What is the difference between React and ReactDOM?
    - React is open source javascript library to building user interfaces for single page application
    - ReactDom is a higher order component that renders react components to the DOM 

8. What is the difference between an element and a component?
    Element : Element is a single UI component that is rendered to the DOM
    Component : Component is a reusable piece of code that represents UI of an application. It can contain multiple elements.

9. 🔥 **What are the different types of components in React (class vs functional)?**
    Class components : 
        - class component is a class that extends React.Component
        - Class component is defined as javascript classes 
        - It has lifecycle methods like constructor, render, componentDidMount, etc.
        - It is stateful component. 

    
    Function component : 
        - Function component is declared as a function that returns JSX element
        - It doesn't have lifecycle methods like class component.
        - It is a stateless component. but using hooks we can managed state in functional component


10. 🔥 **Explain the significance of `key` in a list.**
    - Key helps to identify the item which are added, removed and update in the list.
    - It is used to optimize the rendering of the list by React.

11. 🔥 **What is the purpose of `render()` method in class components?**
    - render method is used to return JSX element that is rendered to the DOM

---

## ⚙️ **STATE & PROPS**

12. 🔥 **What is the difference between props and state?**
    State : 
        - State is an object that holds dynamic data of the component when state changes then it rerenders
        - state is mutable
        - In state data is handled within component
    Props : 
        - Props is a way to pass data from parent component to child component 
        - props is immutable 
        - In props, data is handled from parent component and passed down to child component

13. 🔥 **How do you pass data from parent to child?**
    - using props 
    - using context API
    - using Redux 
    - lifting state up
   

14. 🔥 **How do you pass data from child to parent?**
- using callback function
- using context API
- using Redux
- using React Hooks (useState, useEffect)
- using event handlers

15. 🔥 **What is prop drilling and how can you avoid it?**
    - prop drilling is the process to passed down props to multiple layers of the component 
    - prop drilling occurs when we passed down props from parent to child and then child to grand child and so on if the intermediate component doesn;t need that data still they need to accept it and forward to another component
    - to avoid prop drilling we can use context API, Redux, or lifting state up

16. Can props be modified inside a component?
    No we can't modify props inside a component because props is immutable
    If we need to modify data we should use state instead of props
    If we need to modify props we should use context API or Redux or lifting state up


17. What are default props and how do you use them?
    - default props is a way to provide a default value for a prop if it is not provided by parent
    - we can use default props by using defaultProps property in the component definition
    - we can also use default props by using destructuring in the constructor of the class component
    - we can also use default props by using destructuring in the functional component

18. 🔥 **What are controlled and uncontrolled components?**
    Controlled component :
        - Controlled component is form input element like select , input, textarea , checkbox etc whose value is handled by react state.
        - In controlled component we can control the value of the form input element from react state.
        - Controlled component is used when we need to validate the form data before submitting it.
        - controlled component are fully controlled by react
        - we can use useState hook to handle the state of controlled component and onchange method to updated the state of controlled component

    Uncontrolled component : 
        - Uncontrolled component is a form input element like select , input, textarea , checkbox etc whose value is handled by DOM element itself
        - In uncontrolled component we can't control the value of the form input element from react state 
        - Uncontrolled component is used when we don't need to validate the form data before submitting it
        - Uncontrolled component are not fully controlled by react. they just reads the data whenever its needed.
        We can use ref to control uncontrolled component.
---

## 🔁 **LIFECYCLE METHODS**

19. 🔥 **What is the component lifecycle in React?**
    Component life cycle methods is a special method that called at various stages of component life cycle.
    It is used to perform some specific task when component is in different state. 
    component life cycle methods are called when component is mounted , updated and unmounted.
    Component life cycle methods are divided into 3 phases : Mounting, Updating, and Unmounting.
    - In mounting phase component is created and added to the DOM 
        There are 4 methods : 
            - constructor
            - getDerivedStateFromProps
            - render 
            - componentDidMount
    - In updating phase, the component state or props changes then its updated and rerenders 
        There are 5 methods 
            - getDerivedStateFromProps
            - shouldCOmponetUpdate
            - render 
            - getSnapshotBeforeUpdate
            - componentDidUpdate
    - In unmounting phase, component is removed from DOM . It is used for cleanup functionality 
        - there is only one method : 
            - componentWillUnmount
    - getDerivedStateFromProps is a static method that is called before rendering when new props are received or state are changed
    - shouldComponentUpdate : This method is called before rendering when props or state change
    - getSnapshotBeforeUpdate : This method is called before rendering when props or state change
    - componentDidMount : This method is called after rendering when component is mounted
    - componentDidUpdate : This method is called after rendering when component is updated 
    - componentWillUnmount : This method is called before unmounting of component

20. What are the different phases of lifecycle?
21. 🔥 **Explain the use of `componentDidMount()`, `componentDidUpdate()`, `componentWillUnmount()`.**
22. What is `getDerivedStateFromProps()` and when should it be used?
    - getDerivedStateFromProps is a static method that is called before rendering when new props are received or state has changed
    - It is used to update the state of the component based on the props received 
23. 🔥 **What is `shouldComponentUpdate()` and how does it help?**
    - This method is called after rendering when props or state changed
    - It helps to prevent unnecessary re-renders of the component by returning false if the component should not be updated

24. 🔥 **What is `getSnapshotBeforeUpdate()` and how does it help
    - This method is called before rendering when props or state changed
    - It helps to capture the previous state of the component before it is update
    d
24. 🔥 **How do lifecycle methods map to `useEffect()` in functional components?**
    - `useEffect()` is a hook that is used to handle side effects in functional components
    - It is used to perform actions after rendering, such as fetching data or setting up event listeners 
    - It is similar to `componentDidMount()` and `componentDidUpdate()` in class components



---

## 🧠 **HOOKS**

25. 🔥 **What are hooks in React and why were they introduced?**
    Hooks is inbuilt function in functional component to use state and lifecycle features in react functional component
    - Before hooks, class components life cycle methods were used to use lifecycle features in functional component. Hooks are introduced in functional component in REACT16.8 version to eliminate class components 

26. 🔥 **Rules of hooks — what are the “rules of hooks”?**
    - Only call hooks at the top level
    - Don’t call hooks inside loops, conditionals, or nested functions
    - Don’t call hooks from within other hooks

27. 🔥 **`useState()` — how does it work?**
    - useState is a react hook that allow functional component to maintain and update state in  local components.
    - it allows us to track input values and update state of component
    - useSTate accepts initialValue and returns an array with two elements 
        current state 
        setter function to update the state 
    - it is used for simple or independent values that can be updated in component
    - it is also used to form input fields and text boxes in react application

28. 🔥 **`useEffect()` — what are common use cases?**
    - useEffect is a react hook that can handle side effeccts in functional component to perform actions after rendering.
    - it is used to perform actions after rendering, such as fetching data or setting up event listeners 
    - it is similar to `componentDidMount()` and `componentDidUpdate()` in class components
    - it is used to perform cleanup actions before unmounting of component 
    - it is used to handle side effects in functional component such as API calls, DOM manipulation,
    - useEffect passes functions it runs after rendering DOM and dependencies as a argument to handle side effects in functional component
    There are 4 ways to use useEffect : 
        - no dependency array : runs on every render 
        - empty dependency array : runs once after rendering
        - with dependency array : runs when dependency changes
        - with cleanup function : runs before unmounting of component


29. 🔥 **What is the cleanup function in `useEffect()`?**
    - Cleanup function is a function that is passed to useEffect to handle cleanup actions before unmounting of component

30. 🔥 **What is `useContext()` and when to use it?**
    - useContext is a react hook that can can be used to share data between components without passing props down manually
    - useContext is a react hook that can access context directly in functional component 
    - useContext is used to share data between components without passing props down manually
    - useContext is used to access context directly in functional component
    
31. What is `useReducer()` and how does it differ from `useState()`?
32. 🔥 **What is `useMemo()`?**
33. 🔥 **What is `useCallback()` and how is it used?**
34. 🔥 **What is `useRef()` and when would you use it?**
35. What is `useLayoutEffect()` vs. `useEffect()`?
36. What is `useImperativeHandle()`?
37. 🔥 **What are custom hooks and how do you write one?**
38. 🔥 **Difference between useMemo and useCallback?**

---

## 🔀 **ROUTING**

39. 🔥 **What is React Router?**
40. 🔥 **Difference between `BrowserRouter` and `HashRouter`?**
41. 🔥 **How do you implement dynamic routes?**
42. 🔥 **How do you pass route parameters?**
43. 🔥 **What are protected/private routes and how do you implement them?**
44. What is the use of `useNavigate()`, `useParams()`, `useLocation()`?

---

## 🌐 **STATE MANAGEMENT**

45. 🔥 **What is Redux and why use it?**
46. 🔥 **What are actions, reducers, and store?**
47. 🔥 **How do you connect React with Redux using `connect()` or `useSelector()`?**
48. 🔥 **What is middleware in Redux? (e.g., Redux Thunk or Redux Saga)**
49. 🔥 **How is Redux different from Context API?**
50. 🔥 **When should you choose Context over Redux?**
51. What is Zustand or Recoil? When to use them?
52. 🔥 **How do you handle async actions in Redux?**

---

## 🧩 **ADVANCED CONCEPTS**

53. 🔥 **What is a Higher-Order Component (HOC)?**
54. 🔥 **What are Render Props?**
55. 🔥 **What are Portals in React?**
56. 🔥 **What is Strict Mode in React?**
57. What are React Mixins?
58. What is the difference between `React.cloneElement()` and `React.createElement()`?
59. 🔥 **What is the significance of error boundaries in React?**
60. 🔥 **What is a PureComponent?**
61. 🔥 **What is React.memo and how does it improve performance?**
62. 🔥 **How do you handle validation in forms?**
63. What are synthetic events?
64. What is reconciliation in React?

---

## 🚀 **PERFORMANCE & OPTIMIZATION**

65. 🔥 **How do you optimize the performance of a React app?**
66. 🔥 **What is code-splitting and how do you implement it?**
67. 🔥 **How do `React.lazy()` and `Suspense` work?**
68. 🔥 **How to lazy load components and images?**
69. What is tree shaking?
70. 🔥 **What is the difference between CSR and SSR?**
71. What is hydration in React?
72. 🔥 **What are common performance pitfalls in React?**

---

## 🔧 **TOOLS & PRACTICALS**

73. 🔥 **How would you consume a REST API in React?**
74. 🔥 **How do you use PropTypes for prop validation?**
75. 🔥 **How do you test a React component?**
76. What is the React Profiler and how do you use it?
77. What is the use of ESLint and Prettier?
78. 🔥 **How do you manage forms in React (Formik or React Hook Form)?**
79. 🔥 **What is the difference between controlled and uncontrolled forms?**
80. 🔥 **How do you handle global error boundaries or logging?**

---

## 💬 **INTERVIEW PRACTICAL QUESTIONS**

81. 🔥 **Create a custom hook for an increment/decrement counter.**
82. 🔥 **Show how to lift state up between sibling components.**
83. 🔥 **Send data from child to parent using callback.**
84. 🔥 **Send data from child to parent using `useRef`.**
85. 🔥 **Implement a toggle using `useState`.**
86. Example of using Context API for theme switching.
87. 🔥 **Implement debounce/throttle with input field.**
88. 🔥 **Show API call with loading, error, and success states.**

---

## 🧱 **INTEGRATION & LIBRARIES**

89. 🔥 **What is React Query and how does it simplify data fetching?**
90. What is RxJS and how is it used with React?
91. How do you add animations in React? (e.g., Framer Motion)
92. How do you integrate chart libraries (chart.js, D3) with React?

---

## 📦 **DEPLOYMENT & ENVIRONMENT**

93. 🔥 **How do you deploy a React app to Netlify/Vercel?**
94. 🔥 **What is the role of `.env` files in React?**
95. 🔥 **What is Create React App (CRA) vs. Vite?**
96. 🔥 **How do you optimize a React build for production?**


Absolutely! Here are detailed answers to all 15 scenario-based React interview questions, designed to help you **impress interviewers with clear, practical, and scalable solutions**:

---

### 1. 🔁 **You have a list that rerenders on every keystroke. How do you prevent unnecessary rerenders?**

**Answer:**

* **Problem:** List updates on every keystroke because the entire component is re-rendering.
* **Solution:**

  1. **Debounce the input** using `lodash.debounce()` or a custom `useDebounce` hook to delay API calls.
  2. **Memoize the list rendering** using `React.memo` for components and `useMemo` for values.
  3. Ensure **unique keys** in list items to avoid virtual DOM confusion.
  4. Use **shouldComponentUpdate** (Class) or `React.memo` (Functional) to skip unnecessary renders.

**Example:**

```js
const DebouncedInput = ({ onChange }) => {
  const [value, setValue] = useState('');
  const debouncedChange = useCallback(debounce(onChange, 300), []);
  return <input onChange={(e) => {
    setValue(e.target.value);
    debouncedChange(e.target.value);
  }} value={value} />;
};
```

---

### 2. 📦 **You want to cache API responses and avoid duplicate network calls. What would you use?**

**Answer:**

* Use **React Query**, **SWR**, or custom caching using `useRef` or `localStorage`.
* React Query automatically:

  * Caches responses.
  * Deduplicates in-flight requests.
  * Provides stale/revalidation logic.

**Example with React Query:**

```js
const { data, isLoading } = useQuery(['user', id], () => fetchUser(id));
```

---

### 3. 🧩 **Your component tree is deeply nested and passing props everywhere. What’s your approach?**

**Answer:**

* Avoid **prop drilling** by:

  * Using **React Context** for global state (theme, auth, etc.).
  * Using **Redux**, **Zustand**, or **Recoil** for scalable state.
* If child customization is needed, use **Render Props** or **Component Composition**.

---

### 4. 💾 **You need to persist login state across refresh. How would you store and retrieve this securely?**

**Answer:**

* Store **JWT or access token** in **HTTP-only cookies** (most secure) or `localStorage` (with caution).
* On app mount, read token from cookie/storage and validate via API.
* Use a `useAuth` hook to manage and expose auth state.

**Security tips:**

* Never store tokens in JavaScript-accessible storage for high-security apps.
* Implement token refresh strategies (short-lived access + long-lived refresh tokens).

---

### 5. 📉 **App is slow with a large number of items. How would you optimize it?**

**Answer:**

1. **Virtualize long lists** using `react-window` or `react-virtualized`.
2. Use `React.memo` to prevent re-renders.
3. Use `useMemo` for derived data and avoid recalculations.
4. Load data **lazily or paginated**.
5. Split large components into smaller ones.
6. Profile with **React DevTools Profiler**.

---

### 6. 🧵 **How do you handle multiple concurrent API calls and aggregate the results?**

**Answer:**
Use `Promise.all()` for concurrent calls:

```js
useEffect(() => {
  Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ]).then(([users, posts, comments]) => {
    // Combine or store data
  });
}, []);
```

React Query also supports dependent and parallel queries with `useQueries`.

---

### 7. 🚨 **A fetch request sometimes fails with 500 error. What’s your retry mechanism?**

**Answer:**

* **Manual Retry:** Implement exponential backoff.

```js
const retryFetch = async (url, retries = 3) => {
  try {
    return await fetch(url);
  } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, 1000));
    return retryFetch(url, retries - 1);
  }
};
```

* **With React Query:**

```js
useQuery('data', fetchData, { retry: 3, retryDelay: attempt => attempt * 1000 });
```

---

### 8. 🧪 **You wrote a hook, but it breaks when called in a loop. What’s wrong?**

**Answer:**

* **React rules of hooks**: Hooks **must be called at the top level** of a functional component or another hook. You **can’t call hooks conditionally or inside loops.**

**Fix:**
Refactor code so hooks are always called in the same order.

---

### 9. 🔐 **You need to restrict some routes to logged-in users only. Walk through your implementation.**

**Answer:**

1. Create an `AuthContext` to manage login state.
2. Build a `PrivateRoute` wrapper component:

```js
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
```

3. Use it in your route config:

```js
<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
```

---

### 10. 🎯 **You want to trigger an animation when a component appears in the viewport. What’s your strategy?**

**Answer:**

* Use **IntersectionObserver API** or `react-intersection-observer` to detect visibility.
* Use animation libraries like **Framer Motion** to animate appearance.

**Example:**

```js
const { ref, inView } = useInView();
return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView ? 1 : 0 }}
    transition={{ duration: 0.5 }}
  />
);
```

---

### 11. 🌍 **You want to internationalize your app. Where would you store translation logic and how to switch locales?**

**Answer:**

* Use libraries like **react-i18next**.
* Store translation strings in JSON files per locale.
* Set up a `LanguageProvider` to wrap the app and allow switching languages dynamically.

**Directory structure:**

```
/locales
  /en/translation.json
  /fr/translation.json
```

**Switch language:**

```js
i18n.changeLanguage('fr');
```

---

### 12. 🔍 **You need to track page views for analytics. Where would you hook that in React?**

**Answer:**

* Use `useEffect` inside a **route-aware component**, like one listening to `useLocation()` from React Router.

**Example:**

```js
const AnalyticsTracker = () => {
  const location = useLocation();
  useEffect(() => {
    sendPageView(location.pathname);
  }, [location]);
  return null;
};
```

---

### 13. 🧠 **How would you build a toast notification system without using a library?**

**Answer:**

1. Create a `ToastContext` to manage notifications.
2. Use a state array to hold toasts.
3. Auto-remove toasts after timeout.
4. Provide `addToast()` function to components.

**Example usage:**

```js
addToast({ type: 'success', message: 'Saved!' });
```

---

### 14. 🛠️ **You want to support offline mode in a React PWA. What tools/libraries do you need?**

**Answer:**

* Use **Service Workers** to cache assets and API responses.
* Use **Workbox** (Google) or CRA’s built-in support.
* Detect offline status using `navigator.onLine`.

**Offline strategies:**

* Cache-first or network-fallback.
* Store data in **IndexedDB** (via `idb` library).

---

### 15. 🧪 **How do you test a component that uses `useEffect` to fetch data on mount?**

**Answer:**

1. Mock fetch/API calls using **Jest** or **msw (Mock Service Worker)**.
2. Use `@testing-library/react` and `waitFor` to test async behavior.

**Example:**

```js
test('loads and displays data', async () => {
  fetch.mockResolvedValueOnce({ json: () => ({ name: 'John' }) });
  render(<UserProfile />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  await waitFor(() => screen.getByText('John'));
});
```

---


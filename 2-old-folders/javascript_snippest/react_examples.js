// ### ✅ 1. **Basic Functional Component**


function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage:
<Welcome name="Alice" />




// ### ✅ 2. **Using `useState` Hook**


import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}




// ### ✅ 3. **`useEffect` Hook Example**


import React, { useEffect } from 'react';

function Logger() {
  useEffect(() => {
    console.log("Component mounted or updated");
    return () => console.log("Cleanup on unmount");
  }, []);
  
  return <div>Open console to see effect</div>;
}




// ### ✅ 4. **Conditional Rendering**


function LoginStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}




// ### ✅ 5. **Handling Form Input**


import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}</p>
    </form>
  );
}




// ### ✅ 6. **Passing Data via Props**


function Parent() {
  const greet = () => alert('Hello from parent!');
  return <Child onGreet={greet} />;
}

function Child({ onGreet }) {
  return <button onClick={onGreet}>Greet</button>;
}




// ### ✅ 7. **List Rendering with `map()`**


const users = ['Alice', 'Bob', 'Charlie'];

function UserList() {
  return (
    <ul>
      {users.map((user, index) => <li key={index}>{user}</li>)}
    </ul>
  );
}




// ### ✅ 8. **Simple Custom Hook**


import { useState } from 'react';

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}

// Usage
function ToggleComponent() {
  const [isOn, toggle] = useToggle();
  return <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>;
}




// ### ✅ 9. **useEffect with API Fetch**


import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}




// ### ✅ 10. **useRef to Access DOM Element**


import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => inputRef.current.focus();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}





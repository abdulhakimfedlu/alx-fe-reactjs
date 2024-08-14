import { useState } from 'react';
<<<<<<< HEAD
function Counter() {
    const [count, setCount] = useState(0); // Initialize state
    
    return (
        <div>
            <p>Current Count: {count}</p> {/* Display current count */}
            <button onClick={() => setCount(count + 1)}>Increment</button> {/* Increment button */}
            <button onClick={() => setCount(count - 1)}>Decrement</button> {/* Decrement button */}
            <button onClick={() => setCount(0)}>Reset</button> {/* Reset button */}
        </div>
    );
}
=======

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

>>>>>>> 7ef477c (Added Counter component with useState functionality)
export default Counter;

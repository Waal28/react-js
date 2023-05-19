import React, { useState } from "react";
import { CounterContext } from "./context/CounterProvider";

const Counter = () => {
  const [count, setCount] = useState(CounterContext);
  return (
    <div>
      <h2>Counter</h2>
      <h4>Count</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} disabled={count}>
        Increment
      </button>
    </div>
  );
};

export default Counter;

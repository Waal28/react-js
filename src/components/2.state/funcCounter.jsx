import React, { useState } from "react";
import { propTypes } from "prop-types";

const FunctCounter = (props) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    if (count >= 10) {
      setCount(0);
      props.onReachMax();
      return;
    }
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Counter {props.name}</h2>
      <h4>Count : {count}</h4>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default FunctCounter;

const isAlphabet = (prop, propName, compName) => {
  if (typeof prop[propName] !== "String") {
    return new Error(`Invalid prop ${propName} supplied to ${compName}`);
  }
};

// FunctCounter.propTypes = {
//   name: propTypes.string.isRequired,
//   onReachMax: propTypes.func,
//   onCounterChange: propTypes.func,
// };

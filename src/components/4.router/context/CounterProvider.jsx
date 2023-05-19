import React, { createContext, useState } from "react";

export const CounterContext = createContext();

const CounterProvider = ({ child }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {child}
    </CounterContext.Provider>
  );
};

export default CounterProvider;

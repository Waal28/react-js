import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/counter";

const FunctCounter = (props) => {
  const count = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Nama : {user.name}</h2>
      <h2>Prodi : {user.prodi}</h2>
      <h2>Counter </h2>
      <h4>Count : {count}</h4>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default FunctCounter;

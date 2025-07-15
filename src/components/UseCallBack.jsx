import React, { useState,useCallback } from "react";
import Header from "./Header";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const newfn = useCallback(() => {},[]);
  return (
    <div>
      <Header newFn={newfn} />
      <h1>count is : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>counter</button>
    </div>
  );
};

export default UseCallBack;

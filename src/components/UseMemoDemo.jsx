import React, { useState,useMemo } from "react";

const UseMemoDemo = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  function cubeNum(number) {
    console.log("calculation done!");
    return number * 3;
  }

  const result = useMemo(()=>cubeNum(number),[number]);
  return (
    <div>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <h1>cube is :{result}</h1>
      <h2>count is :{count}</h2>
      <button onClick={()=>setCount(prev=>prev+1)}>counter++</button>
    </div>
  );
};

export default UseMemoDemo;

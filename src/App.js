import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
 const [a,setA]=useState(10)
 

  useEffect(() => {
    setTimeout(()=>{
      setA(count=>count+1)
    },2000)
  });
  return (
    <>
      <div className="App">{a}</div>
      <button
        onClick={() => {
          setA(11)
          console.log(a);
        }}
      >
        change
      </button>
    </>
  );
}

export default App;

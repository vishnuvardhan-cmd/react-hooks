import React, { useContext } from "react";
import Contact from "./Contact";
import { AppContext }  from "../context/ContextCreation";

const Parent = () => {
  const cube = useContext(AppContext);
  return (
    <div>
      Parent : {cube(4)}
      <Contact />
    </div>
  );
};

export default Parent;

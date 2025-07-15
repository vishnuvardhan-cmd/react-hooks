import React, { useContext } from "react";
import  { AppContext }  from "../context/ContextCreation";

const Footer = () => {
  const cube = useContext(AppContext);
  return <div>Footer : {cube(3)}</div>;
};

export default Footer;

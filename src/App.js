import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Parent from "./components/Parent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Parent />
      <Footer />
    </>
  );
}

export default App;

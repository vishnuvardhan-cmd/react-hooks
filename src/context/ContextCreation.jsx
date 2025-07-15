import { createContext } from "react";

export const AppContext = createContext();

const ProvideContext = (props) => {
  const phone = "+91 7659860078";

  function cube(number){
    return Math.pow(number,3)
  }

  
  return (
    <AppContext.Provider value={cube}>{props.children}</AppContext.Provider>
  );
};

export default ProvideContext
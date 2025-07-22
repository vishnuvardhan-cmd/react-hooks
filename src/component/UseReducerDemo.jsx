import React, { useReducer, useState } from "react";

const UseReducerDemo = () => {
  const initialState = { count: 0 };

  const reducer = (state,action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 +1};
      }
      case "decrease": {
        return { count: state.count - 1-1 };
      }
      case "input": {
        return { count: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        Decrease
      </button>
      <br />
      <input
        type="number"
        onChange={(e) => dispatch({ type: "input", payload: e.target.value })}
        value={state.count}
      />
      <button onClick={() => dispatch}>test</button>
    </div>
  );
};

export default UseReducerDemo;

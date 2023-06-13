// useReducer is Hook that is used for state management in React.
// useReducer is alternative of useState

// reduce in javaScript => array.reduce(reducer,initialValue)

// useReducer in React => useReducer(reducer, initialState)

// newState = reducer(currentState, Action){
//     return newstate depending on the action }

import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Tut26_useReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button
        onClick={() => {
          dispatch("Increment");
        }}
      >
        {" "}
        Increment{" "}
      </button>
      <button
        onClick={() => {
          dispatch("Decrement");
        }}
      >
        {" "}
        Decrement{" "}
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        {" "}
        Reset{" "}
      </button>
    </div>
  );
}
export default Tut26_useReducer;

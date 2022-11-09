import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }
  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  const initialData = 0;
  //   const [myNum, setMyNum] = React.useState(initialData);

  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div>
        <h3 className="headline">Counter</h3>
      </div>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>+
        </div>

        <div className="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>-
        </div>
      </div>
    </>
  );
};

export default UseReducer;

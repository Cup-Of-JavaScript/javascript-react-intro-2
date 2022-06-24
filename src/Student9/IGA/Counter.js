import React, { useState } from "react";

export const Counter = () => {
  let [count, setCount] = useState(0);

  let increase1 = () => {
    setCount(count + 1);
  };

  let increase10 = () => {
    setCount(count + 10);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div className="Button">
      <button onClick={increase1}>Increment by 1</button>
      <br></br>
      <button onClick={increase10}>Increment by 10</button>
      <br></br>
      <button onClick={Reset}>Reset</button>
      <br></br>
      Counter: {count}
    </div>
  );
};

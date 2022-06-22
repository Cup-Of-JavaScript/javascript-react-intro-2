import React, { useState } from "react";

export const MinMaxCounter = () => {
  let [count, setCount] = useState(0);
  let [Min, setMin] = useState(0);
  let [Max, setMax] = useState(0);
  let increase = () => {
    setCount(++count);
    if (count > Max) {
      setMax((Max = count));
    }
  };

  let decrease = () => {
    setCount(--count);
    if (count < Min) {
      setMin((Min = count));
    }
  };
  return (
    <div>
      <button onClick={decrease}>Down</button>
      {count}
      <button onClick={increase}>Up</button>
      <br />
      Min:{Min}
      <br />
      Max:{Max}
    </div>
  );
};

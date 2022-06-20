import React from "react";
import { useState } from "react";

export const UpDownCounter = () => {
  let [count, setCount] = useState(0);

  const onHandleClick = (direction) => {
    if (direction === "down") {
      setCount(--count);
    } else setCount(++count);
  };

  return (
    <div>
      <button onClick={() => onHandleClick("down")}>Down</button>
      {count}
      <button onClick={() => onHandleClick("up")}>Up</button>
    </div>
  );
};

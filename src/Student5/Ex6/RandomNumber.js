import React from "react";
import { useState } from "react";

export const RandomNumber = () => {
  let [number, setNumber] = useState(0);

  const onHandleClick = () => {
    setNumber(Math.floor(Math.random() * 10) + 1);
  };

  return (
    <div>
      <div>
        Random Number:
        <span>{number}</span>
      </div>
      <button onClick={() => onHandleClick()}>Generate</button>
    </div>
  );
};

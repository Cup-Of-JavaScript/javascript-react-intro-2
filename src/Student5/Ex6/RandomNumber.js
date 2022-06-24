import React from "react";
import { useState } from "react";
import './RandomNumber.scss'

export const RandomNumber = () => {
  let [number, setNumber] = useState(0);

  const onHandleClick = () => {
    setNumber(Math.floor(Math.random() * 10) + 1);
  };

  return (
    <div className="randomnumber">
      <div className="number">
        Random Number:
        <span>{number}</span>
      </div>
      <button className = "button" onClick={() => onHandleClick()}>Generate</button>
    </div>
  );
};

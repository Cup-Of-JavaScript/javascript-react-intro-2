import React from "react";
import { useState } from "react";
import './CarCounter.scss'

export const CarCounter = () => {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);
  let [counter3, setCounter3] = useState(0);

  const onHandleClick1 = () => {
    setCounter1(++counter1);
  };
  const onHandleClick2 = () => {
    setCounter2(++counter2);
  };
  const onHandleClick3 = () => {
    setCounter3(++counter3);
  };

  return (
    <div className="carcounter">
      <button className = "car" onClick={() => onHandleClick1()}>Ford</button>
      <button className = "car" onClick={() => onHandleClick2()}>Toyota</button>
      <button className = "car" onClick={() => onHandleClick3()}>Chevy</button>
      <div>Ford:{counter1}</div>
      <div>Toyota:{counter2}</div>
      <div>Chevy:{counter3}</div>
      <div>Total:{counter1 + counter2 + counter3}</div>
    </div>
  );
};

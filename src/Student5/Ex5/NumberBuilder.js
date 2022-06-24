import React from "react";
import { useState, useRef } from "react";
import './NumberBuilder.scss'

export const NumberBuilder = () => {
  let numberRef = useRef(0);
  let [numbers, setNumbers] = useState([]);

  const onHandleClick = () => {
    ++numberRef.current;

    setNumbers([
      ...numbers,
      {
        id: numbers.length,
        value: numberRef.current,
      },
    ]);
  };

  const onReset = () => {
    setNumbers([]);
  };
  return (
    <div className = "numberbuilder">
      <button className = "add" onClick={() => onHandleClick()}>Add Number</button>
      <button className = "reset" onClick={() => onReset()}>Reset</button>
      <div>
        Number:
        {numbers.map((number) => (
          <span key={number.id}>{number.value}</span>
        ))}
      </div>
    </div>
  );
};

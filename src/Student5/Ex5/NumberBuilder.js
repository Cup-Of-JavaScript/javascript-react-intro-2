import React from "react";
import { useState, useRef } from "react";

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
    <div>
      <button onClick={() => onHandleClick()}>Add Number</button>
      <button onClick={() => onReset()}>Reset</button>
      <div>
        Number:
        {numbers.map((number) => (
          <span key={number.id}>{number.value}</span>
        ))}
      </div>
    </div>
  );
};

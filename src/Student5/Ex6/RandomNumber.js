import React from "react";
import { useState } from "react";

export const RandomNumber = () => {
  let [numArray, setNumArray] = useState([]);

  const onHandleClick = () => {
    setNumArray([
      ...numArray,
      {
        id: numArray.length,
        value: Math.floor(Math.random() * 10),
      },
    ]);
  };

  return (
    <div>
      <div>
        Random Number:
        {numArray.map((number) => (
          <span key={number.id}>{number.value}</span>
        ))}
      </div>
      <button onClick={() => onHandleClick()}>Generate</button>
    </div>
  );
};

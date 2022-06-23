import React from "react";
import { useState } from "react";

export const AddCalculator = () => {
  let [button1, setButton1] = useState(0);
  let [button2, setButton2] = useState(0);
  let [button3, setButton3] = useState(0);

  const onClick1 = (number) => {
    if (number === 1) setButton1(button1 + 1);
  };
  const onClick2 = (number) => {
    if (number === 2) setButton2(button2 + 2);
  };
  const onClick3 = (number) => {
    if (number === 3) setButton3(button3 + 3);
  };

  const total = button1 + button2 + button3;

  return (
    <div>
      <button onClick={() => onClick1(1)}>Add 1</button>
      <button onClick={() => onClick2(2)}>Add 2</button>
      <button onClick={() => onClick3(3)}>Add 3</button>

      <div>Total:{total}</div>
    </div>
  );
};

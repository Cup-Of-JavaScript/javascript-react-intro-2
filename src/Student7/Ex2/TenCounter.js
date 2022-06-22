import React from "react";
import { useState } from "react";

export const TenCounter = () => {
  let [increase, setIncrease] = useState(0);
  const onHandleClick = () => {
    if (increase < 10) {
      setIncrease(++increase);
    } else {
      setIncrease(0);
    }
  };
  return (
    <div>
      <button onClick={() => onHandleClick()}>Push</button>Counter:
      {increase}
    </div>
  );
};

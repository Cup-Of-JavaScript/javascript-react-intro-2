import React from "react";
import { useState } from "react";
import './TenCounter.scss'

export const TenCounter = () => {
  let [counter, setCounter] = useState(0);

  const onClick = () => {
    if (counter <= 9) {
      setCounter(++counter);
    } else {setCounter(0)};
  };

  return (
    <div className = 'tencounter'>
      <button className = 'button' onClick={() => onClick()}>Push</button> Counter: {counter}
    </div>
  );
};

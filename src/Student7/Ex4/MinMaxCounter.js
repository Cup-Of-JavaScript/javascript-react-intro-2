import React from 'react'
import { useState } from "react";

export const MinMaxCounter = () => {
  let [counter, setCounter] = useState(0);
  let [max, setMax] = useState(0);
  let [min, setMin] = useState(0);
  
  const onHandleClick = (direction) => {
    if (direction === 'up' || counter > max) {
      setCounter(++counter);
      setMax(max = counter)
    }
    if (direction === 'down' && counter < max) {
      setCounter(--counter);
      setMax(min = counter)
    }
  };

  return (
    <div>
      <button onClick={() => onHandleClick('down')}>Down</button>
      <span>{counter}</span>
      <button onClick={() => onHandleClick('up')}>Up</button>
      <br />
      Min: {min}
      <br />
      Max: {max}
    </div>
  )
}

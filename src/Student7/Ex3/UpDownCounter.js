import React from 'react'
import { useState } from "react";


export const UpDownCounter = () => {
 
  let [setCounter, counter] = useState(0);
  
  const onHandleClick = (direction) => {
    if (direction === 'up') {
      setCounter(++counter);
    } else {
      setCounter(--counter);
    }
  };

  return (
    <div>
      <button onClick={() => onHandleClick('down')}>Down</button>
      <span>{counter}</span>
      <button onClick={() => onHandleClick('up')}>Up</button>
    </div>
  );
};


import React from 'react'
import { useState } from "react";


export const UpDownCounter = (props) => {
 
  let [counter, setCounter] = useState(props.value);
  
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


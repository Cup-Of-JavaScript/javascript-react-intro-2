import React from "react";
import { useState } from "react";
import './MinMaxCounter.scss'

export const MinMaxCounter = () => {
  let [count, setCount] = useState(0);
  let [minValue, setMinValue] = useState(0);
  let [maxValue, setMaxValue] = useState(0);

  const incrementCount = () => {
    setCount(++count);
    if (count > maxValue) {
      setMaxValue((maxValue = count));
    }
  };

  const decrementCount = () => {
    setCount(--count);
    if (count < minValue) {
      setMinValue((minValue = count));
    }
  };

  return (
    <div className= 'counter'>
      <button className= 'downbutton' onClick={() => decrementCount()}>Down</button>
      {count}
      <button className='upbutton' onClick={() => incrementCount()}>Up</button>

      <div className="min">Min:{minValue}</div>
      <div className="max">Max:{maxValue}</div>
    </div>
  );
};

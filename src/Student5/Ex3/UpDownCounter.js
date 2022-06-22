import React from "react";
import { useState } from "react";
import './UpDownCounter.scss'

export const UpDownCounter = (props) => {
  let [count, setCount] = useState(props.value);

 const onHandleClick = (direction) => {
    if (direction === "down") {
      setCount(--count);
    } else {
      setCount(++count);
    }
  };

  return (
    <div className = 'updowncounter'>
      <button className= 'downbutton'onClick={() => onHandleClick("down")}>Down</button>
      {count}
      <button className= 'upbutton' onClick={() => onHandleClick("up")}>Up</button>
    </div>
  );
};

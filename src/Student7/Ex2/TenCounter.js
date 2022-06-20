import React from 'react'
import { useState } from "react";

export const TenCounter = () => {
    let [increase, setIncrease] = useState(0);
    const onHandleClick = (count) => {
        if (count === 'count' ){
      setIncrease(++increase);
        } else {
            setIncrease(--increase);
        }
    };
  return (
    <div>
        <button onClick={() => onHandleClick('count')}>Push</button>Counter: {increase}
    </div>
  )
}

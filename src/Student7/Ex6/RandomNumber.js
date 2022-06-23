import React from 'react'
import { useState } from "react";

export const RandomNumber = () => {

  let [num, setNum] = useState(0);


  const onHandleClick = (action) => {
    if(action === 'random'){
      setNum(Math.floor(Math.random()* 10));
    }

  };

  return (
    <div>
      Random Number: {num}
      <br />
      <button onClick={() => onHandleClick('random')}>Generate</button>
    </div>
  )
}

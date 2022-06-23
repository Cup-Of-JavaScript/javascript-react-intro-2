import React from 'react'
import { useState } from "react";

export const RandomNumber = () => {

  let [count, setCount] = useState(0);


  const onHandleClick = (command) => {
    // if(command === 'random'){
    //   setCount(++count);
    //   numbers.push(count)
    // }

  };

  return (
    <div>
      Random Number: {count}
      <br />
      <button onClick={() => onHandleClick('random')}>Generate</button>
    </div>
  )
}

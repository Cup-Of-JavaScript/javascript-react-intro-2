import React from 'react'
import { useState } from "react";


export const NumberBuilder = () => {
  let [count, setCount] = useState(0);

  let [numbers, setNumbers] = useState([])

  const onHandleClick = (command) => {
    if(command === 'add'){
      setCount(++count);
      numbers.push(count)
    }

  };

  const onHandleClick2 = (command) => {
    if(command === 'reset'){
      setCount('');
      setNumbers([]);
    }
  };



  return (
    <div>
      <button onClick={() => onHandleClick('add')}>Add Number</button>
      <button onClick={() => onHandleClick2('reset')}>Reset</button>
      <br />
      Numbers: {setNumbers.toString}
    </div>
  )
}

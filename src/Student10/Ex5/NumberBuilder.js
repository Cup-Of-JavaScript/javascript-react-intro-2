import React from 'react'
import './NumberBuilder.scss'
import { useState } from 'react'

export const NumberBuilder = () => {
    let [counter, setCounter] = useState(0);
    const [numbers, setNumbers] = useState(" ")

    const onHandleClick = () => {
       setCounter(++counter);
        numbers.push(counter)
    }

    const onReset = () => {
        setNumbers(" ");
        setCounter(0)
    }

  return (
    <div>
        <button onClick={() => onHandleClick()}>Add Number</button>
        <button onClick={onReset}>Reset</button>
        <br/>
        Numbers: {numbers.join("")}
        
        
    </div>
  )
}

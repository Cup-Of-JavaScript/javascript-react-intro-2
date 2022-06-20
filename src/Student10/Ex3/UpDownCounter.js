import React, { useState } from 'react'

export const UpDownCounter = () => {
    let [counter, setCounter] = useState(0);

    let increment = () => {
        setCounter(counter + 1);
    }

    let decrement = () => {
        setCounter(counter - 1)
    }
  return (
    <div>
        <button onClick={decrement}>Down</button>
        {counter}
        <button onClick={increment}>Up</button>
    </div>
  )
}

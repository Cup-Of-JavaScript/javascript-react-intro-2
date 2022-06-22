import React, { useState } from 'react'
import './UpDownCounter.scss'

export const UpDownCounter = (props) => {
    let [counter, setCounter] = useState(props.value);

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

import React, { useState } from 'react'

export const MinMaxCounter = () => {
    let [counter, setCounter] = useState(0);
    let [minimum, setMinimum] = useState(0);
    let [maxium, setMaxium] = useState(0);

    let increment = () => {
        setCounter(++counter);
        if (counter > maxium){
            setMaxium(maxium = counter)
        }
    }

    let decrement = () => {
        setCounter(--counter)
        if (counter < minimum){
            setMinimum(minimum = counter)
        }
    }

    
  return (
    <div>
        <button onClick={decrement}>Down</button>
        {counter}
        <button onClick={increment}>Up</button>
        <br/>
        Min:{minimum}
        <br/>
        Max:{maxium}
    </div>
  )
}
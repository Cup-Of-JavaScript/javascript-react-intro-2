import React, { useState } from 'react'

export const UpDownCounter = () => {
    let [count, setCount] = useState(0);

    let increase = () => {
        setCount(count + 1);
    }

    let decrease = () => {
        setCount(count - 1)
    }
    return(
        <div>
         <button onClick={increase}>down</button>
         {count}
         <button onClick={decrease}>up</button>
        </div>
    )
  
}

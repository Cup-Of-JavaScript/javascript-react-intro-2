import React, { useState } from 'react'

export const UpDownCounter = (props) => {
    let [count, setCount] = useState(props.value);

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

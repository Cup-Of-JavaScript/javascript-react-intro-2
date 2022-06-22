import React, { useState } from 'react'

export const MinMaxCounter = () => {
    let [count, setCount] = useState(0);
    let [Min,setMin] = useState(0)
    let[max,setMax] = useState(0)
    let increase = () => {
        setCount(count + 1);
    }

    let decrease = () => {
        setCount(count - 1)
    }
    return(
        <div>
        <button onClick={decrease}>Down</button>
        {count}
        <button onClick={increase}>Up</button>
        <br/>
        Min:{minimum}
        <br/>
        Max:{maxium}
    </div>
    )
  
}
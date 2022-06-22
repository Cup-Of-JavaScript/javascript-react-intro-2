import React, { useState } from 'react'
import './TenCounter.scss'

export const TenCounter = () => {
    let [counter, setCounter] = useState(0);

    const onClick = () => {
        if (counter >= 10) {
            setCounter(0);
        }
        else {
            setCounter(++counter);
        }
    }

    return (
        <div className="TenCounter">
            <button onClick={() => onClick()}>^</button>
            <p>{counter}</p>
        </div>

    )
}

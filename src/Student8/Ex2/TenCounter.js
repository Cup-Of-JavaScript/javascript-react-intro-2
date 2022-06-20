import React, { useState } from 'react'

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
        <div>
            <button onClick={() => onClick()}>Push</button>
            <span>{counter}</span>
        </div>

    )
}

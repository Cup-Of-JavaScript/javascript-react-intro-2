
import React, { useState } from 'react'

export const UpDownCounter = () => {
    let [counter, setCounter] = useState(0)

    return (
        <div>
            <button onClick={() => setCounter(--counter)}>Down</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(++counter)}>Up</button>
        </div>
    )
}
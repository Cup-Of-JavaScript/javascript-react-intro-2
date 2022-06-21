import React, { useState } from 'react'
import './UpDownCounter.scss'

export const UpDownCounter = () => {
    let [counter, setCounter] = useState(0)

    return (
        <div className="UpDown">
            <button className="btn btn-dark-moon btn-fab" onClick={() => setCounter(--counter)}>Down</button>
            <span className="Boxed">{counter}</span>
            <button className="btn btn-light-moon btn-fab" onClick={() => setCounter(++counter)}>Up</button>
        </div>
    )
}
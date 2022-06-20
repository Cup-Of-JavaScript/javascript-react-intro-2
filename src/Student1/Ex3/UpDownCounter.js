import React from 'react'
import { useState } from 'react'
import './UpDownCounter.scss'

export const UpDownCounter = (direction) => {
    let [upDownButton, setUpDownButton] = useState(0)
    const upDownHandler = (direction) => {
        if (direction === 'decrease') {
            setUpDownButton(++upDownButton)
        } else if (direction === 'increase') {
            setUpDownButton(--upDownButton)
        }
    }
    return (
        <div>
            <button onClick={() => { upDownHandler('increase') }}>Down</button>
            {upDownButton}
            <button onClick={() => { upDownHandler('decrease') }}>Up</button>
        </div>

    )
}

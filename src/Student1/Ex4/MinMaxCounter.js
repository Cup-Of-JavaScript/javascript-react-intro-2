import React from 'react'
import { useState } from 'react'
import './MinMaxCounter.scss'

export const MinMaxCounter = () => {
    let [upDownButton, setUpDownButton] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [minValue, setMinValue] = useState(0)

    const upDownHandler = (direction) => {
        if (direction === 'increase') {
            setUpDownButton(++upDownButton)
        } if (upDownButton > maxValue) {
            setMaxValue(upDownButton)
        } if (direction === 'decrease') {
            setUpDownButton(--upDownButton)
        } if (upDownButton < minValue){
            setMinValue(upDownButton)
        }
        console.log(maxValue)
    }

    return (
        <div>
            <button onClick={() => { upDownHandler('decrease') }}>Down</button>
            {upDownButton}
            <button onClick={() => { upDownHandler('increase') }}>Up</button>
            <div>
                Min: {minValue}
            </div>
            <div>
                Max: {maxValue}
            </div>

        </div>
    )
}

import React from 'react'
import { useState } from 'react'
import './UpDownCounter.scss'

export const UpDownCounter = (props) => {
    let [counter, setCounter] = useState(props.value) 
  
    const upDownHandler = (direction) => {
        if (direction === 'decrease') {
            setCounter(++counter)
        } else if (direction === 'increase') {
            setCounter(--counter)
        }
    }
    return (
        <div>
            <button onClick={() => { upDownHandler('increase') }}>Down</button>
            &nbsp; {counter} &nbsp;
            <button onClick={() => { upDownHandler('decrease') }}>Up</button>
        </div>

    )
}

import React, { useState } from 'react'

export const MinMaxCounter = () => {
    let [counter, setCounter] = useState(0)
    let [max, setMax] = useState(0)
    let [min, setMin] = useState(0)

    let dec = () => {
        setCounter(--counter);
        if (counter < min) {
            setMin(min = counter);
        }
    }

    let inc = () => {
        setCounter(++counter);
        if (counter > max) {
            setMax(max = counter);
        }
    }

    return (
        <div>
            <button onClick={dec}>Down</button>
            {counter}
            <button onClick={inc}>Up</button>
            <br />
            <br /> <b>Min: </b>{min}
            <br /> <b>Max: </b>{max}
        </div>
    )

}
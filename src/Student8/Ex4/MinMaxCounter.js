
import React, { useState } from 'react'
import './MinMaxCounter.scss'


export const MinMaxCounter = () => {
    let [counter, setCounter] = useState(0)
    let [lowest, setLowest] = useState(0)
    let [highest, setHighest] = useState(0)

    const subHandle = () => {
        setCounter(--counter);
        if (counter < lowest) {
            setLowest(lowest = counter)
        }
    }

    const addHandle = () => {
        setCounter(++counter);
        if (counter > highest) {
            setHighest(highest = counter)
        }
    }

    return (
        <div className="middle">
            <div className="box">
                {/* <div className="MinMax"> */}
                    <button onClick={() => subHandle()}>Down</button>
                    <span>{counter}</span>
                    <button onClick={() => addHandle()}>Up</button>
                    <p>Min: {lowest}   </p>
                    <p>Max: {highest}</p>
                {/* </div> */}
            </div>
        </div>


    )
}

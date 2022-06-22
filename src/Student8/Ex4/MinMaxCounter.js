
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
                <div className="MinMax">
               
                    <h1>Which way do you want to go?</h1>
                    <h2>Up?  or Down??</h2>
                    <p className='counter'>
                    {counter}</p>
                    
                    <button className="button-down" onClick={() => subHandle()}>-</button>
                    <button className="button-up" onClick={() => addHandle()}>+</button>
                    <p>Min: {lowest}  
                    &nbsp;Max: {highest}</p>
                </div>
            </div>
        </div>


    )
}

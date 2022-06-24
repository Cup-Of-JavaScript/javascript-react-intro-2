import React, { useState } from 'react'
import './NumberBuilder.scss'

export const NumberBuilder = () => {
    let [num, numAdd] = useState(0);
    let [numString, addString] = useState([])

    const addHandler = () => {
        numAdd(++num);
        numString.push(num)
    }

    const resetHandler = () => {
        addString([]);
        numAdd(0)
    }

    return (
        <div>
            <button className="brk-btn" onClick={() => addHandler()}>Add Number</button>
            <button className="brk-btn2" onClick={() => resetHandler()}>Reset</button>
            
            <p>Numbers: {numString.join(' ')}</p>
        </div>
    )
}

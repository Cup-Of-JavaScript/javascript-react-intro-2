import React, { useState } from 'react'

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
            <button onClick={() => addHandler()}>Add Number</button>
            <button onClick={() => resetHandler()}>Reset</button>
            <br />
            Numbers: {numString.join(' ')}
        </div>
    )
}

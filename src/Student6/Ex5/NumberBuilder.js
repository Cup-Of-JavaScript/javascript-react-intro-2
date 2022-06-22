import React, { useState } from 'react'

export const NumberBuilder = () => {
    let [counter, setCounter] = useState(0);
    let [number, setNumber] = useState([]);

    const inc = () => {
        setCounter(++counter);
        number.push(counter);
    }

    const Reset = () => {
        setCounter(0);
        setNumber([]);
    }

    return (
        <div>
            <button onClick={inc}>Add Number</button>
            <button onClick={Reset}>Reset</button>
            <br />
            <br /> <b>Numbers: </b>{number.join(" ")}
        </div>
    )

}
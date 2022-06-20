import React from "react";
import { useState } from "react";
import './TenCounter.scss'

export const TenCounter = () => {
    let [numCounter, setNumCounter] = useState(0);

    const countHandler = () => {
        if (numCounter >= 10) {
            numCounter = 0
        } else {
            setNumCounter(++numCounter)
        }
        console.log(numCounter)
    }

    return (
        <div>
            <button onClick={() => { countHandler() }}>Push</button>
            Counter:{numCounter}
        </div>
    )
}

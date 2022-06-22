import React from "react"
import { useState } from "react"

export const UpDownCounter = () => {
    let [counter, setCounter] = useState(0)

    const onHandleClick = (direction) => {
        if (direction === "up") {
            setCounter(++counter)
        }
        if (direction === "down") {
            setCounter(--counter)
        }
    }

    return (
        <div className="Main">
            <button onClick={() => onHandleClick("down")}> Down </button>
            {counter}
            <button onClick={() => onHandleClick("up")}> Up </button>
        </div>
    )
}
import React from 'react'
import { useState } from 'react'
import './NumberBuilder.scss'

export const NumberBuilder = () => {
    let [counter, setCounter] = useState(0)
    let [numbers, setNumbers] = useState("")


    const numberHandler = () => {
        setCounter(++counter)
        // TODO.. concat numbers with other numbers..
        // 1 2 3
        setNumbers(numbers => [numbers, " ", counter])
    }
    console.log()
    const buttonReset = () => {
        setCounter("")
    }

    return (
        <div>
            <button onClick={() => { numberHandler() }}>Add Number</button>
            <button onClick={() => { buttonReset() }}>Reset</button>
            <div>
                Numbers: {numbers}
            </div>
        </div>
    )
}

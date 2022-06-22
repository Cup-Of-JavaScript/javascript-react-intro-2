import React from 'react'
import { useState } from 'react'
import './NumberBuilder.scss'

export const NumberBuilder = () => {
    let [counter, setCounter] = useState(0)
    let [numbers, setNumbers] = useState("")

    const numberHandler = () => {
        setCounter(++counter)
        setNumbers(numbers => [numbers, " ", counter])
    }
    
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

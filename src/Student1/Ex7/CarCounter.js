import React from 'react'
import { useState } from 'react'
import './CarCounter.scss'

export const CarCounter = () => {
let [fordCounter, setFordCounter] = useState(0)
let [toyotaCounter, setToyotaCounter] = useState(0)
let [chevyCounter, setChevyCounter] = useState(0)
let [totalCounter, setTotalCounter] = useState(0)

const fordHandler = () => {
setFordCounter(++fordCounter)
setTotalCounter(++totalCounter)
}

const toyotaHandler = () => {
setToyotaCounter(++toyotaCounter)
setTotalCounter(++totalCounter)
}

const chevyHandler = () => {
setChevyCounter(++chevyCounter)
setTotalCounter(++totalCounter)
}

    return (
        <div>
            <button onClick={() => { fordHandler() }}>Ford</button>
            <button onClick={() => { toyotaHandler() }}>Toyota</button>
            <button onClick={() => { chevyHandler() }}>Chevy</button>
            <div>
                Ford: {fordCounter}
            </div>
            <div>
                Toyota: {toyotaCounter}
            </div>
            <div>
                Chevy: {chevyCounter}
            </div>
            <div>
                Total: {totalCounter}
            </div>
        </div>
    )
}

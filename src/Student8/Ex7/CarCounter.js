import React, { useState } from 'react'
import './CarCounter.scss'

const CarCounter = () => {

    let [ford, setFord] = useState(0);
    let [toyota, setToyota] = useState(0);
    let [chevy, setChevy] = useState(0);
    let total = ford + toyota + chevy

    const onHandleClickFord = () => {
        setFord(++ford);
    }
    const onHandleClickToyota = () => {
        setToyota(++toyota);
    }
    const onHandleClickChevy = () => {
        setChevy(++chevy);
    }

    return (
        <div className='box'>
            <button className="ford" onClick={() => onHandleClickFord()}></button>
            <button className= "toyota" onClick={() => onHandleClickToyota()}></button>
            <button className="chevy" onClick={() => onHandleClickChevy()}></button>
            <br />
            Ford: {ford}<br />
            Toyota: {toyota}<br />
            Chevy: {chevy}<br />
            TOTAL:  {total}
        </div>
    )
}

export default CarCounter
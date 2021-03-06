import React from 'react'
import { useState } from 'react'

export const CarCounter = () => {
    let [ford, setFord] = useState(0);
    let [toyota, setToyota] = useState(0);
    let [chevy, setChevy] = useState(0);
    const Total = toyota + chevy + ford;

    const onHandleClickFord = () => {
        setFord(++ford)
    }

    const onHandleClickToyota = () => {
        setToyota(++toyota)
    }

    const onHandleClickChevy = () => {
        setChevy(++chevy)
    }
  return (
    <div>
        <button onClick={onHandleClickFord}>Ford</button>
        <button onClick={onHandleClickToyota}>Toyota</button>
        <button onClick={onHandleClickChevy}>Chevy</button>
        <br/>
        Ford: {ford}
        <br/>
        Toyota: {toyota}
        <br/>
        Chevy: {chevy}
        <br/>
        Total: {Total}

    </div>
  )
}

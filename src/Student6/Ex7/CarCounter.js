import { React, useState } from 'react'

export const CarCounter = () => {
    let [fcar, setFcar] = useState(0);
    let [tcar, setTcar] = useState(0);
    let [ccar, setCcar] = useState(0);
    let [counter, setCounter] = useState(0);

    const Ford = () => {
        setFcar(++fcar)
        setCounter(++counter);
    }

    const Toyota = () => {
        setTcar(++tcar)
        setCounter(++counter);
    }

    const Chevy = () => {
        setCcar(++ccar)
        setCounter(++counter);
    }

    return (
        <div>
            <button onClick={Ford}>Ford</button>
            <button onClick={Toyota}>Toyota</button>
            <button onClick={Chevy}>Chevy</button>
            <br />
            <br /> Ford: {fcar} <br />
            <br /> Toyota: {tcar} <br />
            <br /> Chevy: {ccar} <br />
            <br /> Total: {counter}
        </div>
    )
}
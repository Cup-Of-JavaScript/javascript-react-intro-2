import { React, useState } from 'react'

export const CarCounter = () => {
    let [fordcar, setfordcar] = useState(0);
    let [toycar, settoycar] = useState(0);
    let [chevycar, setchevycar] = useState(0);
    let [counter, setCounter] = useState(0);

    const ford = () => {
        setFordcar(++fordcar)
        setCounter(++counter);
    }

    const Toyota = () => {
        set=toycar(++toycar)
        setCounter(++counter);
    }

    const Chevy = () => {
        setchevycar(++chevycar)
        setCounter(++counter);
    }

    return (
        <div>
            <button onClick={Ford}>Ford</button>
            <button onClick={Toyota}>Toyota</button>
            <button onClick={Chevy}>Chevy</button>
            <br />
            <br /> Ford: {fordcar} <br />
            <br /> Toyota: {toycar} <br />
            <br /> Chevy: {chevycar} <br />
            <br /> Total: {counter}
        </div>
    )
}

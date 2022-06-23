import { React, useState } from 'react'

export const CarCounter = () => {
    let [Fordcar, setFordcar] = useState(0);
    let [Toycar, setToycar] = useState(0);
    let [Chevycar, setChevycar] = useState(0);
    let [counter, setCounter] = useState(0);

    const Ford = () => {
        setFordcar(++Fordcar)
        setCounter(++counter);
    }

    const Toyota = () => {
        setToycar(++Toycar)
        setCounter(++counter);
    }

    const Chevy = () => {
        setChevycar(++Chevycar)
        setCounter(++counter);
    }

    return (
        <div>
            <button onClick={Ford}>Ford</button>
            <button onClick={Toyota}>Toyota</button>
            <button onClick={Chevy}>Chevy</button>
            <br />
            <br /> Ford: {Fordcar} <br />
            <br /> Toyota: {Toycar} <br />
            <br /> Chevy: {Chevycar} <br />
            <br /> Total: {counter}
        </div>
    )
}
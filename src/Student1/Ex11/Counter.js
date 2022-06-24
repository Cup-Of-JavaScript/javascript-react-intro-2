import {React, useState} from 'react'
import './Counter.scss'

export const Counter = () => {
    let [increase, setIncrease] = useState(0)

    const upDownHandler = (dial) => {
        if (dial === "increase") {
            setIncrease((increase) + 10)
        } else {
            setIncrease((increase) - 10)
        }
    }

    const deleteHandler = () => {
        setIncrease(0)
    }

    return (
        <div>
            <div className='Buttons'>
                <button style={{width: '150px'}} onClick={() => { upDownHandler("increase") }}>Increment by 10</button>
            </div>
            <div className='Buttons'>
                <button style={{width: '150px'}} onClick={() => { upDownHandler("decrease") }}>Decrement by 10</button>
            </div>
            <div className='Buttons'>
                <button style={{width: '150px'}} onClick={() => { deleteHandler() }}>Reset</button>
                <div>
                    Counter:{increase}
                </div>
            </div>
        </div>
    )
}

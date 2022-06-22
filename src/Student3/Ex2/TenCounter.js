import React from 'react'
import { useState } from 'react'

export const TenCounter = () => {
    let [counter, setCounter] = useState(0)
    const onHandleClick = () => {
        if (counter >= 10) { 
          setCounter(0) 
        }
        else { 
          setCounter(++counter) 
        }
    }

    return (
        <div className='TenCounter'>
            <button onClick={() => onHandleClick()}>Push</button>
            Counter: {counter}
        </div>
    )
}   

import React, { useState } from 'react'
import './TenCounter.scss'

export const TenCounter = () => {
    let [counter, setCounter] = useState(0);

    const onHandleClick = () => {
        if (counter === 10){
            setCounter(0);
        }
        else {
            setCounter(++counter);
        }
        
    }

  return (
    <div className='counter'>
        <button onClick={() => onHandleClick()}>Push</button>
        Counter: {counter}
    </div>
  )
}

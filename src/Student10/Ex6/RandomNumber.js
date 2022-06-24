import React from 'react'
import { useState } from 'react'

export const RandomNumber = () => {
    let [random, setRandom] = useState(0);

    const randomnumGen = (max, min) =>{
        return Math.floor(Math.random() * (max - min )) + min;
    }

    const onHandleClick = () => {
        setRandom(randomnumGen(0, 10));
    }

  return (
    <div>
        Random Number: {random}
        <br/>
        <button onClick={onHandleClick}>Generate</button>
    </div>
  )
}

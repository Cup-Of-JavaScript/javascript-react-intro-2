import React, { useState } from 'react'
import './RandomNumber.scss'


const RandomNumber = () => {
    const [num, setNum] = useState(0);

   const randomNumberInRange = (min, max) => {
      // 👇️ get number between min (inclusive) and max (inclusive)
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    const handleClick = () => {
      setNum(randomNumberInRange(1, 10));
    };

    return (
    <div>
          <button onClick={handleClick}>Generate</button>
          <div>Random Number: {num} </div>
              </div>
  )
}

export default RandomNumber
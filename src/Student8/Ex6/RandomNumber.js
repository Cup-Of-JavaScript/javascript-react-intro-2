import React, { useState } from 'react'

const RandomNumber = () => {
    const [num, setNum] = useState(0);

    function randomNumberInRange(min, max) {
      // 👇️ get number between min (inclusive) and max (inclusive)
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    const handleClick = () => {
      setNum(randomNumberInRange(1, 10));
    };

    return (
    <div>Random Number: {num} <br />
          <button onClick={handleClick}>Generate</button>
    
    </div>
  )
}

export default RandomNumber
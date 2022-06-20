import React, { useState } from 'react'

export const TenCounter = () => {
  let [counter, setCounter] = useState(0);

  const onhandleClick = () => {
    if (counter <10) {setCounter(++counter);} 
    else {setCounter(0);}
  }

  return (
    <div><button onClick={() => onhandleClick()}>Push</button>
      Counter: {counter}
    </div>
  )

}



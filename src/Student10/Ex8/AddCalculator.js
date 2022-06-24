import React from 'react'
import { useState } from 'react'

export const AddCalculator = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1)
    }

    const incrementTwo = () => {
        setCounter(counter + 2)
    }

    const incrementThree = () => {
        setCounter(counter + 3)
    }

  return (
    <div>
        <button onClick={increment}>Add 1</button>
        <button onClick={incrementTwo}>Add 2</button>
        <button onClick={incrementThree}>Add 3</button>
        <br/>
        Total: {counter}

    </div>
  )
}

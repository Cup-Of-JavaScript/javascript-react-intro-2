import React from 'react'
import { useState } from 'react'

export const NumberBuilder = () => {
    const [input, setInput] = useState(" ");

    const handleUserInput = (e) => {
        setInput(e.target.value);
    }

    const onReset = () => {
        setInput("");
    }

  return (
    <div>
        <button>Add Number</button>
        <button onClick={onReset}>Reset</button>
        <br/>
        <label>Numbers:</label> 
        <input type="text" value={input} onChange={handleUserInput} />
    </div>
  )
}

import React from 'react'
import  { useState } from 'react'
export const NumberBuilder = () => {
    let [count, setCount] = useState(0);
    let [numbers, setNumbers] = useState([])

    
    const onHandleClick = () => {
        setCount(++count)
        numbers.push(count)
    }    
        
    const Reset = () => {
        setNumbers([]);
        setCount(0)
    }
    
    return(
        <div>
         <button onClick={() => onHandleClick()}>Add Number</button>
         <button onClick={Reset}>Reset</button>
         <br/>
         Numbers:{numbers.join("")}
        </div>
    )
} 

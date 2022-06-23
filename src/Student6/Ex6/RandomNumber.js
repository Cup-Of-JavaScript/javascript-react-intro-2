import {React, useState} from 'react'

export const RandomNumber = () => {
const [number, setNumber] = useState (0);

return(
    <div>
        Random Number: {number}
        <br/><button onClick={()=> setNumber(Math.ceil(Math.random()* 10))}>Generate</button>
    </div> 
)

}
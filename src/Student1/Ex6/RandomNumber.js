import React from 'react'
import { useState } from 'react'
import './RandomNumber.scss'

export const RandomNumber = () => {
let [randonum, setRandoNum] = useState(0)

const numberHandler = () => {
setRandoNum(Math.floor((Math.random(randonum) * 10) +1))
}

  return (
    <div>
        <div>
            Random Number: {randonum}
        </div>
        <button onClick={() => { numberHandler() }}>Generate</button>
    </div>
  )
}

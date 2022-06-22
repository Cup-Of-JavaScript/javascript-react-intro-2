<<<<<<< HEAD
export const Main = () => {
    return (
      <div className="Main">
        <UpDownCounter value={4} /> // <=== passing a number into the UpDownCounter
      </div>
    )
  }
  export const UpDownCounter = (props) => {
    let [counter, setCounter] = useState(props.value) // <=== initialize the counter
    ...
  }
=======
import React from "react"
import { useState } from "react"

export const UpDownCounter = () => {
    let [counter, setCounter] = useState(0)

    const onHandleClick = (direction) => {
        if (direction === "up") {
            setCounter(++counter)
        }
        if (direction === "down") {
            setCounter(--counter)
        }
    }

    return (
        <div className="Main">
            <button onClick={() => onHandleClick("down")}> Down </button>
            {counter}
            <button onClick={() => onHandleClick("up")}> Up </button>
        </div>
    )
}
>>>>>>> ad767441931a625e13f3ac28cb49dbbb7129c744

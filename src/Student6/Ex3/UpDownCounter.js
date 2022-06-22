import React, { useState } from 'react'

export const UpDownCounter = (props) => {
    let [counter, setCounter] = useState(props.value);

    return (
        <div>
            <button onClick={() => setCounter(--counter)}>Down</button>
            {counter}
            <button onClick={() => setCounter(++counter)}>Up</button>
        </div>
    )

}
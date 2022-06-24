import React, { useState } from 'react'
import './AddCalculator.scss'

export const AddCalculator = () => {
    let [totalAdd, setTotalAdd] = useState(0)

    const totalHandler = (value) => {
        if (value === 1) {
            setTotalAdd(++totalAdd)
        } else if (value === 2) {
            setTotalAdd((totalAdd) + 2)
        } else if (value === 3) {
            setTotalAdd((totalAdd) + 3)
        }
    }
    return (
        <div>
            <button onClick={() => { totalHandler(1) }}>Add 1</button>
            <button onClick={() => { totalHandler(2) }}>Add 2</button>
            <button onClick={() => { totalHandler(3) }}>Add 3</button>
            <div>
                Total: {totalAdd}
            </div>
        </div>
    )
}

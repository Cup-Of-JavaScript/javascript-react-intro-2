import React, { useState } from 'react'

const AddCalculator = () => {
    let [addOne, setOne] = useState(0)
    let [addTwo, setTwo] = useState(0)
    let [addThree, setThree] = useState(0)

    const addHandlerOne = () => {
        setOne(++addOne)
    }

    const addHandlerTwo = () => {
        setTwo(++addTwo)
    }

    const addHandlerThree = () => {
        setThree(++addThree)
    }

    let total = addOne + (addTwo * 2) + (addThree * 2)
    return (
        <div>
            <button onClick={() => addHandlerOne()}>Add 1</button>
            <button onClick={() => addHandlerTwo()}>Add 2</button>
            <button onClick={() => addHandlerThree()}>Add 3</button>
            <br />
            Total:  {total}
        </div>
    )
}

export default AddCalculator
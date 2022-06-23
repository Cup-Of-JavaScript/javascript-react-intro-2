import React, { useState } from 'react'

const Buttons = () => {

    let [buttonText1, setButtonText1] = useState("Push");
    let [buttonText2, setButtonText2] = useState("Push");

    const handleClick1 = () => {
        setButtonText1('Pushed');
    }
    const handleClick2 = () => {
        setButtonText2('Pushed');
    }

    const handleReset = () => {
        setButtonText1("Push");
        setButtonText2("Push")
    }
    return (
        <div>
            <button onClick={handleClick1}>{buttonText1}</button><br />
            <button onClick={handleClick2}>{buttonText2}</button><br />
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Buttons
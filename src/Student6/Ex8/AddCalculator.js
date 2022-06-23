import { React, useState } from 'react'

export const AddCalculator = () => {
  let [button1, setButton1] = useState(0);
  let [button2, setButton2] = useState(0);
  let [button3, setButton3] = useState(0);
  let [counter, setCounter] = useState(0);

  const Add1 = () => {
    setButton1(++button1)
    setCounter(++counter);
  }

  const Add2 = () => {
    setButton2(button2 + 2)
    setCounter(counter + 2);
  }

  const Add3 = () => {
    setButton3(button3 + 3)
    setCounter(counter + 3);
  }

  return (
    <div>
      <button onClick={Add1}>Add 1</button>
      <button onClick={Add2}>Add 2</button>
      <button onClick={Add3}>Add 3</button>
      <br />
      <br /> Total: {counter}
    </div>
  )
}
import React, { useState } from 'react'
import './Buttons.scss'

export const Buttons = () => {
  let [pushBut, setPushBut] = useState('Push')
  let [push2But, setPush2But] = useState('Push')


  const pushHandler = (results) => {
    if (results === pushBut) {
      pushBut = 'Pushed'
      setPushBut(pushBut)
    } else {
      pushBut = 'Pushed'
    }
  }

  const push2Handler = (results) => {
    if (results === push2But) {
      push2But = 'Pushed'
      setPush2But(push2But)
    } else {
      push2But = 'Pushed'
    }
  }

  const resetHandler = () => {
    setPushBut("")
    setPush2But("")
  }
  return (
    <div>
      <button onClick={() => { pushHandler('Pushed') }}>{pushBut}</button>
      <button onClick={() => { push2Handler('Pushed') }}>{push2But}</button>
      <button onClick={() => { resetHandler() }}>Reset</button>
    </div>
  )
}

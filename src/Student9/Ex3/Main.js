import React from 'react'
import './Main.scss'
import { UpDownCounter } from './UpDownCounter'


export const Main = () => {
  return (
    <div className="Main">
      <UpDownCounter value={4}/>
    </div>
  )
}


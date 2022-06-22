import React from 'react'
import { UpDownCounter } from './UpDownCounter'
import './Main.css'

export const Main = () => {
  return (
    <div className="Main">
      <UpDownCounter value={4} /> 
    </div>
  )
}
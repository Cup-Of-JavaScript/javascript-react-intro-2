import React, { useState}  from 'react'
import "./DateFetcher.scss"

export const DateFetcher = () => {
    const [date, setDate] = useState('Unknown')

    const onHandleClick = () => {
        let curr = new Date().toUTCString();
        setDate(curr)
    }

  return (
    <div className='date'>
     <button onClick={()=>onHandleClick()}>Push</button>UTC Date: {date}
    </div>
  )
}

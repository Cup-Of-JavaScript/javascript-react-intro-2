import React, { useState}  from 'react'

export const DateFetcher = () => {
    const [date, setDate] = useState('Unknown')

    const onHandleClick = () => {
        let curr = new Date().toUTCString();
        setDate(curr)
    }

  return (
    <div>
     <button onClick={()=>onHandleClick()}>Push</button>UTC Date: {date}
    </div>
  )
}

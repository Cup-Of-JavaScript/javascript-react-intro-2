import React, { useState}  from 'react'

export const DateFetcher = () => {
    const [date, setDate] = useState('Unknown')

    const onHandleClick = () => {
        let time = new Date().toUTCString();
        setDate(time)
    }

  return (
    <div>
     <button onClick={()=>onHandleClick()}>Push</button>UTC Date: {date}
    </div>
  )
}
   
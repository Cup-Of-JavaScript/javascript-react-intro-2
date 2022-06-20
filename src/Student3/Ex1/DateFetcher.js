import React from 'react'
import { useState } from 'react'



export const DateFetcher = () => {
    let [date, getDate] = useState("Unknown")
    let dd = new Date()
    let displayDate = dd.toUTCString()
   
    const onHandleClick = () => { getDate (displayDate)}
    
    return (
        <div>
            <button onClick={() => onHandleClick()}> Push </button> UTC Date: {date}
        </div>
    )
}

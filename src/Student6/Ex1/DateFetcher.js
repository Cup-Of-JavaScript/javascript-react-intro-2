import React, {useState} from 'react'

export const DateFetcher = () => {
  let [date, getDate] = useState ()

  const onhandleClick = () => {
    let date = new Date().toUTCString();
    getDate(date);
  }  

    return (
      <div><button onClick={() => onhandleClick()}>Push</button>
      UTC Date: {date}
      </div>
    )
}
  

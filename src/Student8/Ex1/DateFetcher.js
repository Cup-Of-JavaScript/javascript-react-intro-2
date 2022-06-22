import React, { useState } from 'react'
import './DateFetcher.scss'
export const DateFetcher = () => {
    let [mdate, getDate] = useState("Unknown")

    const onHandleDate = () => {
        let mdate = new Date().toUTCString();
        getDate(mdate);
    }

    return (
    <div className="DateFetcher">
        <button onClick={() => onHandleDate()}>Push</button>
        <br />
        UTC Date: {mdate}
    </div>
    )
}

import React from 'react'
import { useState } from 'react'
import './DateFetcher.scss'

export const DateFetcher = () => {
    let [datefetch, setDateFetch] = useState('UNKNOWN')
    let df = new Date();
    let dateTime = df.toUTCString();

    const dateHandler = () => {
        if (dateTime < datefetch) {
            setDateFetch(dateTime)
        }
    }
    return (
        <div>
            <button onClick={() => { dateHandler() }}>Push</button>
            UTC Date: {datefetch}
        </div>
    )
}

import React from 'react'
import { useState } from 'react'
import './DateFetcher.scss'

export const DateFetcher = () => {
    let [dateFetch, setDateFetch] = useState('UNKNOWN')
    let df = new Date();
    let dateTime = df.toUTCString();

    const dateHandler = () => {
        if (dateTime < dateFetch) {
            setDateFetch(dateTime)
        }
    }
    return (
        <div>
            <button onClick={() => { dateHandler() }}>Push</button>
            UTC Date: {dateFetch}
        </div>
    )
}

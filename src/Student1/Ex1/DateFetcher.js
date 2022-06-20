import React from 'react'
import { useState } from 'react'
import './DateFetcher.scss'

export const DateFetcher = () => {
    let [dateFetch, setDateFetch] = useState('UNKNOWN')
    let df = new Date();
    let dateTime = df.toUTCString();

    const dateHandler = () => {
            setDateFetch(dateTime)
<<<<<<< HEAD
=======

>>>>>>> 6f0233383701dbc09b20f19fc52e7755fc04b3a4
    }
    return (
        <div>
            <button onClick={() => { dateHandler() }}>Push</button>
            UTC Date: {dateFetch}
        </div>
    )
}

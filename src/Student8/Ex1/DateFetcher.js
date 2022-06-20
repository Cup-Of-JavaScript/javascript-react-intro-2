import React, { useState } from 'react'

export const DateFetcher = () => {
    let [mdate, getDate] = useState(null)

    const onHandleDate = () => {
        let mdate = new Date().toUTCString();
        getDate(mdate);
    }

    return (<div>
        <button onClick={() => onHandleDate()}>Push</button>
        UTC Date: {mdate}
    </div>
    )
}

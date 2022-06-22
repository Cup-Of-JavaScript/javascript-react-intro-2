import React from "react";
import { useState } from "react";
import './DateFetcher.scss'

export const DateFetcher = () => {
  const [date, setDate] = useState("unknown");

  const onHandleClick = () => {
    let date = new Date().toUTCString();
    setDate(date);
  };

  return (
    <div className = 'fetch'>
      <button className = 'button' onClick={() => onHandleClick()}>Push</button> UTC Date: {date}
    </div>
  );
};

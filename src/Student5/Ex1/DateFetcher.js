import React from "react";
import { useState } from "react";

export const DateFetcher = () => {
  const [date, setDate] = useState("unknown");

  const onHandleClick = () => {
    let date = new Date().toUTCString();
    setDate(date);
  };

  return (
    <div>
      <button onClick={() => onHandleClick()}>Push</button> UTC Date: {date}
    </div>
  );
};

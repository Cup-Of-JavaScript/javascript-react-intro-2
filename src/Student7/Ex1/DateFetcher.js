import React from "react";
import { useState } from "react";

export const DateFetcher = () => {
  const [time, setTime] = useState("Unknown");
  const onHandleClick = () => {
    setTime(new Date().toUTCString());
  };
  return (
    <div>
      <button onClick={() => onHandleClick()}>Push</button>UTC Date: {time}
    </div>
  );
};

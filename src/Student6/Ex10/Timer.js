import React from "react";
import { useState } from "react";
export const Timer = () => {
  let [result, setResult] = useState("");
  let [startTime, setStartTime] = useState(null);
  let [buttonText, setButtonText] = useState("Stopped");
  const onHandleClick = () => {
    if (startTime == null) {
      setResult("");
      setStartTime(new Date());
      setButtonText("Started...");
    } else {
      const endTime = new Date();
      const delta = (endTime.getTime() - startTime.getTime()) / 1000;
      setResult(delta + " seconds");
      setStartTime(null);
      setButtonText("Stopped");
    }
  };
  return (
    <div className="Main">
      <button onClick={() => onHandleClick()}>{buttonText}</button>
      <br />
      Elapsed Time: {result}
    </div>
  );
};
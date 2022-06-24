import React from "react";
import { useState } from "react";

export const Buttons = () => {
  let [push, setPush] = useState(false);
  let [buttonText, setButtonText] = useState("Push");

  const onReset = () => {
    setButtonText("Push");
    setPush(push);
  };

  return (
    <div>
      <button
        onClick={() => {
          setPush(!push);
          setButtonText("Pushed");
        }}
      >
        {buttonText}
      </button>
      <br />

      <button
        onClick={() => {
          setPush(!push);
          setButtonText("Pushed");
        }}
      >
        {buttonText}
      </button>
      <br />
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

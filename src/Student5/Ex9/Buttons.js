import React from "react";
import { useState } from "react";

export const Buttons = () => {
  const [buttonText1, setButtonText1] = useState("Push");
  const [buttonText2, setButtonText2] = useState("Push");

  const onHandleClick1 = () => {
    setButtonText1("Pushed");
  };

  const onHandleClick2 = () => {
    setButtonText2("Pushed");
  };

  const onReset = () => {
    setButtonText1("Push");
  };
  const reset = () => {
    setButtonText2("Push");
  };

  return (
    <div>
      <button onClick={() => onHandleClick1()}>{buttonText1}</button>
      <br></br>
      <button onClick={() => onHandleClick2()}>{buttonText2}</button>
      <br></br>
      <button onClick={() => onReset()(reset())}>Reset</button>
    </div>
  );
};

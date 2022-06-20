import React from "react";
import { useState } from "react";

export const TenCounter = () => {
  let [counter, setCounter] = useState(0);

  const onClick = () => {
    if (counter <= 9) {
      setCounter(++counter);
    } else {setCounter(0)};
  };

  return (
    <div>
      <button onClick={() => onClick()}>Push</button> Counter: {counter}
    </div>
  );
};

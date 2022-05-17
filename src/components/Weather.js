import React, { useEffect, useState } from "react";

export const Weather = () => {
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    for (let i = 1; i < 6; i++) {
      setTemp(temp + i);
      console.log("useEffect");
    }
  }, []);

  return (
    <div>
      <h1>It is {temp}.</h1>
    </div>
  );
};

export const Clock = () => {
  const [clock, setClock] = useState(new Date());
  const tick = () => {
    setClock(new Date());
  };
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });
  return (
    <div>
      <h1>It is {clock.toLocaleTimeString()}.</h1>
    </div>
  );
};

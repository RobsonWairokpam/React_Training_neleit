import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
const UseStateData = () => {
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
export default UseStateData;

// RUNNING TIME

// export default UseStateData;
// const UseStateData = () => {
//   const [clock, setClock] = useState(new Date());
//   const tick = () => {
//     setClock(new Date());
//   };
//   useEffect(() => {
//     const timerID = setInterval(() => tick(), 1000);
//     return () => clearInterval(timerID);
//   });
//   return (
//     <div>
//       <h1>It is {clock.toLocaleTimeString()}.</h1>
//     </div>
//   );
// };
// export default UseStateData;

//UPDATE TIME

export const UpdateTime = () => {
  const [clock, setClock] = useState(new Date());
  const handleClick = () => {
    setClock(new Date());
    console.log("workiing");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <h1>It is {clock.toLocaleTimeString()}.</h1>
      </div>
      <div>
        <button onClick={handleClick} variant="primary">
          upadate time
        </button>
      </div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <Button onClick={handleClick} variant="primary">
          Button #2
        </Button>
      </div>
    </div>
  );
};

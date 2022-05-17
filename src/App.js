import React from "react";
import "./App.css";
import Home2 from "./components/Home2";
import { Table } from "./components/Table";
import UseStateData, { UpdateTime } from "./components/UseStateData";
import { Clock } from "./components/Weather";

const App = () => {
  return (
    <div>
      {/* <Home2 />
      ROBSON WAIROKPAM
      <UseStateData />
      <Clock /> */}
      <UpdateTime />
      <Table />
    </div>
  );
};

export default App;

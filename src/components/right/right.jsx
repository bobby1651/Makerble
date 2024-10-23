import React from "react";

import "./right.css";
import Box1 from "../left/box1";
import Todo from "./Todo";

const Right = () => {
  return (
    <div className="left_main">
      <div className="left_sub_page">
        <Box1 />
      </div>
      <div className="left_sub_page">
        <Todo />
      </div>
    </div>
  );
};

export default Right;

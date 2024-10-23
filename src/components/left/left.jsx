import React from "react";
import Box1 from "./box1";
import Box2 from "./box2";
import "./left.css";
import Box3 from "./box3";
import Box4 from "./box4";

const Left = () => {
  return (
    <div className="left_main">
      <div className="left_sub_page">
        <Box1 />
      </div>
      <div className="left_sub_page">
        <Box2 />
      </div>
      <div className="left_sub_page">
        <Box3 />
      </div>
      <div className="left_sub_page">
        <Box4 />
      </div>
    </div>
  );
};

export default Left;

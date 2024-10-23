import React from "react";
import PostBox from "./PostBox";
import PostInputBox from "./PostInputBox";
import "./middle.css";

const Middle = () => {
  return (
    <div className="middle">
      <div>
        <PostInputBox />
      </div>
      <div>
        <PostBox />
      </div>
    </div>
  );
};

export default Middle;

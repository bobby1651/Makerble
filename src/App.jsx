import React from "react";
import "./App.css";
import img1 from "./components/images/img1.png";
import Left from "./components/left/left";
import Navbar from "./components/Navbar";
import Middle from "./components/middle/middle";
import Right from "./components/right/right";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="body_color body_style">
        <div className="left">
          <Left />
        </div>
        <div className="middle">
          <Middle />
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
    </>
  );
};

export default App;

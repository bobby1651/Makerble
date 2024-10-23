import React from "react";
import "./box1.css";
import image from "../images/image.webp";

const Box1 = () => {
  return (
    <>
      <div className="each_page">
        <div className="top_container">
          <div>
            <h1 className="box1_heading">Contacts</h1>
          </div>
          <div>
            <button className="contact_btn">+ New Contact</button>
          </div>
        </div>
        <div>
          <ul>
            <li className="list_main">
              <div className="image_container">
                <img src={image} className="image_contact" />
              </div>

              <div className="sub_content">
                <a href="#">Abigail Holems</a>
                <p>Your last update was about 2 months ago</p>
              </div>
            </li>
            <li className="list_main">
              <div className="image_container">
                <img src={image} className="image_contact" />
              </div>

              <div className="sub_content">
                <a href="#">Adolescent Wellbeing Scale respondent 1</a>
                <p>Your last update was about 2 months ago</p>
              </div>
            </li>
            <li className="list_main">
              <div className="image_container">
                <img src={image} className="image_contact" />
              </div>

              <div className="sub_content">
                <a href="#">Alice Jessop</a>
                <p>Your last update was 4 months ago</p>
              </div>
            </li>
          </ul>

          <div className="down_section">
            <li>
              <button className="show_btn">show all</button>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box1;

import React, { useState } from "react";
import "./box2.css";
import image from "../images/image.webp";
import { FaCog } from "react-icons/fa";

const Box3 = () => {
  // State to track dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Toggle dropdown based on the item clicked
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };
  return (
    <>
      <div className="each_page">
        <div className="top_container">
          <div>
            <h1 className="box1_heading">Albums</h1>
          </div>
          <div>
            <button className="contact_btn">+ New Album</button>
          </div>
        </div>
        <div>
          <ul>
            <li className="box2_list">
              <div className="image_container">
                <img src={image} className="image_contact" />
              </div>
              <div className="box2_list_sub">
                <div className="">
                  <a href="#">UK PROJECTS</a>
                </div>
                <div className="box2_icon">
                  <button onClick={() => toggleDropdown(0)}>
                    <FaCog size={15} color="blue" />
                  </button>
                  {/* Dropdown for third list item */}
                  {dropdownOpen === 0 && (
                    <div className="dropdown_menu">
                      <ul>
                        <li>Edit</li>
                        <li>Settings</li>
                        <li>Remove</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </li>
            <li className="box2_list">
              <div className="image_container">
                <img src={image} className="image_contact" />
              </div>
              <div className="box2_list_sub">
                <div className="">
                  <a href="#">2018 NEW PROJECTS</a>
                </div>
                <div className="box2_icon">
                  <button onClick={() => toggleDropdown(1)}>
                    <FaCog size={15} color="blue" />
                  </button>
                  {/* Dropdown for second list item */}
                  {dropdownOpen === 1 && (
                    <div className="dropdown_menu">
                      <ul>
                        <li>Edit</li>
                        <li>Settings</li>
                        <li>Remove</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </li>
            <li className="box2_list">
              <div className="image_container">
                <img src={image} className="image_contact" />
              </div>
              <div className="box2_list_sub">
                <div className="">
                  <a href="#">ROBERSTION TRUST</a>
                </div>
                <div className="box2_icon">
                  <button onClick={() => toggleDropdown(2)}>
                    <FaCog size={15} color="blue" />
                  </button>
                  {/* Dropdown for third list item */}
                  {dropdownOpen === 2 && (
                    <div className="dropdown_menu">
                      <ul>
                        <li>Edit</li>
                        <li>Settings</li>
                        <li>Remove</li>
                      </ul>
                    </div>
                  )}
                </div>
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

export default Box3;

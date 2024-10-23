import React, { useState } from "react";
import "./box1.css";
import { FaCog } from "react-icons/fa";
import image from "../images/image.webp";
import "./box4.css";

const Box4 = () => {
  // State to track dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Toggle dropdown based on the item clicked
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="each_page">
      <div className="top_container">
        <div>
          <h1 className="box1_heading">Organization</h1>
        </div>
      </div>
      <div>
        <ul>
          <li className="box2_list">
            <div className="image_container">
              <img src={image} className="image_contact" />
            </div>
            <div className="box2_list_sub">
              <div>
                <a href="#">
                  A showcase international development Education charity
                </a>
                <p>Member</p>
              </div>
              <div className="box2_icon">
                <button onClick={() => toggleDropdown(0)}>
                  <FaCog size={15} color="blue" />
                </button>
                {/* Dropdown for first list item */}
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
              <div>
                <a href="#">A Demo kids & Young Peoples charity</a>
                <p>Admin</p>
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
              <div>
                <a href="#">A learning Platform Demo</a>
                <p>Admin</p>
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
            <button className="show_btn">Show All</button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Box4;

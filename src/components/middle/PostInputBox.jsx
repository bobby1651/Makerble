import React, { useState } from "react";
import "./PostInputBox.css";
import logo from "../../assets/user.jpeg";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { MdLocationOn, MdAdd } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";

const PostInputBox = () => {
  // States for managing inputs
  const [textInput, setTextInput] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  // Handle textarea input
  const handleTextInputChange = (e) => setTextInput(e.target.value);

  // Handle project selection
  const handleProjectChange = (e) => setSelectedProject(e.target.value);

  // Handle hours and minutes input
  const handleHoursChange = (e) => setHours(e.target.value);
  const handleMinutesChange = (e) => setMinutes(e.target.value);

  // Handle "Post" button click
  const handlePostClick = () => {
    if (!textInput || !selectedProject || !hours || !minutes) {
      alert("Please fill in all the fields before posting.");
      return;
    }
    // Handle form submission logic here (e.g., send data to server)
    console.log({
      textInput,
      selectedProject,
      timeSpent: `${hours}h ${minutes}m`,
    });
    alert("PostDone");
    // Clear the form after submitting
    clearForm();
  };

  // Handle "Cancel" button click
  const handleCancelClick = () => {
    clearForm();
  };

  // Function to clear the form
  const clearForm = () => {
    setTextInput("");
    setSelectedProject("");
    setHours("");
    setMinutes("");
  };

  return (
    <div className="PostInputBox">
      <div className="Post_headline">
        <div>
          <h1>Post an Update</h1>
        </div>
        <div>
          <button
            className="Post_btn"
            id="cancel_btn"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button className="Post_btn" id="post_btn" onClick={handlePostClick}>
            Post
          </button>
        </div>
      </div>

      <div className="Post_form">
        <div className="avatar_img_area">
          <img src={logo} className="avatar_img" alt="Avatar" />
        </div>

        <div className="form-container">
          <textarea
            placeholder="Start Typing"
            rows={4}
            className="post-textarea"
            value={textInput}
            onChange={handleTextInputChange}
          />

          <div>
            <label>Project : </label>
            <select value={selectedProject} onChange={handleProjectChange}>
              <option value=""></option>
              <option value="Mentoring">Mentoring</option>
              <option value="Task Completed">Task Completed</option>
              <option value="Pending">Pending</option>
              <option value="Task Assigned">Task Assigned</option>
              <option value="Task Delayed">Task Delayed</option>
            </select>
          </div>

          <div>
            <label>How long did you spend on this?</label>
            <input
              placeholder="HH"
              name="Hours"
              type="number"
              value={hours}
              onChange={handleHoursChange}
            />
            <label>:</label>
            <input
              placeholder="MM"
              name="minutes"
              type="number"
              value={minutes}
              onChange={handleMinutesChange}
            />
          </div>
        </div>
      </div>

      <div className="Option_Btns_Nav">
        <button className="Option_Btn">
          <MdAdd className="icons" />
          <label>Add Progress</label>
        </button>
        <button className="Option_Btn">
          <GrAttachment className="icons" />
          <label>Attach</label>
        </button>
        <button className="Option_Btn">
          <MdLocationOn className="icons" />
          <label>Location</label>
        </button>
        <button className="Option_Btn">
          <BsFillCalendar2DateFill className="icons" />
          <label>Date</label>
        </button>
      </div>
    </div>
  );
};

export default PostInputBox;

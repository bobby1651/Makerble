import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="todo-wrapper">
      {/* Header Section */}
      <div className="header-left">Tasks</div>
      <div className="header-section">
        {/* <div className="header-left">Tasks</div> */}
        <div className="header-middle">
          <button className="task-count">{tasks.length} Todo</button>
          <button className="task-done">
            {tasks.length > 0 ? `${tasks.length} Done` : "0 Done"}
          </button>
        </div>
        <div className="header-right">
          <button className="filter-toggle" onClick={toggleFilters}>
            Filters
          </button>
        </div>
      </div>

      {/* Filters Section */}
      {showFilters && (
        <div className="filters-wrapper">
          <div className="filters-header">
            <div className="filters-title">Filter by:</div>
            <button className="apply-filters">Apply</button>
          </div>
          <div className="filters-options">
            <div>
              Projects <span className="dropdown-arrow">▼</span>
            </div>
            <div>
              Contacts <span className="dropdown-arrow">▼</span>
            </div>
            <div>
              Organisation <span className="dropdown-arrow">▼</span>
            </div>
            <div>
              Creators <span className="dropdown-arrow">▼</span>
            </div>
            <div>
              Deadline <span className="dropdown-arrow">▼</span>
            </div>
          </div>
        </div>
      )}

      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Add your next task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="save-task" onClick={addTask}>
          Save
        </button>
      </div>

      {/* Tasks List */}
      <div className="tasks-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-row">
            <input type="checkbox" />
            <span>{task}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

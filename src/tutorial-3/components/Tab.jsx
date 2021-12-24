import React from "react";

const Tab = ({ activeTabId, id, onTabToggle, title, description }) => {
  return (
    <div className={`tab ${activeTabId === id ? "active" : ""}`}>
      <input id="tab-one" type="checkbox" name="tabs" />
      <label onClick={() => onTabToggle(id)} htmlFor="tab-one">
        {title}
      </label>
      <div className="tab-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Tab;

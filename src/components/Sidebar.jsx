import React from "react";
import { FaHome, FaLightbulb, FaCog } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><FaHome /> Statement</li>
        <li><FaLightbulb /> Solution</li>
        <li><FaCog /> AI Help</li>
      </ul>
    </div>
  );
};

export default Sidebar;

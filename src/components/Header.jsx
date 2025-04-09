import React from "react";
import "./Header.css";
import { FaUserCircle, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Code Clone</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="profile">
        <FaUserCircle className="user-icon" />
        <span>Profile</span>
      </div>
    </div>
  );
};

export default Header;

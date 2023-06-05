import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className={`sidebar-container ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-logo">
        <h1>Logo</h1>
      </div>
      <div className="sidebar-menu">
        <a
          className={`menu-item ${
            pathname === "/" || pathname.includes("/customer") ? "active" : ""
          }`}
          onClick={() => navigate("/")}
          style={{
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <FiUsers size={20} />
          <span>CUSTOMERS</span>
        </a>
      </div>
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        {sidebarOpen ? "✕" : "☰"}
      </button>
    </div>
  );
};

export default Sidebar;

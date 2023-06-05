import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className={`layout`}>
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        {sidebarOpen ? "✕" : "☰"}
      </button>
      <div>
        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

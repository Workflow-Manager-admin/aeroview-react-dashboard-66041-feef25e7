import React from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import MapView from "./MapView";

/**
 * PUBLIC_INTERFACE
 * Main container component for the AeroView React Dashboard.
 * Assembles the TopBar, Sidebar, and MapView into a responsive layout.
 */
const MainContainer = () => {
  return (
    <div className="dashboard">
      <TopBar />
      <div className="dashboard-content">
        <Sidebar />
        <MapView />
      </div>
    </div>
  );
};

export default MainContainer;

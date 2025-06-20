import React from "react";
import ThemeToggle from "./ThemeToggle";
import AirportSearch from "./AirportSearch";

/**
 * PUBLIC_INTERFACE
 * Top navigation bar for AeroView Dashboard (title, search, theme toggle).
 */
const TopBar = () => {
  return (
    <header className="topbar">
      <div className="topbar__title">
        <span className="logo-symbol">*</span> AeroView Dashboard
      </div>
      <div className="topbar__search">
        <AirportSearch />
      </div>
      <div className="topbar__theme">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default TopBar;

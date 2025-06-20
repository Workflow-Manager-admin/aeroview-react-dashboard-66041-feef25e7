import React from "react";
import WeatherPanel from "./WeatherPanel";
import FavoritesList from "./FavoritesList";

/**
 * PUBLIC_INTERFACE
 * Sidebar container for AeroView Dashboard (weather, favorites).
 */
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <WeatherPanel />
      <FavoritesList />
    </aside>
  );
};

export default Sidebar;

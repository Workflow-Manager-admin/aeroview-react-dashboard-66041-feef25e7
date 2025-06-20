import React from "react";
// PUBLIC_INTERFACE
// Main map area (Leaflet.js) for displaying aircraft and airports.
// Integrates React-Leaflet MapContainer and TileLayer as the core dashboard map.

// For first-time integration after install, users must install react-leaflet and leaflet:
// npm install react-leaflet leaflet
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

/**
 * PUBLIC_INTERFACE
 * Main map area (Leaflet.js) for displaying aircraft and airports.
 */
const MapView = () => {
  // World overview: centered near Africa/Atlantic, zoom for global aviation view
  const center = [20, 0];
  const zoom = 3;

  // Ensure map fills the '.mapview' flex container responsively
  return (
    <main className="mapview" style={{ padding: 0 }}>
      <div style={{ width: '100%', height: '100%', minHeight: 0, minWidth: 0, flex: 1 }}>
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ width: "100%", height: "100%" }}
          minZoom={2}
          maxZoom={10}
          scrollWheelZoom={true}
          attributionControl={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          />
        </MapContainer>
      </div>
    </main>
  );
};

export default MapView;

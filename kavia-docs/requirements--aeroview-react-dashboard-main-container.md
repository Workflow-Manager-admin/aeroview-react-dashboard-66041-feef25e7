# AeroView React Dashboard Main Container — Requirements Document

## 1. Introduction

The AeroView React Dashboard is a modern aviation dashboard web application built with React. Its primary purpose is to provide users with real-time aircraft positions overlaid on an interactive map, alongside essential features such as airport weather information, user preferences, theming, search, and favorites management. This document details the product features, architectural requirements, and design constraints for the development of the main container of the AeroView React Dashboard.

---

## 2. Product and Feature Requirements

### 2.1. Core Features

**Real-time Aircraft Positions**
- The dashboard shall display current aircraft positions on a map interface.
- Aircraft data will be sourced from the OpenSky Network, requiring integration with its public REST API.
- The map interface must update positions in near real-time.

**Airport Weather Display**
- The dashboard shall display METAR and TAF weather information for selected airports.
- Weather data shall be retrieved from the VATSIM (Virtual Air Traffic Simulation Network) endpoints.
- Selection of an airport, either via search or map interaction, should update the weather panel with relevant information.

**User Preferences Management**
- User preferences, including theme selection (dark/light) and favorite airports, must be storable and retrievable via the browser's `localStorage`.
- Upon loading the application, preferences are loaded and applied automatically.

**Theme Toggle**
- The user interface must provide an option to toggle between dark and light theme modes.
- Theme selection must impact all primary UI elements.
- The user’s choice persists across sessions.

**Airport Search**
- A search feature must be accessible in the top navigation bar, allowing users to locate and focus on specific airports.
- When an airport is searched, the map interface centers and/or highlights that airport.
- Search supports ICAO code, IATA code, or airport name queries.

**Favorites/Bookmarking**
- Users must be able to add or remove airports from their personal favorites list.
- A favorites list is readily accessible (e.g., in sidebar), and clicking a favorite recenters the map on the selected airport.

---

### 2.2. User Interface and Layout

**Top Bar**
- Contains the app title/logo.
- Contains the theme toggle control.
- Contains the airport search input.

**Sidebar**
- Displays current and forecasted weather details for the selected airport.
- Shows a list of the user’s saved favorite airports.

**Main Map Area**
- Uses Leaflet.js as the primary map rendering library.
- Occupies the central portion of the dashboard layout.
- Aircraft positions and airport locations are visualized as markers, with real-time updates.

**Responsiveness**
- The dashboard layout must adapt gracefully to desktop, tablet, and mobile screen sizes.

**Branding, Color Palette, and Components**
- Uses the defined KAVIA color palette and CSS variables for themes and branding.
- Employs pure HTML/CSS components for UI elements (e.g., buttons, containers, navigation).

---

### 2.3. Non-functional Requirements

- **Performance:** Map and UI interactions must be fluid and not laggy on modern browsers.
- **Usability:** The product must be intuitive for users new to aviation dashboards.
- **Accessibility:** Colors and font choices should provide sufficient contrast for accessibility.
- **Extensibility:** The core structure should allow for new panels, map overlays, or data integrations with minimal refactoring.

---

## 3. Architectural Requirements

### 3.1. Technology Stack

- **Frontend Framework:** React JS (as per current repo and `package.json` dependencies)
- **Map Library:** Leaflet.js (integration is planned, but the initial template does not yet include it)
- **Programming Language:** JavaScript (ES6+)
- **State Management:** Component state or React’s Context API (no global state framework required in the initial version)
- **Style Approach:** Pure CSS (using variables and component styles in `src/App.css`), no external UI framework
- **Local Persistence:** Browser `localStorage` for user preferences

### 3.2. Integration Requirements

- **OpenSky Network REST API:** For live aircraft data (requires support for periodic polling or websocket, depending on API constraints)
- **VATSIM API:** For METAR/TAF weather data retrieval
- **No Custom Backend:** All data retrieval is direct from public APIs

### 3.3. Component Structure

- **Main Container:** Hosts the navbar, sidebar, and map area as separate subcomponents.
- **Component Communication:** Props drilling or React Context for sharing selection and theme information.
- **Reusable UI Elements:** Buttons, Navbars, and Containers managed via custom CSS in `App.css`.

### 3.4. Layout

- **Fixed Top Navbar:** Stays visible as user scrolls; hosts search and theme switching.
- **Flexible Sidebar:** Collapsible on mobile, contains weather and favorites.
- **Map Area:** Centralized and sized responsively according to viewport.

---

## 4. Constraints

- **No Heavyweight UI Library:** Must not use frameworks like Material-UI or Ant Design; all UI is hand-crafted for performance and minimalism.
- **Browser Compatibility:** Must be functional on major current browsers (Chrome, Firefox, Safari, Edge).
- **Dependencies:** Limited to essential packages only (React and Leaflet; future additional dependencies subject to review).
- **Branding:** KAVIA color scheme and branding is mandatory in all UI components.
- **No Authentication:** The dashboard is public and does not require user login.
- **Open Data Only:** Only APIs which do not require authentication or payment may be used.

---

## 5. Future Scope (Not Required in MVP, but Consider for Extensibility)

- **User Authentication** for saving preferences to cloud.
- **Historical Flight Data** overlays.
- **More granular user roles (ATC/Pilot/Public).**
- **Push notifications or alerts.**

---

## 6. References

- [OpenSky Network API documentation](https://opensky-network.org/apidoc/)
- [VATSIM METAR/TAF API](https://status.vatsim.net/docs/api/)
- `aeroview_react_dashboard/src/App.js`, `App.css` for current implementation and visual layout foundation.

---

*This requirements document provides a formal specification for both the product features and technical architecture required to deliver the AeroView React Dashboard main container in accordance with KAVIA's standards and the provided implementation plan.*


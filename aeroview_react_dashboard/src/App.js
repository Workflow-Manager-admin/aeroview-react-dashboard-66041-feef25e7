import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

/**
 * PUBLIC_INTERFACE
 * App root - renders the AeroView dashboard main container.
 */
function App() {
  return (
    <div className="app">
      <MainContainer />
    </div>
  );
}

export default App;
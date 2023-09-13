import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import PCRoutes from './routes/pc/index';
import MobileRoutes from './routes/mobile/mobile';
const isTablet =
  /(?:iPad|PlayBook)/.test(navigator.userAgent) ||
  (/(?:Android)/.test(navigator.userAgent) && !/(?:Mobile)/.test(navigator.userAgent)) ||
  (/(?:Firefox)/.test(navigator.userAgent) && /(?:Tablet)/.test(navigator.userAgent));
const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && !isTablet;

function App() {
  return (
    <div className="App">
      <Router>{isMobile ? <MobileRoutes /> : <PCRoutes />}</Router>
    </div>
  );
}

export default App;

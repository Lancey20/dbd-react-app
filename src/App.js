import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';  // Assume MainContent is for Killers
import Loadouts from './components/Loadouts';
import Maps from './components/Maps';
import Guides from './components/Guides';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/killers" element={<MainContent />} />
          <Route path="/loadouts" element={<Loadouts />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/guides" element={<Guides />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

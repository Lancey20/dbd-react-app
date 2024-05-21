import React from 'react';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><a href="#killers">Killers</a></li>
        <li><a href="#loadouts">Loadouts</a></li>
        <li><a href="#maps">Maps</a></li>
        <li><a href="#guides">Guides</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;

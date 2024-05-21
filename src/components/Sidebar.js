import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><Link to="/killers">Killers</Link></li>
        <li><Link to="/loadouts">Loadouts</Link></li>
        <li><Link to="/maps">Maps</Link></li>
        <li><Link to="/guides">Guides</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './FabNav.css';


const FabNav = () => {
  const [menuOpen, setMenuOpen] = useState('');

  const onToggleMenu = () => {
    if(!menuOpen){
      setMenuOpen('active');
    } else {
      setMenuOpen('');
    }
  }

  return (
    <div className="fab-nav">
      <div onClick={onToggleMenu} className={`fabnav-button ${menuOpen}`}>
        <div className="icon">
          <i className="material-icons">menu</i>
        </div>
        <ul className="link-menu">
          <li><h2><Link to="/">Home</Link></h2></li>
          <li><h2><Link to="/photoviewer">Photo Viewer</Link></h2></li>
          <li><h2><Link to="/user/new">New User</Link></h2></li>
          <li><h2><Link to="/dashboard">Dashboard</Link></h2></li>
        </ul>
      </div>
    </div>
  )
}

export default FabNav;

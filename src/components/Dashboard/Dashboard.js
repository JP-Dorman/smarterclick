import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Dashboard.css';


const Dashboard = () => {

  return (
    <div className="dashboard">
      <div className="card">
        <h2>User Impressions</h2>
        <h4>{Math.floor(Math.random() * (400000 - 10000) + 10000)}</h4>
      </div>

      <div className="card">
        <h2>Overlays Shown</h2>
        <h4>{Math.floor(Math.random() * (400000 - 10000) + 10000)}</h4>
      </div>

      <div className="card">
        <h2>Overlays Clicked</h2>
        <h4>{Math.floor(Math.random() * (400000 - 10000) + 10000)}</h4>
      </div>

      <div className="card">
        <h2>Revenue</h2>
        <h4>£{Math.floor(Math.random() * (400000 - 10000) + 10000)}</h4>
      </div>
    </div>
  )
}

export default Dashboard;

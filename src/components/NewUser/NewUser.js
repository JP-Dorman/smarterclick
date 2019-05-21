import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './NewUser.css';


const NewUser = () => {
  const [success, setSuccess] = useState('');


  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log('Hey! You sent that Data! That\'s swell!');
    setSuccess('success');
  }

  return (
    <div className={`new-user ${success}`}>
      <form onSubmit={onFormSubmit} className="card">
          <div className="input-container">
            <label htmlFor="input-name">Name:</label>
            <input id="input-name" type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="input-email">Email:</label>
            <input id="input-email" type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="input-password">Password:</label>
            <input id="input-password" type="password" />
          </div>
          <div className="input-container">
            <input className="submit" type="submit" value="submit" />
          </div>
      </form>
    </div>
  )
}

export default NewUser;

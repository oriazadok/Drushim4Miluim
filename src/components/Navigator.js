import React from 'react';
import { Link } from 'react-router-dom';

import '../style/Navigator.css';

const Navigator = () => {
  return (
    <div className="navbar">
      <Link to="/recruiterHome">מסך הבית</Link>
      <Link to="/recruiterSearch">
        <span role="img" aria-label="Search">&#128269;</span>
      </Link>
      <Link to="/positions">Recruiter Messages</Link>
      <button aria-label="Notifications">
        <span role="img" aria-label="Bell">🔔</span>
      </button>
      <Link to="/recruiterProfile">Recruiter Profile</Link>
      <button aria-label="Logout">Logout</button>
    </div>
  );
};

export default Navigator;

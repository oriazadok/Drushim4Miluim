import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

import '../style/Navigator.css'; // Make sure to import the CSS file with the provided styles

const Navigator = () => {
  return (
    <div className="navbar">
      <Link to="/recruiter">מסך הבית</Link>
      <Link to="/recruiterSearch">&#128269;</Link>
      <Link to="/recruiterMessages">Recruiter Messages</Link>
      <button>
        <span>🔔</span>
      </button>
      <Link to="/recruiterProfile">Recruiter Profile</Link>
      <button>Logout</button>
    </div>
  );
};

export default Navigator;

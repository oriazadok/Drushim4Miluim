import React from 'react';
import { Link } from 'react-router-dom';

import '../style/Header.css';

const Header = () => {
  

  return (
    <div className='navbar'>
      <Link to="/recruiterHome" className='profile-link'>
        <button className='profile-button'>Profile</button>
      </Link>
      <Link to="/signin">
            <button>Sign In</button>
        </Link>
      
    </div>
  );
};

export default Header;

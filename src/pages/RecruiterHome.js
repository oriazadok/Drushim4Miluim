import React from 'react'
import { useLocation } from 'react-router-dom';

import Navigator from '../components/Navigator';

const RecruiterHome = () => {

  const location = useLocation();

  // Access the state property from the location object
  const userId = location.state && location.state._id;
  const userType = location.state && location.state.type;

  
  return (
    <div>
        <Navigator />
        <h1>Hello name</h1>
        <h1>Hello {userType || "Guest"}</h1>
        <h1>Hello {userId || "Guest"}</h1>
    </div>
  )
}

export default RecruiterHome;
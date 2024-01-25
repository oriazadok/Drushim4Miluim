import React from 'react'

import { useLocation } from 'react-router-dom';

const VolunteerHome = () => {

  const location = useLocation();

  // Access the state property from the location object
  const userId = location.state && location.state._id;
  const userType = location.state && location.state.type;

  return (
    <div>
      VolunteerHome
      <h1>Hello {userType || "Guest"}</h1>
      <h1>Hello {userId || "Guest"}</h1>
    </div>
  )
}

export default VolunteerHome;
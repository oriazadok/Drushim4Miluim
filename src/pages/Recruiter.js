import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigator from '../components/Navigator';

const Recruiter = () => {
  // Use the useLocation hook to get the current location object
  const location = useLocation();

  // Access the state properties from the location object
  const userType = location.state && location.state.userType;
  const _id = location.state && location.state._id;

  return (
    <div>
      <Navigator />
      {/* Display the user type and _id in the heading */}
      <h1>Hello {userType} with ID {_id}</h1>
    </div>
  );
}


export default Recruiter;

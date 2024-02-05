import React, { useState, useEffect } from 'react';

// import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// Navigation bar Component
import Navigator from '../components/Navigator';


const VolunteerHome = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;

    setUserData(parsedUserData);

    // Call navigate inside useEffect with a condition to prevent infinite updates
    if (parsedUserData === null) {
      navigate("/signin");
    }

    console.log("userData: ", userData);

    
  }, [navigate]); // Only include navigate as a dependency

  if (userData === null) {
    return null;
  }

  return (
    <div>
      <Navigator/>
      VolunteerHome
      <h1>Hello { "Guest"}</h1>
      <h1>Hello {}</h1>
    </div>
  )
}

export default VolunteerHome;
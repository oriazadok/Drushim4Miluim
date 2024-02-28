import React, { useState, useEffect } from 'react';

// import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// Navigation bar Component
import Navigator from '../components/Navigator';

// Translation
import { useTranslation } from 'react-i18next';


const VolunteerHome = () => {

  const { t } = useTranslation();   // translation

  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;

    // Call navigate inside useEffect with a condition to prevent infinite updates
    if (parsedUserData === null) {
      navigate("/signin");
    }

    setUserData(parsedUserData);
  }, [navigate]); // Only include navigate as a dependency
  
  if (userData === null) {
    return null;
  }

  console.log("userData is: ", userData);

  return (
    <div>
      <Navigator/>
      <h1>{t("hello")} {userData.name || "Guest"}</h1>
    </div>
  )
}

export default VolunteerHome;
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../style/Navigator.css';

const Navigator = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData !== null) {
      const userData = JSON.parse(storedUserData);

      if(userData !== null) {
        setUserData(userData);

      }
    }
  }, []); 

  const handleLogout = () => {
    // Clear userData from localStorage and set state to {}
    localStorage.removeItem('userData');
    setUserData({});
    navigate('/signin');
  };
  
  return (
    <div className="navbar">
      <Link to={userData && userData.type === "recruiters" ? "/recruiterHome" : userData.type === "volunteers" ? "/volunteerHome" : "/signin"}>{t("home")}</Link>
      <Link to={userData && userData.type === "recruiters" ? "/recruiterSearch" : userData.type === "volunteers" ? "/volunteerSearch" : "/signin"}>{t("search")}</Link>
      <Link to="/positions">{t("messages")}</Link>

      <button aria-label="Notifications">
        <span role="img" aria-label="Bell">🔔</span>
      </button>
     
      <Link to={userData && userData.type === "recruiters" ? "/recruiterProfile" : userData.type === "volunteers" ? "/volunteerProfile" : "/signin"}>{t("profile")}</Link>
      
      {Object.keys(userData).length === 0 ? (
         // If userData doesn't exist, render the Sign In link
         <Link to="/signin">{t("signin")}</Link>
       
      ) : (
        // If userData exists, render the Logout button
        <button aria-label="Logout" onClick={handleLogout}>{t("signout")}</button>
      )}
    </div>
  );
};

export default Navigator;

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
    const userData = storedUserData ? JSON.parse(storedUserData) : {};
    setUserData(userData);
  }, []); 

  const handleLogout = () => {
    // Clear userData from localStorage and set state to null
    localStorage.removeItem('userData');
    setUserData({});
    navigate('/signin');
  };
  
  return (
    <div className="navbar">
      <Link to={userData.type === "recruiters" ? "/recruiterHome" : userData.type === "volunteers" ? "/volunteerHome" : "/signin"}>{t("home")}</Link>
      <Link to={userData.type === "recruiters" ? "/recruiterSearch" : userData.type === "volunteers" ? "/volunteerSearch" : "/signin"}>{t("search")}</Link>
      <Link to="/positions">{t("messages")}</Link>

      <button aria-label="Notifications">
        <span role="img" aria-label="Bell">🔔</span>
      </button>
      
      <Link to={userData.type === "recruiters" ? "/recruiterHProfile" : userData.type === "volunteers" ? "/volunteerProfile" : "/signin"}>{t("profile")}</Link>
      
      {userData ? (
        // If userData exists, render the Logout button
        <button aria-label="Logout" onClick={handleLogout}>{t("signout")}</button>
      ) : (
        // If userData doesn't exist, render the Sign In link
        <Link to="/signin">{t("signin")}</Link>
      )}
    </div>
  );
};

export default Navigator;
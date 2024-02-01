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
    const userData = storedUserData ? JSON.parse(storedUserData) : null;
    setUserData(userData);
  }, []); 

  const handleLogout = () => {
    // Clear userData from localStorage and set state to null
    localStorage.removeItem('userData');
    setUserData(null);
    navigate('/signin');
  };
  
  return (
    <div className="navbar">
      <Link to="/recruiterHome">{t("home")}</Link>
      <Link to="/recruiterSearch">{t("search")}</Link>
      <Link to="/positions">{t("messages")}</Link>

      <button aria-label="Notifications">
        <span role="img" aria-label="Bell">🔔</span>
      </button>
      
      <Link to="/recruiterProfile">{t("profile")}</Link>
      
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
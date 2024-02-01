import React, { useState, useEffect } from 'react';

// For navigation between pages
import { useNavigate } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

// Navigation bar Component
import Navigator from '../components/Navigator';

// Positions handling components
import LastPositions from '../components/LastPositions';
import AddPosition from '../components/AddPosition';

// For styling
// import '../style/RecruiterHome.css';


const RecruiterHome = () => {

  const { t } = useTranslation();   // translation
  const navigate = useNavigate();   // navigation

  const [showAddPosition, setShowAddPosition] = useState(false);  // Visibility of AddPosition component
  const [userData, setUserData] = useState(null);  // Store userData values
  const [positions, setPositions] = useState([]);  // Store user's positions values

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;

    // Call navigate inside useEffect with a condition to prevent infinite updates
    if (parsedUserData === null) {
      navigate("/signin");
    }

    setUserData(parsedUserData);
    setPositions(parsedUserData.positions);
    
  }, [navigate]); // Only include navigate as a dependency
  
  if (userData === null) {
    return null;
  }

  console.log("userData is: ", userData);
  
  // Make post request to get the data of the user
  const getUserData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/getUserData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({_id: userData._id, type: userData.type}),
      });

      if (response.ok) {
        const responseBody = await response.text();
        if (responseBody.trim() === '') {
          return;
        }

        const responseData = JSON.parse(responseBody);
        localStorage.setItem('userData', JSON.stringify(responseData));
        setUserData(responseData);
        setPositions(responseData.positions);
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Handle visability of Addposition component
  const addPosition = () => {
    setShowAddPosition(!showAddPosition);
  };

  // Handle visability of Addposition component
  // as well as refetch the data of the user
  const handlePositionAdded = () => {
    setShowAddPosition(!showAddPosition); 
    getUserData();
  };

  // Handle visability of Addposition component
  const handleCancelAddPosition = () => {
    setShowAddPosition(false);
  };

  return (
    <div>

      {/* Navigation bar */}
      <Navigator />
      <h1>{t("hello")} {userData.name || "Guest"}</h1>

      <LastPositions positions={positions} />

      {/* Visability of AddPosition */}
      {!showAddPosition && (
        <button className="toggle-button" onClick={addPosition}>{t("addPosition")}</button>
      )}

      {/* Visability of AddPosition */}
      {showAddPosition && (
          <AddPosition
            id={userData._id}
            type={userData.type}
            onPositionAdded={handlePositionAdded}
            onCancel={handleCancelAddPosition}
          />
      )}
    </div>
  );
};

export default RecruiterHome;

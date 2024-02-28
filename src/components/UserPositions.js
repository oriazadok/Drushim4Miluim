import React, { useState, useEffect } from 'react'

// For navigation between pages
import { useNavigate } from 'react-router-dom';

// import for translation
import { useTranslation } from 'react-i18next';

import Position from './Position';
import RecruiterPosCard from './RecruiterPosCard';
import VolunteerPosCard from './VolunteerPosCard';

const UserPositions = ({ positions }) => {

    const { t } = useTranslation();   // translation
    const navigate = useNavigate();   // navigation
  
    const [positionsData, setPositionsData] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const[page, setPage] = useState(0);  // Manage page number

    const [userData, setUserData] = useState(null);  // Store userData values


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/getUserPositionsData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(positions),
          });
    
          if (response.ok) {
            const data = await response.json(); // Parse JSON response
            if (data.length === 0) {
              return;
            }
    
            console.log("data: ", data);
    
            // Set the state with the parsed data
            setPositionsData(data);
          } else {
            console.error(`HTTP error! Status: ${response.status}`);
          }
    
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, [positions]);


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
    

    

    ///////////////////////////////////////////////////////////////
  // those functions are related to the PositionsFilter component
  ///////////////////////////////////////////////////////////////

  const handlePreviousClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handlePositionClick = (position) => {
    setSelectedPosition(position);
  };

  const closeModal = () => {
    setSelectedPosition(null);
  };

  console.log("ususussssss: ", userData);
     
  return (
    <div>
        <h2>UserPositions</h2>
        <div className="volunteer-list">
        {positionsData.length > 0 && positionsData.map((position) => (
          <div
            key={position._id}
            className="volunteer-list-item"
            onClick={() => handlePositionClick(position)}
          >
            <Position {...position} />
          </div>
        ))}
      </div>

      {/* Modal for detailed view */}
      {selectedPosition && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {userData.type === "recruiters" ? <RecruiterPosCard {...selectedPosition} /> : <VolunteerPosCard {...selectedPosition} />}
            
          </div>
        </div>
      )}
        <div>
        <button onClick={handlePreviousClick}>{t('previous')}</button>
        <button onClick={handleNextClick}>{t('next')}</button>
      </div>
    </div>
  )
}

export default UserPositions;
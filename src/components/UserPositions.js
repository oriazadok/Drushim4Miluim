import React, { useState, useEffect } from 'react'


// import for translation
import { useTranslation } from 'react-i18next';

import Position from './Position';
import PositionCard from './PositionCard';

const UserPositions = ({ positions }) => {

    const { t } = useTranslation();   // translation
    const [positionsData, setPositionsData] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const[page, setPage] = useState(0);  // Manage page number
    

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
            <PositionCard {...selectedPosition} />
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
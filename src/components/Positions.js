import React, { useState, useEffect } from 'react';
import PositionCard from './PositionCard';

const Positions = () => {
  const [positionsData, setPositionsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/positions');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        const data = await response.json();
        console.log("data is: ", data);

        // Set the state with the parsed data
        setPositionsData(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="positions-container">
      <h2>Positions</h2>
      <div className="position-list">
        {positionsData.map((position) => (
          <div key={position.id} className="position-list-item">
            <PositionCard {...position} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Positions;
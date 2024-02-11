import React, { useState, useEffect } from 'react';

// import for translation
import { useTranslation } from 'react-i18next';

import Volunteer from './Volunteer';

import "../style/Volunteers.css"

const Volunteers = () => {

  const { t } = useTranslation();   // translation

  const [volunteersData, setVolunteersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/volunteers');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        const data = await response.json();
        console.log("data is: ", data);
        
        // Set the state with the parsed data
        setVolunteersData(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const handleVolunteerClick = (volunteer) => {
    setSelectedVolunteer(volunteer);
  };

  const closeModal = () => {
    setSelectedVolunteer(null);
  };

  return (
    <div className="volunteers-container">
      <h2>{t("volunteers")}</h2>
      <div className="volunteer-list">
        {volunteersData.map((volunteer) => (
          <div
            key={volunteer._id}
            className="volunteer-list-item"
            onClick={() => handleVolunteerClick(volunteer)}
          >
            <Volunteer {...volunteer} />
          </div>
        ))}
      </div>

      {/* Modal for detailed view */}
      {selectedVolunteer && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Volunteer {...selectedVolunteer} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Volunteers;

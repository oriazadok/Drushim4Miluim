import React, { useState } from 'react';
import Volunteer from './Volunteer';

import "../style/Volunteers.css"

const Volunteers = () => {
  const volunteersData = [
    { id: 1, name: 'Volunteer 1', description: 'Description for Volunteer 1' },
    { id: 2, name: 'Volunteer 2', description: 'Description for Volunteer 2' },
    // Add more volunteers as needed
  ];

  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const handleVolunteerClick = (volunteer) => {
    setSelectedVolunteer(volunteer);
  };

  const closeModal = () => {
    setSelectedVolunteer(null);
  };

  return (
    <div className="volunteers-container">
      <h2>Volunteers</h2>
      <div className="volunteer-list">
        {volunteersData.map((volunteer) => (
          <div
            key={volunteer.id}
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

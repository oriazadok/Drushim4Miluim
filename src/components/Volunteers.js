import React, { useState } from 'react';

// import for translation
import { useTranslation } from 'react-i18next';

import Volunteer from './Volunteer';
import VolunteerCard from './VolunteerCard';

import "../style/Volunteers.css"

const Volunteers = ({ volunteersData }) => {

  const { t } = useTranslation();   // translation

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
            <VolunteerCard {...selectedVolunteer} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Volunteers;
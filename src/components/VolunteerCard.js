import React from 'react';

// Translation
import { useTranslation } from 'react-i18next';


const VolunteerCard = ( volunteer ) => {

  const { t } = useTranslation();

  return (
    <div className="volunteer-card">
      {/* Display selected filter data in a row */}
      {Object.keys(volunteer).length > 0 && (
        <div className="filtered-row">
          {Object.entries(volunteer)
            .filter(([filter, value]) => value !== '') // Exclude rows with empty values
            .filter(([filter, value]) => filter !== '_id')
            .filter(([filter, value]) => filter !== 'positions')
            .map(([prop, value]) => (
              <div key={prop} className="filtered-item">
                <span className="filter-label">{t(prop)}:</span>
                <span className="filter-value">{value}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default VolunteerCard;


import React from 'react';
import { useTranslation } from 'react-i18next';
import '../style/PositionCard.css'; // Import CSS file

const PositionCard = (position) => {
  const { t } = useTranslation();

  return (
    <div className="position-card"> {/* Add class "position-card" */}
      <h2>{position.positionTitle}</h2>
      <p><span className="black-text">איזור:</span> {t(position.location)}</p>
      <p><span className="black-text">שירות:</span> {t(position.service)}</p>
      <p>{t(position.jobDescription)}</p>
      {/* <a href="#">{t('More Info')}</a> */}
    </div>
  );
};

export default PositionCard;
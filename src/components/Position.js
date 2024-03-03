import React from 'react'

// Translation
import { useTranslation } from 'react-i18next';
import '../style/Position.css';


const Position = ( position ) => {

  const { t } = useTranslation();   // translation

  return (
    <div className="position-container">
      <p className="position-title">{position.positionTitle || ""}</p>
      <p className="position-location">{t(position.location) || ""}</p>
      <p className="position-availability">{t(position.availability) || ""}</p>
    </div>
  )
}

export default Position;
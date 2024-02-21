import React from 'react'

// Translation
import { useTranslation } from 'react-i18next';

const PositionCard = ( position ) => {

  const { t } = useTranslation();   // translation

  return (
    <div>
      cosomo
      <p>{position.positionTitle}</p>
      <p>{t(position.location)}</p>
      <p>{t(position.service)}</p>
    </div>
  )
}

export default PositionCard;
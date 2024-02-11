import React from 'react'
// Translation
import { useTranslation } from 'react-i18next';
const Position = ( position ) => {
  const { t } = useTranslation();   // translation
    return (
        <div>
          
          <p>{position.positionTitle || ""}</p>
          <p>{t(position.location) || ""}</p>
          <p>{t(position.availability) || ""}</p>
          
        </div>
      )
}

export default Position;
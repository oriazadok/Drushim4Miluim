import React from 'react'

const PositionCard = ( position ) => {

  return (
    <div>
      PositionCard
      <p>{position.positionTitle || ""}</p>
      <p>{position.location || ""}</p>
      <p>{position.availability || ""}</p>
    </div>
  )
}

export default PositionCard;
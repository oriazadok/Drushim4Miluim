import React from 'react'

const Position = ( position ) => {
    return (
        <div>
          Position
          <p>{position.positionTitle || ""}</p>
          <p>{position.location || ""}</p>
          <p>{position.availability || ""}</p>
          <p>{position.availability || ""}</p>
          <p>{position.availability || ""}</p>
          <p>{position.availability || ""}</p>
          <p>{position.availability || ""}</p>
        </div>
      )
}

export default Position;
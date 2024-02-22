import React from 'react';

const Volunteer = ( volunteer ) => {
  return (
    <div className="volunteer-card">
      <h3>{volunteer.name}</h3>
      <p>{volunteer.region}</p>
      <p>{volunteer.service}</p>
    </div>
  );
};

export default Volunteer;

import React from 'react';

const VolunteerCard = ({ name, email, phoneNumber, credentials, age, profile, region, releaseDate, rovai, service }) => {
  return (
    <div className="volunteer-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default VolunteerCard;

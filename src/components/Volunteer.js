import React from 'react';

const Volunteer = ({ name, description }) => {
  return (
    <div className="volunteer-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Volunteer;

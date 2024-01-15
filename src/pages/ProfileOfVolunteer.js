import React from 'react';

const ProfileOfVolunteer = ({ name, gender, age, phoneNumber, Email, skills, rovai, sadir, ptor}) => {
  return (
    <div>
      <h2>Volunteer Profile</h2>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Age: {age}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Email: {Email}</p>
      <p>Skills: {skills}</p>
      <p>Rovai: {rovai}</p>
      <p>Sadir: {sadir}</p>
      <p>Ptor: {ptor}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProfileOfVolunteer;

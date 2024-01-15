import React from 'react';


const ProfileOfRecruiter = ({ name, gender, age, phoneNumber, Email, unit }) => {
  return (
    <div>
      <h2>Recruiter Profile</h2>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Age: {age}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Email: {Email}</p>
      <p>Email: {unit}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProfileOfRecruiter;

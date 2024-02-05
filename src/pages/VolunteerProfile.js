import React from 'react';
import '../style/Profile.css'; 
import Navigator from '../components/Navigator';

const VolunteerProfile = ({ name, gender, age, phoneNumber, email, skills, rovai, sadir, ptor }) => {
  return (
    <div className="profile-container">
      <Navigator />
      <h2>Volunteer Profile</h2>
      <div className="profile-details">
        <div>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
        <div>
          <p><strong>Skills:</strong> {skills}</p>
          <p><strong>Rovai:</strong> {rovai}</p>
          <p><strong>Sadir:</strong> {sadir}</p>
          <p><strong>Ptor:</strong> {ptor}</p>
        </div>
      </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default VolunteerProfile;

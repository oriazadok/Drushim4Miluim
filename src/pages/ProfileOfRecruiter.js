import React from 'react';
import '../style/Profile.css'; 

const ProfileOfRecruiter = ({ name, gender, age, phoneNumber, email, unit }) => {
  return (
    <div className="profile-container">
      <h2>Recruiter Profile</h2>
      <div className="profile-details">
        <div>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
        <div>
          <p><strong>Unit:</strong> {unit}</p>
        </div>
      </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProfileOfRecruiter;

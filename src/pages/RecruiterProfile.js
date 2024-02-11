import React, { useState, useEffect } from "react";
import "../style/Profile.css";
import { useNavigate } from "react-router-dom";
import Navigator from "../components/Navigator";

const RecruiterProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [editSuccess, setEditSuccess] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;

    if (parsedUserData === null) {
      navigate("/signin");
    }

    setUserData(parsedUserData);
    setUpdatedUserData(parsedUserData);
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData({ ...updatedUserData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/updateUserData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          _id: userData._id,
          type: userData.type,
          updatedUserData,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem("userData", JSON.stringify(responseData));
        setUserData(responseData);
        setEditMode(false);
        setEditSuccess(true);
        setTimeout(() => setEditSuccess(false), 1000);
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navigator />
      <div className="profile-container">
        <h2>Recruiter Profile</h2>
        {editSuccess && <p className="success-message">Edit successful!</p>}
        <div className="profile-details">
          {userData && (
            <div>
              <p><strong>Name:</strong> {editMode ? <input type="text" name="name" value={updatedUserData.name} onChange={handleInputChange} /> : userData.name}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Phone Number:</strong> {editMode ? <input type="tel" name="phoneNumber" value={updatedUserData.phoneNumber} onChange={handleInputChange} /> : userData.phoneNumber}</p>
            </div>
          )}
        </div>
        {!editMode && <button onClick={() => setEditMode(true)}>Edit</button>}
        {editMode && <button onClick={handleSubmit}>Update</button>}
      </div>
    </div>
  );
};

export default RecruiterProfile;

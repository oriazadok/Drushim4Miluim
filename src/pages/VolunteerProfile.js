import React, { useState, useEffect } from "react";
import "../style/Profile.css";
import { useNavigate } from "react-router-dom";
import Navigator from "../components/Navigator";
// Translation
import { useTranslation } from 'react-i18next';

const RecruiterProfile = () => {
  const { t } = useTranslation();   // translation
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    releaseDate: "",
    service: "",
    rovai: "",
    credentials: "",
    profile: "",
    age: "",
    region: "",
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
        setTimeout(() => setEditSuccess(false), 2000);
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
        <h2>{t("profile")}</h2>
        {editSuccess && <p className="success-message">{t("successful")}</p>}
        <div className="profile-details">
          {userData && (
            <div>
              <p>
                <strong>{t("name")}:</strong>{" "}
                {editMode ? (
                  <input
                    type="text"
                    name="name"
                    value={updatedUserData.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.name
                )}
              </p>
              <p>
                <strong>{t("email")}:</strong> {userData.email}
              </p>
              <p>
                <strong>{t("phone")}:</strong>{" "}
                {editMode ? (
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={updatedUserData.phoneNumber}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.phoneNumber
                )}
              </p>
              <p>
                <strong>{t("releaseDate")}:</strong>{" "}
                {editMode ? (
                  <input
                    type="releaseDate"
                    name="releaseDate"
                    value={updatedUserData.releaseDate}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.releaseDate
                )}
              </p>
              <p>
                <strong>{t("service")}:</strong>{" "}
                {editMode ? (
                  <input
                    type="service"
                    name="service"
                    value={updatedUserData.service}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.service
                )}
              </p>
              <p>
                <strong>{t("rovai")}:</strong>{" "}
                {editMode ? (
                  <input
                    type="rovai"
                    name="rovai"
                    value={updatedUserData.rovai}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.rovai
                )}
              </p>
              <p>
                <strong>{t("credentials")}:</strong>{" "}
                {editMode ? (
                  <input
                    type="credentials"
                    name="credentials"
                    value={updatedUserData.credentials}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.credentials
                )}
              </p>
              <p>
                <strong>{t("profile")}:</strong>{" "}
                {editMode ? (
                  <input
                    type="profile"
                    name="profile"
                    value={updatedUserData.profile}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.profile
                )}
              </p>
              <p>
                <strong>{t("age")}:</strong>{" "}
                {editMode ? (
                  <input
                    type="age"
                    name="age"
                    value={updatedUserData.age}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.age
                )}
              </p>
              <p>
                <strong>{t("region")}:</strong>{" "}
                {editMode ? (
                  <input
                    type="region"
                    name="region"
                    value={updatedUserData.region}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.region
                )}
              </p>
            </div>
          )}
        </div>
        {!editMode && <button onClick={() => setEditMode(true)}>{t("edit")}</button>}
        {editMode && <button onClick={handleSubmit}>{t("update")}</button>}
      </div>
    </div>
  );
};

export default RecruiterProfile;
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
  const [phoneNumberError, setPhoneNumberError] = useState(""); // State to hold phone number error
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
      // Update the phone number and clear any previous error message
      if (name === "phoneNumber") {
        setUpdatedUserData({ ...updatedUserData, [name]: value });
        setPhoneNumberError(""); // Clear phone number error when editing
      } else {
        setUpdatedUserData({ ...updatedUserData, [name]: value });
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate phone number format
    const phoneNumberPattern = /^05[0-9]{8}$/;
    if (!phoneNumberPattern.test(updatedUserData.phoneNumber)) {
      setPhoneNumberError(t("validPhone")); // Set error message
      setTimeout(() => setPhoneNumberError(false), 3000);
      return; // Exit function if phone number format is invalid
    }
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
              <p><strong>{t("name")}:</strong> {editMode ? <input type="text" name="name" value={updatedUserData.name} onChange={handleInputChange} /> : userData.name}</p>
              <p><strong>{t("email")}:</strong> {userData.email}</p>
              <p>
                <strong>{t("phone")}:</strong>{" "}
                {editMode ? (
                  <>
                    <input
                      type="tel"
                      name="phoneNumber"
                      pattern="05[0-9]{8}"
                      value={updatedUserData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                    {phoneNumberError && (
                      <span className="error-message">{phoneNumberError}</span>
                    )}
                  </>
                ) : (
                  userData.phoneNumber
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

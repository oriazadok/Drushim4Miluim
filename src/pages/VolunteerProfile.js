import React, { useState, useEffect } from "react";
import "../style/Profile.css";
import { useNavigate } from "react-router-dom";
import Navigator from "../components/Navigator";
// Translation
import { useTranslation } from "react-i18next";

const RecruiterProfile = () => {
  const { t } = useTranslation(); // translation
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
  const [phoneNumberError, setPhoneNumberError] = useState(""); // State to hold phone number error
  const [releaseDateError, setReleaseDateError] = useState(""); // State to hold release date error

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
     // Update the releaseDate
     if (name === "releaseDate") {
      const currentDate = getCurrentDate();
      setUpdatedUserData({ ...updatedUserData, [name]: value });
      setReleaseDateError("");
      // setUpdatedUserData({ ...updatedUserData, releaseDate: currentDate });
      if (value > currentDate) {
        // Prevent setting releaseDate beyond today's date
        setReleaseDateError(t("validReleaseDate"));
        setTimeout(() =>  setReleaseDateError(false), 2000);
        return;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number format
    const phoneNumberPattern = /^05[0-9]{8}$/;
    if (!phoneNumberPattern.test(updatedUserData.phoneNumber)) {
      setPhoneNumberError(t("validPhone")); // Set error message
      setTimeout(() => setPhoneNumberError(false), 2000);
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

  // Variable store options for the selecting age
  const ageOptions = [<option key="" value=""></option>];
  for (let age = 20; age <= 60; age++) {
    ageOptions.push(
      <option key={age} value={age}>
        {age}
      </option>
    );
  }

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
  
    // Add leading zero if month or day is less than 10
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
  
    return `${year}-${month}-${day}`;
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
              <p>
                <strong>{t("service")}:</strong>{" "}
                {editMode ? (
                  <select
                    type="service"
                    name="service"
                    value={updatedUserData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=""></option>
                    <option value={t("lohem")}>{t("lohem")}</option>
                    <option value={t("tomeh")}>{t("tomeh")}</option>
                    <option value={t("job")}>{t("job")}</option>
                  </select>
                ) : (
                  userData.service
                )}
              </p>
              <p>
                <strong>{t("rovai")}:</strong>{" "}
                {editMode ? (
                  <select
                    type="rovai"
                    name="rovai"
                    value={updatedUserData.rovai}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=""></option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="05">05</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                  </select>
                ) : (
                  userData.rovai
                )}
              </p>
              <p>
                <strong>{t("credentials")}:</strong>{" "}
                {editMode ? (
                  <select
                    type="credentials"
                    name="credentials"
                    value={updatedUserData.credentials}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=""></option>
                    <option value={t("cook")}>{t("cook")}</option>
                    <option value={t("lohem")}>{t("lohem")}</option>
                    <option value={t("programmer")}>{t("programmer")}</option>
                    <option value={t("car-technician")}>
                      {t("car-technician")}
                    </option>
                    <option value={t("kambatz")}>{t("kambatz")}</option>
                    <option value={t("magad")}>{t("magad")}</option>
                    <option value={t("samgad")}>{t("samgad")}</option>
                    <option value={t("mp")}>{t("mp")}</option>
                    <option value={t("smp")}>{t("smp")}</option>
                    <option value={t("ict-technician")}>
                      {t("ict-technician")}
                    </option>
                    <option value={t("c-driver")}>{t("c-driver")}</option>
                    <option value={t("combat-medic")}>
                      {t("combat-medic")}
                    </option>
                    <option value={t("mashakit-tash")}>
                      {t("mashakit-tash")}
                    </option>
                    <option value={t("mashakit-miluim")}>
                      {t("mashakit-miluim")}
                    </option>
                  </select>
                ) : (
                  userData.credentials
                )}
              </p>
              <p>
                <strong>{t("profile")}:</strong>{" "}
                {editMode ? (
                  <select
                    type="profile"
                    name="profile"
                    value={updatedUserData.profile}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=""></option>
                    <option value="21">21</option>
                    <option value="45">45</option>
                    <option value="64">64</option>
                    <option value="72">72</option>
                    <option value="82">82</option>
                    <option value="97">97</option>
                    <option value="100">100</option>
                    <option value="101">101</option>
                  </select>
                ) : (
                  userData.profile
                )}
              </p>
              <p>
                <strong>{t("region")}:</strong>{" "}
                {editMode ? (
                  <select
                    type="region"
                    name="region"
                    value={updatedUserData.region}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=""></option>
                    <option value={t("north")}>{t("north")}</option>
                    <option value={t("center")}>{t("center")}</option>
                    <option value={t("south")}>{t("south")}</option>
                  </select>
                ) : (
                  userData.region
                )}
              </p>
              <p>
                <strong>{t("email")}:</strong> {userData.email}
              </p>
              <p>
                <strong>{t("age")}:</strong>{" "}
                {editMode ? (
                  <select
                    type="age"
                    name="age"
                    value={updatedUserData.age}
                    onChange={handleInputChange} required >
                      {ageOptions}
                  </select>
                ) : (
                  userData.age
                )}
              </p>
              <p>
                <strong>{t("releaseDate")}:</strong> 
                {editMode ? (
                  <input
                    type="date"
                    name="releaseDate"
                    value={userData.releaseDate}
                    onChange={handleInputChange}
                    max={getCurrentDate()}
                    required
                  />
                ) : (
                  userData.releaseDate
                )}
                {releaseDateError && <span className="error-message">{releaseDateError}</span>}
              </p>
            </div>
          )}
        </div>
        {!editMode && (
          <button onClick={() => setEditMode(true)}>{t("edit")}</button>
        )}
        {editMode && <button onClick={handleSubmit}>{t("update")}</button>}
      </div>
    </div>
  );
};

export default RecruiterProfile;

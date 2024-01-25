import  React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

// import for translation
import { useTranslation } from 'react-i18next';

// import css file
import '../style/SignUpVolunteer.css';

const SignUpVolunteer = () => {

  const { t } = useTranslation();   // translation
  const navigate = useNavigate();   // navigation

  const [formData, setFormData] = useState({  // save the data the user insert into the form
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    releaseDate: '',
    service: '',
    rovai: '',
    credentials: '',
    profile: '',
    age: '',
    region: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle sign-up
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/signup_volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Send cookies (credentials) with the request
        body: JSON.stringify(formData),
      });
  
      if (response.ok) { // if the the response from the server return as expected

        // Check if the response body is non-empty
        const responseBody = await response.text();
        if (responseBody.trim() === "") { // the response body is empty
          alert("You already have an account!");
          return;
        }
  
        // Parse the response JSON
        const responseData = JSON.parse(responseBody);

        // Pass data to the relevant page navigating to using the state object
        navigate(responseData.type === "recruiters" ? '/recruiterHome' : '/volunteerHome', { state: { _id: responseData._id, type: responseData.type } });
      
      } else {
        // Handle error response
        console.error(`HTTP error! Status: ${response.status}`);
      }
  
    } catch (error) {
      console.error('Error:', error);
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
  

  return (
    <div>
      <form className="form-container" action="/submit" method="post">

        {/* Name */}
        <label className="label" htmlFor="name">{t("name")}:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

        {/* Email */}
        <label className="label" htmlFor="email">{t("email")}:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />

        {/* Password */}
        <label className="label" htmlFor="password">{t("password")}:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />

        {/* Phone Number */}
        <label className="label" htmlFor="phoneNumber">{t("phone")}:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}/>

        {/* release date */}
        <label className="label" htmlFor="releaseDate">{t("releaseDate")}:</label>
        <input type="date" id="releaseDate" name="releaseDate" value={formData.releaseDate} onChange={handleInputChange} />

        {/* Service */}
        <label className="label" htmlFor="service">{t("service")}:</label>
        <select className="select-input" id="service" name="service" value={formData.service} onChange={handleInputChange} >
          <option value=""></option>
          <option value="lohem">{t("lohem")}</option>
          <option value="tomeh">{t("tomeh")}</option>
          <option value="job">{t("job")}</option>
        </select>

        {/* Rovai */}
        <label className="label" htmlFor="rovai">{t("rovai")}:</label>
        <select className="select-input" id="rovai" name="rovai" value={formData.rovai} onChange={handleInputChange} >
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

        {/* Credentials */}
        <label className="label" htmlFor="credentials">{t("credentials")}:</label>
        <select className="select-input" id="credentials" name="credentials" value={formData.credentials} onChange={handleInputChange} >
          <option value=""></option>
          <option value={t("cook")}>{t("cook")}</option>
          <option value={t("lohem")}>{t("lohem")}</option>
          <option value={t("programmer")}>{t("programmer")}</option>
          <option value={t("car-technician")}>{t("car-technician")}</option>
          <option value={t("kambatz")}>{t("kambatz")}</option>
          <option value={t("magad")}>{t("magad")}</option>
          <option value={t("samgad")}>{t("samgad")}</option>
          <option value={t("mp")}>{t("mp")}</option>
          <option value={t("smp")}>{t("smp")}</option>
          <option value={t("ict-technician")}>{t("ict-technician")}</option>
          <option value={t("c-driver")}>{t("c-driver")}</option>
          <option value={t("combat-medic")}>{t("combat-medic")}</option>
          <option value={t("mashakit-tash")}>{t("mashakit-tash")}</option>
          <option value={t("mashakit-miluim")}>{t("mashakit-miluim")}</option>
          
        </select>

        {/* Profile */}
        <label className="label" htmlFor="profile">{t("profile")}:</label>
        <select className="select-input" id="profile" name="profile" value={formData.profile} onChange={handleInputChange} >
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

        {/* age */}
        <label className="label" htmlFor="age">{t("age")}:</label>
        <select className="select-input" id="age" name="age" value={formData.age} onChange={handleInputChange} >
          {ageOptions}
        </select>

        {/* Region */}
        <label className="label" htmlFor="region">{t("region")}:</label>
        <select className="select-input" id="region" name="region" value={formData.region} onChange={handleInputChange} >
          <option value=""></option>
          <option value={t("north")}>{t("north")}</option>
          <option value={t("center")}>{t("center")}</option>
          <option value={t("south")}>{t("south")}</option>
        </select>

        {/* Sign up button */}
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          {t("signup")}
        </button>
      </form>
    </div>
  );
};

export default SignUpVolunteer;

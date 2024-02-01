import  React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import for translation
import { useTranslation } from 'react-i18next';

// import css file
import '../style/SignUpRecruiter.css';

const SignUpRecruiter = () => {

  const { t } = useTranslation();   // translation
  const navigate = useNavigate();   // navigation
  
  const [formData, setFormData] = useState({  // save the data the user insert into the form
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    positions: []
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
      const response = await fetch('http://localhost:3001/api/signup_recruiter', {
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
  
        // Parse the response JSON
        const responseData = JSON.parse(responseBody);

        // Insert userData to the localStorage
        localStorage.setItem('userData', JSON.stringify(responseData));

        if(responseData) {  // The data received as expected 

          if (responseData.type === "recruiters") {
            navigate('/recruiterHome');
          }

        } else {
          alert("You already have an account!");
        }

      } else {
        // Handle error response
        console.error(`HTTP error! Status: ${response.status}`);
      }
  
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

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

        <br />

        {/* Sign up button */}
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          {t("signup")}
        </button>
      </form>
    </div>
  );
}

export default SignUpRecruiter;
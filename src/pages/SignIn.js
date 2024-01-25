import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// import for translation
import { useTranslation } from 'react-i18next';

// import css file
import '../style/SignIn.css';


const SignIn = () => {

  const { t } = useTranslation();   // translation
  const navigate = useNavigate();   // navigation

  const [err, serErr] = useState(false);      // for erroring if the signIn auth goes wrong
  const [formData, setFormData] = useState({  // save the data the user insert into the form
    email: '',
    password: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle sign-in
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/signin', {
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
          serErr(true);
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

  return (
    <div className="sign-in-container">
      <form className="sign-in-form">
        <h2 className="sign-in-heading">{t("signin")}</h2>

        {/* Email */}
        <label className="form-label">
          <p>{t('email')}:</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            placeholder={t("email_placeholder")}
          />
        </label>

        {/* Password */}
        <label className="form-label">
          <p>{t('password')}:</p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
            placeholder={t("password_placeholder")}
          />
        </label>

        {/* Visibility of error in case of failing to sign in */}
        {err && <p>{t("signIn_err")}</p>}

        {/* Sign in button */}
        <button className="sign-in-button" onClick={signIn}>
          {t('signin')}
        </button>

        {/* Button linking to signup page */}
        <p>
          {t("no_account")}
          <Link to="/signup">
            <button>{t('signup')}</button>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;

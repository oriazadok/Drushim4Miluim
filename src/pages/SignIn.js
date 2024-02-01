import React, { useState } from 'react';

// For linking and navigation between pages
import { useNavigate, Link } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';


// Navigation bar Component
import Navigator from '../components/Navigator';

// For styling
import '../style/SignIn.css';


const SignIn = () => {

  const { t } = useTranslation();   // translation
  const navigate = useNavigate();   // navigation

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      setLoading(false);

      if (response.ok) { // if the the response from the server return as expected

        // Check if the response body is non-empty
        const responseBody = await response.text();

        // Parse the response JSON
        const responseData = JSON.parse(responseBody);

        // Insert userData to the localStorage
        localStorage.setItem('userData', JSON.stringify(responseData));
        console.log("responseData for type: ", responseData);

        if(responseData && responseData.type !== null) {  // The data received as expected 

          // Navigate to the right page according to the type of the user
          if (responseData.type === "recruiters") {
            navigate('/recruiterHome');
          } else if (responseData.type === "volunteers") {
            navigate('/volunteerHome');
          }

        } else {
          // In case of an error
          setErr(true);
        }

      } else {
        // In case of an error
        setErr(true);
        console.error(`HTTP error! Status: ${response.status}`);
      }

    } catch (error) {

      // In case of an error
      setErr(true);
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Navigator />
      <div className="sign-in-container">
        <form className="sign-in-form">
          <h2 className="sign-in-heading">{t('signin')}</h2>

          <label className="form-label">
            <p>{t('email')}:</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder={t('email_placeholder')}
            />
          </label>

          <label className="form-label">
            <p>{t('password')}:</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder={t('password_placeholder')}
            />
          </label>

          {err && <p>{t('signIn_err')}</p>}

          <button className="sign-in-button" onClick={signIn}>
            {t('signin')}
          </button>

          <p>
            {t('no_account')}
            <Link to="/signup">
              <button>{t('signup')}</button>
            </Link>
          </p>

          {loading && (
            <div className="loading-overlay">
              <div className="loading-spinner"></div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;

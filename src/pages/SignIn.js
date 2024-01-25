import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../style/SignIn.css';

const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

      if (response.ok) {
        const responseBody = await response.text();
        if (responseBody.trim() === '') {
          setErr(true);
          return;
        }

        const responseData = JSON.parse(responseBody);
        navigate(
          responseData.type === 'recruiters' ? '/recruiterHome' : '/volunteerHome',
          { state: { _id: responseData._id, type: responseData.type } }
        );
      } else {
        setErr(true);
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      setErr(true);
      console.error('Error:', error);
    }
  };

  return (
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
  );
};

export default SignIn;

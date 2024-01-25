import React, { useState } from 'react'

// import for translation
import { useTranslation } from 'react-i18next';

// Two types of signing up
import SignUpRecruiter from '../components/SignUpRecruiter';
import SignUpVolunteer from '../components/SignUpVolunteer';

// import css file
import '../style/SignUp.css';

const SignUp = () => {

  const { t } = useTranslation();   // translation

  const [recruiter, setRecruiter] = useState(false);  // Visibility of recruiter form
  const [volunteer, setVolunteer] = useState(false);  // Visibility of volunteer form

  // Function controlling the visibility of the two types form
  const handleButtonClick = (formNumber) => {
    if (formNumber === 1) {
      setRecruiter(true);
      setVolunteer(false);
    } else if (formNumber === 2) {
      setRecruiter(false);
      setVolunteer(true);
    }
  };

  return (
    <div className="signup-container">
      <h1>{t('signup')}</h1>
      <div>
        {/* Sign up as recruiter button */}
        <button
          onClick={() => handleButtonClick(1)}
          className={`signup-button ${recruiter ? 'active' : ''}`}
        >
          {t("signup_as_recruiter")}
        </button>

        {/* Sign up as volunteer button */}
        <button
          onClick={() => handleButtonClick(2)}
          className={`signup-button ${volunteer ? 'active' : ''}`}
        >
          {t("signup_as_volunteer")}
        </button>
      </div>

      {/* Visibility of two forms types */}
      {recruiter && <SignUpRecruiter />}
      {volunteer && <SignUpVolunteer />}
    </div>
  );
};

export default SignUp;

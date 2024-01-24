import React from 'react'
import { useState } from 'react';

import SignUpRecruiter from '../components/SignUpRecruiter';
import SignUpVolunteer from '../components/SignUpVolunteer';

import '../style/SignUp.css';

const SignUp = () => {
  const [recruiter, setRecruiter] = useState(false);
  const [volunteer, setVolunteer] = useState(false);

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
      <h1>Sign Up</h1>
      <div>
        <button
          onClick={() => handleButtonClick(1)}
          className={`signup-button ${recruiter ? 'active' : ''}`}
        >
          Sign Up as a recruiter
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={`signup-button ${volunteer ? 'active' : ''}`}
        >
          Sign Up as a volunteer
        </button>
      </div>
      {recruiter && <SignUpRecruiter />}
      {volunteer && <SignUpVolunteer />}
    </div>
  );
};

export default SignUp;

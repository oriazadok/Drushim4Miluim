import React from 'react';
import '../style/SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <form className="sign-in-form">
        <h2 className="sign-in-heading">Sign In</h2>
        <label className="form-label">
          Email:
          <input type="email" className="form-input" placeholder="Enter your email" />
        </label>
        <label className="form-label">
          Password:
          <input type="password" className="form-input" placeholder="Enter your password" />
        </label>
        <button className="sign-in-button">Sign In</button>
        <p>still does not have an account 
          <Link to="/signup">
            <button>Sign Up</button>
        </Link></p>
      </form>
    </div>
  );
};

export default SignIn;

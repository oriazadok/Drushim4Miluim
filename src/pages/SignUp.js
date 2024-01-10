// SignUp.js
import React from 'react';
import '../style/SignUp.css';

const SignUp = () => {
  return (
    <div>
      {/* SignUp */}
      <form className="form-container" action="/submit" method="post">
        {/* Origin Service */}
        <label className="label" htmlFor="originService">
          Origin Service:
        </label>
        <select className="select-input" id="originService" name="originService">
          <option value="air">Air</option>
          <option value="sea">Sea</option>
          <option value="land">Land</option>
        </select>

        {/* Service */}
        <label className="label" htmlFor="service">
          Service:
        </label>
        <select className="select-input" id="service" name="service">
          <option value="lohem">Lohem</option>
          <option value="tomeh">Tomeh</option>
          <option value="job">Job</option>
        </select>

        {/* Rovai */}
        <label className="label" htmlFor="rovai">
          Rovai:
        </label>
        <select className="select-input" id="rovai" name="rovai">
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
        <label className="label" htmlFor="credentials">
          Credentials:
        </label>
        <select className="select-input" id="credentials" name="credentials">
          <option value="טבח">טבח</option>
          <option value="לוחם">לוחם</option>
          {/* Add other credentials options */}
        </select>

        {/* Profile */}
        <label className="label" htmlFor="profile">
          Profile:
        </label>
        <select className="select-input" id="profile" name="profile">
          <option value="21">21</option>
          <option value="45">45</option>
          {/* Add other profile options */}
        </select>

        {/* Region */}
        <label className="label" htmlFor="region">
          Region:
        </label>
        <select className="select-input" id="region" name="region">
          <option value="צפון">צפון</option>
          <option value="מרכז">מרכז</option>
          <option value="דרום">דרום</option>
        </select>

        <button className="submit-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

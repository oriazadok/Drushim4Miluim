// SignUp.js
import  { useState } from 'react';
// import axios from 'axios';

import '../style/SignUpVolunteer.css';

const SignUpVolunteer = () => {

  const [formData, setFormData] = useState({
    originService: '',
    service: '',
    rovai: '',
    credentials: '',
    profile: '',
    age: '',
    region: '',
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the response JSON
      const responseData = await response.json();
  
      // Log the response from the server
      console.log('Server Response:', responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  


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
        <label className="label" htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

        {/* Email */}
        <label className="label" htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />

        {/* Password */}
        <label className="label" htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />

        {/* Phone Number */}
        <label className="label" htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}/>

        {/* Origin Service */}
        <label className="label" htmlFor="originService">Origin Service:</label>
        <select className="select-input" id="originService" name="originService" value={formData.originService} onChange={handleInputChange} >
          <option value=""></option>
          <option value="air">Air</option>
          <option value="sea">Sea</option>
          <option value="land">Land</option>
        </select>

        {/* Service */}
        <label className="label" htmlFor="service">Service:</label>
        <select className="select-input" id="service" name="service" value={formData.service} onChange={handleInputChange} >
          <option value=""></option>
          <option value="lohem">Lohem</option>
          <option value="tomeh">Tomeh</option>
          <option value="job">Job</option>
        </select>

        {/* Rovai */}
        <label className="label" htmlFor="rovai">Rovai:</label>
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
        <label className="label" htmlFor="credentials">Credentials:</label>
        <select className="select-input" id="credentials" name="credentials" value={formData.credentials} onChange={handleInputChange} >
          <option value=""></option>
          <option value="טבח">טבח</option>
          <option value="לוחם">לוחם</option>
          <option value="מתכנת">מתכנת</option>
          <option value="טכנאי-רכב">טכנאי-רכב</option>
          <option value="קמבצ">קמבצ</option>
          <option value="מגד">מגד</option>
          <option value="סמגד">סמגד</option>
          <option value="מפ">מפ</option>
          <option value="סמפ">סמפ</option>
          <option value="טכנאי תקשוב">טכנאי תקשוב</option>
          <option value="נהג-ג">נהג-ג</option>
          <option value="חובש-קרבי">חובש-קרבי</option>
          <option value="משקית-תש">משקית-תש</option>
          <option value="משקית-מילואים">משקית מילואים</option>
          
        </select>

        {/* Profile */}
        <label className="label" htmlFor="profile">Profile:</label>
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
        <label className="label" htmlFor="age">Age:</label>
        <select className="select-input" id="age" name="age" value={formData.age} onChange={handleInputChange} >
          {ageOptions}
        </select>

        {/* Region */}
        <label className="label" htmlFor="region">Region:</label>
        <select className="select-input" id="region" name="region" value={formData.region} onChange={handleInputChange} >
          <option value=""></option>
          <option value="צפון">צפון</option>
          <option value="מרכז">מרכז</option>
          <option value="דרום">דרום</option>
        </select>

        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpVolunteer;

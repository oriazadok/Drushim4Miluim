import  { useState } from 'react';

import '../style/SignUpRecruiter.css';

const SignUpRecruiter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    originService: '',
    service: '',
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
      const response = await fetch('http://localhost:3001/api/signup_recruiter', {
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

        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpRecruiter;
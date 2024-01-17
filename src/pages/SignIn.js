import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import '../style/SignIn.css';



const SignIn = () => {

  const navigate = useNavigate();
  // history.push('/dashboard');
  // State to store form data
  const [formData, setFormData] = useState({
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
  
      if (response.ok) {
        const responseData = await response.json();
  
        console.log("responseData: ", responseData);
  
        // Pass data to the page you're navigating to using the state object
        navigate(responseData.type === "recruiters" ? '/recruiter' : '/volunteers', { state: { userType: responseData.type, _id: responseData.id } });
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
        <h2 className="sign-in-heading">Sign In</h2>
        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter your email"
          />
        </label>
        <label className="form-label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter your password"
          />
        </label>
        <button className="sign-in-button" onClick={signIn}>
          Sign In
        </button>
        <p>
          Don't have an account yet? 
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;

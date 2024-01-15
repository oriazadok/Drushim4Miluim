// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Recruiter from './pages/Recruiter';

function App() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3001/');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  
  //       const data = await response.text();
  //       setMessage(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/signin" element={<VolunterSearchProfile />} />
        <Route path="/profile" element={<RecruiterProfile />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recruiter" element={<Recruiter />} />
      </Routes>
    </Router>
  );
}

export default App;

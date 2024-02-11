import React from 'react'

// imports for translations
import { I18nextProvider } from 'react-i18next';
import i18n from './translations/i18n';

// imports for routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navigator from './components/Navigator';

// Home page of the website 
import Home from './pages/Home';

// signing pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Recruiter from './pages/Recruiter';
import RecruiterSearch from './pages/RecruiterSearch'
import ProfileOfRecruiter from './pages/ProfileOfRecruiter';
import ProfileOfVolunteer from './pages/ProfileOfVolunteer';
import VolunteerSearch from './pages/VolunteerSearch';
import Volunteer from './pages/Volunteer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VolunteerSearch" element={<VolunteerSearch />} />
        <Route path="/profile" element={<Recruiter />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile_of_recruiter" element={<ProfileOfRecruiter />} />
        <Route path="/profile_of_volunteer" element={<ProfileOfVolunteer />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/recruiterSearch" element={<RecruiterSearch />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </Router>
  );
}

export default App;

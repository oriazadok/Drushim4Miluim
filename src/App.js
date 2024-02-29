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

// pages of recruiter
import RecruiterHome from './pages/RecruiterHome';
import RecruiterProfile from './pages/RecruiterProfile';
import RecruiterSearch from './pages/RecruiterSearch';

// pages of volunteer
import VolunteerHome from './pages/VolunteerHome';
import VolunteerProfile from './pages/VolunteerProfile';
import VolunteerSearch from './pages/VolunteerSearch'

// positions that will be used by both the recruiter and the volunteer
import Positions from './pages/Positions'

import AboutUs from './pages/AboutUs';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
      {/* <Navigator /> */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Sign in and signout routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Routes for recruiter */}
          <Route path="/recruiterHome" element={<RecruiterHome />} />
          <Route path="/recruiterProfile" element={<RecruiterProfile />} />
          <Route path="/recruiterSearch" element={<RecruiterSearch />} />

          {/* Routes for volunteer */}
          <Route path="/volunteerHome" element={<VolunteerHome />} />
          <Route path="/volunteerProfile" element={<VolunteerProfile />} />
          <Route path="/volunteerSearch" element={<VolunteerSearch />} />

          {/* Route that will be used by both the recruiter and the volunteer */}
          <Route path="/positions" element={<Positions />} />

          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import ProfileOfRecruiter from './pages/ProfileOfRecruiter';
import RecruiterProfile from './pages/RecruiterProfile';
import ProfileOfVolunteer from './pages/ProfileOfVolunteer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/recruiter_profile" element={<RecruiterProfile />} />
        <Route path="/profile_of_recruiter" element={<ProfileOfRecruiter />} />
        <Route path="/profile_of_volunteer" element={<ProfileOfVolunteer />} />
      </Routes>
    </Router>
  );
}

export default App;

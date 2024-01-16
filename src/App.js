import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Recruiter from './pages/Recruiter';
import ProfileOfRecruiter from './pages/ProfileOfRecruiter';
import ProfileOfVolunteer from './pages/ProfileOfVolunteer';
import VolunterSearchProfile from './pages/VolunterSearchProfile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<VolunterSearchProfile />} />
        <Route path="/profile" element={<Recruiter />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile_of_recruiter" element={<ProfileOfRecruiter />} />
        <Route path="/profile_of_volunteer" element={<ProfileOfVolunteer />} />
        <Route path="/recruiter" element={<Recruiter />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import RecruiterProfile from './pages/RecruiterProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
        <Route path="/signin" element={<VolunterSearchProfile />} />
        <Route path="/profile" element={<RecruiterProfile />} />
=======
>>>>>>> Stashed changes
        <Route path="/signin" element={<SignIn />} />
        <Route path="/recruiter_profile" element={<RecruiterProfile />} />
>>>>>>> origin/master
      </Routes>
    </Router>
  );
}

export default App;

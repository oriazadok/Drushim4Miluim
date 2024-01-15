import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Recruiter from './pages/Recruiter';
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
        <Route path="/recruiter" element={<Recruiter />} />
      </Routes>
    </Router>
  );
}

export default App;

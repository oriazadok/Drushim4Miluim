import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import RecruiterProfile from './pages/RecruiterProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<RecruiterProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

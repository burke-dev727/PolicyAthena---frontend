import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homepage';
import UserInput from './userinput';

function Navbar() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userinput" element={<UserInput />} />
      </Routes>
    </Router>
  );
}

export default Navbar;

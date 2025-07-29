/*
* File: App.jsx
* Author: James Zheng
* Date: 2025-07-27
* Updated: 2025-07-29
* Description: This is the main application component that sets up the routing for the PolicyAthena frontend.
* It includes routes for the homepage and user input page, and handles unmatched routes with a 404 error page.
*/
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/Homepage';
import UserProfile from './pages/Userprofile';
import UserInput from './pages/Userinput';
import MatchedPlan from './pages/Matchedplan';
import ComparePlans from './pages/Compareplans';
import History from './pages/History';
import { User } from 'lucide-react';

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path ="/Userprofile" element={<UserProfile />} />
        <Route path="/Userinput" element={<UserInput />} />
        <Route path="/Matchedplan" element={<MatchedPlan />} />
        <Route path="/Compareplans" element={<ComparePlans />} />
        <Route path="/History" element={<History />} />
        <Route path="*" element={<div><Error /></div>} />
      </Routes>
    </Router>
  );
}
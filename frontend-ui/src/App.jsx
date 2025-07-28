/*
* File: App.jsx
* Author: James Zheng
* Date: 2025-07-27
* Description: This is the main application component that sets up the routing for the PolicyAthena frontend.
* It includes routes for the homepage and user input page, and handles unmatched routes with a 404 error page.
*/
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/homepage';
import UserInput from './pages/userinput';

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Userinput" element={<UserInput />} />
        {/*Add more routes as needed*/}
        <Route path="*" element={<div><Error /></div>} />
      </Routes>
    </Router>
  );
}
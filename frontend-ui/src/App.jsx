/*
* File: App.jsx
* Author: James Zheng
* Date: 2025-07-27
* Updated: 2025-07-29
* Description: This is the main application component that sets up the routing for the PolicyAthena frontend.
* It includes routes for the homepage and user input page, and handles unmatched routes with a 404 error page.
*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/Homepage';
import UserProfile from './pages/Userprofile';
import UserInput from './pages/Userinput';
import PolicyUpload from './pages/Policyupload';
import ComparePlans from './pages/Compareplans';
import History from './pages/History';
import Error from './pages/errorpage';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import InsuranceMarket from './pages/InsuranceMarket';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthContext } from './AuthContext';
import { AuthProvider } from './AuthProvider.jsx';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Userprofile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
          <Route path="/Userinput" element={<ProtectedRoute><UserInput /></ProtectedRoute>} />
          <Route path="/Policyupload" element={<PolicyUpload />} />
          <Route path="/Compareplans" element={<ComparePlans />} />
          <Route path="/History" element={<History />} />
          <Route path="/About" element={<About />} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/InsuranceMarket" element={<InsuranceMarket />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
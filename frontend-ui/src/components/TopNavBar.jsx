/*
 * File: TopNavBar.jsx
 * Author: Xinrui Hou
 * Date: 2025-08-06
 * Description: Created reusable TopNavBar with integrated login/signup modal and authentication logic for consistent navigation and user experience across the app.
 */
import React, { useContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '../assets/Logo.jpg';
import { AuthContext } from '../AuthContext';

export default function TopNavBar() {
  const navigate = useNavigate();
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const avatarRef = useRef(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser({ name: '', avatar: '' });
    setDropdownOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setUser({ name: loginEmail.split('@')[0], avatar: '' });
    setShowLogin(false);
    setLoginEmail('');
    setLoginPassword('');
    navigate('/');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setUser({ name: signupName, avatar: '' });
    setShowSignup(false);
    setSignupName('');
    setSignupEmail('');
    setSignupPassword('');
    navigate('/');
  };

  return (
    <>
      <header className="w-full bg-white shadow flex items-center justify-between px-8 py-3 sticky top-0 z-20">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img src={Logo} alt="PolicyAthena Logo" className="w-10 h-10 rounded-full object-cover" />
          <span className="font-bold text-xl text-blue-900 tracking-tight">PolicyAthena</span>
        </div>
        <nav className="flex-1 flex items-center justify-center space-x-8">
          <Button variant="ghost" className="text-gray-700 hover:text-blue-700 font-medium" onClick={() => navigate('/')}>Home</Button>
          <Button variant="ghost" className="text-gray-700 hover:text-blue-700 font-medium" onClick={() => navigate('/About')}>About</Button>
          <Button variant="ghost" className="text-gray-700 hover:text-blue-700 font-medium" onClick={() => navigate('/HowItWorks')}>How It Works</Button>
          <Button variant="ghost" className="text-gray-700 hover:text-blue-700 font-medium" onClick={() => navigate('/InsuranceMarket')}>Insurance Market</Button>
          <Button variant="ghost" className="text-gray-700 hover:text-blue-700 font-medium" onClick={() => navigate('/Contact')}>Contact</Button>
        </nav>
        <div className="flex items-center space-x-2">
          {isAuthenticated ? (
            <div className="relative" ref={avatarRef}>
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                {user.avatar ? (
                  <img src={user.avatar} alt="User Avatar" className="w-9 h-9 rounded-full object-cover border-2 border-blue-400" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold border-2 border-blue-400">
                    {user.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                )}
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLogout}>Log Out</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Button variant="outline" className="px-4 py-1" onClick={() => setShowSignup(true)}>Sign Up</Button>
              <Button className="px-4 py-1" onClick={() => setShowLogin(true)}>Log In</Button>
            </>
          )}
        </div>
      </header>
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => setShowLogin(false)}>&times;</button>
            <h1 className="text-2xl font-bold mb-6 text-center">Log In to PolicyAthena</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block mb-1">Email</label>
                <input type="email" className="w-full border rounded px-3 py-2" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required />
              </div>
              <div>
                <label className="block mb-1">Password</label>
                <input type="password" className="w-full border rounded px-3 py-2" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full">Log In</Button>
            </form>
            <div className="mt-4 text-center">
              <span>Don't have an account? </span>
              <button className="text-blue-600 hover:underline" onClick={() => { setShowLogin(false); setShowSignup(true); }}>Sign Up</button>
            </div>
          </div>
        </div>
      )}
      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => setShowSignup(false)}>&times;</button>
            <h1 className="text-2xl font-bold mb-6 text-center">Sign Up for PolicyAthena</h1>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block mb-1">Name</label>
                <input type="text" className="w-full border rounded px-3 py-2" value={signupName} onChange={e => setSignupName(e.target.value)} required />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input type="email" className="w-full border rounded px-3 py-2" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} required />
              </div>
              <div>
                <label className="block mb-1">Password</label>
                <input type="password" className="w-full border rounded px-3 py-2" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full">Sign Up</Button>
            </form>
            <div className="mt-4 text-center">
              <span>Already have an account? </span>
              <button className="text-blue-600 hover:underline" onClick={() => { setShowSignup(false); setShowLogin(true); }}>Log In</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 
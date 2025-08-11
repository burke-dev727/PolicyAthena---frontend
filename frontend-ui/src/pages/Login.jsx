/*
 * File: Login.jsx
 * Author: Xinrui Hou
 * Date: 2025-08-06
 * Description: Added the Login page with a temperary authentication function. 
 */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Hero from '../assets/Hero.png';
import { AuthContext } from '../AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add real authentication logic here
    setIsAuthenticated(true);
    setUser({ name: email.split('@')[0], avatar: '' });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Hero Section */}
      <section className="mb-8 w-full max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Unlock Smarter Health Coverage with AI</h1>
          <p className="text-lg text-gray-600 mb-6">PolicyAthena simplifies health insurance comparison. Upload your policy, get personalized scores, and find the perfect plan for you.</p>
        </div>
        <div className="flex justify-center">
          <img src={Hero} alt="PolicyAthena Hero" className="w-full max-w-2xl h-auto rounded-xl shadow-lg" />
        </div>
      </section>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Log In to PolicyAthena</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input type="password" className="w-full border rounded px-3 py-2" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full">Log In</Button>
        </form>
        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <button className="text-blue-600 hover:underline" onClick={() => navigate('/Signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
} 
/*
 * File: About.jsx
 * Author: Xinrui Hou & James Zheng
 * Date: 2025-08-06
 * Updated: 2025-08-12
 * Description: 
 *   - Added the About page placeholder.
 *   - Refactored to use reusable TopNavBar (with login/signup modal) and SidebarNav for consistent navigation and authentication UI across the app.
 *   - Added project information and team sections.
 *   - Added Logo and Images for branding.
 *   - Added Contact Us button to redirect to Contact Page
 */
import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from '../assets/Logo.jpg';
import TopNavBar from '../components/TopNavBar';
import SidebarNav from '../components/SidebarNav';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <TopNavBar />
      <div className="flex min-h-screen">
        <SidebarNav />
        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* About Project Section */}
          <section className="mb-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
               <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About PolicyAthena</h1>
               <p className="text-lg text-gray-600 mb-6"> {/* Edit */}
                 This project is a comprehensive platform designed to simplify health insurance comparison and selection using AI-powered tools. 
                 Here you can add more details about the mission, vision, and features of PolicyAthena.
               </p>
            </div>
            <div className="flex justify-center">
              {/* Logo or About Image */}
              <img src={Logo} alt="PolicyAthena Logo" className="w-40 h-40 rounded-full shadow-lg" />
            </div>
          </section>
          {/* ProjectDetails Section FILL IT IN */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Project Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-500 text-sm">
                  Briefly describe the mission of PolicyAthena.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <p className="text-gray-500 text-sm">
                  List or describe the main features of the platform.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="font-semibold mb-2">Security & Privacy</h3>
                <p className="text-gray-500 text-sm">
                  Explain your approach to user data security and privacy.
                </p>
              </div>
            </div>
          </section>
          {/* Team Section FILL WITH PROFILE PICS AND MAKE IT BIGGER, ALSO REMVOE TEMPORARY UNTIL SUBMISSION IS CLOSE
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-2xl">👤</div>
                <h3 className="font-semibold mb-1">Xinrui Hou</h3>
                <p className="text-gray-500 text-sm">Project Manager / Full Stack Developer</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-2xl">👤</div>
                <h3 className="font-semibold mb-1">Zhaoyan Zhi</h3>
                <p className="text-gray-500 text-sm">Backend Developer</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-2xl">👤</div>
                <h3 className="font-semibold mb-1">James Delin Zheng</h3>
                <p className="text-gray-500 text-sm">Frontend Developer / UI Designer</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-2xl">👤</div>
                <h3 className="font-semibold mb-1">Wenlong Yang</h3>
                <p className="text-gray-500 text-sm">Frontend Developer</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-2xl">👤</div>
                <h3 className="font-semibold mb-1">Baofang Zhang</h3>
                <p className="text-gray-500 text-sm">Build RAG and Agents Systems</p>
              </div>
            </div>
          </section> */}
          {/* Final CTA Section */}
          <section className="bg-blue-50 rounded-xl py-10 px-6 text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl font-bold mb-2">Want to Learn More?</h2>
            <p className="text-gray-700 mb-4">
              Contact us or explore more about PolicyAthena and our team.
            </p>
            <Button className="px-6 py-2 text-lg font-semibold" onClick={() => navigate('/Contact')}>Contact Us</Button>
          </section>
        </main>
      </div>
    </div>
  );
} 
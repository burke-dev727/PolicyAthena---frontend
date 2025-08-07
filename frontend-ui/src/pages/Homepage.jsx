/*
* File: Homepage.jsx
* Author: Xinrui Hou & James Zheng
* Date: 2025-07-01
* Updated: 2025-07-29
* Description: This is the homepage component for the PolicyAthena frontend. It includes a sidebar for navigation and a main content area with login and signup forms.
* Changes:
*   - Modified the homepage to use reusable TopNavBar (with login/signup modal) and SidebarNav for consistent navigation. 
*/

import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from '../assets/Logo.jpg';
import Hero from '../assets/Hero.png';
import { AuthContext } from '../AuthContext';
import TopNavBar from '../components/TopNavBar';
import SidebarNav from '../components/SidebarNav';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <TopNavBar />
      <div className="flex min-h-screen">
        <SidebarNav />
        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Unlock Smarter Health Coverage with AI</h1>
              <p className="text-lg text-gray-600 mb-6">PolicyAthena simplifies health insurance comparison. Upload your policy, get personalized scores, and find the perfect plan for you.</p>
              <Button className="px-6 py-3 text-lg font-semibold">Start Comparing Policies</Button>
            </div>
            <div className="flex justify-center">
              {/* Hero Image */}
              <img src={Hero} alt="PolicyAthena Hero" className="w-full max-w-2xl h-auto rounded-xl shadow-lg" />
            </div>
          </section>
          {/* Why Choose Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Why Choose PolicyAthena?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-2">🧩</div>
                <h3 className="font-semibold mb-2">Personalized Plan Matching</h3>
                <p className="text-gray-500 text-sm">Receive recommendations tailored to your health needs and budget, ensuring optimal coverage.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-2">📄</div>
                <h3 className="font-semibold mb-2">Effortless Policy Upload</h3>
                <p className="text-gray-500 text-sm">Quickly upload your current policy documents for an in-depth, AI-powered analysis and comparison.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="font-semibold mb-2">Compare Top Providers</h3>
                <p className="text-gray-500 text-sm">Access a comprehensive marketplace featuring leading insurance carriers and their best offerings.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-2">💡</div>
                <h3 className="font-semibold mb-2">Expert Guidance</h3>
                <p className="text-gray-500 text-sm">Get personalized support from licensed advisors to navigate complex insurance options and choices.</p>
              </div>
            </div>
          </section>
          {/* Testimonials Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-2xl">👤</div>
                <p className="text-gray-600 italic mb-2">"PolicyAthena made comparing health plans incredibly simple. Found a better deal in minutes, saving both time and money!"</p>
                <span className="text-blue-700 font-semibold">Michael R.</span>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-2xl">👩‍💼</div>
                <p className="text-gray-600 italic mb-2">"The personalized recommendations were spot-on. Finally, health insurance that truly fits my family's unique needs!"</p>
                <span className="text-blue-700 font-semibold">Sarah L.</span>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-2xl">👩‍⚕️</div>
                <p className="text-gray-600 italic mb-2">"I used to dread insurance shopping. PolicyAthena transformed it into a surprisingly easy and pleasant experience!"</p>
                <span className="text-blue-700 font-semibold">Jessica C.</span>
              </div>
            </div>
          </section>
          {/* Final CTA Section */}
          <section className="bg-blue-50 rounded-xl py-10 px-6 text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl font-bold mb-2">Ready to Find Your Perfect Plan?</h2>
            <p className="text-gray-700 mb-4">Join thousands of happy users who found better health coverage with PolicyAthena.</p>
            <Button className="px-6 py-2 text-lg font-semibold">Get Started Now</Button>
      </section>
    </main>
      </div>
    </div>
  );
}
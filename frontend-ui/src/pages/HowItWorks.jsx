/*
 * File: HowItWorks.jsx
 * Author: Xinrui Hou & James Zheng
 * Date: 2025-08-06
 * Updated: 2025-08-16
 * Description: 
 *   - Added the How It Works page placeholder.
 *   - Refactored to use reusable TopNavBar (with login/signup modal) and SidebarNav for consistent navigation and authentication UI across the app.
 *   - Remvoed palceholder and added the title, steps, and final comment for How It Works page
 *   - Added Icons to each steps
 */
import React from 'react';
import { Button } from '@/components/ui/button';
import TopNavBar from '../components/TopNavBar';
import SidebarNav from '../components/SidebarNav';
import Step1Icon from '../assets/Step1Icon.svg';
import Step2Icon from '../assets/Step2Icon.svg';
import Step3Icon from '../assets/Step3Icon.svg';
import Step4Icon from '../assets/Step4Icon.svg';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <TopNavBar />
      <div className="flex min-h-screen">
        <SidebarNav />
        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-2">How PolicyAthena Works</h1>
            <p className='text-center'>Simplifying insurance comparison, step by step.</p>
            <div className="flex justify-center mb-10">
              <Button className="px-4 py-2 text-lg font-semibold">Start Comparing Policies</Button>
            </div>
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Step 1*/}
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  {/* User icon */}
                  <img src={Step1Icon} alt="Step 1" className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">1. User Input &amp; Profile Setup</h3>
                <p className="text-gray-500 text-sm">
                  Securely input your personal details and current insurance information. Our intuitive interface guides you through gathering all necessary data for accurate policy analysis.
                </p>
              </div>
              {/* Step 2*/}
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  {/* User icon */}
                  <img src={Step2Icon} alt="Step 2" className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">2. Policy Upload &amp; Digitization</h3>
                <p className="text-gray-500 text-sm">
                  Effortlessly upload your existing health insurance policy documents. Our system digitizes key information, preparing it for advanced AI-driven comparisons.
                </p>
              </div>
              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  {/* User icon */}
                  <img src={Step3Icon} alt="Step 3" className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">3. AI-Powered Comparisons &amp; Analysis</h3>
                <p className="text-gray-500 text-sm">
                  PolicyAthena's intelligent AI analyzes thousands of data points from your policies and market options. Discover how your current coverage stacks up against personalized recommendations.
                </p>
              </div>
              {/* Step 4 */}
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  {/* User icon */}
                  <img src={Step4Icon} alt="Step 4" className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">4. Personalized Policy Recommendations</h3>
                <p className="text-gray-500 text-sm">
                  Receive a clear, unbiased source for your current policy and tailored suggestions for better-suited alternatives. Make informed decisions with confidence.
                </p>
              </div>
            </div>
            {/* Final Comment Section */}
              <section className="bg-blue-50 rounded-xl py-10 px-6 text-center max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-2">Ready to find your perfect policy?</h2>
                  <p className="text-gray-700 mb-4">
                    Join PolicyAthena today and experience the future of insurance management.
                  </p>
                  <h1 className="px-6 py-2 text-14xl font-semibold">Get Started Now</h1>
              </section>
          </div>
        </main>
      </div>
    </div>
  );
} 

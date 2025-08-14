/*
 * File: InsuranceMarket.jsx
 * Author: Xinrui Hou & James Zheng
 * Date: 2025-08-06
 * Updated: 2025-08-14
 * Description: 
 *   - Added the Insurance Market page placeholder.
 *   - Refactored to use reusable TopNavBar (with login/signup modal) and SidebarNav for consistent navigation and authentication UI across the app.
 *   - Updated UI to match Homepage structure with future content placeholder and big picture.
 *   - Added image and deleted the 'coming soon' button.
 */
import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from '../assets/Logo.jpg';
import Hero from '../assets/Hero.png';
import TopNavBar from '../components/TopNavBar';
import SidebarNav from '../components/SidebarNav';
import InsuranceIcon from '../assets/Insurance.png'; 

export default function InsuranceMarket() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <TopNavBar />
      <div className="flex min-h-screen">
        <SidebarNav />
        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Header Section */}
          <section className="mb-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Insurance Market</h1>
              <p className="text-xl text-gray-600 mb-6">Future stuff will be added</p>
            </div>
          </section>
          
          {/* Content Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow p-8 text-center max-w-3xl mx-auto">
              <img src={InsuranceIcon} alt="Coming Soon" className="w-50 h-50 mb-8 object-contain" />
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-600 mb-6">We're working hard to bring you an amazing insurance marketplace experience. Stay tuned for updates!</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 
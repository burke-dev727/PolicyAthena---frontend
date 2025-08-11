/*
 * File: InsuranceMarket.jsx
 * Author: Xinrui Hou
 * Date: 2025-08-06
 * Description: 
 *   - Added the Insurance Market page placeholder.
 *   - Refactored to use reusable TopNavBar (with login/signup modal) and SidebarNav for consistent navigation and authentication UI across the app.
 */
import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from '../assets/Logo.jpg';
import TopNavBar from '../components/TopNavBar';
import SidebarNav from '../components/SidebarNav';

export default function InsuranceMarket() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <TopNavBar />
      <div className="flex min-h-screen">
        <SidebarNav />
        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4">Insurance Market</h1>
          <p>This is a placeholder for the Insurance Market page. Future features will go here.</p>
        </main>
      </div>
    </div>
  );
} 
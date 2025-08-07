/*
 * File: Contact.jsx
 * Author: Xinrui Hou
 * Date: 2025-08-06
 * Description: 
 *   - Added the Contact page placeholder.
 *   - Refactored to use reusable TopNavBar (with login/signup modal) and SidebarNav for consistent navigation and authentication UI across the app.
 */
import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from '../assets/Logo.jpg';
import TopNavBar from '../components/TopNavBar';
import SidebarNav from '../components/SidebarNav';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <TopNavBar />
      <div className="flex min-h-screen">
        <SidebarNav />
        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p>This is the Contact page. Add contact information or a form here.</p>
        </main>
      </div>
    </div>
  );
} 
/*
 * File: Contact.jsx
 * Author: Xinrui Hou
 * Date: 2025-08-06
 * Description: 
 *   - Added the Contact page placeholder.
 *   - Refactored to use reusable TopNavBar (with login/signup modal) and SidebarNav for consistent navigation and authentication UI across the app.
 *   - Deleted Sections for sending the email because it wastes time and there are other more important tasks to complete, so it will be for show.
 */
import React from 'react';
import { Button } from '@/components/ui/button';
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
          {/* Contact Header */}
          <section className="mb-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact PolicyAthena</h1>
              <p className="text-lg text-gray-600 mb-6">
                Reach out to us for questions, support, or partnership opportunities. We value your feedback and inquiries!
              </p>
            </div>
            
          </section>
          {/* Contact Methods */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-2">📧</div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-500 text-sm">
                  contact@policyathena.com
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-2">📞</div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-500 text-sm">
                  (123) 456-7890
                </p>
              </div>
            </div>
          </section>
          {/* Contact Form */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Send Us a Message </h2>
            <form className="max-w-xl mx-auto bg-white rounded-lg shadow p-8 flex flex-col gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Type your message here..."  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
              </div>
               <Button className="px-6 py-2 text-lg font-semibold w-full">Send Message</Button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
} 

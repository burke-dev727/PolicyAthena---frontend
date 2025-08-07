/*
 * File: SidebarNav.jsx
 * Author: Xinrui Hou
 * Date: 2025-08-06
 * Description: Created reusable SidebarNav for consistent sidebar navigation across the app.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function SidebarNav() {
  const navigate = useNavigate();
  return (
    <aside className="w-64 bg-white p-6 border-r border-gray-200 shadow-md flex flex-col">
      <nav className="flex flex-col space-y-3">
        <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/Userprofile')}>
          <span className="mr-2">👤</span>User Profile
        </Button>
        <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/Userinput')}>
          <span className="mr-2">📝</span>User Input
        </Button>
        <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/Policyupload')}>
          <span className="mr-2">📄</span>Policy Upload
        </Button>
        <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/Compareplans')}>
          <span className="mr-2">⚖️</span>Compare Plans
        </Button>
        <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/History')}>
          <span className="mr-2">📊</span>History
        </Button>
      </nav>
    </aside>
  );
} 
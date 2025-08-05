/*
 * File: History.jsx
 * Author: Name & James Zheng
 * Date: 2025-07-29
 * Description: This may be deleted.
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from "react-router-dom";

export default function History() {
    const navigate = useNavigate();

    return (
        <main className="flex min-h-screen bg-gray-50 text-gray-800">
            {/* Sidebar */}
            <aside className="w-64 bg-white p-6 border-r border-gray-200 shadow-md">
                <h2 className="text-2xl font-bold mb-8">PolicyAthena</h2>
                <nav className="flex flex-col space-y-3">
                    <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/Userprofile')}>User Profile</Button>
                    <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/Userinput')}>User Input</Button>
                    <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/Matchedplan')}>Matched Plan</Button>
                    <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/Compareplans')}>Compare Plans</Button>
                    <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/History')}>History</Button>
                </nav>
            </aside>
            
            {/* Main Content */}
            <div className="flex-1 p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">History</h1>
                {/* Add profile content here */}
            </div>
        </main>
    );
};
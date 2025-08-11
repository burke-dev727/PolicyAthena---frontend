/*
 * File: Compareplans.jsx
 * Author: Xinrui Hou
 * Date: 2025-08-06
 * Description: Refactored to use reusable TopNavBar (with login/signup modal) and SidebarNav for consistent navigation and authentication UI across the app.
 */

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TopNavBar from '../components/TopNavBar';
import SidebarNav from '../components/SidebarNav';

export default function ComparePlans() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <TopNavBar />
            <div className="flex min-h-screen">
                <SidebarNav />
                {/* Main Content */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <h1 className="text-3xl font-bold mb-6 text-center">Compare Plans</h1>
                    {/* Add profile content here */}
                </main>
            </div>
        </div>
    );
};
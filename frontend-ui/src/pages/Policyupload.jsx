/*
 * File: Policyupload.jsx
 * Author: Xinrui Hou
 * Date: 2025-08-06
 * Description: 
 *   - Modified the Policy Upload page placeholder.
 *   - Refactored to use reusable TopNavBar (with login/signup modal) and SidebarNav for consistent navigation and authentication UI across the app.
 *   - Implemented PDF upload functionality with file validation and preview.
 *   - Will need to give Picture Icons for upload and file sections
 */

import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TopNavBar from '../components/TopNavBar';
import SidebarNav from '../components/SidebarNav';

export default function PolicyUpload() {
    const fileInputRef = useRef(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleBoxClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            const newFile = files.filter(
                file => !uploadedFiles.some(
                    f => f.name === file.name && f.size === file.size
                )
            )
            setUploadedFiles(prev => [...prev, ...newFile]);
        }
        e.target.value = '';
    }

    const handleDelete = (index) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <TopNavBar />
            <div className="flex min-h-screen">
                <SidebarNav />
                {/* Main Content */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <section className="mb-12">
                        {/* Header Section */}
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h1 className="text-4xl md:text-3xl font-extrabold mb-4">Upload Your Health Policy Documents</h1>
                            <p className="text-lg text-gray-600 mb-6"> 
                                Securely upload your health policy PDF files for AI-powered analysis. We accept multiple documents
                            </p>
                        </div>
                        {/* PDF Upload */}
                        <div className="flex justify-center mb-8">
                            <div className="w-full max-w-md bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-8 border-2 border-dashed border-blue-300 cursor-pointer transition hover:border-blue-500"
                                onClick={handleBoxClick} style={{ minHeight: '320px '}}
                            >
                                <img
                                    src="/placeholder-image.png"
                                    alt="Upload Icon in Uploading Files"
                                    className="w-24 h-24 mb-4 object-contain"
                                />
                                <p className="text-gray-500 text-center mb-6">Supported formats: PDF (max 10MB per file)</p>
                                <Button className="px-6 py-2 text-lg font-semibold mb-2">Upload PDF Files</Button>
                                <Input ref={fileInputRef} type="file" accept="application/pdf" multiple className="hidden"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                    </section>
                    {/* Uploaded Files Section */}
                    <section className="max-w-md mx-auto mt-16">
                        <h2 className="text-xl font-bold mb-4 text-center">Uploaded Files</h2>
                        {uploadedFiles.length === 0 ? (
                            <div className="text-center text-gray-400">No files uploaded yet.</div>
                        ) : (
                            <div className="bg-white rounded-xl shadow p-6">
                                <ul className="divide-y divide-gray-200">
                                    {uploadedFiles.map((file, idx) => (
                                        <li key={file.name + file.size} className="flex items-center justify-between py-2">
                                            <div className="flex items-center">
                                                <img src="/placeholder-image.png" alt="PDF file icon" className="w-6 h-6 mr-3 object-contain" />
                                                <span className="font-medium">{file.name}</span>
                                                <span className="ml-2 text-gray-400 text-xs">({(file.size / 1024).toFixed(1)} KB)</span>
                                            </div>
                                            <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50 p-2" onClick={() => handleDelete(idx)} aria-label="Delete">
                                                {/* X-Delete Icon */}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
}; 
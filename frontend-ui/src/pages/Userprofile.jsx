/*
 * File: UserProfile.jsx
 * Author: James Zheng & Xinrui Hou
 * Date: 2025-07-29
 * Updated: 2025-08-05
 * Description: This is the user profile component for the PolicyAthena frontend. It includes a sidebar for navigation and a main content area for user profile details. This file defines the User Profile page layout and navigation.
 * Changes:
 * - Added a way to put data into a JSON file to import to backend
 * - Added an alert when user submits their data for debugging.
 * - Used reusable TopNavBar (with login/signup modal) and SidebarNav for consistent navigation. 
 * - Authenticate UI across the app.
 * - Updated UI for personal details for better experience.
 */

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import TopNavBar from '../components/TopNavBar';
import SidebarNav from '../components/SidebarNav';
import { userProfileService } from '../services/userService.jsx';

export default function UserProfile() {
    // State variables for personal information
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [ssn, setSocialSecurity] = useState('');

    // State variables for employment details
    const [is_employed, setIsEmployed] = useState(false);
    const [employer_name, setEmployerName] = useState('');
    const [is_employeroffers, setIsEmployerOffers] = useState(false);
    const [annual_income, setAnnualIncome] = useState('');
    const [household_size, setHouseholdSize] = useState('');

    // State variable for active tab
    const [activeTab, setActiveTab] = useState('personal');
  
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        const data = {
            name, age, email, phone, address, location, zipcode, ssn,
            is_employed, employer_name, is_employeroffers, annual_income, household_size,
            source: "userprofile"
        };

        // Send data to backend using the service
        const result = await userProfileService.submitUserProfile(data);
        
        if (result.success) {
            alert(`Data submitted successfully! Profile ID: ${result.profile_id}`);
            
            // Convert to JSON string for download
            const jsonString = JSON.stringify(data, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'userprofile_answers_data.json';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            alert('Data has also been saved as a JSON file');
        } else {
            alert(`Submission failed: ${result.error}`);
        }
    };
  // Function to reset all form fields
  const handleReset = () => {
    setName('');
    setAge('');
    setEmail('');
    setPhone('');
    setAddress('');
    setLocation('');
    setZipcode('');
    setSocialSecurity('');
    setIsEmployed(false);
    setEmployerName('');
    setIsEmployerOffers(false);
    setAnnualIncome('');
    setHouseholdSize('');
  };

  // Individual section reset functions
  const resetPersonal = () => {
    setName('');
    setAge('');
    setEmail('');
    setPhone('');
    setAddress('');
    setLocation('');
    setZipcode('');
    setSocialSecurity('');
  };

  const resetEmployment = () => {
    setIsEmployed(false);
    setEmployerName('');
    setIsEmployerOffers(false);
    setAnnualIncome('');
    setHouseholdSize('');
  };

  // Alert input variables
  const submitClick = () => {
    alert(`PERSONAL INFORMATION\nName: ${name}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nLocation: ${location}\nZipcode: ${zipcode}\nSocialSecurity: ${ssn}
      \nEMPLOYMENT DETAILS\nIs Employed: ${is_employed}\nEmployer Name: ${employer_name}\nEmployer Offers: ${is_employeroffers}\nAnnual Income: ${annual_income}\nHousehold Size: ${household_size}`);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <TopNavBar />
      <div className="flex min-h-screen">
        <SidebarNav />
        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">User Profile</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-2xl mx-auto">
            <TabsList className="grid grid-cols-6 mb-6">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="employment">Employment</TabsTrigger>
            </TabsList>

            {/* Personal Information Submission Tab */}
            <TabsContent value="personal">
              <Card>
                <CardContent className="space-y-4 py-6">
                  <h2 className="text-xl font-semibold mb-4 text-center">Personal Information</h2>
                  <form onSubmit={e => { e.preventDefault(); setActiveTab('employment'); }}>
                    {/* Name Question */}
                    <label className="block mb-1">What is your full name?</label>
                    <Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="mb-2" />
                    {/* Age Question */}
                    <label className="block mb-1">What is your age?</label>
                    <Input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} className="mb-2" />
                    {/* Email Question */}
                    <label className="block mb-1">What is your email address?</label>
                    <Input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="mb-2" />
                    {/* Phone Number Question */}
                    <label className="block mb-1">What is your phone number?</label>
                    <Input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} className="mb-2" />
                    {/* Address Question (address number, street name) */}
                    <label className="block mb-1">What is your address (address number, street name)?</label>
                    <Input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} className="mb-2" />
                    {/* Location Question (City, State) */}
                    <label className="block mb-1">What is your location (City, State)?</label>
                    <Input type="text" placeholder="Location (City, State)" value={location} onChange={e => setLocation(e.target.value)} className="mb-2" />
                    {/* Zipcode Question */}
                    <label className="block mb-1">What is your zipcode?</label>
                    <Input type="text" placeholder="Zipcode" value={zipcode} onChange={e => setZipcode(e.target.value)} className="mb-2" />
                    {/* Social Security Number Question */}
                    <label className="block mb-1">What is your Social Security Number?</label>
                    <Input type="text" placeholder="Social Security Number" value={ssn} onChange={e => setSocialSecurity(e.target.value)} className="mb-2" />
                    {/* Navigation Buttons */}
                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={resetPersonal}>Reset Section</Button>
                      <Button type="submit">Next</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Employment Details Submission Tab */}
            <TabsContent value="employment">
              <Card>
                <CardContent className="space-y-4 py-6">
                  <h2 className="text-xl font-semibold mb-4 text-center">Employment Details</h2>
                  <form onSubmit={handleSubmit}>
                    {/* Employed Yes/No Question */}
                    <label className="block mb-1">Are you currently employed?
                      <div className="flex space-x-4 mb-2">
                        <label>
                          <input type="radio" name="is_emplyed" checked={is_employed === true} onChange={() => setIsEmployed(true)} /> Yes
                          <input type="radio" name="is_employed" checked={is_employed === false} onChange={() => setIsEmployed(false)} /> No
                        </label>
                      </div>
                    </label>
                    {/* Employer Name Question */}
                    <label className="block mb-1">What is your employer's name?</label>
                    <Input type="text" placeholder="Employer Name" value={employer_name} onChange={e => setEmployerName(e.target.value)} className="mb-2" />
                    {/* Employer Offers Insurance Yes/No Question */}
                    <label className="block mb-1">Does your employer offer insurance?
                      <div className="flex space-x-4 mb-2">
                        <label>
                          <input type="radio" name="is_employeroffers" checked={is_employeroffers === true} onChange={() => setIsEmployerOffers(true)} /> Yes
                          <input type="radio" name="is_employeroffers" checked={is_employeroffers === false} onChange={() => setIsEmployerOffers(false)} /> No
                        </label>
                      </div>
                    </label>
                    {/* Annual Income and Household Size Questions */}
                    <label className="block mb-1">What is your annual income?</label>
                    <Input type="number" placeholder="Annual Income" value={annual_income} onChange={e => setAnnualIncome(e.target.value)} className="mb-2" />
                    <label className="block mb-1">What is your household size?</label>
                    <Input type="number" placeholder="Household Size" value={household_size} onChange={e => setHouseholdSize(e.target.value)} className="mb-2" />
                    {/* Navigation Buttons */}
                    {/* Navigation, Submit, and Reset Buttons */}
                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setActiveTab('personal')}>Back</Button>
                      <Button type="button" variant="outline" onClick={resetEmployment}>Reset Section</Button>
                      <Button type="submit" onClick={submitClick}>Submit Information</Button>
                      <Button type="button" variant="outline" onClick={handleReset}>Reset All</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}


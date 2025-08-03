/*
 * File: UserProfile.jsx
 * Author: Name & James Zheng
 * Date: 2025-07-29
 * Description: This is the user profile component for the PolicyAthena frontend. It includes a sidebar for navigation and a main content area for user profile details.
 * This file defines the User Profile page layout and navigation.
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

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
    const navigate = useNavigate();

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
        };

        // Convert JSOn string for download or debugging
        const jsonString = JSON.stringify(data, null, 2);
    
        // Send to Backend
        const response = await fetch('http://localhost:8000/userInput/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        });

        // Handle the response
        const result = await response.json();
        if (result.error) {
            alert("Submission failed: " + result.error);
            // Optionally, highlight the fields or scroll to the first error
        } else {
            alert('Data submitted successfully!');
            // Optionally, redirect or clear the form
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
  return (
    <main className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar to Navigate Between Pages */}
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
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">User Input</h1>
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
                  {/* Address, Location, Zipcode, and SSN Questions */}
                  <label className="block mb-1">What is your address?</label>
                  <Input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is your location (City, State)?</label>
                  <Input type="text" placeholder="Location (City, State)" value={location} onChange={e => setLocation(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is your zipcode?</label>
                  <Input type="text" placeholder="Zipcode" value={zipcode} onChange={e => setZipcode(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is your Social Security Number?</label>
                  <Input type="text" placeholder="Social Security Number" value={ssn} onChange={e => setSocialSecurity(e.target.value)} className="mb-2" />
                  {/* Navigation Buttons */}
                  <div className="flex justify-end">
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
                    <Button type="submit">Submit Information</Button>
                    <Button type="button" variant="outline" onClick={handleReset}>Reset</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </main>
  );
}


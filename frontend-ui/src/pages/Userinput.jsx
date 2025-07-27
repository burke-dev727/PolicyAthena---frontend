/*
* File: UserInput.jsx
* Author: James Zheng
* Date: 2025-07-15
* Description: This component allows users to input their personal information, current insurance details, employment details, coverage needs, eligibility details, and documentation for insurance matching.
* It includes forms for each section and handles the submission of user data.
* Plans: Make sure that once this page loads, it loads properly with the sidebar and main content area.
*/

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from "react-router-dom";

export default function UserInput() {
  
  // State variables for user input
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [ssn, setSocialSecurity] = useState('');

  // State variables for current insurance
  const [have_insurance, setHaveInsurance] = useState(false);
  const [insurance_provider, setProviderInsurance] = useState('');
  const [policy_number, setPolicyNumber] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [source, setSource] = useState('');

  // State variables for employment details
  const [is_employed, setIsEmployed] = useState(false);
  const [employer_name, setEmployerName] = useState('');
  const [is_employeroffers, setIsEmployerOffers] = useState(false);
  const [annual_income, setAnnualIncome] = useState('');
  const [household_size, setHouseholdSize] = useState('');

  // State variables for coverage needs
  const [coverage_type, setCoverageType] = useState('');
  const [providers, setProviders] = useState('');
  const [current_conditions, setCurrentConditions] = useState('');
  const [current_perscriptions, setCurrentPrescriptions] = useState('');
  const [coverage_level, setCoverageLevel] = useState('');
  const [monthly_budget, setMonthlyBudget] = useState('');

  // State variables for Eligibility details
  const [is_US_Citizen, setIsUSCitizen] = useState(false);
  const [is_Mediaid, setIsMedicaid] = useState(false);
  const [is_Medicare, setIsMedicare] = useState(false);
  const [recent_events, setRecentEvents] = useState(''); // write out multiple events
  const [is_Veteran, setIsVeteran] = useState(false);
  const [is_StudentEligible, setIsStudentEligible] = useState(false);

  // State variables for documentation
  const [user_insurance_docs, setUserInsuranceDocs] = useState('');
  const[proof_of_income_docs, setProofOfIncomeDocs] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the collected data here (e.g., send to backend)
    alert(`Name: ${name}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}}\nLocation: ${location}\nZipcode: ${zipcode}\nSSN: ${ssn}`);
    alert(`Have Insurance: ${have_insurance}\nInsurance Provider: ${insurance_provider}\nPolicy Number: ${policy_number}\nStart Date: ${start_date}\nEnd Date: ${end_date}\nSource: ${source}`);
    alert(`Employed: ${is_employed}\nEmployer Name: ${employer_name}\nEmployer Offers Insurance: ${is_employeroffers}\nAnnual Income: ${annual_income}\nHousehold Size: ${household_size}`);
    alert(`Coverage Type: ${coverage_type}\nProviders: ${providers}\nCurrent Conditions: ${current_conditions}\nCurrent Prescriptions: ${current_perscriptions}\nCoverage Level: ${coverage_level}\nMonthly Budget: ${monthly_budget}`);
    alert(`US Citizen: ${is_US_Citizen}\nMedicaid: ${is_Mediaid}\nMedicare: ${is_Medicare}\nRecent Events: ${recent_events}\nVeteran: ${is_Veteran}\nStudent Eligible: ${is_StudentEligible}`);
    alert(`Insurance Docs: ${user_insurance_docs}\nProof of Income Docs: ${proof_of_income_docs}`);
    
  };

  return (
    <main className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 border-r border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-8">PolicyAthena</h2>
        <nav className="flex flex-col space-y-3">
          <Navbar/>  
          <Button variant="ghost" className="justify-start text-left hover:bg-gray-100">User Profile</Button>
          {/*Use User Input to direct into the Userinput.jsx page for user to input their data*/}
          <Button variant="ghost" className="justify-start text-left hover:bg-gray-100">User Input</Button>
          <Button variant="ghost" className="justify-start text-left hover:bg-gray-100">Matched Plan</Button>
          <Button variant="ghost" className="justify-start text-left hover:bg-gray-100">Compare Plans</Button>
          <Button variant="ghost" className="justify-start text-left hover:bg-gray-100">History</Button>
        </nav>
      </aside>

      {/* Main Content : User Input Submission */}
      <h1 className="text-3xl font-bold mb-6 text-center">User Input</h1>
      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Phone"
          value={email}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Address (Street, Number)"
          value={email}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Location (City, State)"
          value={email}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
            type="text"
            placeholder="Zipcode"
            value={email}
            onChange={(e) => setZipcode(e.target.value)}
        />
        <Input 
            type="text"
            placeholder="Social Security Number"
            value={ssn}
            onChange={(e) => setSocialSecurity(e.target.value)}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>

      {/* Main Content : Current Insurance Submission*/}
      <h1 className="text-3xl font-bold mb-6 text-center">Current Insurance</h1>
      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <Input
          type="checkbox"
          placeholder="Do you have insurance?"
          value={email}
          onChange={(e) => setHaveInsurance(e.target.checked)} 
        />
        <Input
          type="text"
          placeholder="Insurance Provider"
          value={email}
          onChange={(e) => setProviderInsurance(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Policy Number"
          value={email}
          onChange={(e) => setPolicyNumber(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Start Date"
          value={email}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Input
          type="date"
          placeholder="End Date"
          value={email}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Source"
          value={email}
          onChange={(e) => setSource(e.target.value)}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
      
      {/* Main Content : Employment Details Submission*/}
      <h1 className="text-3xl font-bold mb-6 text-center">Employment Details</h1>
      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <Input
          type="checkbox"
          placeholder="Are you Employed?"
          value={email}
          onChange={(e) => setIsEmployed(e.target.checked)}
        />
        <Input
          type="text"
          placeholder="Employer Name"
          value={email}
          onChange={(e) => setEmployerName(e.target.value)}
        />
        <Input
          type="checkbox"
          placeholder="Does your employer offer insurance?"
          value={email}
          onChange={(e) => setIsEmployerOffers(e.target.checked)}
        />
        <Input
          type="number"
          placeholder="Annual Income"
          value={email}
          onChange={(e) => setAnnualIncome(e.target.value)}
        />
        <Input 
          type="number"
          placeholder="Household Size"
          value={email}
          onChange={(e) => setHouseholdSize(e.target.value)}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form> 

      {/* Main Content : Coverage Needs Submission*/}
      <h1 className="text-3xl font-bold mb-6 text-center">Coverage Needs</h1>
      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Coverage Type"
          value={email}
          onChange={(e) => setCoverageType(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Providers"
          value={email}
          onChange={(e) => setProviders(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Current Conditions"
          value={email}
          onChange={(e) => setCurrentConditions(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Current Prescriptions"
          value={email}
          onChange={(e) => setCurrentPrescriptions(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Coverage Level"
          value={email}
          onChange={(e) => setCoverageLevel(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Monthly Budget"
          value={email}
          onChange={(e) => setMonthlyBudget(e.target.value)}
        />
        <Button type="submit" className="w-full">Submit</Button> 
      </form>

      {/* Main Content : Eligibility Details Submission*/}
      <h1 className="text-3xl font-bold mb-6 text-center">Eligibility Details</h1>
      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <Input
          type="checkbox"
          placeholder="Are you a US Citizen?"
          value={email}
          onChange={(e) => setIsUSCitizen(e.target.checked)}
        />
        <Input
          type="checkbox"
          placeholder="Are you eligible for Medicaid?"
          value={email}
          onChange={(e) => setIsMedicaid(e.target.checked)}
        />
        <Input  
          type="checkbox"
          placeholder="Are you eligible for Medicare?"
          value={email}
          onChange={(e) => setIsMedicare(e.target.checked)}
        />
        <Input
          type="text"
          placeholder="Recent Events"
          value={email}
          onChange={(e) => setRecentEvents(e.target.value)}
        />
        <Input
          type="checkbox"
          placeholder="Are you a Veteran?"
          value={email}
          onChange={(e) => setIsVeteran(e.target.checked)}
        />
        <Input
          type="checkbox"
          placeholder="Are you a Student Eligible for Insurance?"
          value={email}
          onChange={(e) => setIsStudentEligible(e.target.checked)}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>

      {/* Main Content : Documentation Submission*/}
      <h1 className="text-3xl font-bold mb-6 text-center">Documentation</h1>
      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Insurance Documents"
          value={user_insurance_docs}
          onChange={(e) => setUserInsuranceDocs(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Proof of Income Documents"
          value={proof_of_income_docs}
          onChange={(e) => setProofOfIncomeDocs(e.target.value)}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>

      {/* End of Main Content */}
    </main>
  );
}

/*
* File: UserInput.jsx
* Author: James Zheng
* Date: 2025-07-15
* Updated: 2025-07-29
* Description: This component allows users to input their personal information, current insurance details, employment details, coverage needs, eligibility details, and documentation for insurance matching.
* It includes forms for each section and handles the submission of user data.
* Notes: Potentially edit the input data or add more fields in the future.
*/

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

  const navigate = useNavigate();
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name, age, email, phone, address, location, zipcode, ssn,
      have_insurance, insurance_provider, policy_number, start_date, end_date, source,
      is_employed, employer_name, is_employeroffers, annual_income, household_size,
      coverage_type, providers, current_conditions, current_perscriptions, coverage_level, monthly_budget,
      is_US_Citizen, is_Mediaid, is_Medicare, recent_events, is_Veteran, is_StudentEligible,
    };

    const response = await fetch('http://localhost:8000/userInput/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
      if (result.error) {
        alert("Submission failed: " + result.error);
        // Optionally, highlight the fields or scroll to the first error
      } else {
        alert('Data submitted successfully!');
      // Optionally, redirect or clear the form
      }
};

  return (
  <main className="flex min-h-screen bg-gray-50 text-gray-800">
    {/* Sidebar */}
    <aside className="w-64 bg-white p-6 border-r border-gray-200 shadow-md">
      <h2 className="text-2xl font-bold mb-8">PolicyAthena</h2>
      <nav className="flex flex-col space-y-3">
        {/* Add Additional pages and naviagtion for the buttons below. Also copy these buttons to every other page */}
        <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/Userprofile')}>User Profile</Button>
        <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/Userinput')}>User Input</Button>
        <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/Matchedplan')}>Matched Plan</Button>
        <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/Compareplans')}>Compare Plans</Button>
        <Button variant="ghost" className="justify-start text-left hover:bg-gray-100" onClick={() => navigate('/History')}>History</Button>
      </nav>
    </aside>

    {/* Main Content */}
    <div className="flex-1 p-8 overflow-y-auto space-y-12">
      {/* User Input Submission */}
      <section>
        <h1 className="text-3xl font-bold mb-6 text-center">User Input</h1>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <Input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
          <Input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
          <Input type="text" placeholder="Address (Street name, House number)" value={address} onChange={e => setAddress(e.target.value)} />
          <Input type="text" placeholder="Location (City, State)" value={location} onChange={e => setLocation(e.target.value)} />
          <Input type="text" placeholder="Zipcode" value={zipcode} onChange={e => setZipcode(e.target.value)} />
          <Input type="text" placeholder="Social Security Number" value={ssn} onChange={e => setSocialSecurity(e.target.value)} />
        </form>
      </section>

      {/* Current Insurance Submission */}
      <section>
        <h1 className="text-3xl font-bold mb-6 text-center">Current Insurance</h1>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2">
          <input type="checkbox" checked={have_insurance} onChange={e => setHaveInsurance(e.target.checked)} />
          <label>Do you have insurance?</label>
        </div>
          <Input type="text" placeholder="Insurance Provider" value={insurance_provider} onChange={e => setProviderInsurance(e.target.value)} />
          <Input type="text" placeholder="Policy Number" value={policy_number} onChange={e => setPolicyNumber(e.target.value)} />
          <div>
            <label className="block mb-1">Start Date of Coverage:</label>
            <Input type="date" value={start_date} onChange={e => setStartDate(e.target.value)} />
            {start_date && (
            <div className="text-sm text-gray-600 mt-1">Coverage starts on: <span className="font-semibold">{start_date}</span></div>)}
          </div>
          <div>
            <label className="block mb-1">End Date of Coverage:</label>
            <Input type="date" value={end_date} onChange={e => setEndDate(e.target.value)} />
            {end_date && (
            <div className="text-sm text-gray-600 mt-1">Coverage ends on: <span className="font-semibold">{end_date}</span></div>)}
          </div>
          <Input type="text" placeholder="Source" value={source} onChange={e => setSource(e.target.value)} />
        </form>
      </section>

      {/* Employment Details Submission */}
      <section>
        <h1 className="text-3xl font-bold mb-6 text-center">Employment Details</h1>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center space-x-2">
            <input type="checkbox" checked={is_employed} onChange={e => setIsEmployed(e.target.checked)} />
            <label>Are you Employed?</label>
          </div>
          <Input type="text" placeholder="Employer Name" value={employer_name} onChange={e => setEmployerName(e.target.value)} />
          <div className="flex items-center space-x-2">
            <input type="checkbox" checked={is_employeroffers} onChange={e => setIsEmployerOffers(e.target.checked)} />
            <label>Does your employer offer insurance?</label>
          </div>
          <Input type="number" placeholder="Annual Income" value={annual_income} onChange={e => setAnnualIncome(e.target.value)} />
          <Input type="number" placeholder="Household Size" value={household_size} onChange={e => setHouseholdSize(e.target.value)} />
        </form>
      </section>

      {/* Coverage Needs Submission */}
      <section>
        <h1 className="text-3xl font-bold mb-6 text-center">Coverage Needs</h1>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <Input type="text" placeholder="Coverage Type" value={coverage_type} onChange={e => setCoverageType(e.target.value)} />
          <Input type="text" placeholder="Providers" value={providers} onChange={e => setProviders(e.target.value)} />
          <Input type="text" placeholder="Current Conditions" value={current_conditions} onChange={e => setCurrentConditions(e.target.value)} />
          <Input type="text" placeholder="Current Prescriptions" value={current_perscriptions} onChange={e => setCurrentPrescriptions(e.target.value)} />
          <Input type="text" placeholder="Coverage Level" value={coverage_level} onChange={e => setCoverageLevel(e.target.value)} />
          <Input type="number" placeholder="Monthly Budget" value={monthly_budget} onChange={e => setMonthlyBudget(e.target.value)} />
        </form>
      </section>

      {/* Eligibility Details Submission */}
      <section>
        <h1 className="text-3xl font-bold mb-6 text-center">Eligibility Details</h1>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center space-x-2">
            <input type="checkbox" checked={is_US_Citizen} onChange={e => setIsUSCitizen(e.target.checked)} />
            <label>Are you a US Citizen?</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" checked={is_Mediaid} onChange={e => setIsMedicaid(e.target.checked)} />
            <label>Are you eligible for Medicaid?</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" checked={is_Medicare} onChange={e => setIsMedicare(e.target.checked)} />
            <label>Are you eligible for Medicare?</label>
          </div>
          <Input type="text" placeholder="Recent Events" value={recent_events} onChange={e => setRecentEvents(e.target.value)} />
          <div className="flex items-center space-x-2">
            <input type="checkbox" checked={is_Veteran} onChange={e => setIsVeteran(e.target.checked)} />
            <label>Are you a Veteran?</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" checked={is_StudentEligible} onChange={e => setIsStudentEligible(e.target.checked)} />
            <label>Are you a Student Eligible for Insurance?</label>
          </div>
        </form>
      </section>

      {/* Documentation Submission */}
      <section>
        <h1 className="text-3xl font-bold mb-6 text-center">Documentation</h1>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <Input type="text" placeholder="Insurance Documents" value={user_insurance_docs} onChange={e => setUserInsuranceDocs(e.target.value)} />
          <Input type="text" placeholder="Proof of Income Documents" value={proof_of_income_docs} onChange={e => setProofOfIncomeDocs(e.target.value)} />
        </form>
      </section>
      
      {/* Submit Button */}
      <section>
        <div className="flex justify-center mt-8">
          <Button onClick={handleSubmit} className="w-full max-w-md">Submit Information</Button>
        </div>
      </section>
    </div>
  </main>
);

}

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
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

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
  const [activeTab, setActiveTab] = useState('personal');
  
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
    setHaveInsurance(false);
    setProviderInsurance('');
    setPolicyNumber('');
    setStartDate('');
    setEndDate('');
    setSource('');
    setIsEmployed(false);
    setEmployerName('');
    setIsEmployerOffers(false);
    setAnnualIncome('');
    setHouseholdSize('');
    setCoverageType('');
    setProviders('');
    setCurrentConditions('');
    setCurrentPrescriptions('');
    setCoverageLevel('');
    setMonthlyBudget('');
    setIsUSCitizen(false);
    setIsMedicaid(false);
    setIsMedicare(false);
    setRecentEvents('');
    setIsVeteran(false);
    setIsStudentEligible(false);
    setUserInsuranceDocs('');
    setProofOfIncomeDocs('');
  };

  // Adjust the questions and in Coverage need to give the user a set of choices to select from
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
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">User Input</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-2xl mx-auto">
          <TabsList className="grid grid-cols-6 mb-6">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
            <TabsTrigger value="employment">Employment</TabsTrigger>
            <TabsTrigger value="coverage">Coverage</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="docs">Documents</TabsTrigger>
          </TabsList>

          {/* Personal Information Submission Tab */}
          <TabsContent value="personal">
            <Card>
              <CardContent className="space-y-4 py-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Personal Information</h2>
                <form onSubmit={e => { e.preventDefault(); setActiveTab('insurance'); }}>
                  <label className="block mb-1">What is your full name?</label>
                  <Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is your age?</label>
                  <Input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is your email address?</label>
                  <Input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is your phone number?</label>
                  <Input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is your address?</label>
                  <Input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is your location (City, State)?</label>
                  <Input type="text" placeholder="Location (City, State)" value={location} onChange={e => setLocation(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is your zipcode?</label>
                  <Input type="text" placeholder="Zipcode" value={zipcode} onChange={e => setZipcode(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is your Social Security Number?</label>
                  <Input type="text" placeholder="Social Security Number" value={ssn} onChange={e => setSocialSecurity(e.target.value)} className="mb-2" />
                  <div className="flex justify-end">
                    <Button type="submit">Next</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Current Insurance Submission Tab*/}
          <TabsContent value="insurance">
            <Card>
              <CardContent className="space-y-4 py-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Current Insurance</h2>
                <form onSubmit={e => { e.preventDefault(); setActiveTab('employment'); }}>
                  <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" checked={have_insurance} onChange={e => setHaveInsurance(e.target.checked)} />
                    <label>Do you have insurance?</label>
                  </div>
                  <label className="block mb-1">Who is your insurance provider?</label>
                  <Input type="text" placeholder="Insurance Provider" value={insurance_provider} onChange={e => setProviderInsurance(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is your policy number?</label>
                  <Input type="text" placeholder="Policy Number" value={policy_number} onChange={e => setPolicyNumber(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is the start date of your coverage?</label>
                  <Input type="date" placeholder="Start Date" value={start_date} onChange={e => setStartDate(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is the end date of your coverage?</label>
                  <Input type="date" placeholder="End Date" value={end_date} onChange={e => setEndDate(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is the source of your insurance?</label>
                  <Input type="text" placeholder="Source" value={source} onChange={e => setSource(e.target.value)} className="mb-2" />
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('personal')}>Back</Button>
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
                <form onSubmit={e => { e.preventDefault(); setActiveTab('coverage'); }}>
                  <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" checked={is_employed} onChange={e => setIsEmployed(e.target.checked)} />
                    <label>Are you employed?</label>
                  </div>
                  <label className="block mb-1">What is your employer's name?</label>
                  <Input type="text" placeholder="Employer Name" value={employer_name} onChange={e => setEmployerName(e.target.value)} className="mb-2" />
                  <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" checked={is_employeroffers} onChange={e => setIsEmployerOffers(e.target.checked)} />
                    <label>Does your employer offer insurance?</label>
                  </div>
                  <label className="block mb-1">What is your annual income?</label>
                  <Input type="number" placeholder="Annual Income" value={annual_income} onChange={e => setAnnualIncome(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is your household size?</label>
                  <Input type="number" placeholder="Household Size" value={household_size} onChange={e => setHouseholdSize(e.target.value)} className="mb-2" />
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('insurance')}>Back</Button>
                    <Button type="submit">Next</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Coverage Needs Submission Tab */}
          <TabsContent value="coverage">
            <Card>
              <CardContent className="space-y-4 py-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Coverage Needs</h2>
                <form onSubmit={e => { e.preventDefault(); setActiveTab('eligibility'); }}>
                  {/* Adjust the questions and in Coverage need to give the user a set of choices to select from */}
                  <label className="block mb-1">What type of coverage do you have?</label>
                  <Input type="text" placeholder="Coverage Type" value={coverage_type} onChange={e => setCoverageType(e.target.value)} className="mb-2" />
                  <label className="block mb-1">Preferred providers?</label>
                  <Input type="text" placeholder="Providers" value={providers} onChange={e => setProviders(e.target.value)} className="mb-2" />
                  <label className="block mb-1">Current medical conditions?</label> 
                  <Input type="text" placeholder="Current Conditions" value={current_conditions} onChange={e => setCurrentConditions(e.target.value)} className="mb-2" />
                  <label className="block mb-1">Current prescriptions?</label>
                  <Input type="text" placeholder="Current Prescriptions" value={current_perscriptions} onChange={e => setCurrentPrescriptions(e.target.value)} className="mb-2" />
                  <label className="block mb-1">Desired coverage level?</label>
                  <Input type="text" placeholder="Coverage Level" value={coverage_level} onChange={e => setCoverageLevel(e.target.value)} className="mb-2" />
                  <label className="block mb-1">Monthly budget?</label>
                  <Input type="number" placeholder="Monthly Budget" value={monthly_budget} onChange={e => setMonthlyBudget(e.target.value)} className="mb-2" />
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('employment')}>Back</Button>
                    <Button type="submit">Next</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Eligibility Details Submission Tab **DO A YES OR NO AFTER EACH QUESTION** */}
          <TabsContent value="eligibility">
            <Card>
              <CardContent className="space-y-4 py-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Eligibility Details</h2>
                <form onSubmit={e => { e.preventDefault(); setActiveTab('docs'); }}>
                  <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" checked={is_US_Citizen} onChange={e => setIsUSCitizen(e.target.checked)} />
                    <label>Are you a US Citizen?</label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" checked={is_Mediaid} onChange={e => setIsMedicaid(e.target.checked)} />
                    <label>Are you eligible for Medicaid?</label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" checked={is_Medicare} onChange={e => setIsMedicare(e.target.checked)} />
                    <label>Are you eligible for Medicare?</label>
                  </div>
                  <label className="block mb-1">List any recent events (e.g. lost job, moved, etc):</label>
                  <Input type="text" placeholder="Recent Events" value={recent_events} onChange={e => setRecentEvents(e.target.value)} className="mb-2" />
                  <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" checked={is_Veteran} onChange={e => setIsVeteran(e.target.checked)} />
                    <label>Are you a Veteran?</label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" checked={is_StudentEligible} onChange={e => setIsStudentEligible(e.target.checked)} />
                    <label>Are you a Student Eligible for Insurance?</label>
                  </div>
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('coverage')}>Back</Button>
                    <Button type="submit">Next</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Submission Tab */}
          <TabsContent value="docs">
            <Card>
              <CardContent className="space-y-4 py-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Documents</h2>
                <form onSubmit={handleSubmit}>
                  <label className="block mb-1">Upload insurance documents:</label>
                  <Input type="text" placeholder="Insurance Documents" value={user_insurance_docs} onChange={e => setUserInsuranceDocs(e.target.value)} className="mb-2" />
                  <label className="block mb-1">Upload proof of income documents:</label>
                  <Input type="text" placeholder="Proof of Income Documents" value={proof_of_income_docs} onChange={e => setProofOfIncomeDocs(e.target.value)} className="mb-2" />
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('eligibility')}>Back</Button>
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
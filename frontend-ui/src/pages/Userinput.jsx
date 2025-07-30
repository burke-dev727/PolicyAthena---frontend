/*
* File: UserInput.jsx
* Author: James Zheng
* Date: 2025-07-15
* Description: This component allows users to input their personal information, current insurance details, employment details, coverage needs, eligibility details, and documentation for insurance matching.
* It includes forms for each section and handles the submission of user data.
* Plans: Make sure that once this page loads, it loads properly with the sidebar and main content area.
*
* MODIFICATIONS:
* Modified by: Xinrui Hou
* Date: 7-27-25
* Reason: Enhanced data storage and viewing functionality
* Changes made:
* - Added localStorage functionality to persist form data across browser sessions
* - Implemented data viewing interface with "View Submitted Data" button
* - Added data clearing functionality with "Clear Data" button
* - Created organized display of submitted information in card layout
* - Added timestamp tracking for submissions
* - Improved user experience with immediate feedback and data persistence
* - Prepared structure for future backend API integration
*/

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

  // State for viewing submitted data
  const [showResults, setShowResults] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  
  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('userInputData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setSubmittedData(parsedData);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      id: Date.now(), // Unique ID for this submission
      timestamp: new Date().toISOString(),
      name, age, email, phone, address, location, zipcode, ssn,
      have_insurance, insurance_provider, policy_number, start_date, end_date, source,
      is_employed, employer_name, is_employeroffers, annual_income, household_size,
      coverage_type, providers, current_conditions, current_perscriptions, coverage_level, monthly_budget,
      is_US_Citizen, is_Mediaid, is_Medicare, recent_events, is_Veteran, is_StudentEligible,
      user_insurance_docs, proof_of_income_docs
    };

    // Save to localStorage
    localStorage.setItem('userInputData', JSON.stringify(formData));
    
    // Update state to show the submitted data
    setSubmittedData(formData);
    setShowResults(true);
    
    console.log('Form submitted with data:', formData);
    alert('Form submitted successfully! Data saved to local storage.');
  };

  const clearData = () => {
    localStorage.removeItem('userInputData');
    setSubmittedData(null);
    setShowResults(false);
    alert('Data cleared from local storage.');
  };

  return (
    <main className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 border-r border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-8">PolicyAthena</h2>
        <nav className="flex flex-col space-y-3">
          <Button variant="ghost" className="justify-start text-left hover:bg-gray-100">User Profile</Button>
          <Button variant="ghost" className="justify-start text-left hover:bg-gray-100 bg-blue-100">User Input</Button>
          <Button variant="ghost" className="justify-start text-left hover:bg-gray-100">Matched Plan</Button>
          <Button variant="ghost" className="justify-start text-left hover:bg-gray-100">Compare Plans</Button>
          <Button variant="ghost" className="justify-start text-left hover:bg-gray-100">History</Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">User Input Form</h1>
          <div className="space-x-2">
            {submittedData && (
              <Button 
                variant="outline" 
                onClick={() => setShowResults(!showResults)}
              >
                {showResults ? 'Hide Results' : 'View Submitted Data'}
              </Button>
            )}
            {submittedData && (
              <Button 
                variant="destructive" 
                onClick={clearData}
              >
                Clear Data
              </Button>
            )}
          </div>
        </div>

        {/* Show submitted data if available */}
        {showResults && submittedData && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Submitted Data</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p><strong>Name:</strong> {submittedData.name}</p>
                  <p><strong>Age:</strong> {submittedData.age}</p>
                  <p><strong>Email:</strong> {submittedData.email}</p>
                  <p><strong>Phone:</strong> {submittedData.phone}</p>
                  <p><strong>Address:</strong> {submittedData.address}</p>
                  <p><strong>Location:</strong> {submittedData.location}</p>
                  <p><strong>Zipcode:</strong> {submittedData.zipcode}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Insurance & Employment</h3>
                  <p><strong>Has Insurance:</strong> {submittedData.have_insurance ? 'Yes' : 'No'}</p>
                  <p><strong>Provider:</strong> {submittedData.insurance_provider}</p>
                  <p><strong>Employed:</strong> {submittedData.is_employed ? 'Yes' : 'No'}</p>
                  <p><strong>Employer:</strong> {submittedData.employer_name}</p>
                  <p><strong>Annual Income:</strong> ${submittedData.annual_income}</p>
                  <p><strong>Household Size:</strong> {submittedData.household_size}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Coverage Needs</h3>
                  <p><strong>Coverage Type:</strong> {submittedData.coverage_type}</p>
                  <p><strong>Providers:</strong> {submittedData.providers}</p>
                  <p><strong>Conditions:</strong> {submittedData.current_conditions}</p>
                  <p><strong>Prescriptions:</strong> {submittedData.current_perscriptions}</p>
                  <p><strong>Coverage Level:</strong> {submittedData.coverage_level}</p>
                  <p><strong>Monthly Budget:</strong> ${submittedData.monthly_budget}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Eligibility</h3>
                  <p><strong>US Citizen:</strong> {submittedData.is_US_Citizen ? 'Yes' : 'No'}</p>
                  <p><strong>Medicaid Eligible:</strong> {submittedData.is_Mediaid ? 'Yes' : 'No'}</p>
                  <p><strong>Medicare Eligible:</strong> {submittedData.is_Medicare ? 'Yes' : 'No'}</p>
                  <p><strong>Veteran:</strong> {submittedData.is_Veteran ? 'Yes' : 'No'}</p>
                  <p><strong>Student Eligible:</strong> {submittedData.is_StudentEligible ? 'Yes' : 'No'}</p>
                  <p><strong>Recent Events:</strong> {submittedData.recent_events}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Submitted on: {new Date(submittedData.timestamp).toLocaleString()}
              </p>
            </CardContent>
          </Card>
        )}
        
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
            <TabsTrigger value="employment">Employment</TabsTrigger>
            <TabsTrigger value="coverage">Coverage</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          {/* Personal Information Tab */}
          <TabsContent value="personal">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Full Name"
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
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Address (Street, Number)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Location (City, State)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Zipcode"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                  <Input 
                    type="text"
                    placeholder="Social Security Number"
                    value={ssn}
                    onChange={(e) => setSocialSecurity(e.target.value)}
                  />
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Current Insurance Tab */}
          <TabsContent value="insurance">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Current Insurance</h2>
                <form className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="have_insurance"
                      checked={have_insurance}
                      onChange={(e) => setHaveInsurance(e.target.checked)}
                    />
                    <label htmlFor="have_insurance">Do you have insurance?</label>
                  </div>
                  <Input
                    type="text"
                    placeholder="Insurance Provider"
                    value={insurance_provider}
                    onChange={(e) => setProviderInsurance(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Policy Number"
                    value={policy_number}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                  />
                  <Input
                    type="date"
                    placeholder="Start Date"
                    value={start_date}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <Input
                    type="date"
                    placeholder="End Date"
                    value={end_date}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                  />
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Employment Details Tab */}
          <TabsContent value="employment">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Employment Details</h2>
                <form className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_employed"
                      checked={is_employed}
                      onChange={(e) => setIsEmployed(e.target.checked)}
                    />
                    <label htmlFor="is_employed">Are you employed?</label>
                  </div>
                  <Input
                    type="text"
                    placeholder="Employer Name"
                    value={employer_name}
                    onChange={(e) => setEmployerName(e.target.value)}
                  />
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_employeroffers"
                      checked={is_employeroffers}
                      onChange={(e) => setIsEmployerOffers(e.target.checked)}
                    />
                    <label htmlFor="is_employeroffers">Does your employer offer insurance?</label>
                  </div>
                  <Input
                    type="number"
                    placeholder="Annual Income"
                    value={annual_income}
                    onChange={(e) => setAnnualIncome(e.target.value)}
                  />
                  <Input 
                    type="number"
                    placeholder="Household Size"
                    value={household_size}
                    onChange={(e) => setHouseholdSize(e.target.value)}
                  />
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Coverage Needs Tab */}
          <TabsContent value="coverage">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Coverage Needs</h2>
                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Coverage Type"
                    value={coverage_type}
                    onChange={(e) => setCoverageType(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Preferred Providers"
                    value={providers}
                    onChange={(e) => setProviders(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Current Medical Conditions"
                    value={current_conditions}
                    onChange={(e) => setCurrentConditions(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Current Prescriptions"
                    value={current_perscriptions}
                    onChange={(e) => setCurrentPrescriptions(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Desired Coverage Level"
                    value={coverage_level}
                    onChange={(e) => setCoverageLevel(e.target.value)}
                  />
                  <Input
                    type="number"
                    placeholder="Monthly Budget"
                    value={monthly_budget}
                    onChange={(e) => setMonthlyBudget(e.target.value)}
                  />
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Eligibility Details Tab */}
          <TabsContent value="eligibility">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Eligibility Details</h2>
                <form className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_US_Citizen"
                      checked={is_US_Citizen}
                      onChange={(e) => setIsUSCitizen(e.target.checked)}
                    />
                    <label htmlFor="is_US_Citizen">Are you a US Citizen?</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_Mediaid"
                      checked={is_Mediaid}
                      onChange={(e) => setIsMedicaid(e.target.checked)}
                    />
                    <label htmlFor="is_Mediaid">Are you eligible for Medicaid?</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_Medicare"
                      checked={is_Medicare}
                      onChange={(e) => setIsMedicare(e.target.checked)}
                    />
                    <label htmlFor="is_Medicare">Are you eligible for Medicare?</label>
                  </div>
                  <Input
                    type="text"
                    placeholder="Recent Life Events (marriage, job change, etc.)"
                    value={recent_events}
                    onChange={(e) => setRecentEvents(e.target.value)}
                  />
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_Veteran"
                      checked={is_Veteran}
                      onChange={(e) => setIsVeteran(e.target.checked)}
                    />
                    <label htmlFor="is_Veteran">Are you a Veteran?</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_StudentEligible"
                      checked={is_StudentEligible}
                      onChange={(e) => setIsStudentEligible(e.target.checked)}
                    />
                    <label htmlFor="is_StudentEligible">Are you a Student Eligible for Insurance?</label>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documentation Tab */}
          <TabsContent value="documents">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Documentation</h2>
                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Insurance Documents (upload path or description)"
                    value={user_insurance_docs}
                    onChange={(e) => setUserInsuranceDocs(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Proof of Income Documents (upload path or description)"
                    value={proof_of_income_docs}
                    onChange={(e) => setProofOfIncomeDocs(e.target.value)}
                  />
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Submit Button */}
        <div className="mt-6">
          <Button onClick={handleSubmit} className="w-full max-w-md">
            Submit All Information
          </Button>
        </div>
      </div>
    </main>
  );
}
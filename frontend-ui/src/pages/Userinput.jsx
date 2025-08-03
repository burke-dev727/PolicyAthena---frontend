/*
* File: UserInput.jsx
* Author: James Zheng
* Date: 2025-07-15
* Updated: 2025-08-01
* Description: This component allows users to input their personal information, current insurance details, employment details, coverage needs, eligibility details, and documentation for insurance matching.
* It includes forms for each section and handles the submission of user data.
* Notes: Potentially edit the input data or add more fields in the future. ADD more questions on Saturday
*/

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function UserInput() {
  // State variables for current insurance
  const [have_insurance, setHaveInsurance] = useState(false);
  const [insurance_provider, setProviderInsurance] = useState('');
  const [policy_number, setPolicyNumber] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [source, setSource] = useState('');

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

  // State variables for User Preferences
  const [user_insurance_docs, setUserInsuranceDocs] = useState('');
  const[proof_of_income_docs, setProofOfIncomeDocs] = useState('');

  // Navigation hook
  const navigate = useNavigate();
  // State variable for active tab
  const [activeTab, setActiveTab] = useState('insurance');
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const data = {
      have_insurance, insurance_provider, policy_number, start_date, end_date, source,
      coverage_type, providers, current_conditions, current_perscriptions, coverage_level, monthly_budget,
      is_US_Citizen, is_Mediaid, is_Medicare, recent_events, is_Veteran, is_StudentEligible,
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
    setHaveInsurance(false);
    setProviderInsurance('');
    setPolicyNumber('');
    setStartDate('');
    setEndDate('');
    setSource('');
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
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
            <TabsTrigger value="coverage">Coverage</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Current Insurance Submission Tab*/}
          <TabsContent value="insurance">
            <Card>
              <CardContent className="space-y-4 py-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Current Insurance</h2>
                <form onSubmit={e => { e.preventDefault(); setActiveTab('coverage'); }}>
                  {/* Have Insurance Yes/No Question */}
                  <label className="block mb-1">Do you currently have insurance?
                    <div className="flex space-x-4 mb-2">
                      <label>
                        <input type="radio" name="have_insurance" checked={have_insurance === true} onChange={() => setHaveInsurance(true)} /> Yes
                        <input type="radio" name="have_insurance" checked={have_insurance === false} onChange={() => setHaveInsurance(false)} /> No
                      </label>
                    </div>
                  </label>
                  {/* Insurance Provider Questions */}
                  <label className="block mb-1">Who is your insurance provider?</label>
                  <Input type="text" placeholder="Insurance Provider" value={insurance_provider} onChange={e => setProviderInsurance(e.target.value)} className="mb-2" />
                  {/* Policy Number Question */}
                  <label className="block mb-1">What is your policy number?</label>
                  <Input type="text" placeholder="Policy Number" value={policy_number} onChange={e => setPolicyNumber(e.target.value)} className="mb-2" />
                  {/* Start Date and End Date Questions */}
                  <label className="block mb-1">What is the start date of your coverage?</label>
                  <Input type="date" placeholder="Start Date" value={start_date} onChange={e => setStartDate(e.target.value)} className="mb-2" />
                  <label className="block mb-1">What is the end date of your coverage?</label>
                  <Input type="date" placeholder="End Date" value={end_date} onChange={e => setEndDate(e.target.value)} className="mb-2" />
                  {/* Source of Insurance Question */}
                  <label className="block mb-1">What is the source of your insurance?</label>
                  <Input type="text" placeholder="Source" value={source} onChange={e => setSource(e.target.value)} className="mb-2" />
                  {/* Navigation Buttons */}
                  <div className="flex justify-end">
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
                  {/* Coverage Type: Textbox with only two valid answers */}
                  <label className="block mb-1"> What type of coverage do you have? <span className="text-gray-500 text-sm">(Enter "individual" or "family")</span></label>
                  <Input type="text" placeholder="individual or family" value={coverage_type} onChange={e => setCoverageType(e.target.value)} list="coverage-type-options" className="mb-2"/>
                  <datalist id="coverage-type-options"> 
                    <option value="individual" /> <option value="family" /> 
                  </datalist>
                  {/* Preferred providers: Textbox with multiple options **MAY NEED TO ADD MORE PROVIDERS AND PUT THOSE IN A SEPERATE FILE** */}
                  <label className="block mb-1">Preferred providers? <span className="text-gray-500 text-sm">(Enter Doctor, Hospital, or Clinic)</span></label>
                  <Input type="text" placeholder="e.g. Aetna, Cigna" value={providers} onChange={e => setProviders(e.target.value)} list="provider-options" className="mb-2"/>
                  <datalist id="provider-options">
                    <option value="Aetna">Aetna</option>
                    <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
                    <option value="Cigna">Cigna</option>
                    <option value="Humana">Humana</option>
                    <option value="Kaiser Permanente">Kaiser Permanente</option>
                    <option value="UnitedHealthcare">UnitedHealthcare</option>
                  </datalist>
                  {/* Current conditions: Textbox with multiple options **ADD MORE CONDITIONS IN SEPERATE FILE** */}
                  <label className="block mb-1">Current medical conditions? <span className="text-gray-500 text-sm">(Enter multiple conditions if needed, separated by commas (e.g. Diabetes, Asthma).)</span></label>
                  <Input type="text" placeholder="e.g. Diabetes, Asthma" value={current_conditions} onChange={e => setCurrentConditions(e.target.value)} list="condition-options" className="mb-2"/>
                  <datalist id="condition-options">
                    <option value="Diabetes" />
                    <option value="Asthma" />
                    <option value="Hypertension" />
                    <option value="Heart Disease" />
                    <option value="Cancer" />
                    <option value="Allergies" />
                  </datalist>
                  {/* Current perscriptions: Textbox with multiple options **ADD MORE PERSCRIPTIONS IN SEPERATE FILE** */}
                  <label className="block mb-1">Current prescriptions? <span className="text-gray-500 text-sm">(Enter multiple perscriptions if needed, separated by commas (e.g. Metformin, Albuterol))</span></label>
                  <Input type="text" placeholder="e.g. Metformin, Lisinopril" value={current_perscriptions} onChange={e => setCurrentPrescriptions(e.target.value)} list="prescription-options" className="mb-2"/>
                  <datalist id="prescription-options">
                    <option value="Metformin" />
                    <option value="Lisinopril" />
                    <option value="Atorvastatin" />
                    <option value="Albuterol" />
                    <option value="Levothyroxine" />
                    <option value="Omeprazole" />
                  </datalist>
                  {/* Coverage Level: Textbox with four options */}
                  <label className="block mb-1">Desired coverage level? <span className="text-gray-500 text-sm">(Enter bronze, silver, gold, or platinum)</span></label>
                  <Input type="text" placeholder="Coverage Level" value={coverage_level} onChange={e => setCoverageLevel(e.target.value)} list="coverage_level_options" className="mb-2"/>
                  <datalist id="coverage_level_options">
                    <option value="bronze" />
                    <option value="silver" />
                    <option value="gold" />
                    <option value="platinum" />
                  </datalist>
                  {/* Monthly Budget: A specific Range */}
                  <label className="block mb-1">Monthly budget? <span className="text-gray-500 text-sm">(Enter a set range of your budget)</span></label>
                  <Input type="text" placeholder="Monthly Budget" value={monthly_budget} onChange={e => setMonthlyBudget(e.target.value)} list="budget_options" className="mb-2"/>
                  <datalist id="budget_options">
                    <option value="below $100" />
                    <option value="$100-$300" />
                    <option value="$300-$500" />
                    <option value="$500-$1000" />
                    <option value="above $1000" />
                  </datalist>
                  {/* Navigation Buttons */}
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('insurance')}>Back</Button>
                    <Button type="submit">Next</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Eligibility Details Submission Tab **DO A YES OR NO AFTER EACH QUESTION INSTEAD OF CHECKBOXES** */}
          <TabsContent value="eligibility">
            <Card>
              <CardContent className="space-y-4 py-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Eligibility Details</h2>
                <form onSubmit={e => { e.preventDefault(); setActiveTab('preferences'); }}>
                  {/* US Citizen Yes/No Question */}
                  <label className="block mb-1">Are you a US Citizen?</label>
                    <div className="flex space-x-4 mb-2">
                      <label>
                        <input type="radio" name="us_citizen" checked={is_US_Citizen === true} onChange={() => setIsUSCitizen(true)} /> Yes
                        <input type="radio" name="us_citizen" checked={is_US_Citizen === false} onChange={() => setIsUSCitizen(false)} /> No
                      </label>
                    </div>
                  {/* Medicaid Yes/No Question */}
                  <label className="block mb-1">Are you eligible for Medicaid?</label>
                    <div className="flex space-x-4 mb-2">
                      <label>
                        <input type="radio" name="medicaid" checked={is_Mediaid === true} onChange={() => setIsMedicaid(true)} /> Yes
                        <input type="radio" name="medicaid" checked={is_Mediaid === false} onChange={() => setIsMedicaid(false)} /> No
                      </label>
                    </div>
                  {/* Medicare Yes/No Question */}
                  <label className="block mb-1">Are you eligible for Medicare?</label>
                    <div className="flex space-x-4 mb-2">
                      <label>
                        <input type="radio" name="medicare" checked={is_Medicare === true} onChange={() => setIsMedicare(true)} /> Yes
                        <input type="radio" name="medicare" checked={is_Medicare === false} onChange={() => setIsMedicare(false)} /> No
                      </label>
                    </div>
                  {/* Recent Events Textbox */}
                  <label className="block mb-1">List any recent events (e.g. surgery, 2023-12-01 etc):</label>
                  <Input type="text" placeholder="Recent Events" value={recent_events} onChange={e => setRecentEvents(e.target.value)} className="mb-2" />
                  {/* Veteran Yes/No Question */}
                  <label className="block mb-1">Are you a Veteran?
                    <div className="flex space-x-4 mb-2">
                      <label>
                        <input type="radio" name="veteran" checked={is_Veteran === true} onChange={() => setIsVeteran(true)} /> Yes
                        <input type="radio" name="veteran" checked={is_Veteran === false} onChange={() => setIsVeteran(false)} /> No
                      </label>
                    </div>
                  </label>
                  {/* Student Eligible for Insurance Yes/No Question */}
                  <label className="block mb-1">Are you a Student Eligible for Insurance?
                    <div className="flex space-x-4 mb-2">
                      <label>
                        <input type="radio" name="student_eligible" checked={is_StudentEligible === true} onChange={() => setIsStudentEligible(true)} /> Yes
                        <input type="radio" name="student_eligible" checked={is_StudentEligible === false} onChange={() => setIsStudentEligible(false)} /> No
                      </label>
                    </div>
                  </label>
                  {/* Navigation Buttons */}
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('coverage')}>Back</Button>
                    <Button type="submit">Next</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Preference Submission Tab **ADD MORE QUESTIONS FOR SPECIAL CONCERNS or Preferences** */}
          <TabsContent value="preferences">
            <Card>
              <CardContent className="space-y-4 py-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Preferences</h2>
                <form onSubmit={handleSubmit}>
                  {/* Upload Insurance Documents */}
                  <label className="block mb-1">Upload insurance documents:</label>
                  <Input type="text" placeholder="Insurance Documents" value={user_insurance_docs} onChange={e => setUserInsuranceDocs(e.target.value)} className="mb-2" />
                  {/* Upload Proof of Income Documents */}
                  <label className="block mb-1">Upload proof of income documents:</label>
                  <Input type="text" placeholder="Proof of Income Documents" value={proof_of_income_docs} onChange={e => setProofOfIncomeDocs(e.target.value)} className="mb-2" />
                  {/* Navigation, Submit, and Reset Buttons */}
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
/*
* File: UserInput.jsx
* Author: James Zheng & Xinrui Hou
* Date: 2025-07-15
* Updated: 2025-08-05
* Description: This component allows users to input their personal information, current insurance details, employment details, coverage needs, eligibility details, and documentation for insurance matching. It includes forms for each section and handles the submission of user data.
* Changes:
*   - Added Multi Select in Coverage Needs Tab for questions of Providers, Conditions, Perscriptions, and Events. Alos made them arrays.
*   - Also changed the names of 'recent_events' to 'events' for readability.
*   - Have an alert that describes what data is inside after it is submitted.
*   - Moved the 'Personal Information' and 'Employement' onto UserProfile.
*   - Capitalized the options such as 'Bronze' or 'Family'
*   - Able to download the JSON file of the userinput answers
*/

import React, { useState } from 'react';
import CreatableSelect from 'react-select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function UserInput() {
  // State variables for current insurance
  const [have_insurance, setHaveInsurance] = useState(false);
  const [insurance_provider, setProviderInsurance] = useState([]);
  const [policy_number, setPolicyNumber] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [source, setSource] = useState('');

  // State variables for coverage needs
  const [coverage_type, setCoverageType] = useState('');
  const [providers, setProviders] = useState([]);
  const [current_conditions, setCurrentConditions] = useState([]);
  const [current_perscriptions, setCurrentPrescriptions] = useState([]);
  const [coverage_level, setCoverageLevel] = useState('');
  const [monthly_budget, setMonthlyBudget] = useState('');

  // State variables for Eligibility details
  const [is_US_Citizen, setIsUSCitizen] = useState(false);
  const [is_Mediaid, setIsMedicaid] = useState(false);
  const [is_Medicare, setIsMedicare] = useState(false);
  const [events, setEvents] = useState([]); // write out multiple events
  const [is_Veteran, setIsVeteran] = useState(false);
  const [is_StudentEligible, setIsStudentEligible] = useState(false);

  // State variables for User Preferences
  const [user_insurance_docs, setUserInsuranceDocs] = useState('');
  const[proof_of_income_docs, setProofOfIncomeDocs] = useState('');

  // Navigation hook
  const navigate = useNavigate();

  // State variable for active tab
  const [activeTab, setActiveTab] = useState('insurance');

  // Multi-Select
  const [selectedInsuranceProviders, setSelectedInsuranceProviders] = useState([]);
  const [selectedProviders, setSelectedProviders] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedPerscriptions, setSelectedPerscriptions] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields - Xinrui Hou
    const data = {
      have_insurance, insurance_provider: insurance_provider.join(', '), policy_number, start_date, end_date, source,
      coverage_type, providers: providers.join(', '), current_conditions: current_conditions.join(', '), current_perscriptions: current_perscriptions.join(', '), coverage_level, monthly_budget,
      is_US_Citizen, is_Mediaid, is_Medicare, events: events.join(', '), is_Veteran, is_StudentEligible,
      user_insurance_docs, proof_of_income_docs
    };

    // Convert to JSON string
    const jsonString = JSON.stringify(data, null, 2);

    // Create and trigger file download
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'userinput_answers_data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert('Data has been saved as a JSON file');

    // Send JSON file to Backend
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
      }
  };

  // Function to reset all form fields
  const handleReset = () => {
    setHaveInsurance(false);
    setProviderInsurance([]);
    setPolicyNumber('');
    setStartDate('');
    setEndDate('');
    setSource('');
    setCoverageType('');
    setProviders([]);
    setCurrentConditions([]);
    setCurrentPrescriptions([]);
    setCoverageLevel('');
    setMonthlyBudget('');
    setIsUSCitizen(false);
    setIsMedicaid(false);
    setIsMedicare(false);
    setEvents([]);
    setIsVeteran(false);
    setIsStudentEligible(false);
    setUserInsuranceDocs('');
    setProofOfIncomeDocs('');
    setSelectedInsuranceProviders([]);
    setSelectedProviders([]);
    setSelectedConditions([]);
    setSelectedPerscriptions([]);
    setSelectedEvents([]);
  };

  // Individual section reset functions
  const resetInsurance = () => {
    setHaveInsurance(false);
    setProviderInsurance([]);
    setPolicyNumber('');
    setStartDate('');
    setEndDate('');
    setSource('');
    setSelectedInsuranceProviders([]);
  };

  const resetCoverage = () => {
    setCoverageType('');
    setProviders([]);
    setCurrentConditions([]);
    setCurrentPrescriptions([]);
    setCoverageLevel('');
    setMonthlyBudget('');
    setSelectedProviders([]);
    setSelectedConditions([]);
    setSelectedPerscriptions([]);
  };

  const resetEligibility = () => {
    setIsUSCitizen(false);
    setIsMedicaid(false);
    setIsMedicare(false);
    setEvents([]);
    setIsVeteran(false);
    setIsStudentEligible(false);
    setSelectedEvents([]);
  };

  const resetPreferences = () => {
    setUserInsuranceDocs('');
    setProofOfIncomeDocs('');
  };

  // Insurance Providers multi-list
  const insuranceProviderOptions =[
    {value: "aetna", label: "Aetna"},
    {value: "bluecrossblueshield", label: "Blue Cross Blue Shield"},
    {value: "cigna", label: "Cigna"},
    {value: "humana", label: "Humana"},
    {value: "kaiserpermanente", label: "Kaiser Permanente"},
    {value: "unitedhealthcare", label: "United Healthcare"},
    {value: "anthem", label: "Anthem"},
    {value: "metlife", label: "MetLife"},
    {value: "prudential", label: "Prudential"},
    {value: "other", label: "Other"},
  ];

  // Preferred Providers multi-list
  const providerOptions =[
    {value: "athena", label: "Athena"},
    {value: "bluecrossblueshield", label: "Blue Cross Blue Shield"},
    {value: "cigna", label: "Cigna"},
    {value: "humana", label: "Humana"},
    {value: "kaiserpermanente", label: "Kaiser Permanente"},
    {value: "unitedhealthcare", label: "United Healthcare"},
    {value: "other", label: "Other"},
  ];

  // Condtiions multi-list
  const conditionOptions =[
    {value: "hypertension", label: "Hypertension"},
    {value: "diabetes", label: "Diabetes"},
    {value: "mellitus", label: "Mellitus"},
    {value: "asthma", label: "Asthma"},
    {value: "infection", label: "Infection"},
    {value: "obesity", label: "Obesity"},
    {value: "congestiveheartfailure", label: "Congestive Heart Failure"},
    {value: "cancer", label: "Cancer"},
    {value: "other", label: "Other"},
  ]

  // Perscriptions multi-list
  const perscriptionOptions =[
    {value: "lisinopril", label: "Lisinopril"},
    {value: "metformin", label: "Metformin"},
    {value: "atorvastatin", label: "Atorvastatin"},
    {value: "amlodipine", label: "Amlodipine"},
    {value: "levothyroxine", label: "Levothyroxine"},
    {value: "omeprazole", label: "Omeprazole"},
    {value: "other", label: "Other"},
  ]

  // Events multi-list - Requires for user to input their own events and pick 'None' if there was no medical events such as surgery.
  const eventOptions=[
    {value: "none", label: "None"}
  ]

  // Multi-list variables storage for Insurance Providers
  const handleChangeInsuranceProviders = (selectedOptions) => {
    setSelectedInsuranceProviders(selectedOptions);
    const values0 = selectedOptions.map(option => option.value);
    setProviderInsurance(values0);
  }

  // Multi-list variables storage for Preferred Providers
  const handleChangeProviders = (selectedOptions) => {
    setSelectedProviders(selectedOptions);
    const values1 = selectedOptions.map(option => option.value);
    setProviders(values1);
  }

  // Multi-list variables storage for Conditions
  const handleChangeConditions = (selectedOptions) => {
    setSelectedConditions(selectedOptions);
    const values2 = selectedOptions.map(option => option.value);
    setCurrentConditions(values2);
  }

  //Multi-list variables storage for Perscriptions
  const handleChangePerscriptions = (selectedOptions) => {
    setSelectedPerscriptions(selectedOptions);
    const values3 = selectedOptions.map(option => option.value);
    setCurrentPrescriptions(values3);
  }

  // Multi-list variables for Events
  const handleChangeEvents = (selectedOptions) => {
    setSelectedEvents(selectedOptions);
    const values4 = selectedOptions.map(option => option.value);
    setEvents(values4);
  }
  
  // Alert input variables
  const submitClick = () => {
    alert(`CURRENT INSURANCE\nHave Insurance: ${have_insurance}\nInsurance Provider: ${insurance_provider.join(', ')}\nPolicy Number: ${policy_number}\nStart Date: ${start_date}\nEnd Date: ${end_date}\nSource: ${source}`)
    alert(`COVERAGE NEEDS\nCoverage Type: ${coverage_type}\nProviders: ${providers.join(', ')}\nCurrent Conditions: ${current_conditions.join(', ')}\nCurrent Prescriptions: ${current_perscriptions.join(', ')}\nCoverage Level: ${coverage_level}\nMonthly Budget: ${monthly_budget}`);
    alert(`ELIGIBILITY\nUS Citizen: ${is_US_Citizen}\nMedicaid: ${is_Mediaid}\nMedicare: ${is_Medicare}\nRecent Events: ${events.join(', ')}\nVeteran: ${is_Veteran}\nStudent Eligible: ${is_StudentEligible}`);
    alert(`PREFERENCES\nInsurance Docs: ${user_insurance_docs}\nProof of Income Docs: ${proof_of_income_docs}`);
  }

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
                  <CreatableSelect isMulti type="text" placeholder="e.g. Aetna, Blue Cross Blue Shield" options={insuranceProviderOptions} value={selectedInsuranceProviders} onChange={handleChangeInsuranceProviders} className="mb-2" />
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
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={resetInsurance}>Reset Section</Button>
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
                  <label className="block mb-1"> What type of coverage do you have? <span className="text-gray-500 text-sm">(Enter "Individual" or "Family")</span></label>
                  <Input type="text" placeholder="Individual or Family" value={coverage_type} onChange={e => setCoverageType(e.target.value)} list="coverage-type-options" className="mb-2"/>
                  <datalist id="coverage-type-options"> 
                    <option value="Individual" /> 
                    <option value="Family" /> 
                  </datalist>
                                    {/* Preferred providers: Textbox with multiple options */}
                  <label className="block mb-1">Preferred providers? <span className="text-gray-500 text-sm">(Enter insurance providers you're interested in)</span></label>
                  <CreatableSelect isMulti type="text" placeholder="e.g. Athena, Cigna, or type custom provider" options={providerOptions} value={selectedProviders} onChange={handleChangeProviders} className="mb-2" />
                  {/* Current conditions: Textbox with multiple options */}
                  <label className="block mb-1">Current medical conditions? <span className="text-gray-500 text-sm">(Enter multiple conditions if needed, separated by commas (e.g. Diabetes, Asthma).)</span></label>
                                     <CreatableSelect isMulti type="text" placeholder="e.g. Diabetes, Asthma" options={conditionOptions} value={selectedConditions} onChange={handleChangeConditions} className="mb-2" />
                  {/* Current perscriptions: Textbox with multiple options */}
                  <label className="block mb-1">Current prescriptions? <span className="text-gray-500 text-sm">(Enter multiple perscriptions if needed, separated by commas (e.g. Metformin, Albuterol))</span></label>
                                     <CreatableSelect isMulti type="text" placeholder="e.g. Metformin, Lisinopril" options={perscriptionOptions} value={selectedPerscriptions} onChange={handleChangePerscriptions} className="mb-2" />
                  {/* Coverage Level: Textbox with four options */}
                  <label className="block mb-1">Desired coverage level? <span className="text-gray-500 text-sm">(Enter bronze, silver, gold, or platinum)</span></label>
                  <Input type="text" placeholder="Coverage Level" value={coverage_level} onChange={e => setCoverageLevel(e.target.value)} list="coverage_level_options" className="mb-2"/>
                  <datalist id="coverage_level_options">
                    <option value="Bronze" />
                    <option value="Silver" />
                    <option value="Gold" />
                    <option value="Platinum" />
                    <option value="Other" />
                  </datalist>
                  {/* Monthly Budget: A specific Range */}
                  <label className="block mb-1">Monthly budget? <span className="text-gray-500 text-sm">(Enter a set range of your budget)</span></label>
                  <Input type="text" placeholder="Monthly Budget" value={monthly_budget} onChange={e => setMonthlyBudget(e.target.value)} list="budget_options" className="mb-2"/>
                  <datalist id="budget_options">
                    <option value="Below $100" />
                    <option value="$100-$300" />
                    <option value="$300-$500" />
                    <option value="$500-$1000" />
                    <option value="Above $1000" />
                  </datalist>
                  {/* Navigation Buttons */}
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('insurance')}>Back</Button>
                    <Button type="button" variant="outline" onClick={resetCoverage}>Reset Section</Button>
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
                  {/* Events Multi Question Textbox MAY NEED TO MOVE SOMEWHERE ELSE*/}
                  <label className="block mb-1">List past events that affected your health or 'none' if not (e.g. 'surgery, 2023-12-01', etc.):</label>
                                     <CreatableSelect isMulti type="text" placeholder="e.g. (surgery, 2023-12-01), (accident, 2019-05-09), etc." options={eventOptions} value={selectedEvents} onChange={handleChangeEvents} className="mb-2" />
                  {/* Veteran Yes/No Question */}
                  <label className="block mb-1">Are you a Veteran?
                    <div className="flex space-x-4 mb-2">
                      <label>
                        <input type="radio" name="veteran" checked={is_Veteran === true} onChange={() => setIsVeteran(true)} /> Yes
                        <input type="radio" name="veteran" checked={is_Veteran === false} onChange={() => setIsVeteran(false)} /> No
                      </label>
                    </div>
                  </label>
                  {/* Student Elligiblility for Insurance Yes/No Question */}
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
                    <Button type="button" variant="outline" onClick={resetEligibility}>Reset Section</Button>
                    <Button type="submit">Next</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Preference Submission Tab **ADD MORE QUESTIONS AND ALSO MOVED SOMEWHERE ELSE** */}
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
                     <Button type="button" variant="outline" onClick={resetPreferences}>Reset Section</Button>
                     <Button type="submit" onClick={submitClick}>Submit Information</Button>
                     <Button type="button" variant="outline" onClick={handleReset}>Reset All</Button>
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

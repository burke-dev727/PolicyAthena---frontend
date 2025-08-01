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

  // State variables for User Preferences
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
            <TabsTrigger value="docs">Preferences</TabsTrigger>
          </TabsList>

          {/* Personal Information Submission Tab MOVE */}
          <TabsContent value="personal">
            <Card>
              <CardContent className="space-y-4 py-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Personal Information</h2>
                <form onSubmit={e => { e.preventDefault(); setActiveTab('personal'); }}>
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
                <form onSubmit={e => { e.preventDefault(); setActiveTab('insurance'); }}>
                  {/* Have Insurance Yes/No Question */}
                  <label className="block mb-1">Do you currently have insurance?
                    <div className="flex space-x-4 mb-2">
                      <label>
                        <input type="radio" name="have_insurance" checked={have_insurance === true} onChange={() => setHaveInsurance(true)} /> Yes
                        <input type="radio" name="have_insurance" checked={have_insurance === false} onChange={() => setHaveInsurance(false)} /> No
                      </label>
                    </div>
                  </label>
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

          {/* Employment Details Submission Tab MOVE*/}
          <TabsContent value="employment">
            <Card>
              <CardContent className="space-y-4 py-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Employment Details</h2>
                <form onSubmit={e => { e.preventDefault(); setActiveTab('employment'); }}>
                  {/* Employed Yes/No Question */}
                  <label className="block mb-1">Are you currently employed?
                    <div className="flex space-x-4 mb-2">
                      <label>
                        <input type="radio" name="is_emplyed" checked={is_employed === true} onChange={() => setIsEmployed(true)} /> Yes
                        <input type="radio" name="is_employed" checked={is_employed === false} onChange={() => setIsEmployed(false)} /> No
                      </label>
                    </div>
                  </label>
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
                <form onSubmit={e => { e.preventDefault(); setActiveTab('coverage'); }}>
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
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('employment')}>Back</Button>
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
                <form onSubmit={e => { e.preventDefault(); setActiveTab('eligibility'); }}>
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
                  {/* Submit Button */}
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('coverage')}>Back</Button>
                    <Button type="submit">Next</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Preference Submission Tab **ADD MORE QUESTIONS FOR SPECIAL CONCERNS or Preferences** */}
          <TabsContent value="docs">
            <Card>
              <CardContent className="space-y-4 py-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Preferences</h2>
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
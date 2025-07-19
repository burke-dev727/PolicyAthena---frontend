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
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
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
  const [is_Veteran, setIsVeteran] = useState(false);
  const [recent_events, setRecentEvents] = useState(''); // write out multipel events
  const [is_StudentEligible, setIsStudentEligible] = useState(false);
  const [is_Disability, setIsDisability] = useState(false);

  // State variables for documentation
  const [user_insurance_docs, setUserInsuranceDocs] = useState('');
  const[proof_of_income_docs, setProofOfIncomeDocs] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the collected data here (e.g., send to backend)
    alert(`Name: ${name}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nStreet: ${street}\nCity: ${city}\nState: ${state}\nZipcode: ${zipcode}\nSSN: ${ssn}`);
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="phone"
          placeholder="Phone"
          value={email}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          type="address"
          placeholder="Address"
          value={email}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          type="street"
          placeholder="Sreet"
          value={email}
          onChange={(e) => setStreet(e.target.value)}
        />
        <Input
          type="city"
          placeholder="City"
          value={email}
          onChange={(e) => setCity(e.target.value)}
        />
        <Input
          type="state"
          placeholder="State"
          value={email}
          onChange={(e) => setState(e.target.value)}
        />
        <Input
            type="zipcode"
            placeholder="Zipcode"
            value={email}
            onChange={(e) => setZipcode(e.target.value)}
        />
        <Input 
            type="ssn"
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
          type="text"
          placeholder="Insurance Provider"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Policy Number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Start Date"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="date"
          placeholder="End Date"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </main>
  );
}

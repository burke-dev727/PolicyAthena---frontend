import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from "react-router-dom";

export default function UserInput() {
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


  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the collected data here (e.g., send to backend)
    alert(`Name: ${name}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nStreet: ${street}\nCity: ${city}\nState: ${state}\nZipcode: ${zipcode}\nSSN: ${ssn}`);
  };

    return (
    <main>
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
    </main>
  );
}

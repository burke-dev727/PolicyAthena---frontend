import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    alert(`Logging in with ${email}`);
  };

  const handleSignup = () => {
    alert(`Creating account for ${username}`);
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

      {/* Main Content */}
      <section className="flex flex-col items-center justify-center flex-1 p-10">
        <Card className="w-full max-w-md shadow-lg">
          <CardContent className="p-6">
            <h1 className="text-3xl font-semibold mb-6 text-center">Welcome to PolicyAthena</h1>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="login">Log In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button onClick={handleLogin} className="w-full" type="button">Log In</Button>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button onClick={handleSignup} className="w-full" type="button">Create Account</Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
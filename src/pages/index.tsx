// pages/index.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Login from '../components/auth/Login';

const Home: React.FC = () => {
  // Refactor this block. The logic for handling the login should be in the Login component.
  const handleLogin = (username: string, password: string) => {
    console.log('Logging in with:', username, password);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default Home;

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
        <h1 className="text-3xl font-bold mb-6 text-gray-800 leading-tight tracking-tighter border-b-2 border-gray-300 pb-2 px-0 py-2">
          Welcome to CodeFriends!
        </h1>
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default Home;

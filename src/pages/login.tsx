import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LoginForm from '../components/auth/LoginForm'; // Import the LoginForm component
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 mx-auto min-w-[390px] mt-2 w-full sm-md:w-3/4 md:w-3/4 lg:w-3/4 flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-semibold mb-4 text-center md:text-left lg:text-left md:text-3xl lg:text-4xl">Welcome back</h1>
          <p className="mb-4 text-gray-700 text-center md:text-left lg:text-left md:text-lg lg:text-xl"><b>Log in to your account</b></p>
          <LoginForm /> {/* Render the LoginForm component */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

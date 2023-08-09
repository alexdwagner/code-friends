// src/pages/register.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import RegisterForm from '../components/auth/RegisterForm'; // Import the RegisterForm component

const Register: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white p-6 rounded-lg transition duration-300 mb-4 mx-auto min-w-[390px] mt-2 w-full sm-md:w-3/4 md:w-3/4 lg:w-3/4 flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-semibold mb-8 text-center md:text-left lg:text-left md:text-3xl lg:text-4xl">Create an Account</h1>
          <RegisterForm /> {/* Render the RegisterForm component */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;

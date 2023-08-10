import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LoginForm from '../components/auth/LoginForm'; // Import the LoginForm component

const Login: React.FC = () => {
  return (
    <>
      <Header />
        <div className="flex flex-col main-content items-center lg:w-3/4 md:items-start md:w-3/4 min-w-[390px] p-6 sm-md:w-3/4 transition justify-between">
          <h1 className="text-3xl font-semibold mb-4 text-center md:text-left lg:text-left md:text-3xl lg:text-4xl">Welcome back</h1>
          <p className="mb-8 text-gray-700 text-center md:text-left lg:text-left md:text-lg lg:text-xl"><b>Log in to your account</b></p>
          <LoginForm /> {/* Render the LoginForm component */}
        </div>
      <Footer />
    </>
  );
};

export default Login;

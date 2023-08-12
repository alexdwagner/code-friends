import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LoginForm from '../components/auth/LoginForm'; // Import the LoginForm component

const Login: React.FC = () => {
    return (
      <div className="bg-[#f6f6f6] min-h-screen"> 
        <div className="flex flex-col items-center lg:w-3/4 md:items-start justify-between md:w-3/4 min-w-[390px] p-6 sm-md:w-3/4 transition">
          <div className="bg-cover bg-center w-full h-[235px] mb-4" style={{ backgroundImage: 'url(/images/mountain_climb.png)' }}></div>
          <h1 className="text-3xl font-semibold mb-8 text-center md:text-left lg:text-left md:text-3xl lg:text-4xl">Sign In to CodeFriends</h1>
          <LoginForm />
        </div>
      </div>
    );
  };

export default Login;

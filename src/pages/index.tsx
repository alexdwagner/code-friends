// pages/index.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Login from '../components/auth/Login';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-300 hover:shadow-2xl transition duration-300 mb-4 mx-auto min-w-[390px] mt-2 w-full sm-md:w-3/4 md:w-3/4 lg:w-3/4 flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left lg:text-left md:text-3xl lg:text-4xl">Welcome to CodeFriends.</h2>
          <p className="mb-4 text-gray-700 text-center md:text-left lg:text-left md:text-lg lg:text-xl">
            <b>CodeFriends is a platform for coders to connect and collaborate.</b>
          </p>
          <div className="bg-orange-100 border border-orange-300 p-4 rounded-lg shadow-md">
            <p className="mb-4 text-gray-700 text-left md:text-left lg:text-left md:text-lg lg:text-xl">
              <b>Here you can:</b>
            </p>
            <ul className="list-disc pl-5">
              <li>Discover new projects</li>
              <li>Find mentorship</li>
              <li>Connect with like-minded individuals.</li>
            </ul>
          </div>
          <br />
          <p className="mb-4 text-gray-700 text-center md:text-left lg:text-left italic md:text-lg lg:text-xl">
            Create an account and find your next mentor(or mentee) today. Or just
            <Link href="/posts" className="text-blue-500 hover:underline"> have a look around.</Link>
          </p>
        </div>
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default Home;

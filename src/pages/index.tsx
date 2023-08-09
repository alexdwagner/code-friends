// pages/index.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
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
          <div className="mt-2 flex flex-col gap-4 w-full text-center">
          <Link href="/login">
              <button className="bg-green-500 text-white py-3 rounded-lg font-bold text-xl hover:bg-green-600 shadow appearance-none border w-full sm-md:w-3/4 md:w-3/4 lg:w-3/4 mx-auto leading-tight focus:outline-none focus:shadow-outline">
                Login
              </button>
            </Link>
            <p>
              <b>OR</b>
            </p>
            <Link href="/posts">
              <button className="bg-blue-500 text-white py-3 rounded-lg font-bold text-xl hover:bg-blue-600 shadow appearance-none border w-full sm-md:w-3/4 md:w-3/4 lg:w-3/4 mx-auto leading-tight focus:outline-none focus:shadow-outline">
                Explore the Site
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

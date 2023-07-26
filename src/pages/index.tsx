import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';

function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      {/* Other content or welcome message can go here */}
      <Footer />
    </>
  );
}

export default Home;

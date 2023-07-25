import React from 'react'

function SearchBar() {
  return (
    <div className="my-4">
      <input 
        type="text" 
        placeholder="Search..." 
        className="search-bar p-2 w-full border rounded shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-500" 
      />
    </div>
  );
}

export default SearchBar


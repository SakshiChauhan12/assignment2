


import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch({ keyword, location });
  };

  return (
    <div className="search-bar p-4 border-b border-gray-300 mb-6">
      <div className="flex items-center justify-center space-x-3">
        {/* Job Title, Position, Keyword Input */}
        <div className="flex items-center bg-white border p-2 rounded w-1/3">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by Job title, Position, Keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyUp={handleSearch}
            className="ml-2 p-2 w-full border-none focus:outline-none"
          />
        </div>

        {/* Location Input */}
        <div className="flex items-center bg-white border p-2 rounded w-1/3">
          <FaMapMarkerAlt className="text-gray-500" />
          <input
            type="text"
            placeholder="City, state or country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyUp={handleSearch}
            className="ml-2 p-2 w-full border-none focus:outline-none"
          />
        </div>

        {/* Find Job Button */}
        <button
          onClick={handleSearch}
          className="bg-orange-600 text-white rounded-md px-4 py-2 hover:bg-orange-700"
        >
          Find Job
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

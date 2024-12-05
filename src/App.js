// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import { jobs as allJobs } from "./data/job";
import Footer from "./components/Footer";

function App() {
  const [filteredJobs, setFilteredJobs] = useState(allJobs);
  const [showSavedJobs, setShowSavedJobs] = useState(false); // State to track checkbox status

  // Function to handle the checkbox toggle
  const handleCheckboxToggle = (e) => {
    setShowSavedJobs(e.target.checked);
  };

  useEffect(() => {
    if (showSavedJobs) {
      // If showSavedJobs is true, filter saved jobs from localStorage
      const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
      setFilteredJobs(savedJobs);
    } else {
      // Show all jobs if checkbox is unchecked
      setFilteredJobs(allJobs);
    }
  }, [showSavedJobs]);

  // Filter function to handle keyword, location, and salary range
  const handleSearch = ({ keyword, location, salaryRange }) => {
    const filtered = allJobs.filter((job) => {
      const isKeywordMatch =
        (job.title && job.title.toLowerCase().includes(keyword.toLowerCase())) ||
        (job.description && job.description.toLowerCase().includes(keyword.toLowerCase()));

      const isLocationMatch =
        job.location && job.location.toLowerCase().includes(location.toLowerCase());

      // Salary range filter logic
      const isSalaryMatch =
        salaryRange
          ? job.salary >= parseInt(salaryRange.split("-")[0]) && job.salary <= parseInt(salaryRange.split("-")[1])
          : true;

      return isKeywordMatch && isLocationMatch && isSalaryMatch;
    });

    setFilteredJobs(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onCheckboxChange={handleCheckboxToggle} />
      <SearchBar onSearch={handleSearch} />
      <main className="flex-grow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length === 0 ? (
            <p className="text-center text-lg text-gray-500">No results found!!</p>
          ) : (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;



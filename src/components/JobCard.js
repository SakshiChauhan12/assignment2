
import React, { useState, useEffect } from "react";

const JobCard = ({ job }) => {
  const [isSaved, setIsSaved] = useState(false);

 
  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    const jobIsSaved = savedJobs.some((savedJob) => savedJob.id === job.id);
    setIsSaved(jobIsSaved);
  }, [job.id]);

  const handleSaveToggle = () => {
    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    if (isSaved) {
      // If job is saved, remove it from saved jobs
      savedJobs = savedJobs.filter((savedJob) => savedJob.id !== job.id);
    } else {
      // If job is not saved, add it to saved jobs
      savedJobs.push(job);
    }

    // Update localStorage with new saved jobs array
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    setIsSaved(!isSaved); // Toggle save state
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-6 hover:shadow-md hover:border-yellow-500 transition-all bg-white hover:bg-gradient-to-r hover:from-yellow-100 hover:to-white">

     {/* <div className="border border-gray-200 rounded-lg p-4 mb-6 hover:shadow-md hover:border-gray-300 transition-shadow bg-white"> */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
        <div className="flex items-center mt-1 space-x-2">
          <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-md">
            {job.type.toUpperCase()}
          </span>
          <p className="text-sm text-gray-500">{`Salary: ${job.salary}`}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="/assets/google.png"
            alt="Company Logo"
            className="w-10 h-10 rounded-md"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">{job.company}</p>
            <div className="flex items-center text-sm text-gray-500">
              {job.location}
            </div>
          </div>
        </div>
        <button onClick={handleSaveToggle} className="focus:outline-none">
          <img
            src={isSaved ? "/assets/bookmark.png" : "/assets/save-instagram.png"}
            alt="Save Icon"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default JobCard;


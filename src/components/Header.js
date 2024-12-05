

import React from "react";

const Header = ({ onCheckboxChange }) => {
  return (
    <header className="bg-white text-black py-2 px-6 flex items-center justify-between shadow-md">
      {/* Left Section: Logo and Title */}
      <div className="flex items-center space-x-3">
        {/* Logo */}
        <div className="bg-orange-500 w-8 h-8 flex items-center justify-evenly rounded">
          <img src="/assets/briefcase.png" className="w-5 h-5" alt="Briefcase" /> {/* Example icon */}
        </div>
        {/* Title */}
        <h1 className="text-lg font-semibold">Explorin Solutions</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Checkbox with Label */}
        <label className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            className="form-checkbox w-4 h-4 text-orange-500 border-gray-300 rounded accent-slate-500"
            onChange={onCheckboxChange} // Trigger the checkbox change
          />
          <span>My Saved Jobs only</span>
          
          {/* Notification Icon */}
          <span><img className="w-8 h-7" src="/assets/notification.png" alt="Notifications" /></span>
        </label>
        
        
        <img
          src="/assets/minee.jpeg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>
    </header>
  );
};

export default Header;

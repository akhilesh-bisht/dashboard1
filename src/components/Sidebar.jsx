import React from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaChartBar,
  FaCogs,
  FaQuestionCircle,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white text-black p-4 border  border-gray-300">
      {/* Logo */}
      <div className="flex items-center ml-2 mb-10">
        <img
          src="https://via.placeholder.com/100x40?text=LOGO"
          alt="Logo"
          className="w-20 h-auto"
        />
      </div>

      {/* Navigation Links */}
      <div className="space-y-6 mt-6">
        <a
          href="#"
          className="flex items-center bg-gray-200 rounded-lg p-2 space-x-3 text-black hover:text-gray-700"
        >
          <FaTachometerAlt className="text-black" />
          <span className="font-medium">Dashboard</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 text-black hover:text-gray-700"
        >
          <FaUsers className="text-black" />
          <span className="font-medium">User Management</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 text-black hover:text-gray-700"
        >
          <FaChartBar className="text-black" />
          <span className="font-medium">Analytics</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 text-black hover:text-gray-700"
        >
          <FaCogs className="text-black" />
          <span className="font-medium">Settings</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 text-black hover:text-gray-700"
        >
          <FaQuestionCircle className="text-black" />
          <span className="font-medium">Help Center</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

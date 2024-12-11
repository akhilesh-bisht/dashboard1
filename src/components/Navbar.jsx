import React, { useState } from "react";
import { FaSearch, FaBell, FaCaretDown, FaUserAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md border-b border-gray-300">
      {/* Search Box */}
      <div className="flex items-center space-x-2 border rounded-lg px-4 py-3 w-[30%] bg-white">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm"
        />
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-4 relative">
        <FaBell className="text-gray-500" />
        {user ? (
          <div
            className="relative flex "
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt="User Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="text-sm font-semibold ml-2">
                {user.fullName}
              </span>
              <FaCaretDown />
            </div>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <div className="p-4 text-sm text-gray-700 flex items-center">
                  <p className="text-gray-500">{user.email}</p>
                </div>
                <button
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

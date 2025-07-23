import React, { useState } from "react";
import {
  FaBell,
} from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { LiaBarsSolid } from "react-icons/lia";
import { PiBellSimpleLight } from "react-icons/pi";

const Header = ({ toggleSidebar }) => {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [showNotificationBox, setShowNotificationBox] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const messages = [1, 2, 3, 4]; // Sample messages

  const toggleMessageBox = () => setShowMessageBox((prev) => !prev);
  const toggleNotificationBox = () => setShowNotificationBox((prev) => !prev);
  const toggleUserMenu = () => setShowUserMenu((prev) => !prev);

  const handleKeyToggle = (e, toggleFunc) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFunc();
    }
  };

  return (
    <div className="bg-white shadow px-4 py-2 flex flex-wrap items-center justify-between gap-4">
      {/* Left section: Logo + Burger + Search */}
      <div className="flex items-center gap-4 flex-grow min-w-0">
        {/* Logo */}
        <img src="/logo.png" alt="ADAM EXPORTS" className="h-10 w-auto" />

        {/* Burger Icon */}
        <button
          onClick={toggleSidebar}
          className="p-2 ml-35 rounded text-gray-600 hover:text-purple-600"
          aria-label="Toggle sidebar"
        >
          <LiaBarsSolid className="text-xl" />
        </button>

        {/* Search */}
        <div className="relative flex-grow max-w-sm w-full">
          <input
            type="text"
            placeholder="Search anything here..."
            className="w-full border border-gray-300 pl-10 pr-2 py-2 rounded text-sm text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <CiSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
        </div>
      </div>

      {/* Right section: Icons */}
      <div className="flex items-center gap-4">
        {/* Messages */}
        <div
          role="button"
          tabIndex={0}
          onClick={toggleMessageBox}
          onKeyDown={(e) => handleKeyToggle(e, toggleMessageBox)}
          className="relative cursor-pointer"
        >
          <FiMessageSquare className="text-xl text-gray-600" />
          <span className="absolute -top-1 -right-2 bg-purple-500 text-white text-xs rounded-full px-1">
            {messages.length}
          </span>

          {showMessageBox && (
            <div className="absolute right-0 top-12 z-50 w-80 bg-gray-100 p-4 border border-gray-300 rounded shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg text-black  font-bold">Chat</h2>
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                  {messages.length} new
                </span>
              </div>
              <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-hide">
                {messages.map((_, index) => (
                  <div
                    key={index}
                    className="bg-white px-3 py-2 border border-gray-200 rounded flex items-start justify-between"
                  >
                    <div className="flex items-center">
                      <img
                        src="/profile.png"
                        alt="User"
                        className="w-7 h-7 rounded-full mr-2"
                      />
                      <div className="text-sm">
                        <p className="font-bold">New Message</p>
                        <p className="text-gray-600">
                          From <span className="text-blue-500">[user_name]</span>
                        </p>
                        <p className="text-xs text-gray-400">10 mins ago</p>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-purple-500 text-xl">
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white w-full py-2 rounded">
                View All
              </button>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div
          role="button"
          tabIndex={0}
          onClick={toggleNotificationBox}
          onKeyDown={(e) => handleKeyToggle(e, toggleNotificationBox)}
          className="relative cursor-pointer"
        >
          <PiBellSimpleLight className="text-xl ml-4  text-gray-600" />
          <span className="absolute mr-4 -top-1 -right-2 bg-purple-500 text-white text-xs rounded-full px-1">
            {messages.length}
          </span>

          {showNotificationBox && (
            <div className="absolute right-0 top-12 z-50 w-80 bg-gray-100 p-4 border border-gray-300 rounded shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg text-black font-bold">Notifications</h2>
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                  {messages.length} new
                </span>
              </div>
              <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-hide">
                {messages.map((_, index) => (
                  <div
                    key={index}
                    className="bg-white px-3 py-2 border border-gray-200 rounded flex items-start justify-between"
                  >
                    <div className="flex items-center">
                      <img
                        src="/profile.png"
                        alt="User"
                        className="w-7 h-7 rounded-full mr-2"
                      />
                      <div className="text-sm">
                        <p className="font-bold">Task Completed</p>
                        <p className="text-gray-600">
                          <span className="text-blue-500">[Mark as Completed]</span>
                        </p>
                        <p className="text-xs text-gray-400">10 mins ago</p>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-purple-500 text-xl">
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white w-full py-2 rounded">
                View All
              </button>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <div
            role="button"
            tabIndex={0}
            onClick={toggleUserMenu}
            onKeyDown={(e) => handleKeyToggle(e, toggleUserMenu)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <img
                src="/profile.png"
                alt="User Avatar"
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="text-sm font-bold text-gray-700 whitespace-nowrap leading-tight">
                <div>Mohd Saleem</div>
                <div className="text-xs font-normal text-gray-500">(Admin)</div>
              </div>
            </div>




          </div>

          {showUserMenu && (
            <div className="absolute right-0 top-12 bg-white border rounded shadow-lg w-44 z-50">
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-200 flex items-center gap-2 cursor-pointer">
                  <FiUser className="text-gray-600" />
                  <span className="text-gray-600">Profile</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 flex items-center gap-2 cursor-pointer">
                  <FiSettings className="text-gray-600" />
                  <span className="text-gray-600">Settings</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 flex items-center gap-2 cursor-pointer">
                  <FiLogOut className="text-gray-600" />
                  <span className="text-gray-600">Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

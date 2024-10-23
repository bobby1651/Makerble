import React from "react";
import { FaBell, FaEnvelope, FaEllipsisH } from "react-icons/fa"; // Import icons
import { Menu, Transition } from "@headlessui/react"; // For the dropdown
import user from "../assets/user.jpeg";

const Navbar = () => {
  const navItems = [
    "Boards",
    "Contacts",
    "Projects",
    "Survey",
    "Goals",
    "Strategies",
    "Tips",
    "Collections",
    "People",
    "Cases",
    "Contact Forms",
    "Contact Groups",
    "Personal Details",
    "Account Details",
    "Post Details",
  ];

  return (
    <div>
      {/* Main Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Left side - Logo and Links */}
            <div className="flex items-center space-x-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img className="h-8 w-auto" src={user} alt="Logo" />
              </div>

              {/* Links: My Apps, Home, Explore */}
              <div className="hidden md:flex space-x-4 items-center">
                {/* My Apps Dropdown */}
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="text-gray-800 hover:text-gray-600 hover:scale-105">
                    My Apps
                  </Menu.Button>
                  <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            App 1
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            App 2
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/* Other Links */}
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 hover:scale-105"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="bg-white text-gray-800 px-6 py-2  transition-colors duration-300 transform hover:scale-105"
                >
                  Explore
                </a>
              </div>
            </div>

            {/* Right side - Icons and Profile */}
            <div className="ml-auto flex space-x-4 items-center">
              {/* Notification Icon */}
              <button className="text-gray-800 hover:text-gray-600">
                <FaBell className="h-5 w-5" />
              </button>

              {/* Message Icon */}
              <button className="text-gray-800 hover:text-gray-600">
                <FaEnvelope className="h-5 w-5" />
              </button>

              {/* Profile */}
              <div className="flex items-center space-x-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src={user}
                  alt="User avatar"
                />
                <span className="text-gray-800">Vamshi Krishna</span>
              </div>

              {/* Create + Button */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Create +
              </button>

              {/* More Icon */}
              <button className="text-gray-800 hover:text-gray-600">
                <FaEllipsisH className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Scrollable Horizontal Navbar with 15 categories */}
      <div className="bg-gray-100 mt-16 py-2 w-full shadow-md overflow-x-auto whitespace-nowrap">
        <div className="max-w-7xl mx-auto px-4 flex space-x-4">
          {/* 15 scrollable rectangular items */}
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="bg-white text-gray-800 px-6 py-2 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300 transform hover:scale-105"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

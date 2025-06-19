// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 w-full py-4 bg-white shadow-sm">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "120px", height: "60px", marginRight: "8px" }}
          />
          <span className="text-xl font-bold text-gray-700">Nature Lover</span>
        </div>

        <div className="hidden space-x-8 md:flex">
          <a
            href="#home"
            className="pb-1 text-gray-700 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:text-green-500 hover:border-green-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="pb-1 text-gray-700 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:text-green-500 hover:border-green-500"
          >
            About
          </a>
          <a
            href="#services"
            className="pb-1 text-gray-700 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:text-green-500 hover:border-green-500"
          >
            Services
          </a>
          <a
            href="#contact"
            className="pb-1 text-gray-700 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:text-green-500 hover:border-green-500"
          >
            Contact Us
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden w-32 px-4 py-2 text-green-500 transition border border-green-500 rounded-md md:block hover:bg-green-500 hover:text-white">
            Login
          </button>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 w-full bg-white shadow-md md:hidden top-16">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a
                href="#home"
                className="pb-1 text-gray-700 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:text-green-500 hover:border-green-500"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="pb-1 text-gray-700 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:text-green-500 hover:border-green-500"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#services"
                className="pb-1 text-gray-700 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:text-green-500 hover:border-green-500"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#contact"
                className="pb-1 text-gray-700 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:text-green-500 hover:border-green-500"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
              <button
                className="px-4 py-2 text-green-500 transition border border-green-500 rounded-md hover:bg-green-500 hover:text-white"
                onClick={toggleMenu}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

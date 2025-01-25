import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle hamburger menu

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-lg font-bold">
              MyLogo
            </a>
          </div>

          {/* Menu untuk Desktop */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-300 hover:text-white px-3 py-2">
              Home
            </a>
            <a href="/about" className="text-gray-300 hover:text-white px-3 py-2">
              About
            </a>
            <a href="/services" className="text-gray-300 hover:text-white px-3 py-2">
              Services
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white px-3 py-2">
              Contact
            </a>
          </div>

          {/* Hamburger Menu untuk Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggle state isOpen
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu untuk Mobile (Muncul saat hamburger diklik) */}
      {isOpen && (
        <div className="md:hidden relative  ">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block text-gray-300 hover:text-white px-3 py-2">
              Home
            </a>
            <a href="/about" className="block text-gray-300 hover:text-white px-3 py-2">
              About
            </a>
            <a href="/services" className="block text-gray-300 hover:text-white px-3 py-2">
              Services
            </a>
            <a href="/contact" className="block text-gray-300 hover:text-white px-3 py-2">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
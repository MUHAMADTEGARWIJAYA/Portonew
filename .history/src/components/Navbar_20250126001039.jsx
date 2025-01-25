import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle hamburger menu

  return (
    <nav className="bg-gray-800 fixed w-full shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-lg font-bold cursor-pointer">
              Tegar<span className="text-blue-800">WIjaya</span>
            </a>
          </div>

          {/* Menu untuk Desktop */}
          <div className="hidden md:flex space-x-4 cursor-pointer">
            <Link  className="text-gray-300 hover:text-white px-3 py-2"
             to="home" // ID dari section tujuan
             smooth={true} // Smooth scroll
             duration={500} // Durasi scroll
            >
              Home
            </Link>
            <Link  className="text-gray-300 hover:text-white px-3 py-2"
             to="About" // ID dari section tujuan
             smooth={true} // Smooth scroll
             duration={500} // Durasi scroll
            >
              About
            </Link>
            <Link className="text-gray-300 hover:text-white px-3 py-2"
             to="servis" // ID dari section tujuan
             smooth={true} // Smooth scroll
             duration={500} // Durasi scroll
            >
              Services
            </Link>
            <Link  className="text-gray-300 hover:text-white px-3 py-2"
             to="kontak" // ID dari section tujuan
             smooth={true} // Smooth scroll
             duration={500} // Durasi scroll
            >
              Contact
            </Link>
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
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Animasi awal
          animate={{ opacity: 1, y: 0 }} // Animasi saat muncul
          transition={{ duration: 0.3 }} // Durasi animasi
          className="md:hidden fixed w-full   bg-gray-700 cursor-pointer"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
          <Link  className="text-gray-300 hover:text-white px-3 py-2"
             to="home" // ID dari section tujuan
             smooth={true} // Smooth scroll
             duration={500} // Durasi scroll
            >
              Home
            </Link>
            <Link  className="text-gray-300 hover:text-white px-3 py-2"
             to="about" // ID dari section tujuan
             smooth={true} // Smooth scroll
             duration={500} // Durasi scroll
            >
              About
            </Link>
            <Link  className="text-gray-300 hover:text-white px-3 py-2"
             to="servis" // ID dari section tujuan
             smooth={true} // Smooth scroll
             duration={500} // Durasi scroll
            >
              Service
            </Link>
            <Link  className="text-gray-300 hover:text-white px-3 py-2"
            
             to="kontak" // ID dari section tujuan
             smooth={true} // Smooth scroll
             duration={500} // Durasi scroll
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
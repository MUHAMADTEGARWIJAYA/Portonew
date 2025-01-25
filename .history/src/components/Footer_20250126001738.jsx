import { useState } from "react";
import { Menu, X } from "lucide-react";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">MyBrand</div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links */}
        <div
          className={`flex-col md:flex-row md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <a
            href="#home"
            className="block px-4 py-2 md:py-0 hover:text-teal-400 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 md:py-0 hover:text-teal-400 transition"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-2 md:py-0 hover:text-teal-400 transition"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 md:py-0 hover:text-teal-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;

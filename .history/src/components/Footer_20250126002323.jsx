const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="container mx-auto px-4">
          {/* Bagian Atas Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kolom 1: Tentang */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
              <p className="text-sm">
                We are a passionate team dedicated to delivering top-notch web
                solutions to help your business grow and succeed.
              </p>
            </div>
  
            {/* Kolom 2: Navigasi */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-teal-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-teal-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-teal-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-teal-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Kolom 3: Hubungi Kami */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>Email: support@mybrand.com</li>
                <li>Phone: +123 456 7890</li>
                <li>Address: 123 Street, City, Country</li>
              </ul>
            </div>
          </div>
  
          {/* Garis Pemisah */}
          <div className="border-t border-gray-700 my-6"></div>
  
          {/* Bagian Bawah Footer */}
          <div className="flex flex-row md:flex-row justify-center items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} MyBrand. All rights reserved.
            </p>
  
            {/* Ikon Media Sosial */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-teal-400"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10.9 20.3v-6.3H8.5v-2.4h2.4V9.7c0-1.8.7-3.6 3.6-3.6h2.4v2.4h-1.8c-1.2 0-1.2.6-1.2 1.2v1.8h3.6l-.6 2.4h-3V20.3h-2.4z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-teal-400"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.6 7.8c.8-.5 1.5-1.2 1.9-2.1-.8.4-1.7.7-2.5.9-.8-.8-1.9-1.3-3.2-1.3-2.4 0-4.2 1.9-4.2 4.2 0 .3 0 .7.1 1C8.6 11.2 6 9.7 4.3 7.5c-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.6 1.8 3.3-.6 0-1.2-.2-1.7-.5v.1c0 2 1.4 3.7 3.2 4-.3.1-.7.2-1.2.2-.3 0-.6 0-.8-.1.6 1.8 2.3 3.1 4.3 3.1-1.6 1.3-3.6 2-5.6 2H3.8c2.2 1.5 4.7 2.3 7.5 2.3 9 0 13.9-7.4 13.9-13.9v-.7c.9-.6 1.6-1.4 2.1-2.3-.8.4-1.6.7-2.5.8z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-teal-400"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.1c2.8 0 3.1.1 4.2.1 1.1.1 1.9.2 2.6.5a4.8 4.8 0 0 1 1.7 1.2 4.8 4.8 0 0 1 1.2 1.7c.3.7.4 1.5.5 2.6.1 1.1.1 1.4.1 4.2s-.1 3.1-.1 4.2c-.1 1.1-.2 1.9-.5 2.6a4.8 4.8 0 0 1-1.2 1.7 4.8 4.8 0 0 1-1.7 1.2c-.7.3-1.5.4-2.6.5-1.1.1-1.4.1-4.2.1s-3.1-.1-4.2-.1c-1.1-.1-1.9-.2-2.6-.5a4.8 4.8 0 0 1-1.7-1.2 4.8 4.8 0 0 1-1.2-1.7c-.3-.7-.4-1.5-.5-2.6-.1-1.1-.1-1.4-.1-4.2s.1-3.1.1-4.2c.1-1.1.2-1.9.5-2.6a4.8 4.8 0 0 1 1.2-1.7 4.8 4.8 0 0 1 1.7-1.2c.7-.3 1.5-.4 2.6-.5C8.9 2.2 9.2 2.1 12 2.1m0-2.1C9.1 0 8.8.1 7.7.1c-1.2.1-2.1.2-2.8.5a6.9 6.9 0 0 0-2.5 1.8 6.9 6.9 0 0 0-1.8 2.5c-.3.7-.4 1.6-.5 2.8C.1 8.8 0 9.1 0 12s.1 3.2.1 4.3c.1 1.2.2 2.1.5 2.8a6.9 6.9 0 0 0 1.8 2.5 6.9 6.9 0 0 0 2.5 1.8c.7.3 1.6.4 2.8.5 1.1.1 1.4.1 4.3.1s3.2-.1 4.3-.1c1.2-.1 2.1-.2 2.8-.5a6.9 6.9 0 0 0 2.5-1.8 6.9 6.9 0 0 0 1.8-2.5c.3-.7.4-1.6.5-2.8.1-1.1.1-1.4.1-4.3s-.1-3.2-.1-4.3c-.1-1.2-.2-2.1-.5-2.8a6.9 6.9 0 0 0-1.8-2.5 6.9 6.9 0 0 0-2.5-1.8c-.7-.3-1.6-.4-2.8-.5C15.2.1 14.9 0 12 0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
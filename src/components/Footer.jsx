const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-slate-50 to-stone-100 text-black py-10">
        <div className="container mx-auto px-4">
          {/* Bagian Atas Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kolom 1: Tentang */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">About Me</h3>
              <p className="text-sm">
              Hi, Im a passionate developer with a focus on creating efficient and user-friendly applications. I love learning new technologies and solving real-world problems through code.
              </p>
            </div>
  
            {/* Kolom 2: Navigasi */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Quick Links</h3>
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
              <h3 className="text-xl font-bold text-black mb-4">Contact Me</h3>
              <ul className="space-y-2">
                <li>Email: tegarmuhamad922.com</li>
                <li>Phone: </li>
                <li>Address:</li>
              </ul>
            </div>
          </div>
  
          {/* Garis Pemisah */}
          <div className="border-t border-gray-700 my-6"></div>
  
          {/* Bagian Bawah Footer */}
          <div className="flex flex-col gap-8 justify-center items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Muhamad Tegar Wijaya.
            </p>
  
     
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
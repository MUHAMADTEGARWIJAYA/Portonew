import { motion } from 'framer-motion'; // Import Framer Motion
import foto from '../assets/images/foto header (1).jpeg';

const Header = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV (MUHAMAD TEGAR WIJAYA).pdf"; // Path ke file CV di folder public
    link.download = "CV (MUHAMAD TEGAR WIJAYA).pdf"; // Nama file saat diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  




  return (
    // Container utama dengan animasi
    <motion.div 
      className="xl:min-h-[567px] min-h-[600px] bg-gray-900 flex flex-col justify-center items-center xl:gap-16"
    >
      {/* Konten teks dan gambar */}
      <div className="flex justify-center items-center xl:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Animasi awal: teks muncul dari kiri
          whileInView={{ opacity: 1, x: 0 }} // Animasi saat elemen terlihat
          transition={{ delay: 0.5, duration: 0.8 }} // Durasi dan delay animasi
          viewport={{ once: false }} // Animasi berjalan setiap kali elemen terlihat
          className="bg-gray-900 max-w-xl h-60"
        >
          <h1 className="py-4 px-4 text-white font-extrabold text-2xl xl:text-4xl">MUHAMAD TEGAR WIJAYA</h1>
          <div className="py-4 px-4 bg-gray-900 xl:w-xl w-72">
            <h2 className="text-white text-2xl font-semibold">Frontend Developer</h2>
            <p className="text-white text-[13px] xl:text-[17px]">
            Hi, Im a passionate developer with a focus on creating efficient and user-friendly applications. I love learning new technologies and solving real-world problems through code.
            </p>
          </div>
          <button
                  onClick={handleDownload}
                  className="cursor-pointer group relative flex gap-1.5 px-2 py-2 ml-3 bg-gray-900 shadow-white mt-2 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24px"
                    width="24px"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <g id="Interface / Download">
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2"
                          stroke="#f1f1f1"
                          d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                          id="Vector"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  Download CV
                  
          </button>
        </motion.div>

        {/* Foto image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Animasi awal: gambar muncul dari kanan
          whileInView={{ opacity: 1, x: 0 }} // Animasi saat elemen terlihat
          transition={{ delay: 0.5, duration: 0.8 }} // Durasi dan delay animasi
          viewport={{ once: false }} // Animasi berjalan setiap kali elemen terlihat
          className="bg-gray-900 h-60  xl:w-96 xl:h-96 flex justify-end items-end"
        >
          <img
            src={foto}
            alt="Foto Profil"
            className="w-28 h-28 xl:w-52 xl:h-52 object-cover rounded-md"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
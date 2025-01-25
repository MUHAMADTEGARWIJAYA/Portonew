import { motion } from 'framer-motion'; // Import Framer Motion
import foto from '../assets/images/foto header (1).jpeg';
import { useEffect, useState } from 'react';





const Header = () => {

    const [width, setWidth] = useState("77%"); // Default width
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1280) { // Breakpoint xl
            setWidth("77%"); // Atur width untuk xl
          } else {
            setWidth("89%"); // Kembali ke default
          }
        };
      
        // Panggil fungsi handleResize saat komponen dimount dan window di-resize
        handleResize();
        window.addEventListener("resize", handleResize);
      
        // Bersihkan event listener saat komponen di-unmount
        return () => window.removeEventListener("resize", handleResize);
      }, []);


      
  return (
    // Container utama dengan animasi
    <motion.div 
      className="xl:min-h-96 min-h-[200px]  bg-gray-900 flex flex-col justify-center items-center xl:gap-16"
    >
      {/* Konten teks dan gambar */}
      <div className="flex justify-center items-center xl:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Animasi awal: teks muncul dari kiri
          animate={{ opacity: 1, x: 0 }} // Animasi saat teks muncul
          transition={{ delay: 0.5, duration: 0.8 }} // Delay dan durasi animasi
          className="bg-gray-900 max-w-xl h-60"
        >
          <h1 className="py-4 px-4 text-white font-extrabold text-2xl xl:text-4xl">MUHAMAD TEGAR WIJAYA</h1>
          <div className="py-4 px-4 bg-gray-900 xl:w-xl w-80 ">
            <h2 className="text-white text-2xl  font-semibold">Frontend Developer</h2>
            <p className="text-white text-[13px] xl:text-[17px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iusto libero, quo ratione porro veritatis ea nesciunt voluptatibus qui, assumenda delectus aliquid fuga dicta exercitationem ipsum laudantium voluptates laborum esse?
            </p>
          </div>
        </motion.div>

        {/* Foto image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Animasi awal: gambar muncul dari kanan
          animate={{ opacity: 1, x: 0 }} // Animasi saat gambar muncul
          transition={{ delay: 0.5, duration: 0.8 }} // Delay dan durasi animasi
          className="bg-gray-900 xl:w-96 xl:h-96 flex justify-center items-center "
        >
          <img
            src={foto}
            alt="Foto Profil"
            className="w-28 h-28 xl:w-52 xl:h-52 object-cover rounded-md"
          />
        </motion.div>
      </div>
      {/* Garis panjang di bawah konten */}
      <motion.div
  initial={{ opacity: 0, width: 0 }} // Animasi awal: garis muncul dari lebar 0
  animate={{ opacity: 1, width }} // Animasi saat garis muncul
  transition={{ delay: 1, duration: 0.8 }} // Delay dan durasi animasi
  className="border-t border-gray-300   xl:w-3xl" // Responsive width untuk xl
/>
    </motion.div>
  );
};

export default Header;
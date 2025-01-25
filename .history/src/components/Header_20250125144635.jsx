import { motion } from 'framer-motion'; // Import Framer Motion
import foto from '../assets/images/foto header (1).jpeg';

const Header = () => {
  return (
    // Container utama dengan animasi
    <motion.div
      className="min-h-screen bg-gray-900 flex flex-col justify-center items-center gap-8 p-4"
    >
      {/* Konten teks dan gambar */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Animasi awal: teks muncul dari kiri
          animate={{ opacity: 1, x: 0 }} // Animasi saat teks muncul
          transition={{ delay: 0.5, duration: 0.8 }} // Delay dan durasi animasi
          className="bg-green-900 w-full md:w-80 p-4 rounded-lg shadow-lg"
        >
          <h1 className="py-2 text-white font-extrabold text-2xl md:text-4xl">
            MUHAMAD TEGAR WIJAYA
          </h1>
          <div className="py-2">
            <h2 className="text-white text-xl md:text-2xl font-semibold">
              Frontend Developer
            </h2>
            <p className="text-white text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iusto libero, quo ratione porro veritatis ea nesciunt voluptatibus qui, assumenda delectus aliquid fuga dicta exercitationem ipsum laudantium voluptates laborum esse?
            </p>
          </div>
        </motion.div>

        {/* Foto image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Animasi awal: gambar muncul dari kanan
          animate={{ opacity: 1, x: 0 }} // Animasi saat gambar muncul
          transition={{ delay: 0.5, duration: 0.8 }} // Delay dan durasi animasi
          className="bg-white w-48 h-48 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg"
        >
          <img
            src={foto}
            alt="Foto Profil"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Garis panjang di bawah konten */}
      <motion.div
        initial={{ opacity: 0, width: 0 }} // Animasi awal: garis muncul dari lebar 0
        animate={{ opacity: 1, width: '60%' }} // Animasi saat garis muncul
        transition={{ delay: 1, duration: 0.8 }} // Delay dan durasi animasi
        className="border-t border-gray-300"
      />
    </motion.div>
  );
};

export default Header;
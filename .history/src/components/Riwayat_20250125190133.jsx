import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
const stats = [
  { id: 1, value: "15+", label: "Years of Experience" },
  { id: 2, value: "100+", label: "Projects Completed" },
  { id: 3, value: "30+", label: "Satisfied Clients" },
];

const StatsSection = () => {
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
    <div className="bg-gray-900 text-white xl:py-10">
        <motion.div
        initial={{ opacity: 0, width: 0 }} // Animasi awal: garis muncul dari lebar 0
        animate={{ opacity: 1, width }} // Animasi saat garis muncul
        transition={{ delay: 1, duration: 0.8 }} // Delay dan durasi animasi
        className="border-t border-gray-300 xl:w-3xl" // Responsive width untuk xl
        />
      <div className="container mx-auto flex justify-around items-center">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: stat.id * 0.2 }}
          >
            <p className="xl:text-4xl text-2xl font-bold">{stat.value}</p>
            <p className="xl:text-lg mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;

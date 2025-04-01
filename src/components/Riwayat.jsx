import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { id: 1, value: "2+", label: "Years Fullstack Developer" },
  { id: 2, value: "5+", label: "Projects Completed" },
  { id: 3, value: "2+", label: "Certificate" },
];

const StatsSection = () => {
  const [width, setWidth] = useState("77%"); // Default width

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        // Breakpoint xl
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
    <div className="bg-gradient-to-r from-slate-50 to-stone-100 text-black xl:py-8">
      {/* Garis pembatas */}
      <div className="flex justify-center items-center mb-4">
        <motion.div
          initial={{ opacity: 0, width: 0 }} // Animasi awal: garis muncul dari lebar 0
          whileInView={{ opacity: 1, width }} // Animasi saat elemen terlihat
          transition={{ delay: 1, duration: 0.8 }} // Durasi dan delay animasi
          viewport={{ once: false }} // Animasi berjalan setiap kali elemen terlihat
          className="border-t border-black" // Responsive width untuk xl
        />
      </div>

      {/* Statistik */}
      <div className="container mx-auto flex justify-around items-center">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="text-center"
            initial={{ opacity: 0, y: 20 }} // Animasi awal
            whileInView={{ opacity: 1, y: 0 }} // Animasi saat elemen terlihat
            transition={{ duration: 0.6, delay: stat.id * 0.2 }} // Durasi dan delay animasi
            viewport={{ once: false }} // Animasi berjalan setiap kali elemen terlihat
          >
            <p className="xl:text-4xl text-2xl font-bold">{stat.value}</p>
            <p className="xl:text-lg xl:w-48 w-28 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
import { motion } from "framer-motion";
import { Briefcase, Star, Eye, Layout, Globe, Brush } from "lucide-react";

const skills = [
  { id: 1, name: "User Experience", icon: <Layout /> },
  { id: 2, name: "User Interface", icon: <Eye /> },
  { id: 3, name: "Art Direction", icon: <Brush /> },
  { id: 4, name: "Motion Design", icon: <Globe /> },
  { id: 5, name: "Branding", icon: <Star /> },
  { id: 6, name: "Web Design", icon: <Briefcase /> },
];

const SkillsGrid = () => {
  return (
    <div className="bg-gray-900 text-white flex justify-center items-center py-10">
      <div className="container max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="flex items-center justify-center border border-gray-700 rounded-lg py-4 hover:bg-gray-800 transition"
            initial={{ opacity: 0, y: 20 }} // Animasi awal
            whileInView={{ opacity: 1, y: 0 }} // Animasi saat elemen terlihat di viewport
            viewport={{ once: true }} // Animasi hanya berjalan sekali
            transition={{ duration: 0.5, delay: skill.id * 0.5 }} // Durasi dan delay animasi
          >
            <div className="flex items-center space-x-2">
              <div className="text-lg">{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
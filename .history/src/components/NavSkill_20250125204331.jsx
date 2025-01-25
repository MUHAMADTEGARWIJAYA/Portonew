import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Star, Eye, Layout, Globe, Brush, PlusCircle, Code, Settings, Mic } from "lucide-react";

const tabs = [
  { id: 1, name: "Expertise", icon: <Briefcase /> },
  { id: 2, name: "Software", icon: <Settings /> },
  { id: 3, name: "Language", icon: <Mic /> },
];

const expertiseContent = [
  { id: 1, name: "User Experience", icon: <Layout /> },
  { id: 2, name: "User Interface", icon: <Eye /> },
  { id: 3, name: "Art Direction", icon: <Brush /> },
  { id: 4, name: "Motion Design", icon: <Globe /> },
  { id: 5, name: "Branding", icon: <Star /> },
  { id: 6, name: "Web Design", icon: <Briefcase /> },
  { id: 7, name: "Project Management", icon: <PlusCircle /> },
];

const softwareContent = [
  { id: 1, name: "Adobe Photoshop", icon: <Brush /> },
  { id: 2, name: "Figma", icon: <Layout /> },
  { id: 3, name: "Sketch", icon: <Eye /> },
  { id: 4, name: "Visual Studio Code", icon: <Code /> },
  { id: 5, name: "Git", icon: <Settings /> },
  { id: 6, name: "Slack", icon: <Mic /> },
];

const languageContent = [
  { id: 1, name: "English", icon: <Globe /> },
  { id: 2, name: "Spanish", icon: <Globe /> },
  { id: 3, name: "French", icon: <Globe /> },
  { id: 4, name: "German", icon: <Globe /> },
  { id: 5, name: "Mandarin", icon: <Globe /> },
];

const SkillsNavbar = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {expertiseContent.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-center border border-gray-600 rounded-lg py-4 hover:bg-gray-800 transition"
                initial={{ opacity: 0, y: 20 }} // Animasi awal
                whileInView={{ opacity: 1, y: 0 }} // Animasi saat elemen terlihat
                viewport={{ once: false }} // Animasi hanya berjalan sekali
                transition={{ duration: 0.5, delay: item.id * 0.1 }} // Durasi dan delay animasi
              >
                <div className="flex bg-amber-300 items-center space-x-2">
                  <div className="text-lg">{item.icon}</div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {softwareContent.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-center border border-gray-600 rounded-lg py-4 hover:bg-gray-800 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="text-lg">{item.icon}</div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case 3:
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {languageContent.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-center border border-gray-600 rounded-lg py-4 hover:bg-gray-800 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="text-lg">{item.icon}</div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="bg-gray-900 text-white py-6 mx:mt-1 mt-32"
      initial={{ opacity: 0, y: 20 }} // Animasi awal untuk seluruh komponen
      whileInView={{ opacity: 1, y: 0 }} // Animasi saat komponen terlihat
      viewport={{ once: false }} // Animasi hanya berjalan sekali
      transition={{ duration: 0.8 }} // Durasi animasi
    >
      <div className="container mx-auto xl:w-6xl w-[450px]">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="flex space-x-8 items-center border-b border-gray-600 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center space-x-2 pb-2 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
        <div>{renderContent()}</div>
      </div>
    </motion.div>
  );
};

export default SkillsNavbar;
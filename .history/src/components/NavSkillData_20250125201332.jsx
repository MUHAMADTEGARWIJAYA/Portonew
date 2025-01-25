import  { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Star, Eye, Layout, Globe, Brush, PlusCircle, Code, Settings, Mic } from "lucide-react";

// Data untuk setiap tab
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

const TabContent = () => {
  const [activeTab, setActiveTab] = useState(1); // State untuk menyimpan tab aktif

  // Fungsi untuk merender konten berdasarkan tab aktif
  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {expertiseContent.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-center border border-gray-600 rounded-lg py-4 hover:bg-gray-800 transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
      case 2:
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {softwareContent.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-center border border-gray-600 rounded-lg py-4 hover:bg-gray-800 transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                animate={{ opacity: 1, y: 0 }}
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
    <div className="bg-gray-900 text-white p-6">
      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b border-gray-700">
        <button
          onClick={() => setActiveTab(1)}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 1
              ? "text-white border-b-2 border-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Expertise
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 2
              ? "text-white border-b-2 border-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Software
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 3
              ? "text-white border-b-2 border-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Language
        </button>
      </div>

      {/* Konten Tab */}
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
};

export default TabContent;
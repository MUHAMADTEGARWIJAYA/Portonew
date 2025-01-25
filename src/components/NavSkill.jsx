import { useState } from "react";
import { motion } from "framer-motion";
import { tabs, expertiseContent, softwareContent, languageContent } from "./SkillData";

const SkillsNavbar = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    const contentMap = {
      1: expertiseContent,
      2: softwareContent,
      3: languageContent,
    };

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
        {contentMap[activeTab]?.map((item) => (
          <motion.div
            key={item.id}
            className="flex shadow-white shadow-sm items-center justify-center border border-gray-600 rounded-lg py-4 hover:bg-gray-800 transition"
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
  };

  return (
    <motion.div
      className="bg-gray-900 text-white py-6 mx:mt-1 mt-32"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto xl:w-6xl w-fit">
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

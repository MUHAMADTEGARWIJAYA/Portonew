import { useState } from "react";


const tabs = [
  { id: 1, name: "Expertise", icon: "🔒" },
  { id: 2, name: "Software", icon: "💻" },
  { id: 3, name: "Language", icon: "🌍" },
];

const SkillsNavbar = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="bg-black text-white py-6">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="flex space-x-8 items-center border-b border-gray-700">
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
      </div>
    </div>
  );
};

export default SkillsNavbar;

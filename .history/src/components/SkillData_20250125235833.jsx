import { Briefcase, Star, Eye, Layout, Globe, Brush, PlusCircle, Code, Settings, Mic } from "lucide-react";
import { FaReact,FaHtml5,FaCss3Alt,FaJs,FaVuejs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress,SiMysql,SiMongodb  } from "react-icons/si";
export const tabs = [
  { id: 1, name: "Tech", icon: <Briefcase /> },
  { id: 2, name: "Software", icon: <Settings /> },
  { id: 3, name: "Language", icon: <Mic /> },
];

export const expertiseContent = [
  { id: 1, name: "HTML", icon: <FaHtml5 /> },
  { id: 2, name: "CSS", icon: <FaCss3Alt /> },
  { id: 3, name: "JavaScript", icon: <FaJs /> },
  { id: 4, name: "ReactJs", icon: <FaReact /> },
  { id: 5, name: "VueJs", icon: <FaVuejs /> },
  { id: 6, name: "ExpressJs", icon: <SiExpress /> },
  { id: 7, name: "Git", icon: <FaGitAlt /> },
  { id: 8, name: "Github", icon: <FaGithub /> },
  { id: 9, name: "Mysql", icon: <SiMysql /> },
  { id: 10, name: "MongoDB", icon: <SiMongodb /> },
];

export const softwareContent = [
  { id: 1, name: "Adobe Photoshop", icon: <Brush /> },
  { id: 2, name: "Figma", icon: <Layout /> },
  { id: 3, name: "Sketch", icon: <Eye /> },
  { id: 4, name: "Visual Studio Code", icon: <Code /> },

];

export const languageContent = [
  { id: 1, name: "English", icon: <Globe /> },
  { id: 2, name: "Indonesia", icon: <Globe /> },
  
];

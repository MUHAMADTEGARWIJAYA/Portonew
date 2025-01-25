import { Briefcase, Star, Eye, Layout, Globe, Brush, PlusCircle, Code, Settings, Mic } from "lucide-react";

export const tabs = [
  { id: 1, name: "Expertise", icon: <Briefcase /> },
  { id: 2, name: "Software", icon: <Settings /> },
  { id: 3, name: "Language", icon: <Mic /> },
];

export const expertiseContent = [
  { id: 1, name: "User Experience", icon: <Layout /> },
  { id: 2, name: "User Interface", icon: <Eye /> },
  { id: 3, name: "Art Direction", icon: <Brush /> },
  { id: 4, name: "Motion Design", icon: <Globe /> },
  { id: 5, name: "Branding", icon: <Star /> },
  { id: 6, name: "Web Design", icon: <Briefcase /> },
  { id: 7, name: "Project Management", icon: <PlusCircle /> },
];

export const softwareContent = [
  { id: 1, name: "Adobe Photoshop", icon: <Brush /> },
  { id: 2, name: "Figma", icon: <Layout /> },
  { id: 3, name: "Sketch", icon: <Eye /> },
  { id: 4, name: "Visual Studio Code", icon: <Code /> },
  { id: 5, name: "Git", icon: <Settings /> },
  { id: 6, name: "Slack", icon: <Mic /> },
];

export const languageContent = [
  { id: 1, name: "English", icon: <Globe /> },
  { id: 2, name: "Spanish", icon: <Globe /> },
  { id: 3, name: "French", icon: <Globe /> },
  { id: 4, name: "German", icon: <Globe /> },
  { id: 5, name: "Mandarin", icon: <Globe /> },
];

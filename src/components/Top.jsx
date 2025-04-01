import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiScrollToBottomLine } from "react-icons/ri";
export default function ProfileCard() {
  const [positions, setPositions] = useState(
    Array.from({ length: 10 }, () => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(
        positions.map(() => ({
          top: Math.random() * 100 + "%",
          left: Math.random() * 100 + "%",
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [positions]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#2C2C52] overflow-hidden">
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute w-3 h-3 rounded-full bg-white opacity-50"
          animate={{ top: pos.top, left: pos.left }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      ))}
      
      <div className="relative text-center /*bg-[#2C2C52]*/ p-10 rounded-xl  text-white">
        <div className="w-24 h-24 rounded-full mx-auto mb-4">
          <img
            src="/image.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="text-2xl font-semibold">Muhammad Tegar Wijaya</h2>
        <p className="text-gray-300">Im a Fullstack Developer</p>
        <div className="flex justify-center space-x-4 my-4">
          <FaInstagram className="text-xl cursor-pointer" />     
         <a href="https://github.com/MUHAMADTEGARWIJAYA"><FaGithub className="text-xl cursor-pointer" /></a> 
         <a href="https://www.linkedin.com/in/muhamad-tegar-wijaya/"> <FaLinkedin className="text-xl cursor-pointer"/></a>
        </div>
         
           <a href="mailto:tegarmuhamad922@gmail.com">
          <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-full font-medium">
            Hire me
          </button>
        </a>
         <div className="flex items-center justify-center text-white px-4 py-2 rounded-full  mb-4">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span className="font-medium">Open to Work</span>
        </div>
        <div className="relative top-56 left-36 transform -translate-x-1/2 flex items-center space-x-2 justify-center">
            <RiScrollToBottomLine/>
             <p className=" text-sm  text-white">  Scroll Down</p>
        </div>
       
      </div>
    </div>
  );
}

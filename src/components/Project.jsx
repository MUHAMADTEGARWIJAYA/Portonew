import PropTypes from "prop-types"; // Import PropTypes
import Gift1 from "../assets/images/Gift1.gif";
import Gift2 from "../assets/images/Gift2.gif";
import Gift3 from "../assets/images/Gift3.gif";
import { FaReact } from "react-icons/fa6";
import { SiExpress,SiMysql  } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
const GifCard = ({ title, description, gif, technologies }) => {
  return (
    <div className="max-w-[400px] rounded-lg overflow-hidden bg-gray-900  shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
      <img className="w-full h-auto object-cover" src={gif} alt={title} />
      <div className="px-4 py-6">
        <h2 className="font-bold text-lg text-white">{title}</h2>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs flex justify-center items-center gap-3 bg-gray-700 text-gray-300 px-2 py-1 rounded">
              {tech.name} {tech.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

GifCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const App = () => {
  const cards = [
    {
      id: 1,
      title: "Website Absensi Online",
      description: "Website berbasis absensi online dengan take foto dan info lokasi.",
      gif: Gift1,
      technologies: [
        {name:"React", icon: <FaReact />},
        {name:"Mysql", icon: <SiMysql/>},
        {name:"ExpressJs", icon: <SiExpress/>},
        {name:"Tailwindcss",icon: <RiTailwindCssFill/>},
      
      ],
    },
    {
      id: 2,
      title: "Website Organisasi",
      description: "Website organisasi dengan landing page dan admin dashboard.",
      gif: Gift2,
      technologies:[
        {name:"React", icon: <FaReact />},
        {name:"Mysql", icon: <SiMysql/>},
        {name:"ExpressJs", icon: <SiExpress/>},
        {name:"Tailwindcss",icon: <RiTailwindCssFill/>},
      
      ],
    },
    {
      id: 3,
      title: "Kambing Fresh",
      description: "E-commerce untuk peternak kambing dari program Kampus Merdeka.",
      gif: Gift3,
      technologies: [
        {name:"React", icon: <FaReact />},
        {name:"Mysql", icon: <SiMysql/>},
        {name:"ExpressJs", icon: <SiExpress/>},
        {name:"Tailwindcss",icon: <RiTailwindCssFill/>},
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#2C2C52]  pt-28 px-6">
   <h1 className="text-4xl w-full font-bold text-center mb-10 h-20 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700 animate-fade-in">
Other Project
</h1>
      <div className="flex flex-col xl:flex-row gap-12 justify-center items-center mx-auto">
        {cards.map((card) => (
          <GifCard
            key={card.id}
            title={card.title}
            description={card.description}
            gif={card.gif}
            technologies={card.technologies}
          />
        ))}
      </div>

      <div className="flex w-full justify-center items-center py-10">
        <button className="relative inline-block px-6 py-3 font-semibold text-white  rounded-xl shadow-md transition-transform transform hover:scale-105 active:scale-95">
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 opacity-0 transition-opacity duration-500 hover:opacity-100"></span>
          <span className="relative block">You can find more on my github</span>
        </button>
      </div>
    </div>
  );
};

export default App;

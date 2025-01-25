import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

// Import GIF dari folder aset
import Gif1 from "./assets/gif1.gif";
import Gif2 from "./assets/gif2.gif";
import Gif3 from "./assets/gif3.gif";

const GifCard = ({ title, description, gif }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative pb-[56.25%]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={gif}
          alt={title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

// Tambahkan deklarasi PropTypes untuk GifCard
GifCard.propTypes = {
  title: PropTypes.string.isRequired, // title harus berupa string
  description: PropTypes.string.isRequired, // description harus berupa string
  gif: PropTypes.string.isRequired, // gif harus berupa string (path file)
};

const App = () => {
  const cards = [
    {
      id: 1,
      title: "Universal UI Kit",
      description: "The Most Universal UI Kit for Figma",
      gif: Gif1, // Ganti dengan file GIF internal
    },
    {
      id: 2,
      title: "Data Visualization",
      description: "Charts and Infographics constructor",
      gif: Gif2, // Ganti dengan file GIF internal
    },
    {
      id: 3,
      title: "Motion Design",
      description: "High-quality motion design resources",
      gif: Gif3, // Ganti dengan file GIF internal
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Featured GIFs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <GifCard
              key={card.id}
              title={card.title}
              description={card.description}
              gif={card.gif}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

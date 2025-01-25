
import PropTypes from "prop-types"; // Import PropTypes

// Import GIF dari folder aset
import Gift1 from "../assets/images/Gift1.gif";

const GifCard = ({ title, description, gif }) => {
  return (
    <div className="w-[200px] rounded-lg overflow-hidden bg-blue-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <img
          className="w-full h-auto object-cover"
          src={gif}
          alt={title}
        />
      </div>
      <div className="px-4 py-6">
        <h2 className="font-bold text-sm text-white">{title}</h2>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">UI Design</span>
          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">Motion Design</span>
          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">Web Design</span>
        </div>
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
      title: "Website Absensi Online",
      description: "Website berbasis absensi online dengan menggunakan take foto sudah ada keterangan jam, tanggal, dan lokasi saat take foto, terdapat dua tampilan yaitu untuk user dana admin.",
      gif: Gift1, // Ganti dengan file GIF internal
    },
    {
      id: 2,
      title: "Data Visualization",
      description: "Charts and Infographics constructor",
      gif: Gift1, // Ganti dengan file GIF internal
    },
    {
      id: 3,
      title: "Motion Design",
      description: "High-quality motion design resources",
      gif: Gift1, // Ganti dengan file GIF internal
    },
  ];

  return (
    <div className="min-h-screen bg-red-900 flex flex-row justify-center items-center ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

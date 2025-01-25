
import PropTypes from "prop-types"; // Import PropTypes

// Import GIF dari folder aset
import Gift1 from "../assets/images/Gift1.gif";
import Gift2 from "../assets/images/Gift2.gif"
import Gift3 from "../assets/images/Gift3.gif"
const GifCard = ({ title, description, gif }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <img
          className="w-full h-auto object-cover"
          src={gif}
          alt={title}
        />
      </div>
      <div className="px-4 py-6">
        <h2 className="font-bold text-lg text-white">{title}</h2>
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
      description: "Website berbasis absensi online dengan menggunakan take foto sudah ada keterangan jam, tanggal, dan lokasi saat take foto, terdapat dua tampilan yaitu untuk user dan admin.",
      gif: Gift1, // Ganti dengan file GIF internal
    },
    {
      id: 2,
      title: "Website Organisasi",
      description: "Website organisasi menampilkan landingpage organisasi dan juga include dengan admin dasboard, dengan ini client bisa mengubah data secara dinamis",
      gif: Gift2, // Ganti dengan file GIF internal
    },
    {
      id: 3,
      title: "Kambing Fresh",
      description: "Kambing Fresh adalah hasil dari massive project kampus merdeka Studi Independen, kambing fresh yaotu website E-commerce untuk para peternak kambing agar produknya bisa dipasarkan secara online ",
      gif: Gift3, // Ganti dengan file GIF internal
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900  justify-center items-center px-20 py-8">
         <h1 className="text-4xl font-bold text-center text-white mb-8">Projects</h1>
      <div className="container bg-blue-600 justify-center items-center flex mx-auto px-4">
       
        <div className="flex gap-12 justify-center items-center max-w-6xl  xl:flex-row flex-col ">
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
      

  <div className="flex w-full justify-center items-center py-10">
    <button
      className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-md cursor-pointer rounded-xl shadow-white transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
    >
      <span
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>

      <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-900">
        <div className="relative z-10 flex items-center space-x-2">
          <span className="transition-all duration-500 group-hover:translate-x-1" >Project Lainya?</span
          >
          <svg
            className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
            data-slot="icon"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </span>
    </button>
  </div>
</div>

    
  );
};

export default App;

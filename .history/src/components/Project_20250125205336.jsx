
import PropTypes from "prop-types";

const VideoCard = ({ title, description, videoUrl }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative pb-[56.25%]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          controls
          muted
          loop
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

// Menambahkan validasi tipe props dengan PropTypes
VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};

// Menambahkan nilai default (opsional)
VideoCard.defaultProps = {
  title: "Default Title",
  description: "Default Description",
  videoUrl: "https://www.example.com/default-video.mp4",
};

const App = () => {
  const cards = [
    {
      id: 1,
      title: "Universal UI Kit",
      description: "The Most Universal UI Kit for Figma",
      videoUrl: "https://www.example.com/video1.mp4", // Ganti dengan URL video Anda
    },
    {
      id: 2,
      title: "Data Visualization",
      description: "Charts and Infographics constructor",
      videoUrl: "https://www.example.com/video2.mp4", // Ganti dengan URL video Anda
    },
    {
      id: 3,
      title: "Motion Design",
      description: "High-quality motion design resources",
      videoUrl: "https://www.example.com/video3.mp4", // Ganti dengan URL video Anda
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Featured Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <VideoCard
              key={card.id}
              title={card.title}
              description={card.description}
              videoUrl={card.videoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

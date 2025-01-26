

const DownloadCVButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../assets/images/CV (MUHAMAD TEGAR WIJAYA).pdf"; // Path ke file CV Anda
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="24px"
        width="24px"
      >
        <g id="SVGRepo_iconCarrier">
          <g id="Interface / Download">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#f1f1f1"
              d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
              id="Vector"
            ></path>
          </g>
        </g>
      </svg>
      Download CV
    
    </button>
  );
};

export default DownloadCVButton;

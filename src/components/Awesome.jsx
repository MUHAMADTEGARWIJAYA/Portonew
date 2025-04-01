import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { useEffect, useRef } from "react";
  

const Card = () => {
 const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.2,
    }));

    let shootingStar = null;
    let shootingStarTimeout = null;

    function createShootingStar() {
      shootingStar = {
        x: Math.random() * canvas.width,
        y: 0,
        length: Math.random() * 300 + 100,
        speed: Math.random() * 4 + 2,
        opacity: Math.random() * 0.8 + 0.2,
      };
    }

    function animate() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "white";
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });
      
      if (shootingStar) {
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x - shootingStar.length, shootingStar.y + shootingStar.length);
        ctx.strokeStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        shootingStar.x -= shootingStar.speed;
        shootingStar.y += shootingStar.speed;
        
        if (shootingStar.y > canvas.height) {
          shootingStar = null;
          clearTimeout(shootingStarTimeout);
          shootingStarTimeout = setTimeout(createShootingStar, 3000); // Bintang jatuh muncul setiap 5 detik
        }
      } else if (!shootingStarTimeout) {
        shootingStarTimeout = setTimeout(createShootingStar, 5000);
      }
      
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return (
    <div className="flex relative bg-white flex-col justify-center h-screen items-center">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
   <h1 className="xl:text-4xl text-3xl relative  font-bold text-center mb-10 h-20 text-transparent bg-clip-text bg-gradient-to-r from-gray-50 to-slate-100 animate-fade-in">
  My Best Project, Still Actively Maintained and Improved
</h1>

    <div className="card w-80 bg-[#2C2C52]  rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,5)]">
   
      <div className="card-content p-4 relative z-10">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-xl shadow-lg mr-3 border-2 border-white/20 bg-white flex items-center justify-center text-white font-bold text-[0.6rem] leading-tight">
            <div className="text-center"><img src="/notes.png" alt="" /></div>
          </div>
          <div>
            <h2 title="SuperApp" className="text-lg font-bold text-white/90 truncate">
              NoteKu
            </h2>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block bg-green-500/20 text-green-300/90">
              Available
            </span>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-white/80 mb-2">Core Features</h3>
          <div className="flex flex-wrap -mx-1">
            <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
              Auth Jwt
            </div>
            <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
             A real-time collaborative
            </div>
            <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
              taking app with group features
            </div>
            <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
              Update Until Now
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-white/80 mb-2">Tech Stack</h3>
          <ul className="text-xs text-white/60 grid grid-cols-2  gap-1">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-3 h-3 mr-1 text-white/70">
                <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
              <span title="Dark Mode" className="truncate">Vue</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-3 h-3 mr-1 text-white/70">
                <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
              <span title="Custom Themes" className="truncate">ExpressJS</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-3 h-3 mr-1 text-white/70">
                <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
              <span title="Password Protection" className="truncate">MongoDB</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-3 h-3 mr-1 text-white/70">
                <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
              <span title="Data Export" className="truncate">Pinia</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-3 h-3 mr-1 text-white/70">
                <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
              <span title="Widgets" className="truncate">Vue Tanstack</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-3 h-3 mr-1 text-white/70">
                <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
              <span title="Widgets" className="truncate">Socket IO</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-3 h-3 mr-1 text-white/70">
                <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
              <span title="Widgets" className="truncate">Axios</span>
            </li>
             <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-3 h-3 mr-1 text-white/70">
                <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
              <span title="Widgets" className="truncate">Mongoose</span>
            </li>
               <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-3 h-3 mr-1 text-white/70">
                <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
              <span title="Widgets" className="truncate">Vue Toastify</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-between mx-5 items-center space-x-2">
         <a href="https://github.com/MUHAMADTEGARWIJAYA/Client-Noteku"> <button className="flex-1 bg-white/10 text-white/90 rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/20 flex items-center justify-center border w-28 border-white/20">
           <FaGithub className="mr-2 h-4 w-4"/>
            Github
          </button>
          </a>
          <a href="https://client-noteku.vercel.app/login"><button className="flex-1 bg-white/20 text-white rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/30 flex items-center justify-center">
           <FiLink className="mr-2 h-4 w-4"/>
            Preview Site
          </button>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;

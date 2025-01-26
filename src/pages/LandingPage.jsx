import Header from "../components/Header"
import Navbar from "../components/Navbar"
import StatsSection from "../components/Riwayat"
import VideoCard from '../components/Project'
import SkillsNavbar from "../components/NavSkill"
import Footer from "../components/Footer"

const LandingPage = () => {


  return (
    <div className="bg-gray-900">
        <Navbar />


        <section id="home">
        <Header />
        <StatsSection />
        <SkillsNavbar/>
        <VideoCard/>
    
        <Footer/>
        </section>
  </div>
   
  )
}

export default LandingPage;

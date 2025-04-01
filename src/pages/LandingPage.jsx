import Header from "../components/Header"
import Top from "../components/Top"
import Navbar from "../components/Navbar"
import StatsSection from "../components/Riwayat"
import VideoCard from '../components/Project'
import SkillsNavbar from "../components/NavSkill"
import Card from "../components/Awesome"
import Footer from "../components/Footer"

const LandingPage = () => {


  return (
    <div className="bg-[#2C2C52]">
        <Navbar />


        <section id="home">
        <Top/>
        <Header />
        <StatsSection />
        <SkillsNavbar/>
        <Card/>
        <VideoCard/>    
        <Footer/>
        </section>
  </div>
   
  )
}

export default LandingPage;

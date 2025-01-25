import Header from "../components/Header"
import Navbar from "../components/Navbar"
import StatsSection from "../components/Riwayat"

import SkillsNavbar from "../components/NavSkill"
const LandingPage = () => {


  return (
    <div className="bg-gray-900">
        <Navbar />


        <section id="home">
        <Header />
        <StatsSection />
        <SkillsNavbar/>
        
        </section>
  </div>
   
  )
}

export default LandingPage;

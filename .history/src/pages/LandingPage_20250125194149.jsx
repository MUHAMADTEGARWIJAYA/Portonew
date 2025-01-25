import Header from "../components/Header"
import Navbar from "../components/Navbar"
import StatsSection from "../components/Riwayat"
import SkillsGrid from "../components/Skill"
const LandingPage = () => {


  return (
    <div>
        <Navbar />
        <section id="home">
        <Header />
        <StatsSection />
        < SkillsGrid/>
        </section>
  </div>
   
  )
}

export default LandingPage;

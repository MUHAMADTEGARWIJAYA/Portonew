import Header from "../components/Header"
import Navbar from "../components/Navbar"
import StatsSection from "../components/Riwayat"
const LandingPage = () => {


  return (
    <div>
        <Navbar />
        <section id="home">
        <Header />
        <StatsSection />
        </section>
  </div>
   
  )
}

export default LandingPage;

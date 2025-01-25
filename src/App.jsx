import LandingPage from "./pages/LandingPage"
import { Routes, Route } from "react-router-dom"
import { useEffect } from "react";
function App() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (

    <Routes>
      <Route path="/" element= {<LandingPage />}/>
       
    </Routes>
   
  )
}

export default App

import React from "react";
import Header from "../components/Header"; // Pastikan path ini benar
import Navbar from "../components/Navbar"; // Pastikan path ini benar

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-bold">Welcome to My Portfolio</h2>
        <p>This is the landing page of my portfolio website.</p>
      </main>
    </div>
  );
};

export default LandingPage;
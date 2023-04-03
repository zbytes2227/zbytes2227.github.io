import React from "react";
import AboutMe from "../Components/AboutMe";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;

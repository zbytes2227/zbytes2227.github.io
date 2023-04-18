import React, { useEffect } from "react";
import AboutMe from "../Components/AboutMe";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../Components/Contact";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <div className="animation" data-aos="fade-up">
        <AboutMe />
      </div>
      <div className="animation" data-aos="fade-up">
        <Skills />
      </div>
      <div className="animation" data-aos="fade-up">
        <Projects />
      </div>
      <div className="animation" data-aos="fade-up">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;

import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl text-center lilita-font sm:text-4xl text-[#ffff]">
        <span className="text-[#a855f7]">Hi, I am </span>
        Ujjwal Kushwaha
      </h1>

      <div className="flex flex-col-reverse justify-around items-center p-1 mx-auto sm:py-12 lg:py-18 lg:flex-row lg:justify-evenly">
        <p className="text-gray-300 text-xl m-4 sm:mx-24 w-fit">
          Hello there! My name is Ujjwal Kushwaha and I am currently pursuing a
          diploma in computer science and engineering. After completing my 10th
          grade, I decided to pursue this field because of my love for computers
          and the tech world.
          <br />
          <br /> As a full stack web developer, I specialize in using the MERN
          stack to develop applications. I also have experience using popular
          CSS frameworks such as Tailwind and Bootstrap. I have been involved in
          web development for over two years now and am passionate about
          creating engaging and user-friendly websites and applications. Aside
          from web development, I am also interested in exploring other areas of
          technology such as Python, IoT, robotics, and more. Currently, I am
          actively learning and expanding my skills in both Python and Java. In
          my free time, I enjoy reading about new technology and exploring the
          latest trends in the tech industry.
          <br />
          <br /> I am always looking for ways to improve my skills and stay
          up-to-date with the latest developments in the field. Thank you for
          taking the time to read about me, and feel free to connect with me to
          discuss any exciting opportunities or ideas you may have in the tech
          world!
        </p>

        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/img/profile-img.jpg"
            alt=""
            className="object-contain h-76 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

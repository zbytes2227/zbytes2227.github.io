import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProjectBox from "../Components/ProjectBox";

function Projects() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl text-center lilita-font sm:text-4xl text-[#ffff]">
        My Creative <span className="text-[#a855f7]">Projects</span>
      </h1>

      <div className="my-10">
        <div className="flex flex-wrap justify-center">
          <ProjectBox
            name={"Stickers Vibe"}
            img={"./project-img/stickers-vibe-img.png"}
            github_link={"https://github.com/zbytes2227/stickers-vibe"}
            project_link={"https://stickers-vibe.vercel.app/"}
          />
          <ProjectBox
            name={"Task Mate"}
            img={"./project-img/task-mate-img.png"}
            github_link={"https://github.com/zbytes2227/task-mate"}
            project_link={"https://task-mate-zbytes.vercel.app/"}
          />
          <ProjectBox
            name={"Wallet Boss"}
            img={"./project-img/walletBoss-img.png"}
            github_link={"https://github.com/zbytes2227/thewalletboss"}
            project_link={"https://zbytes2227.github.io/thewalletboss"}
          />
          <ProjectBox
            name={"PolyA2z"}
            img={"./project-img/polya2z-img.png"}
            github_link={"https://github.com/polya2z/polya2z.github.io"}
            project_link={"https://polya2z.github.io/"}
          />

          <ProjectBox
            name={"Contacts App"}
            img={"./project-img/contacts-img.png"}
            github_link={"https://github.com/zbytes2227/my-contacts"}
            project_link={"https://zbytes2227.github.io/my-contacts/"}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Projects;

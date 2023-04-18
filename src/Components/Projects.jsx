import React from "react";
import Marquee from "react-fast-marquee";
import ProjectBox from "./ProjectBox";

function Projects() {
  return (
    <>
      <div id="work" className="mx-2 my-28">
        <h1 className="text-5xl my-5 text-center font-bold sm:text-5xl text-[#ffff]">
          My Projects
        </h1>

        <div className="my-10">
          <div className="flex flex-wrap justify-center">
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


        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
          <a
            href="#/projects"
            className="px-8 py-3 text-lg font-semibold rounded bg-[#a855f7] text-center rounded-full mx-5"
          >
            See all my projects
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;

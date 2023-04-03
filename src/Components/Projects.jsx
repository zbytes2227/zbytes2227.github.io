import React from 'react'
import Marquee from "react-fast-marquee";
import ProjectBox from './ProjectBox';

function Projects() {
    return (
        <>
            <div id='work' className='mx-2 my-28'>

                <h1 class="text-5xl my-5 text-center font-bold sm:text-5xl text-[#ffff]">
                    My Projects
                </h1>

                <div className='my-10'>

                    <div class="flex flex-wrap justify-center">
                      
                            <ProjectBox name={"Wallet Boss"} img={"./project-img/walletBoss-img.png"} />
                            <ProjectBox name={"Wallet Boss"} img={"./project-img/polya2z-img.png"} />
                    </div>
                </div>
                
                <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
                    <a
                        href="#/projects"
                        class="px-8 py-3 text-lg font-semibold rounded bg-[#a855f7] text-center rounded-full mx-5"
                    >
                        See all my projects
                    </a>
                </div>
            </div>
        </>
    )
}

export default Projects
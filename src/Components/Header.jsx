import React from "react";
import Typewriter from "typewriter-effect";

function Header() {
    return (
        <>

            <div className="flex flex-col-reverse justify-around p-1 mx-auto sm:py-12 lg:py-18 lg:flex-row lg:justify-evenly">
                <div className="flex flex-col justify-center p-6 text-left lg:text-left">
                    <div className="">
                        <div className="mb-[.7rem] ">

                            <h1 className="text-3xl lilita-font sm:text-4xl text-[#FFF]">
                                Hello it's me       </h1>
                            <h1 className="text-6xl sm:text-6xl text-[#FFF]">
                                <span className="text-[#a855f7] lilita-font">UJJWAL KUSHWAHA</span>
                            </h1>
                        </div>
                        {/* <div className="my-[2rem]">
                            <h1 className="text-3xl font-bold sm:text-5xl text-[#FFFF]">
                                a <span className="text-[#a855f7]">self-taught</span> 
                            </h1>
                        </div> */}
                        <div className="mb-[3rem]">
                            <h1 className="text-3xl lilita-font sm:text-4xl text-[#ffff]"> <span className="text-[#a855f7]">I'm a </span>
                                <Typewriter
                                    options={{
                                        strings: ["Web Developer", "Freelancer", ""],
                                        autoStart: true,
                                        loop: true,
                                        cursor: "_"
                                    }}
                                />
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a
                            href="/#/projects"
                            className="px-8 py-3 text-lg rounded-full text-center rounded-full mx-3 font-semibold rounded bg-[#a855f7]"
                            >
                            See my work
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img
                        src="/img/head_logo.png"
                        alt="Front page logo"
                        className="object-contain h-76 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-xl"
                        />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <svg
                    width="24"
                    height="14"
                    viewBox="0 0 24 14"
                    fill="none"
                    className="animate-bounce"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 2L12 12L22 2"
                        stroke="#E3E4E6"
                        strokeWidth="2.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </div>
        </>
    );
}

export default Header;

import React from 'react'

function AboutMe() {
  return (
    <>
    

    <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-18 lg:flex-row lg:justify-center">
        <div className="flex flex-col justify-center p-6 text-center lg:text-left">
          <div className="">
          <div className="max-w-xl relative z-10 flex justify-center items-start flex-col text-start w-full h-full py-10">
          <p className="uppercase  font-bold text-start text-3xl my-5 font-WorkSansSemiBold text-gray-400 pl-2 border-l-2 border-purple-500">
            100 bits <span className="text-white">about me</span>
          </p>
          <h1 className="max-w-xl text-xl text-purple-300">
          I'm Ujjwal, a full-stack web developer{" "}
            <span className="px-1 text-white">
             with a passion for creating dynamic applications using the MERN stack (MongoDB, Express, React, and Node.js). I specialize in front-end and back-end development, as well as database management. I also have experience using CSS frameworks like Bootstrap and Tailwind CSS 😊.
            </span>
          </h1>
        </div>
          </div>
  
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="about-img.jpeg"
            alt=""
            className="object-contain h-62 sm:h-80 lg:h-86 xl:h-112 2xl:h-128 rounded-xl"
          />
        </div>
      </div>

    </>
  )
}

export default AboutMe
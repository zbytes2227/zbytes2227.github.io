import React from 'react'

function AboutMe() {
  return (
    <>
    

    <div class="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-18 lg:flex-row lg:justify-center">
        <div class="flex flex-col justify-center p-6 text-center lg:text-left">
          <div class="">
          <div class="max-w-xl relative z-10 flex justify-center items-start flex-col text-start w-full h-full py-10">
          <h1 class="uppercase text-start text-3xl my-5 font-WorkSansSemiBold text-gray-400 pl-2 border-l-2 border-purple-500">
            100 bits <span class="text-white">about me</span>
          </h1>
          <h1 class="max-w-xl text-xl text-purple-300">
          I'm Ujjwal, a full-stack web developer{" "}
            <span class="px-1 text-white">
             with a passion for creating dynamic applications using the MERN stack (MongoDB, Express, React, and Node.js). I specialize in front-end and back-end development, as well as database management. I also have experience using CSS frameworks like Bootstrap and Tailwind CSS to create visually stunning and responsive user interfaces 😊.
            </span>
          </h1>
        </div>
          </div>
  
        </div>
        <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="about-img.jpeg"
            alt=""
            class="object-contain h-62 sm:h-80 lg:h-86 xl:h-112 2xl:h-128 rounded-xl"
          />
        </div>
      </div>

    </>
  )
}

export default AboutMe
import React from 'react'

function Navbar() {
  return (
    <>
      <nav class="flex backdrop-blur-md bg-black/50 py-2 sticky top-0 z-50 justify-between px-5 w-full items-center">
        <div class="h-10 flex items-center">
          <img className="h-10" src="./head-img.svg" alt="logo" />
          <h1 class="text-2xl alkatra-font sm:text-3xl text-[#ffff]">
            ZBYTES</h1>
        </div>
        <div class=" sm:hidden">
          <div class=" rounded-md p-2 inline-flex items-center justify-center fill-white hover:text-gray-500 ">
            <button class="inline-flex items-center lg:hidden focus-visible:ring active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="white"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden sm:flex items-center">
          <a href='/' class="mx-6 text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]">
            Home
          </a>
          <a href='#/about' class="mx-6 text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]">
            About
          </a>
          <a href='#/contact' class="mx-6 text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]">
            Contact
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
import React, { useState, useEffect } from "react";
import {Animated} from "react-animated-css";

function Navbar() {

  const [MenuState, setMenuState] = useState(true);
  function toogleMenu() {
    console.log("Clicked");
    setMenuState(!MenuState);
    console.log(MenuState);
    // disableScroll(!MenuState);
  }

  // Stop the scroll
  useEffect(() => {
    if (!MenuState) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [MenuState]);

  return (
    <>
      <div
        className="fixed h-screen w-full z-40 backdrop-blur-xl bg-opacity-75 shadow-md"
        hidden={MenuState}  style={{ transition: "right 1s ease-in-out" }}


      >
        <div className="flex h-screen flex-col  justify-center items-center z-50 py-24" >
       
            <a
              href="/"
              className="mx-6 alkatra-font border-b text-4xl text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]"
            >
              Home
            </a>
            <a
              href="#/about"
              className="mx-6 my-14 alkatra-font border-b text-4xl text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]"
            >
              About
            </a>
            <a
              href="#/contact"
              className="mx-6 alkatra-font border-b text-4xl text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]"
            >
              Contact
            </a>
    
          
        </div>
      </div>

      <nav className="flex backdrop-blur-md bg-black/50 py-2 sticky top-0 z-50 justify-between px-5 w-full items-center z-1">
        <div className="h-10 flex items-center my-1">
          <img className="h-12" src="./prof_logo.png" alt="logo" />
          <h1 className="text-2xl px-2 alkatra-font sm:text-3xl text-[#ffff]">
            ZBYTES
          </h1>
        </div>
        <div className=" sm:hidden">
          <div className=" rounded-md p-2 inline-flex items-center justify-center fill-white hover:text-gray-500 ">
            <button
              onClick={toogleMenu}
              className="inline-flex items-center lg:hidden focus-visible:ring active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
            >
              {MenuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="White"
                  stroke="white"
                  className="bi bi-x h-6 w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="hidden sm:flex items-center">
          <a
            href="/"
            className="mx-6 text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]"
          >
            Home
          </a>
          <a
            href="#/about"
            className="mx-6 text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]"
          >
            About
          </a>
          <a
            href="#/contact"
            className="mx-6 text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

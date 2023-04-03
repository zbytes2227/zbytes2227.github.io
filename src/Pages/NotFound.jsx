import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex items-center text-center justify-center h-screen">
        <h1 class="text-5xl lilita-font sm:text-4xl text-[#ffff]">
        404 Error <br/><br/>
          <span class="text-[#a855f7] text-3xl">Uh-Oh! Something Went Wrong.</span>
        </h1>
      </div>
      <Footer/>
    </>
  );
}

export default NotFound;

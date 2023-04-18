import React from "react";

function Footer() {
  return (
    <>
      <div
        id="contact"
        className="pt-10 h-[30vh] flex justify-center items-center flex-col"
      >
        <div className="text-center">
          <p className="text-3xl text-gray-300">Thank You 😊</p>
          <p className="text-gray-300">@Ujjwal - Zbytes</p>
        </div>
        <div className="flex justify-center items-center">
          <img className="h-8 m-2" src="./footer-img/github.svg" alt="Image" />
          <img className="h-10 m-2" src="./footer-img/mail.svg" alt="Image" />
          <img className="h-10 m-2" src="./footer-img/linkedin.svg" alt="Image" />
        </div>
      </div>
    </>
  );
}

export default Footer;

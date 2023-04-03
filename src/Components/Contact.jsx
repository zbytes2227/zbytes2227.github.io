import React from "react";

function Contact() {
  return (
    <>
       <div class="text-center mt-24">
       <h1 class="text-4xl lilita-font sm:text-5xl text-[#FFF]">
       Connect with me   </h1>
        </div>
      <div className="flex justify-center m-5 ">
        <div class="p-4 w-full md:w-1/2 lg:w-1/3 lg:mx-auto bg-gray-800 p-5 rounded">
          <form>
            <div className="flex justify-center items-center">
              <div>
              <p class="text-2xl my-5 text-left font-semibold sm:text-3xl text-white">
              Don't be shy, say Hiiii !  💬</p>
              </div>
              <div>
              <img
                class="w-24 mx-auto mb-5"
                src="prof_logo.png"
                />
                </div>
            </div>
            <div>
              <label class="block mb-2 text-purple-500" for="username">
                Fill the form, I will contact you back! soon...
              </label>
              <input
                class="w-full bg-gray-200 p-2 mb-6 font-bold text-purple-600 border-b-2 border-purple-500 outline-none focus:bg-gray-300"
                type="text"
                name="jhgfd"
                placeholder="Your Name"
              />
            </div>

            <div>
              {/* <label class="block mb-2 text-purple-500" for="username">
        Username
      </label> */}
              <input
                class="w-full bg-gray-200 p-2 mb-6 text-purple-600 border-b-2 border-purple-500 outline-none focus:bg-gray-300"
                type="email"
                name="username"
                placeholder="Your Email-Id"
              />
            </div>

            <div>
              {/* <label class="block mb-2 text-purple-500" for="username">
        Username
      </label> */}
              <textarea
                class="w-full bg-gray-200 p-2 mb-6 text-purple-600 border-b-2 border-purple-500 outline-none focus:bg-gray-300"
                type="text"
                name="username"
                rows={4}
                placeholder="Your Message"
              />
            </div>

            <div>
              <button
                class="w-full bg-[#a855f7] hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

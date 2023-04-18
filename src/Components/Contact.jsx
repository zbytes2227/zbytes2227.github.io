import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [Feedback, setFeedback] = useState("");
  const [FeedbackStatus, setFeedbackStatus] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateName = () => {
    if (!name) {
      setNameError("Name is required.");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    if (!email) {
      setEmailError("Email is required.");
      return false;
    }
    if (!re.test(email)) {
      setEmailError("Invalid email format.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateMessage = () => {
    if (!message) {
      setMessageError("Message is required.");
      return false;
    }
    if (message.length > 5000) {
      setMessageError("Message must be no longer than 5000 characters.");
      return false;
    }
    setMessageError("");
    return true;
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidMessage = validateMessage();
    if (isValidName && isValidEmail && isValidMessage) {
      try {
        const response = await fetch(
          "https://contact-form-api-portfolio.onrender.com/api/new/application",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              message,
            }),
          }
        );
        const data = await response.json();

        // console.log(data);
        setFeedback(data.msg);
        setFeedbackStatus(data.status);

        if (data.status === "Success") {
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setFeedback("");
          }, 10000);
        }
        // handle response
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
  };
  return (
    <>
      <div className="text-center block lg:hidden">
        <h1 className="text-4xl lilita-font sm:text-5xl text-[#FFF]">
          Connect with me{" "}
        </h1>
      </div>

      <div className="flex justify-center m-5 ">
        <div className="hidden lg:block w-full md:w-1/2 lg:w-2/3 m-3 bg-gray-800 p-5 rounded">
          <div className="text-center hidden lg:block">
            <p className="text-4xl lilita-font sm:text-5xl text-[#FFF]">
              Connect with me{" "}
            </p>
          </div>
          <div className="text-center mt-3 hidden lg:block">
            <p className="text-lg text-[#FFF]">
              I'd love to hear from you. If you have any questions, comments, or
              just want to say hello, please fill out the contact form or send
              me an email at zbytes0@gmail.com . I'll do my best to get back to
              you as soon as possible. If you have a business inquiry or are
              interested in working with me, please include detailed information
              about your project or opportunity in your message. Thank you for
              your interest in getting in touch. I look forward to hearing from
              you soon!
            </p>
          </div>
          <div className="flex text-white flex-col mx-24 mt-8 text-xl">
            <div className="bg-gray-600 p-2 rounded-lg m-1 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-envelope-at-fill inline"
                viewBox="0 0 16 16"
              >
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
              </svg>
              <p className="text-bold inline ml-3">zbytes0@gmail.com</p>
            </div>

            <a
              href="https://github.com/zbytes2227"
              className="bg-gray-600 p-2 rounded-lg m-1 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <p className="text-bold inline ml-3">@zbytes2227</p>
            </a>

            <a
              href="https://www.linkedin.com/in/ujjwal-kushwaha-387699225/"
              className="bg-gray-600 p-2 rounded-lg m-1 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <p className="text-bold inline ml-3">@Ujjwal-Kushwaha</p>
            </a>
          </div>
        </div>

        <div className="p-4 m-3 w-full md:w-1/2 lg:w-1/3 lg:mx-auto bg-gray-800 p-5 rounded">
          <form onSubmit={handleSubmit}>
            {Feedback ? (
              <div
                className="bg-green-200 border-green-600 mb-4 text-green-600 border-l-4 p-4"
                role="alert"
              >
                <p className="">
                  <span className="font-bold">{FeedbackStatus}</span>
                  {": "}
                  {Feedback}
                </p>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <div>
                  <p className="text-2xl my-5 text-left font-semibold sm:text-3xl text-white">
                    Don't be shy, say Hiiii ! 💬
                  </p>
                </div>
                <div>
                  <img className="w-24 mx-auto mb-5" alt="contact-brand-logo" src="/img/prof_logo.png" />
                </div>
              </div>
            )}

            <div>
              {/* <label className="block mb-2 text-purple-500" htmlFor="username">
                Fill the form, I will contact you back! soon...
              </label> */}
              <input
                className="w-full bg-gray-200 p-2 mb-6 text-purple-600 border-b-2 border-purple-500 outline-none focus:bg-gray-300"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div>
              <input
                className="w-full bg-gray-200 p-2 mb-6 text-purple-600 border-b-2 border-purple-500 outline-none focus:bg-gray-300"
                type="email"
                name="email"
                placeholder="Your Email-Id"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div>
              <textarea
                className="w-full bg-gray-200 p-2 mb-6 text-purple-600 border-b-2 border-purple-500 outline-none focus:bg-gray-300"
                type="text"
                name="username"
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Your Message"
                required
              />
            </div>

            <div>
              <button
                className="w-full bg-[#a855f7] flex justify-center items-center hover:bg-purple-600 text-white font-bold py-2 px-4 mb-6 rounded"
                type="submit"
                disabled={loading} // disable the button while loading
              >
                {loading ? (
                  <svg
                    className="animate-spin mx-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  ""
                )}
                {loading ? "Please wait" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

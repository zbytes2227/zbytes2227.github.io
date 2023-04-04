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
      <div className="text-center mt-24">
        <h1 className="text-4xl lilita-font sm:text-5xl text-[#FFF]">
          Connect with me{" "}
        </h1>
      </div>
      <div className="flex justify-center m-5 ">
        <div className="p-4 w-full md:w-1/2 lg:w-1/3 lg:mx-auto bg-gray-800 p-5 rounded">
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
                  <img className="w-24 mx-auto mb-5" src="prof_logo.png" />
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

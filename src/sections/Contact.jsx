import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const [alert, setAlert] = useState({
    show: false,
    success: true,
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      import.meta.env.VITE_SERVICE_ID,   // from .env
      import.meta.env.VITE_TEMPLATE_ID,  // from .env
      form.current,
      import.meta.env.VITE_PUBLIC_KEY    // from .env
      )
      .then(
        () => {
          setAlert({
            show: true,
            success: true,
            message: "Message sent successfully!",
          });
        },
        () => {
          setAlert({
            show: true,
            success: false,
            message: "Failed to send message. Please try again.",
          });
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="bg-black py-5">
      <h1 className="text-amber-500 text-center text-3xl md:text-4xl font-bold">
        Contact
      </h1>

      <div className="max-w-6xl mx-auto md:px-3 px-8 py-10 text-white md:flex block justify-center items-center md:gap-10 lg:gap-16 xl:gap-20">

        {/* LEFT SIDE */}
        <div className=" p-3 overflow-hidden min-h-[420px] ">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative flex justify-center md:justify-start lg:min-w-[100px] "
          >
            <div className="rounded-3xl border border-black shadow-[0_0_10px_rgba(245,158,11,0.6)]">
              <div className="rounded-3xl p-5 bg-[#0a0a10]">

                <p className="text-amber-500 font-bold">Reach Out via:</p>

                <div className="p-2 flex items-center gap-8 mt-8">
                  <BsFillTelephoneOutboundFill className="text-2xl ml-3" />
                  <span>
                    <p className="font-bold text-white">Mobile Number</p>
                    <span className="text-amber-500">0758457044</span>
                  </span>
                </div>

                <div className="p-2 flex items-center gap-8 mt-3">
                  <MdEmail className="text-2xl ml-3" />
                  <span>
                    <p className="font-bold text-white">Email</p>
                    <a
                      href="mailto:tharushinisansala127@gmail.com"
                      className="text-amber-500 hover:text-amber-400 transition-colors duration-300"
                    >
                      tharushinisansala127@gmail.com
                    </a>
                  </span>
                </div>

                <div className="p-2 flex items-center gap-8 mt-3">
                  <FaGithub className="text-2xl ml-3" />
                  <a
                    href="https://github.com/tharu-nisansala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-fuchsia-300 no-underline"
                  >
                    <p className="font-bold text-white">Github</p>
                    <span className="text-amber-500 hover:text-amber-400">
                      https://github.com/tharu-nisansala
                    </span>
                  </a>
                </div>

                <div className="p-2 flex items-center gap-8 mt-3">
                  <FaLinkedin className="text-2xl ml-3" />
                  <a
                    href="https://www.linkedin.com/in/tharushi-nisansala-5818982a6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-fuchsia-300"
                  >
                    <p className="font-bold text-white">LinkedIn</p>
                    <span className="text-amber-500 hover:text-amber-400">
                      https://www.linkedin.com/in/tharushi-nisansala-5818982a6
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-3 overflow-hidden min-h-[650px] min-w-[550px] flex justify-center md:mt-0 mt-10">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-2xl min-h-[300px]"
          >
            <div className="p-1 rounded-3xl border-1 border-black shadow-[0_0_10px_rgba(245,158,11,0.6)] mt-10">
              <div className="rounded-3xl p-8 bg-[#0a0a10]">
                <p className="text-amber-500 font-bold mb-10">
                  Or send me a quick message using the contact form below
                </p>

                <form ref={form} onSubmit={sendEmail}>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="px-5 py-3 w-full border-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:text-white"
                  />
                  <br />
                  <br />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="px-5 py-3 w-full border-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:text-white"
                  />
                  <br />
                  <br />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="px-5 py-3 w-full border-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:text-white"
                  />
                  <br />
                  <br />

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="px-5 py-3 w-full border-1 rounded-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:text-white"
                  ></textarea>

                  <br />
                  <br />

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="relative bg-amber-600 px-10 py-3 rounded-lg text-white font-semibold 
                      overflow-hidden transition-all duration-300 group"
                    >
                      <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                        Send Message
                      </span>
                      <span
                        className="absolute inset-0 bg-amber-400 scale-x-0 group-hover:scale-x-100 origin-left 
                        transition-transform duration-300 rounded-lg"
                      ></span>
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ALERT MODAL */}
      {alert.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center animate-fadeIn">

            <div className="flex justify-center mb-3">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${
                  alert.success ? "border-green-500" : "border-red-500"
                }`}
              >
                <svg
                  className={`w-6 h-6 ${
                    alert.success ? "text-green-500" : "text-red-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  {alert.success ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
              </div>
            </div>

            <h2 className="text-lg font-semibold text-gray-800">
              {alert.success ? "Success" : "Error"}
            </h2>

            <p className="text-gray-600 mb-4">{alert.message}</p>

            <button
              onClick={() => setAlert({ ...alert, show: false })}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;

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
    <section id="contact" className="bg-black py-10">
      <h1 className="text-amber-500 text-center text-3xl md:text-4xl font-bold mb-15">
        Contact
      </h1>

      <div className="max-w-6xl mx-auto px-6 md:flex gap-16">

        {/* LEFT SIDE */}
       
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <p className="text-amber-500 font-bold mb-6">Reach Out via:</p>
          <div className="space-y-4 text-lg">
             <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:tharushinisansala127@gmail.com"
              className="flex items-center gap-3 hover:text-blue-500 transition-colors"
            >
              <MdEmail size={24} className="text-amber-500" />
              <p className="font-bold text-white">tharushinisansala127@gmail.com</p>
              
            </motion.a>

             <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+94758457044"
              className="flex items-center gap-3 hover:text-green-500 transition-colors"
            >
              <BsFillTelephoneOutboundFill size={24} className="text-amber-500" />
              <p className="font-bold text-white">+94 75 845 7044</p>
            </motion.a>

             <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://github.com/tharu-nisansala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-gray-400 transition-colors"
            >
              <FaGithub size={24} className="text-amber-500" />
               <p className="font-bold text-white">Github</p>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.linkedin.com/in/tharushi-nisansala-5818982a6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={24} className="text-amber-500" />
              <p className="font-bold text-white">LinkedIn</p>
            </motion.a>
          </div>
        </motion.div>         

        {/* RIGHT SIDE */}
       
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
            <p className="text-amber-500 font-bold mb-6">
            Or send me a quick message using the contact form below
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="rounded-3xl border border-black shadow-[0_0_10px_rgba(245,158,11,0.6)]"
          >
             <div className="rounded-3xl p-8 bg-[#0a0a10]">
                <form ref={form} onSubmit={sendEmail} className="space-y-4">

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-5 py-3 rounded-sm bg-black text-white border focus:outline-none focus:ring-amber-500"
                    required
                  />
                  <br />
                  <br />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-3 rounded-sm bg-black text-white border focus:outline-none focus:ring-amber-500"
                    required
                  />
                  <br />
                  <br />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-5 py-3 rounded-sm bg-black text-white border focus:outline-none focus:ring-amber-500"
                    required
                  />
                  <br />
                  <br />

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-5 py-3 rounded-sm bg-black text-white border focus:outline-none focus:ring-amber-500 resize-none"
                    required
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
          </motion.div>
        </motion.div>
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

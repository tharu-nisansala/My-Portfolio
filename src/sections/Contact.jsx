import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Button from "../components/Button";

function Contact() {
  const form = useRef();

  // Alert state for success/error message popup
  const [alert, setAlert] = useState({
    show: false,
    success: true,
    message: "",
  });

  // Handle form submission and send email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          // Success response
          setAlert({
            show: true,
            success: true,
            message: "Message sent successfully!",
          });
        },
        () => {
          // Error response
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
    <section id="contact" className="bg-black -mt-16 relative z-10 py-16">
      <Container>
        <SectionTitle title="Contact" variant="dark" />

        {/* MAIN GRID */}
        <div className="flex flex-col md:flex-row gap-16 mt-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <p className="text-emerald-500 font-display text-xl font-light mb-6">
              Reach Out via:
            </p>

            <div className="space-y-5 text-lg">

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:tharushinisansala127@gmail.com"
                className="flex items-center gap-3"
              >
                <MdEmail className="text-emerald-500 text-2xl" />
                <span className="text-gray-300 font-bold">
                  Email Me : tharushinisansala127@gmail.com
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="tel:+94758457044"
                className="flex items-center gap-3"
              >
                <BsFillTelephoneOutboundFill className="text-emerald-500 text-2xl" />
                <span className="text-gray-300 font-bold">
                  Call Me : +94758457044
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://github.com/tharu-nisansala"
                target="_blank"
                className="flex items-center gap-3"
              >
                <FaGithub className="text-emerald-500 text-2xl" />
                <span className="text-gray-300 font-bold">
                  GitHub : https://github.com/tharu-nisansala
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.linkedin.com/in/tharushi-nisansala-5818982a6"
                target="_blank"
                className="flex items-center gap-3"
              >
                <FaLinkedin className="text-emerald-500 text-2xl" />
                <span className="text-gray-300 font-bold">
                  LinkedIn : https://www.linkedin.com/in/tharushi-nisansala-5818982a6
                </span>
              </motion.a>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:w-1/2"
          >
            <p className="text-emerald-500 font-light font-display mb-6">
              Send me a message
            </p>

            {/* CARD WRAPPER */}
            <Card className="p-8 shadow-[0_0_12px_rgba(16,185,137,0.7)] ">

              <form ref={form} onSubmit={sendEmail} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 bg-black text-gray-300 border rounded-md "
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3 bg-black text-white border rounded-md "
                  required
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-5 py-3 bg-black text-white border rounded-md "
                  required
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-5 py-3 bg-black text-white border rounded-md resize-none"
                  required
                />

                {/* BUTTON */}
                <div className="flex justify-center pt-4">
                  <Button type="submit">
                    Send Message
                  </Button>
                </div>

              </form>

            </Card>
          </motion.div>

        </div>

        {/* ALERT */}
        {alert.show && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
            <div className="bg-gray-100 p-6 rounded-lg text-center w-80">

              <h2 className="text-lg font-bold">
                {alert.success ? "Success" : "Error"}
              </h2>

              <p className="text-gray-600 my-3">
                {alert.message}
              </p>

              <button
                onClick={() => setAlert({ ...alert, show: false })}
                className="bg-emerald-500 px-4 py-2 text-gray-300 rounded-md"
              >
                OK
              </button>

            </div>
          </div>
        )}

      </Container>
    </section>
  );
}

export default Contact;
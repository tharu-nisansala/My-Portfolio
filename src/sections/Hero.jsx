import { useEffect, useState, useRef } from "react";
import cover from '../assets/herocover.jpg';
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { motion, } from "framer-motion";
import { TypingEffect } from "../effects/TypingEffect";
import Container from "../components/Container";
import Button from "../components/Button";

function Hero() {

  // Dynamic roles for typing effect
  const positions = [
    'Software Engineer',
    'Frontend Developer',
    'UI/UX Designer',
    'MERN Stack Developer',
    'Web Developer'
  ];

  // State to track current position index
  const [index, setIndex] = useState(0);

  // Cycle through positions every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % positions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <div id="hero" className="h-0 invisible animate-none" />
    <section id="hero" className="bg-black flex justify-center items-center text-center sticky top-0 h-screen z-0 overflow-hidden " >
      <Container >
        
        {/* Background Image */}
        <img src={cover} alt="coverImg" className="w-full h-auto object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-start bg-black/40 text-gray-300 px-6 md:px-28">
          <div className="flex flex-col items-center justify-center text-center max-w-md w-full ml-0 md:ml-10">

            {/* HELLO (DROP FROM TOP) */}
            <motion.h3
              className="text-2xl md:text-4xl mb-4 font-Navbar font-light"
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              HELLO!
            </motion.h3>

            {/* NAME */}
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-bold mb-4 font-script leading-tight">
                <span className="text-gray-300 whitespace-nowrap text-2xl md:text-4xl">
                  <TypingEffect text="I'M " />
                </span>

                <span className="text-emerald-500 whitespace-nowrap">
                  <TypingEffect text="THARUSHI NISANSALA" />
                </span>
            </div>

            {/* ROLE */}
            <motion.h2
              className="text-2xl md:text-4xl font-semibold mb-4 font-script"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              | {positions[index]} |
            </motion.h2>

            {/* BUTTON */}
            <motion.a
              href="/Tharushi_Nisansala_CV.pdf"
              download
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Button>
                Download Resume
              </Button>
            </motion.a>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 justify-center mt-10">
              <motion.a
              href="https://www.linkedin.com/in/tharushi-nisansala-5818982a6" target="_blank"
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <FaLinkedin className="text-xl md:text-3xl hover:text-emerald-500 transition" />
              </motion.a>

              <motion.a
                href="https://github.com/tharu-nisansala" target="_blank"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <FaGithub className="text-xl md:text-3xl hover:text-emerald-500 transition" />
              </motion.a>

              <motion.a
                href="mailto:tharushunisansala127@gmail.com"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <FaEnvelope className="text-xl md:text-3xl hover:text-emerald-500 transition" />
              </motion.a>

            </div>
             
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}

export default Hero;
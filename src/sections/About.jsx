import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/me.jpg';

function About() {
  return (
    <section id="about" className="bg-black py-12">
      <div className="mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-amber-500 text-center text-3xl md:text-4xl font-bold mb-10 min-h-[60px]"
          >
            About Me
          </motion.h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-20 text-justify">

          {/* Profile Image with Glow */}
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative flex justify-center md:justify-start"
            >
             

              {/* Profile photo */}
              <img
                src={img}
                alt="Tharushi Nisansala"
                className="relative h-64 w-64 md:h-56 md:w-56 lg:h-96 lg:w-96 rounded-full object-cover shadow-[0_0_40px_rgba(245,158,11,0.6)] transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* About Text */}
          <div className="overflow-hidden max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <p className="text-white text-md md:text-xl leading-relaxed font-light">
                I’m <span className="text-amber-500 font-semibold">Tharushi Nisansala Jayarathna</span>, an
                <span className="font-semibold"> Information and Communication Technology undergraduate</span> specializing in
                <span className="text-amber-500 font-semibold"> Software Technology</span> at
                <span className="font-semibold"> Uva Wellassa University of Sri Lanka</span>.
                <br /><br />
                I’m passionate about designing and developing
                <span className="font-semibold"> innovative, responsive, and user-focused</span>
                <span className="text-amber-500 font-semibold"> web applications</span> that deliver real-world value.
                With a strong foundation in
                <span className="text-amber-500 font-semibold"> Java, JavaScript,</span> and
                <span className="text-amber-500 font-semibold"> database management</span>, I have hands-on experience working with technologies such as the
                <span className="text-amber-500 font-semibold"> MERN stack (React, Node.js, Express.js, MongoDB)</span> and
                <span className="text-amber-500 font-semibold"> MySQL</span>.
                <br /><br />
                I’m also skilled in
                <span className="text-amber-500 font-semibold"> UI/UX design</span> using
                <span className="text-amber-500 font-semibold"> Figma</span> and
                <span className="text-amber-500 font-semibold"> Adobe Photoshop</span>, ensuring that every project I build is both functional and visually engaging.
                <br /><br />
                I’m a motivated and detail-oriented individual who enjoys solving complex problems, learning new technologies, and collaborating in team environments.
                My goal is to grow as a
                <span className="text-amber-500 font-semibold"> Software Engineer</span>, contributing to impactful projects and delivering high-quality, efficient software solutions.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import img from '../assets/me.jpg';
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

function About() {

  return (
    <section id="about" className="bg-[#2C2C2C]  rounded-tl-[80px] md:rounded-tl-[120px] rounded-tr-[80px] md:rounded-tr-[120px] relative z-10 py-20 shadow-[0_-20px_50px_rgba(0,0,0,0.4)]">
      <Container>
        {/* Section Title */}
        <SectionTitle title="About Me" variant="light" data-orb="about"/>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 md:gap-32 text-justify">

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
              id="profile-image"
                src={img}
                alt="Tharushi Nisansala"
                className="relative h-64 w-64 md:h-56 md:w-56 lg:h-96 lg:w-96 rounded-full object-cover shadow-[0_0_40px_rgba(16,185,137,0.7)] transition-transform duration-500 hover:scale-105"
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
              <p className="text-gray-300 text-md md:text-xl leading-relaxed font-light">
                I’m <span className="text-emerald-500 font-semibold">Tharushi Nisansala Jayarathna</span>, an
                <span className="font-semibold"> Information and Communication Technology undergraduate</span> specializing in
                <span className="text-emerald-500 font-semibold"> Software Technology</span> at
                <span className="font-semibold"> Uva Wellassa University of Sri Lanka</span>.
                <br /><br />
                I’m passionate about designing and developing
                <span className="font-semibold"> innovative, responsive, and user-focused</span>
                <span className="text-emerald-500 font-semibold"> web applications</span> that deliver real-world value.
                With a strong foundation in
                <span className="text-emerald-500 font-semibold"> Java, JavaScript,</span> and
                <span className="text-emerald-500 font-semibold"> database management</span>, I have hands-on experience working with technologies such as the
                <span className="text-emerald-500 font-semibold"> MERN stack (React, Node.js, Express.js, MongoDB)</span> and
                <span className="text-emerald-500 font-semibold"> MySQL</span>.
                <br /><br />
                I’m also skilled in
                <span className="text-emerald-500 font-semibold"> UI/UX design</span> using
                <span className="text-emerald-500 font-semibold"> Figma</span> and
                <span className="text-emerald-500 font-semibold"> Adobe Photoshop</span>, ensuring that every project I build is both functional and visually engaging.
                <br /><br />
                I’m a motivated and detail-oriented individual who enjoys solving complex problems, learning new technologies, and collaborating in team environments.
                My goal is to grow as a
                <span className="text-emerald-500 font-semibold"> Software Engineer</span>, contributing to impactful projects and delivering high-quality, efficient software solutions.
              </p>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default About;

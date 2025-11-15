import React from "react";
import { BsFillMortarboardFill, BsLayersFill, BsAwardFill } from "react-icons/bs";
import { FaUniversity, FaRegCalendar } from "react-icons/fa";
import { motion } from "framer-motion";

function Qualification() {
  const certifications = [
    "NVQ Level 4 in ICT Technician — Balapitiya Technical College",
    "Web Design for Beginners — University Of Moratuwa (CODL)",
    "Front End Web Development — University Of Moratuwa (CODL)",
    "Agile Project Management - IT Project — University Of Moratuwa (CODL)",
    "ReactJS for Beginners — SimpliLearn (SkillUp)",
    "Certificate in Information Technology — Esoft Metro Campus - Ambalangoda"
  ];

  return (
    <section id="qualifications" className="bg-black text-white py-16 px-6 md:px-16 ">
    <div className="mx-auto max-w-6xl">
      {/* Section Title */}
      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-amber-500 mb-10 text-center min-h-[60px]"
        >
          Qualification
        </motion.h1>
      </div>

      {/* Internship Experience */}
      <h2 className="text-2xl text-amber-500 font-semibold mb-4">Internship Experience</h2>
      <div className="mb-12 min-h-[200px] shadow-[0_0_10px_rgba(245,158,11,0.6)] rounded-3xl">
        <div className="overflow-hidden rounded-3xl">
            
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[#0a0a10] p-6 md:p-8 rounded-3xl"
          >
            
            <h3 className="text-xl md:text-2xl font-semibold mb-1">Software Engineering Intern</h3>
            <p className="text-amber-500 font-semibold mb-2">
              Gamage Recruiters (Pvt) Ltd - [27/03/2025 – 28/09/2025]
            </p>
           <p className="text-white text-justify mb-2">
    As a Software Engineering Intern, I contributed to full-stack web development projects using the <span className="text-amber-500 font-semibold">MERN stack</span>. I developed and maintained frontend components with <span className="text-amber-500 font-semibold">React</span> and <span className="text-amber-500 font-semibold">Tailwind CSS</span>, implemented backend APIs with <span className="text-amber-500 font-semibold">Node.js</span> and <span className="text-amber-500 font-semibold">Express.js</span>, and managed databases using <span className="text-amber-500 font-semibold">MongoDB</span>. I also designed intuitive user interfaces using <span className="text-amber-500 font-semibold">Figma</span>, tested endpoints with <span className="text-amber-500 font-semibold">Postman</span>, and collaborated with the team using <span className="text-amber-500 font-semibold">GitHub</span> for version control and code management. This experience strengthened my full-stack development skills and provided hands-on exposure to professional software engineering workflows.
  </p>

          </motion.div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-12 min-h-[200px]">
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-2xl text-amber-500 font-semibold mb-4">Education</h2>
            <div className="flex items-center space-x-3">
              <BsFillMortarboardFill className="text-2xl md:text-3xl text-amber-500" />
              <span className="text-lg md:text-xl font-semibold">Bachelor of Information & Communication Technology</span>
            </div>
            <div className="flex items-center space-x-3">
              <BsLayersFill className="text-2xl md:text-3xl text-amber-500" />
              <span className="text-lg md:text-xl font-semibold">Specialization: Software Technology</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaUniversity className="text-2xl md:text-3xl text-amber-500" />
              <span className="text-lg md:text-xl font-semibold">Uva Wellassa University of Sri Lanka</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaRegCalendar className="text-2xl md:text-3xl text-amber-500" />
              <span className="text-lg md:text-xl font-semibold">Expected Graduation: 2026</span>
            </div>
          </motion.div>
        </div>
      </div>

   {/* Certifications */}
<div className="mb-12">
  <h2 className="text-2xl font-semibold text-amber-500 mb-6">Certifications</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {certifications.map((cert, index) => (
      <div
        key={index}
        className="bg-[#0a0a10] shadow-[0_0_12px_rgba(245,158,11,0.6)] rounded-3xl min-h-[80px] flex items-center"
      >
        <div className="overflow-hidden rounded-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center p-4 md:p-6 rounded-3xl w-full"
          >
            <BsAwardFill className="text-xl text-amber-500 mr-4" />
            <span className="text-white font-medium">{cert}</span>
          </motion.div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
    </section>
  );
}

export default Qualification;

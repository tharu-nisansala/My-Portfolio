import React from "react";
import { BsFillMortarboardFill, BsLayersFill, BsAwardFill } from "react-icons/bs";
import { FaUniversity, FaRegCalendar } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";


function Qualification() {

  // certifications data
  const certifications = [
    "NVQ Level 4 in ICT Technician — Balapitiya Technical College",
    "Web Design for Beginners — University Of Moratuwa (CODL)",
    "Front End Web Development — University Of Moratuwa (CODL)",
    "Agile Project Management - IT Project — University Of Moratuwa (CODL)",
    "ReactJS for Beginners — SimpliLearn (SkillUp)",
    "Certificate in Information Technology — Esoft Metro Campus - Ambalangoda"
  ];

  return (

    <section id="qualifications" className="bg-black text-white  px-6 md:px-16 -mt-16 relative z-10 pb-24 py-16 ">
      <Container className="relative w-full">

        {/* Section Title */}
        <SectionTitle title="Qualifications" variant="dark" />

        {/* Content */}
        <div className="space-y-16">

          {/* Internship Experience */}
          <div>
            <h2 className="text-2xl text-emerald-500 font-light mb-6 font-display">Internship Experience</h2>
            <Card className="shadow-[0_0_10px_rgba(16,185,137,0.7)] rounded-3xl">
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-1">Software Engineering Intern</h3>

                <p className="text-emerald-500 font-semibold mb-2 text-md md:text-xl">
                  Gamage Recruiters (Pvt) Ltd - [27/03/2025 – 28/09/2025]
                </p>

                <p className="text-gray-300 text-justify text-md md:text-xl leading-relaxed font-light">
                  As a Software Engineering Intern, I contributed to full-stack web development projects using the
                  <span className="text-emerald-500 font-semibold"> MERN stack</span>.
                  I developed and maintained frontend components with
                  <span className="text-emerald-500 font-semibold"> React</span> and
                  <span className="text-emerald-500 font-semibold"> Tailwind CSS</span>,
                  implemented backend APIs with
                  <span className="text-emerald-500 font-semibold"> Node.js</span> and
                  <span className="text-emerald-500 font-semibold"> Express.js</span>,
                  and managed databases using
                  <span className="text-emerald-500 font-semibold"> MongoDB</span>.
                  I also designed UI using
                  <span className="text-emerald-500 font-semibold"> Figma</span>,
                  tested APIs with
                  <span className="text-emerald-500 font-semibold"> Postman</span>,
                  and collaborated using
                  <span className="text-emerald-500 font-semibold"> GitHub</span>.
                </p>
              </div>
            </Card>
          </div>

          {/* Education */}
          <div>
            <div className="mb-12 min-h-[200px]">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="space-y-4 md:space-y-6"
                >
                  <h2 className="text-2xl text-emerald-500 font-light mb-4 font-display">Education</h2>
                  <div className="flex items-center space-x-3">
                    <BsFillMortarboardFill className="text-2xl md:text-3xl text-emerald-500" />
                    <span className="text-lg md:text-xl font-semibold">Bachelor of Information & Communication Technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BsLayersFill className="text-2xl md:text-3xl text-emerald-500" />
                    <span className="text-lg md:text-xl font-semibold">Specialization: Software Technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaUniversity className="text-2xl md:text-3xl text-emerald-500" />
                    <span className="text-lg md:text-xl font-semibold">Uva Wellassa University of Sri Lanka</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaRegCalendar className="text-2xl md:text-3xl text-emerald-500" />
                    <span className="text-lg md:text-xl font-semibold">Expected Graduation: 2026</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-display text-emerald-500 mb-6">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    delay={index * 0.1}
                    className="shadow-[0_0_12px_rgba(16,185,137,0.7)] min-h-[80px] flex items-center"
                  >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      <BsAwardFill className="text-emerald-500 w-5 h-5" />
                    </div>
                      <span className="text-gray-300 font-medium">
                        {cert}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Qualification;

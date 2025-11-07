import React, { useEffect } from 'react';

import { BsFillMortarboardFill,BsLayersFill,BsAwardFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";


function Qualification() {

    useEffect(() => {
  const items = document.querySelectorAll(".fade-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeUp");
        } else {
          entry.target.classList.remove("animate-fadeUp"); // remove when out of view
        }
      });
    },
    { threshold: 0.2 } // trigger when 20% visible
  );

  items.forEach((item) => observer.observe(item));

  return () => observer.disconnect();
}, []);



  return (
    <section id='qualifications' className="bg-black flex justify-center items-center text-center py-5">
        <div className="md:px-3 px-8 max-w-6xl mx-auto">
            {/*Internship Experience*/}
        <h1 className="text-amber-500 text-center text-3xl md:text-4xl  font-bold">Qualification</h1>
            <div className=" md:py-16 md:px-4 py-8 px-2 text-white text-center" >
                <h2 className="md:text-3xl text-2xl font-bold text-white ">Internship Experience</h2>
            </div>
            <div className="max-w-2xl mx-auto text-justify rounded-3xl shadow-[0_0_12px_rgba(245,158,11,0.6)] space-y-4 fade-item opacity-0" style={{ animationDelay: "0.2s" }}>
                <div className="p-1 rounded-3xl  border-1 ">
                    <div className=" bg-[#0a0a10] shadow-2xl rounded-3xl md:px-10 md:py-10 p-8">
                        <h3 className="text-white md:text-2xl text-xl  font-semibold">Software Engineering Intern</h3>
                        <p className="text-amber-500  font-semibold">Gamage Recruiters (Pvt) Ltd - [27/03/2025 – 28/09/2025]</p>
                        <p className="text-amber-50 mt-2 md:text-l text-md">
                        As a Software Engineering Intern, I worked on developing full-stack web applications using the <span className='text-amber-600'>MERN stack (MongoDB, Express, React, and Node.js). </span>
                        I gained hands-on experience in building responsive user interfaces and designing user-centered layouts using <span className='text-amber-600'>Figma.</span> During the internship, 
                        I collaborated with team members in an Agile environment, participated in regular code reviews, and contributed to the creation of scalable and 
                        user-friendly web solutions. This experience helped me strengthen my technical skills and enhance my problem-solving and teamwork abilities.
                        </p>
                    </div>
                </div>
            </div>
            {/*Qualifications*/}
            <div >
            <div className=" md:py-16 md:px-4 py-6 px-2 text-white text-center" >
                 <h2 className="md:text-3xl text-2xl font-bold text-white">Qualifications</h2>
            </div>    
            <div className="max-w-2xl mx-auto text-justify rounded-3xl shadow-[0_0_12px_rgba(245,158,11,0.6)] space-y-4 fade-item opacity-0" style={{ animationDelay: "0.2s" }}>
                <div className="p-1 rounded-3xl  border-1 ">
                    <div className=" bg-[#0a0a10] shadow-2xl rounded-3xl md:px-10 md:py-10 p-8">
                <p className="md:text-lg text-l text-white flex items-center text-justify ">
                <BsFillMortarboardFill className='text-2xl' /><span className="font-semibold text-white px-5">Bachelor of Information and Communication Technology</span>
                </p><br/>
                <p className="md:text-lg text-l text-white flex items-center text-justify ">
                <BsLayersFill className='md:text-2xl text-lg'/><span className="font-semibold text-white px-5">Specialization:</span>Software Technology
                </p><br/>
                <p className="md:text-lg text-l text-white flex items-center text-justify ">
                <FaUniversity className='md:text-2xl text-lg'/><span className="font-semibold text-white px-5">Uva Wellassa University of Sri Lanka</span>
                </p><br/>
                <p className="md:text-lg text-l text-white flex items-center text-justify ">
                <FaRegCalendarDays className='md:text-2xl text-lg'/><span className="font-semibold text-white px-5">Expected Graduation:</span> 2026
                </p>
                </div>
                </div>
               
                </div>
            </div>
            
            {/* Section: Certifications */}
            <div>
            <div className=" md:py-16 md:px-4 py-6 px-2 text-white text-center" >
            <h2 className="md:text-3xl text-2xl font-bold text-white">Certifications</h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4 text-left fade-item opacity-0" style={{ animationDelay: "0.3s" }}>
                <div className="bg-[#0a0a10] border-1  p-4 rounded-lg shadow-[0_0_8px_rgba(245,158,11,0.6)]   flex items-center  " >
                <BsAwardFill className='text-xl mr-5 text-white'/> <span className="text-white md:text-l text-md font-medium">NVQ Level 4 in ICT Technician</span> <span className="text-white ">— Balapitiya Technical Collage</span>
                </div>
                <div className="bg-[#0a0a10] border-1  p-4 rounded-lg shadow-[0_0_8px_rgba(245,158,11,0.6)]   flex items-center">
                <BsAwardFill className='text-xl mr-5 text-white'/> <span className="text-white md:text-l text-md font-medium">Web Design for Beginners</span> <span className="text-white"> — University Of Moratuwa(CODL)</span>
                </div>
                <div className="bg-[#0a0a10] border-1  p-4 rounded-lg shadow-[0_0_8px_rgba(245,158,11,0.6)]   flex items-center">
                <BsAwardFill className='text-xl mr-5 text-white'/> <span className="text-white md:text-l text-md font-medium">Front End Web Development</span> <span className="text-white"> — University Of Moratuwa(CODL)</span>
                </div>
                <div className="bg-[#0a0a10] border-1  p-4 rounded-lg shadow-[0_0_8px_rgba(245,158,11,0.6)]   flex items-center">
                <BsAwardFill className='text-xl mr-5 text-white'/> <span className="text-white md:text-l text-md font-medium">Agile Project Management - IT Project</span> <span className="text-white"> — University Of Moratuwa(CODL)</span>
                </div>
                <div className="bg-[#0a0a10] border-1  p-4 rounded-lg shadow-[0_0_8px_rgba(245,158,11,0.6)]   flex items-center">
                <BsAwardFill className='text-xl mr-5 text-white'/> <span className="text-white md:text-l text-md font-medium">ReactJS for Beginners</span> <span className="text-white"> — SimpliLearn(SkillUp)</span>
                </div>
                <div className="bg-[#0a0a10] border-1  p-4 rounded-lg shadow-[0_0_8px_rgba(245,158,11,0.6)]   flex items-center">
                <BsAwardFill className='text-xl mr-5 text-white'/> <span className="text-white md:text-l text-md font-medium">Certificate in Information Technology</span> <span className="text-white"> — Esoft Metro Campus -Ambalangoda</span>
                </div>
            </div>
            </div>
            </div>
       
    </section>
  )
}

export default Qualification
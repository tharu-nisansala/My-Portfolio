import React from 'react';
import portImg from '../assets/Port.png';
import food from '../assets/food.png';
import fashion from '../assets/fashion.png';
import fd from '../assets/fd.jpg';
import medic from '../assets/Medic.png';
import RealState from '../assets/RealState.png';
import mb from '../assets/mb.png';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Individualprojects = [
  {
    id: 1,
    img: portImg,
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects and skills.",
    techStack: ["React", "Tailwind CSS", "Vite"],
    code: "https://github.com/yourusername/portfolio",
    demo:"https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    img: food,
    title: "Food Order Website",
    description: "An online food ordering platform that lets users browse menus, customize meals, and place orders from local restaurants.",
    techStack: ["HTML", "CSS", "PHP", "MySQL","JavaScript"],
    code: "https://github.com/tharu-nisansala/food-website",
    demo:"https://www.linkedin.com/posts/tharushi-nisansala-5818982a6_webdevelopment-foodtech-html-activity-7185493802755784704-G10z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnQUjEBk-UHrKJ5c8WndsrwJe289Xc3UEU",
  },
  {
    id: 3,
    img: fashion,
    title: "FashionHub Website",
    description: "e-commerce website for ordering clothes",
    techStack: ["React","Vite", "Firebase","Tailwind CSS"],
    code: "https://github.com/tharu-nisansala/fashionHUB",
    demo:"https://www.linkedin.com/posts/tharushi-nisansala-5818982a6_webdevelopment-reactjs-firebase-activity-7277978009272270848-1jlV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnQUjEBk-UHrKJ5c8WndsrwJe289Xc3UEU",
  },
];

const GroupProjects = [
  {
    id: 1,
    img: fd,
    title: "Food Ordering & Boarding House Booking System (Dome & Dine)",
    description: "A web platform designed for university students to easily find and book nearby boarding houses while ordering meals from local vendors, integrating location-based search, menu browsing, and secure online booking",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    code: "https://github.com/tharu-nisansala/Dome-and-Dine",
    demo: "https://github.com/tharu-nisansala/Dome-and-Dine",
  },
  {
    id: 2,
    img: medic,
    title: "Pharmacy and Hospital Management Website",
    description: "A dynamic Pharmacy and Hospital Management Website. This project allows users to browse medicines, contact the pharmacy, and access hospital services.",
    techStack: ["HTML", "CSS", "PHP", "MySQL","JavaScript"],
    code: "https://github.com/tharu-nisansala/MediconGroupProject",
  },
  {
    id: 3,
    img: RealState,
    title: "Real Estate Management System",
    description: "A comprehensive property management application enabling users to list, search, and manage real estate properties, with features for property details, image uploads, inquiries, and admin-controlled listings.",
    techStack: ["React", "CSS", "JSP", "MySQL"],
    code: "https://github.com/Isura-udith/URBANNEST",
  },
  {
    id: 4,
    img: mb,
    title: "Private Bus Ticket Booking System",
    description: "A convenient online ticket reservation system for private bus services, allowing passengers to search routes, check seat availability, book tickets, and receive instant confirmations with a user-friendly interface.",
    techStack: ["Flutter", "Firebase"],
    code: "https://github.com/Nimesh1694/Bus-Ticket-booking-System",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-black py-5">
      <div className="md:px-3 px-8 max-w-6xl mx-auto">
        <h1 className="text-amber-500 text-center text-3xl md:text-4xl font-bold">Projects</h1>

        {/* Individual Projects */}
        <h2 className="md:text-2xl text-xl font-bold mb-8 text-white text-center mt-16">
          Individual projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Individualprojects.map(({ id, img, title, description, techStack, code, demo}) => (
            <div key={id} className="bg-[#0a0a10] border  shadow-[0_0_8px_rgba(245,158,11,0.6)] rounded-lg p-2  hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 pb-5">
              <img src={img} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="md:text-xl text-md font-semibold text-white mb-2 px-5">{title}</h3>
              <p className="mb-4 text-gray-300 px-5 md:text-lg text-md">{description}</p>
              <div className="mb-4 flex flex-wrap gap-2 px-5">
                {techStack.map((tech, index) => (
                  <span key={index} className="bg-amber-700 px-5 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="px-5 flex gap-3 mb-3">
                <a href={code} target="_blank" rel="noopener noreferrer" className="inline-block text-amber-500  hover:text-amber-600 underline font-medium px-4 py-2 rounded-md transition-colors">
                  View Code
                </a>
                {demo && (
                  <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-block text-amber-500  hover:text-amber-600 underline font-medium px-4 py-2 rounded-md transition-colors">
                    View Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Group Projects */}
        <h2 className="md:text-2xl text-xl font-bold mb-8 text-white text-center mt-16">
          Group projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {GroupProjects.map(({ id, img, title, description, techStack, code, demo}) => (
            <div key={id} className="bg-[#0a0a10] border shadow-[0_0_8px_rgba(245,158,11,0.6)] rounded-lg p-2  hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 pb-5">
              <img src={img} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="md:text-xl text-md font-semibold text-white mb-2 px-5">{title}</h3>
              <p className="mb-4 text-gray-300 px-5 md:text-lg text-md">{description}</p>
              <div className="mb-4 flex flex-wrap gap-2 px-3">
                {techStack.map((tech, index) => (
                  <span key={index} className="bg-amber-700 px-5 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="px-5 flex gap-3 mb-3">
                <a href={code} target="_blank" rel="noopener noreferrer" className="inline-block text-amber-500  hover:text-amber-600 underline font-medium px-4 py-2 rounded-md transition-colors">
                  View Code
                </a>
                {demo && (
                  <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-block text-amber-500 hover:text-amber-600 underline font-medium px-4 py-2 rounded-md transition-colors">
                    View Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10 flex justify-center items-center space-x-2">
  <a
    href="https://github.com/tharu-nisansala?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
    className="text-amber-500 font-semibold hover:text-amber-600 text-lg underline flex items-center gap-1"
  >
    See More Projects on GitHub <FaRegArrowAltCircleRight className="ml-2 text-amber-500 hover:text-amber-600 transition text-3xl"/>
  </a>
</div>



    </section>
  )
}

export default Projects;

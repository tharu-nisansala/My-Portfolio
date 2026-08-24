import React from "react";
import portFolioImg from "../assets/Port.png";
import DormAndDineWebImg from "../assets/food.png";
import fashionWebImg from "../assets/fashion.png";
import foodImg from "../assets/fd.jpg";
import medicWebImg from "../assets/Medic.png";
import RealStateWebImg from "../assets/RealState.png";
import mobileAppImg from "../assets/mb.png";
import nextWebImg from "../assets/next.png";
import LMSimg from "../assets/LMS.png";
import SentimentAnalysis from "../assets/SentimentAnalysis.png";
import PathFinder from "../assets/PathFinder.png";

const Individualprojects = [
  {
    id: 1,
    img: portFolioImg,
    title: "Portfolio Website",
    description:
      "Designed and developed a visually engaging portfolio website that highlights my technical skills, academic background, and software development projects. The site incorporates advanced animations, seamless navigation, and responsive layouts to provide an immersive user experience across all devices.",
    techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    code: "https://github.com/Prathviharan/Veritas-Campus-Learning-Management-System",
    demo: "https://tharushi-nisansala-portfolio.vercel.app/",
  },
  {
    id: 2,
    img: nextWebImg,
    title: "Next.js Blog CRUD Project",
    description:
      "This is a self-study project built using Next.js, MongoDB, and NextAuth It demonstrates how to build a simple blog dashboard where users can create, view, and delete posts.Update functionality and further improvements are in progress.",
    techStack: [
      "Next.js 16",
      "React",
      "Vite",
      "MongoDB & Mongoose",
      "CSS",
      "NextAuth.js",
      "SWR",
    ],
    code: "https://github.com/tharu-nisansala/-Next.js-Blog-CRUD-Project-Self-Study",
  },
  {
    id: 3,
    img: SentimentAnalysis,
    title: "Sentiment Analysis Web Application",
    description:
      "A simple web-based Sentiment Analysis application built using Python and Flask. This project allows users to enter text reviews and classifies them as Positive or Negative using a Machine Learning model.",
    techStack: ["Python", "Flask ", "HTML", "NumPy & Pandas", "NLTK", "Pickle"],
    code: "https://github.com/tharu-nisansala/sentiment_analysis_project",
  },
  {
    id: 4,
    img: DormAndDineWebImg,
    title: "Food Order Website",
    description:
      "An online food ordering platform that lets users browse menus, customize meals, and place orders from local restaurants.",
    techStack: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    code: "https://github.com/tharu-nisansala/food-website",
    demo: "https://www.linkedin.com/posts/tharushi-nisansala-5818982a6_webdevelopment-foodtech-html-activity-7185493802755784704-G10z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnQUjEBk-UHrKJ5c8WndsrwJe289Xc3UEU",
  },
  {
    id: 5,
    img: fashionWebImg,
    title: "FashionHub Website",
    description: "e-commerce website for ordering clothes",
    techStack: ["React", "Vite", "Firebase", "Tailwind CSS"],
    code: "https://github.com/tharu-nisansala/fashionHUB",
    demo: "https://www.linkedin.com/posts/tharushi-nisansala-5818982a6_webdevelopment-reactjs-firebase-activity-7277978009272270848-1jlV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnQUjEBk-UHrKJ5c8WndsrwJe289Xc3UEU",
  },
];

const GroupProjects = [
  {
    id: 1,
    img: LMSimg,
    title:
      "Learning Management System (LMS) for Diploma Programs at Veritas International Campus",
    description:
      "The Learning Management System (LMS) is a web-based platform developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js) to streamline course management, student engagement, and performance tracking. It features role-based access for Admins, Instructors, and Students, providing a tailored experience for each user type.",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB", "JWT"],
    code: "https://github.com/Prathviharan/Veritas-Campus-Learning-Management-System",
    demo: "https://veritas-campus-lms-ywm1.vercel.app/",
  },
  {
    id: 2,
    img: PathFinder,
    title: "PathFinder - AI-Powered Degree & Career Recommendation System",
    description:
      "An AI-powered personalized degree and career recommendation system designed for Sri Lankan students. It provides degree and career recommendations based on academic qualifications, interests, and skills, with a multilingual AI chatbot supporting English, Sinhala, and Tamil",
    techStack: ["React","Node.js","Express.js","MongoDB","Python","Machine Learning","RAG","NLP",],
    code: "https://github.com/MrDeshan/pathfinder-sri-lanka",
    demo: "https://pathfinder.atlaserp.lk/",
  },
  {
    id: 3,
    img: foodImg,
    title: "Food Ordering & Boarding House Booking System (Dome & Dine)",
    description:
      "A web platform designed for university students to easily find and book nearby boarding houses while ordering meals from local vendors, integrating location-based search, menu browsing, and secure online booking",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    code: "https://github.com/tharu-nisansala/Dome-and-Dine",
    demo: "https://github.com/tharu-nisansala/Dome-and-Dine",
  },
  {
    id: 4,
    img: medicWebImg,
    title: "Pharmacy and Hospital Management Website",
    description:
      "A dynamic Pharmacy and Hospital Management Website. This project allows users to browse medicines, contact the pharmacy, and access hospital services.",
    techStack: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    code: "https://github.com/tharu-nisansala/MediconGroupProject",
  },
  {
    id: 5,
    img: RealStateWebImg,
    title: "Real Estate Management System",
    description:
      "A comprehensive property management application enabling users to list, search, and manage real estate properties, with features for property details, image uploads, inquiries, and admin-controlled listings.",
    techStack: ["React", "CSS", "JSP", "MySQL"],
    code: "https://github.com/Isura-udith/URBANNEST",
  },
  {
    id: 6,
    img: mobileAppImg,
    title: "Private Bus Ticket Booking System",
    description:
      "A convenient online ticket reservation system for private bus services, allowing passengers to search routes, check seat availability, book tickets, and receive instant confirmations with a user-friendly interface.",
    techStack: ["Flutter", "Firebase"],
    code: "https://github.com/Nimesh1694/Bus-Ticket-booking-System",
  },
];

export { Individualprojects, GroupProjects };

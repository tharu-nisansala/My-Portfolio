import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container.jsx";
import useActiveSection from "../hooks/useActiveSection.js";
import logo from "../../public/logo.png"

// Navigation menu items
const menuItems = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Qualification", href: "qualifications" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Blogs", href: "blogs" },
  { name: "Contact", href: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ ACTIVE SECTION HOOK
  const activeSection = useActiveSection(
    menuItems.map((item) => item.href)
  );

  return (
    <nav className="bg-black w-full fixed top-0 z-50 shadow-lg">

      <Container className=" flex justify-between items-center py-5">

        {/* Logo */}
        <h1
          className="text-xl md:text-2xl font-semibold font-Navbar italic"
          style={{
            WebkitTextStroke: "1px #10B989",
            color: "transparent",
          }}
        >
          TNIZ
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-14">
          {menuItems.map((item, index) => {
            const isActive = activeSection === item.href; // ✅ ONLY ACTIVE LOGIC

            return (
              <motion.li
                key={index}
                className="relative cursor-pointer"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <a href={`#${item.href}`} className="block relative">

                  {/* Base text */}
                  <span
                    className={`text-lg font-Navbar font-semibold transition-colors duration-300 ${
                      isActive ? "text-emerald-500" : "text-gray-300"
                    }`}
                  >
                    {item.name}
                  </span>

                  {/* Hover overlay (UNCHANGED) */}
                  <motion.span
                    className="absolute left-0 top-0 text-emerald-500 font-Navbar font-semibold text-lg whitespace-nowrap overflow-hidden"
                    variants={{
                      rest: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {item.name}
                  </motion.span>

                </a>
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-300 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </Container>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-black text-gray-300 overflow-hidden"
        initial={false}
        animate={{ maxHeight: isOpen ? "100vh": 0 }}
        transition={{ duration: 0.4 }}
      >
        <ul className="space-y-4 text-center font-semibold py-4">
          {menuItems.map((item, index) => {
            const isActive = activeSection === item.href; // ✅ ACTIVE FIX

            return (
              <li key={index}>
                <a
                  href={`#${item.href}`}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 transition ${
                    isActive
                      ? "text-emerald-500"
                      : "text-gray-300 hover:text-emerald-400"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>

    </nav>
  );
}

export default Navbar;
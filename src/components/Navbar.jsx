import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Qualification", href: "#qualifications" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-black w-full fixed top-0 left-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl md:text-2xl text-amber-500 font-bold font-display">
          Tniz
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose className="text-2xl" /> : <CiMenuBurger className="text-3xl" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-white font-semibold">
          {menuItems.map((item, idx) => (
            <li key={idx} className="hover:text-amber-500 transition-colors duration-300">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-20 left-0 w-full bg-[#0a0a10] z-40 overflow-y-auto max-h-[calc(100vh-5rem)]"
          >
            <ul className="flex flex-col text-center">
              {menuItems.map((item, idx) => (
                <li key={idx} className="border-b border-gray-700 last:border-none">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-white hover:text-amber-500 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

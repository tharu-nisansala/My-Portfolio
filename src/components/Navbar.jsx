import React, { useState } from 'react';

const menuItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Qualification", href: "#qualifications" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black w-full shadow-2xl fixed z-50">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl  text-amber-500 font-semibold font-display">
          Tniz
          
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold text-lg">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-amber-500 duration-200">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="md:hidden bg-black text-white px-6 pb-4 space-y-4 font-semibold">
          {menuItems.map((item, index) => (
            <li key={index} className='border-b border-gray-700 last:border-none'>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-1 hover:text-amber-500 duration-200 text-center"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

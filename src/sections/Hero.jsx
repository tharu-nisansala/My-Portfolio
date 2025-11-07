import { useEffect, useState } from "react";
import cover from '../assets/herocover.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub,FaBlogger } from "react-icons/fa";

function Hero() {

    const positions=[
    'Software Engineer',
    'Frontend Developer',
    'UI/UX Designer',
    'MERN Stack Developer',
    'Web Developer'
  ];

  const [index, setindex]=useState(0);
  
  useEffect(()=>{
    const interval=setInterval(()=>{
    setindex((prevIndex)=>(prevIndex+1)% positions.length);
  },2000)
  return()=> clearInterval(interval);
  }, []);

  return (
  <section id="hero" className="bg-black flex justify-center items-center text-center py-5 pt-20">
  <div className="relative w-full max-w-6xl">
    <img src={cover} alt="coverImg" className="w-full h-auto object-cover" />

    {/* Overlay Text */}
    <div className="absolute inset-0 flex items-center justify-center md:justify-start px-5 text-white bg-black/40">
     <div className="max-w-xs md:max-w-lg text-center ">
        <h3 className="text-xl md:text-2xl mb-4">HELLO!</h3>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          I'm <span className="text-amber-500">Tharushi Nisansala</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 ">
          | {positions[index]} |
        </h2>
        <button className="bg-amber-600 rounded-3xl md:px-8 md:py-3 px-4 py-3 border border-amber-600 font-semibold text-sm md:text-xl hover:scale-105 transition duration-300 mt-4">
          Download Resume
        </button>
        <div className="flex items-center gap-3 justify-center mt-10">
        {/* LinkedIn */}
        <a
            href="https://www.linkedin.com/in/tharushi-nisansala-5818982a6"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaLinkedin className="text-xl md:text-3xl  hover:text-gray-400 transition-colors duration-300" />
        </a>

        {/* GitHub */}
        <a
            href="https://github.com/tharu-nisansala"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaGithub className="text-xl md:text-3xl  hover:text-gray-400 transition-colors duration-300" />
        </a>

        {/* Blogger */}
        <a
            href="https://nisansalajayarathna.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaBlogger className="text-xl md:text-3xl hover:text-gray-400 transition-colors duration-300" />
        </a>
        </div>

      </div>
    </div>
  </div>
</section>



  )
}

export default Hero
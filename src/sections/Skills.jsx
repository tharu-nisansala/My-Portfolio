import React, { useEffect } from "react";
import { FaJava, FaReact,  FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiExpress, SiMongodb, SiMysql, SiFirebase, SiAdobephotoshop, SiPostman, SiSpringboot,SiNextdotjs } from "react-icons/si";
import { MdCode, MdDeveloperMode } from 'react-icons/md';
import { SiTypescript, SiIntellijidea } from "react-icons/si";


const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava />, level: 80 },
      { name: "JavaScript", icon: <FaJs />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript />, level: 60 },

      
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact />, level: 75 },
      { name: "HTML5", icon: <FaHtml5 />, level: 95 },
       { name: "Next.js", icon: <SiNextdotjs />, level: 60 },
       { name: "React Native", icon: <FaReact />, level: 50 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
      { name: "Bootstrap", icon: <FaBootstrap />, level: 80 },
      { name: "Vite", icon: <SiVite />, level: 75 },
      { name: "JSP", icon: <FaJs />, level: 65 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 75 },
      { name: "Express.js", icon: <SiExpress />, level: 70 },
       { name: "Spring Boot", icon: <SiSpringboot />, level: 65 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 80 },
      { name: "MySQL", icon: <SiMysql />, level: 75 },
      { name: "Firebase", icon: <SiFirebase />, level: 65 },
    ],
  },
  {
    category: "Version Control",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 85 },
      { name: "GitHub", icon: <FaGithub />, level: 85 },
    ],
  },
  {
    category: "UI/UX Design",
    skills: [
      { name: "Figma", icon: <FaFigma />, level: 80 },
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop />, level: 70 },
    ],
  },
  {
    category: "Other Tools",
    skills: [
      { name: "NetBeans IDE", icon: <MdCode />, level: 80 }, 
      { name: "Visual Studio Code", icon: <MdDeveloperMode />, level: 90 },
      { name: "Postman", icon: <SiPostman />, level: 80 },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea />, level: 85 },
    ],
  },
];

function Skills() {

  useEffect(() => {
    const skillBars = document.querySelectorAll(".skill-bar-fill");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute("data-level");
            bar.style.width = `${width}%`;
          } else {
            entry.target.style.width = "0%"; // reset when out of view
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    skillBars.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
  }, []);


  return (
    <section id="skills" className="bg-black py-10 md:px-3 px-6">
      <h1 className="text-amber-500 text-center text-3xl md:text-4xl font-bold mb-8">Skills</h1>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillsData.map(({ category, skills }) => (
            <div
              key={category}
              className="border border-black rounded-lg p-6 bg-[#0a0a10] shadow-[0_0_12px_rgba(245,158,11,0.6)]"
            >
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-white text-white">{category}</h3>

              <div className="space-y-4">
                {skills.map(({ name, icon, level }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-1 text-sm font-semibold text-white">
                      <div className="flex items-center gap-2">
                        {icon}
                        {name}
                      </div>
                      <span>{level}%</span>
                    </div>
                     <div className="w-full bg-gray-800 rounded-full h-3">
                      <div
                        className="skill-bar-fill bg-amber-500 h-3 rounded-full transition-all duration-1000"
                        data-level={level}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

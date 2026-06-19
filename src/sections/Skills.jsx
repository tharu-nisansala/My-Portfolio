import React from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { skillsData } from "../data/SkillData.jsx";

function Skills() {
  return (
    <section id="skills" className="bg-[#2C2C2C] -mt-16 rounded-tl-[80px] md:rounded-tl-[120px] rounded-tr-[80px] md:rounded-tr-[120px] relative z-10 py-20">
      <Container>

        {/* Title */}
        <SectionTitle title="Skills" variant="light"  data-orb="skills"/>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">

          {skillsData.map((item, index) => (
            <Card key={item.category} delay={index * 0.1}>

              {/* Category */}
              <h3 className="text-xl font-bold text-gray-100 mb-4 border-b pb-2">
                {item.category}
              </h3>

              {/* Skills */}
              <div className="space-y-4">
                {item.skills.map((skill) => (
                  <div key={skill.name}>

                    {/* Name + icon */}
                    <div className="flex justify-between text-gray-300 text-sm md:text-lg font-light mb-1">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        {skill.name}
                      </div>
                      <span>{skill.level}%</span>
                    </div>

                    {/* Bar */}
                    <div className="w-full bg-gray-800 h-2 rounded-full">
                      <div
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                  </div>
                ))}
              </div>

            </Card>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Skills;
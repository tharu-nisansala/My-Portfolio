import React from "react";
import { Individualprojects, GroupProjects, UiUxDesign } from "../data/ProjectData";
import ProjectCard from "../components/ProjectCard";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

function Projects() {
  return (
    <section id="projects" className="bg-black text-gray-300  relative z-10 pb-24 py-16">
      <Container>

        <SectionTitle title="Projects" variant="dark" />

        {/* Individual Projects */}
        <h2 className="text-2xl text-emerald-500 mb-4 mt-10 font-display">
          Individual Projects
        </h2>

        <div className="overflow-x-auto scrollbar-hide mb-12">
          <div className="flex gap-6 flex-nowrap">

            {Individualprojects.map((project) => (
              <div
                key={project.id}
                className="min-w-[80%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%]"
              >
                <ProjectCard project={project} />
              </div>
            ))}

          </div>
        </div>

        {/* Group Projects */}
        <h2 className="text-2xl text-emerald-500 mb-4 font-display">
          Group Projects
        </h2>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 flex-nowrap">

            {GroupProjects.map((project) => (
              <div
                key={project.id}
                className="min-w-[80%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%]"
              >
                <ProjectCard project={project} />
              </div>
            ))}

          </div>
        </div>

        {/* UI/UX Design Projects */}
         <h2 className="text-2xl text-emerald-500 mb-4 font-display">
          UI/UX Design Projects
        </h2>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 flex-nowrap">

            {UiUxDesign.map((project) => (
              <div
                key={project.id}
                className="min-w-[80%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%]"
              >
                <ProjectCard project={project} />
              </div>
            ))}

          </div>
        </div>

      </Container>
    </section>
  );
}

export default Projects;
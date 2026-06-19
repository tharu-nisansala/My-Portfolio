import React from "react";
import Card from "./Card";

function ProjectCard({ project }) {
  return (
    <Card className="h-full flex flex-col gap-3 ">

      {/* Project Image */}
      <img
        src={project.img}
        alt={project.title}
        className="rounded-xl h-48 object-cover"
      />

      {/* Project Title */}
      <h3 className="text-xl font-bold text-emerald-400">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-gray-300 text-sm">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 text-xs text-gray-400">
        {project.techStack.map((tech, i) => (
          <span key={i} className="bg-gray-800 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>

      {/* Project Links */}
      <div className="flex gap-3 mt-auto">
        <a href={project.code} className="text-emerald-400">
          Code
        </a>
        {project.demo && (
          <a href={project.demo} className="text-blue-400">
            Demo
          </a>
        )}
      </div>

    </Card>
  );
}

export default ProjectCard;
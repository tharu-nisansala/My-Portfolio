import React from "react";
import Card from "./Card";

function ProjectCard({ project }) {
  return (
    <Card className="h-full flex flex-col gap-3 ">
      {/* Project Image / Video */}
      {project.video ? (
        <video
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full h-48 rounded-xl object-cover"
        />
      ) : (
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-48 rounded-xl object-cover"
        />
      )}
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
<div className="flex flex-wrap gap-3 mt-auto">

  {project.designLink || project.prototypeLink ? (
    <>
      {project.designLink && (
        <a
          href={project.designLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300"
        >
          Figma Design 
        </a>
      )}

      {project.prototypeLink && (
        <a
          href={project.prototypeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          Prototype 
        </a>
      )}
    </>
  ) : (
    <>
      {project.code && (
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300"
        >
          Code 
        </a>
      )}

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          Demo 
        </a>
      )}
    </>
  )}

</div>

    </Card>
  );
}

export default ProjectCard;
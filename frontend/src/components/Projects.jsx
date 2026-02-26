import React, { useState } from "react";
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import { projects } from "../data/mock";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="projects" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C4A484] text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2D2A26] mt-3">
            Selected Work
          </h2>
        </div>

        {/* Featured Project */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm mb-8">
          <div className="grid lg:grid-cols-2">
            {/* Project Image */}
            <div
              className="relative h-[400px] lg:h-auto overflow-hidden bg-[#F5F3F0] cursor-zoom-in group"
              onClick={() => setIsZoomed(true)}
            >
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-contain p-8"
              />

              {/* Minimalist Zoom Overlay */}
              <div className="absolute inset-0 bg-[#2D2A26]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                  <ExternalLink size={14} className="text-[#C4A484]" />
                  <span className="text-xs font-medium text-[#2D2A26] uppercase tracking-wider">
                    Click to expand
                  </span>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#C4A484] text-sm">
                  {String(activeProject + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-[#E8E4DF]" />
                <span className="text-[#8B8178] text-sm">
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-[#2D2A26] mb-4">
                {projects[activeProject].title}
              </h3>

              <p className="text-[#5C5652] leading-relaxed mb-6">
                {projects[activeProject].description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeProject].features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#FAF8F5] text-[#8B8178] text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[activeProject].tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 border border-[#C4A484] text-[#C4A484] text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevProject}
                  className="w-12 h-12 rounded-full border border-[#E8E4DF] flex items-center justify-center text-[#8B8178] hover:border-[#C4A484] hover:text-[#C4A484] transition-colors duration-300"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={nextProject}
                  className="w-12 h-12 rounded-full border border-[#E8E4DF] flex items-center justify-center text-[#8B8178] hover:border-[#C4A484] hover:text-[#C4A484] transition-colors duration-300"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Thumbnails */}
        <div className="flex gap-4 justify-center">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeProject === index
                  ? "bg-[#C4A484] w-8"
                  : "bg-[#E8E4DF] hover:bg-[#C4A484]/50"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Minimalist Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-[#FAF8F5]/FB backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <img
              src={projects[activeProject].image}
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              alt="Full resolution view"
            />
            <button
              className="absolute top-0 right-0 p-4 text-[#8B8178] hover:text-[#2D2A26]"
              onClick={() => setIsZoomed(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

import React from 'react';
import { skills } from '../data/mock';

const Skills = () => {
  const categoryColors = {
    'Languages': '#d9fb06',
    'Frameworks': '#f8d47a',
    'Cloud & DevOps': '#0073e6',
    'Databases': '#888680'
  };

  return (
    <section id="skills" className="py-24 bg-[#302f2c]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#d9fb06] font-mono text-sm">02</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">Tech Stack</h2>
          <div className="flex-1 h-px bg-[#3f4816]/50" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-[#1a1c1b] rounded-2xl p-6 border border-[#3f4816]/30 hover:border-[#d9fb06]/30 transition-all duration-300"
            >
              <div
                className="w-3 h-3 rounded-full mb-4"
                style={{ backgroundColor: categoryColors[skillGroup.category] }}
              />
              <h3 className="text-white font-bold text-lg mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#302f2c] text-[#888680] text-sm rounded-full hover:text-white hover:bg-[#3f4816] transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {['React', 'Vue.js', 'Node.js', 'Java', 'Spring Boot', 'Python', 'Django', 'Laravel', 'MongoDB', 'PostgreSQL', 'AWS', 'Azure', 'Docker'].map((tech, idx) => (
              <span
                key={idx}
                className="text-6xl md:text-8xl font-black text-[#3f4816]/30 mx-8"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

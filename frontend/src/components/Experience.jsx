import React from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { experience, education, certifications } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C4A484] text-sm tracking-widest uppercase">Career</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2D2A26] mt-3">Experience & Education</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-[#C4A484] text-sm font-medium mb-6 tracking-wide uppercase">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="bg-[#FAF8F5] p-6 rounded-2xl hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-[#2D2A26] font-medium text-lg">{job.role}</h4>
                      <p className="text-[#C4A484]">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[#8B8178] text-sm flex items-center gap-1">
                        <MapPin size={12} />
                        {job.location}
                      </span>
                      <span className="text-[#8B8178] text-sm">{job.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-[#5C5652] text-sm flex items-start gap-2">
                        <span className="text-[#C4A484] mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-[#C4A484] text-sm font-medium mb-6 tracking-wide uppercase">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-[#FAF8F5] p-5 rounded-2xl"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-[#2D2A26] font-medium">{edu.degree}</h4>
                      <span className="text-[#C4A484] text-sm">{edu.year}</span>
                    </div>
                    <p className="text-[#5C5652] text-sm">{edu.institution}</p>
                    <p className="text-[#8B8178] text-xs mt-1">{edu.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-[#C4A484] text-sm font-medium mb-6 tracking-wide uppercase">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-[#FAF8F5] px-4 py-3 rounded-xl"
                  >
                    <span className="text-[#2D2A26] text-sm">{cert.name}</span>
                    <span className="text-[#8B8178] text-xs">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

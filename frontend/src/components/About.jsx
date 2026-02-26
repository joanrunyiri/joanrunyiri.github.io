import React from 'react';
import { Code2, Database, Cloud, Smartphone } from 'lucide-react';
import { profileData, skills } from '../data/mock';

const About = () => {
  const highlights = [
    { icon: Code2, label: 'Full Stack', desc: 'End-to-end solutions' },
    { icon: Database, label: 'Backend', desc: 'APIs & databases' },
    { icon: Cloud, label: 'Cloud', desc: 'AWS & Azure' },
    { icon: Smartphone, label: 'Mobile', desc: 'React Native & Kotlin' }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C4A484] text-sm tracking-widest uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2D2A26] mt-3">Passionate about creating impact</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <div>
            <p className="text-[#5C5652] text-lg leading-relaxed mb-8">
              {profileData.bio}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FAF8F5] p-5 rounded-2xl group hover:bg-[#C4A484] transition-all duration-300"
                >
                  <item.icon className="text-[#C4A484] mb-3 group-hover:text-white transition-colors" size={24} />
                  <h4 className="text-[#2D2A26] font-medium mb-1 group-hover:text-white transition-colors">{item.label}</h4>
                  <p className="text-[#8B8178] text-sm group-hover:text-white/80 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Skills */}
          <div className="space-y-6">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-[#C4A484] text-sm font-medium mb-3 tracking-wide">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#FAF8F5] text-[#5C5652] text-sm rounded-full hover:bg-[#C4A484] hover:text-white transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

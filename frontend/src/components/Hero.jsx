import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { profileData } from "../data/mock";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#FAF8F5] relative flex items-center">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#C4A484]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-[#D4C4B0]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Greeting */}
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={18} className="text-[#C4A484]" />
            <span className="text-[#8B8178] text-sm tracking-widest uppercase">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-serif text-[#2D2A26] leading-tight mb-6">
            {profileData.name}
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-[#C4A484] font-light mb-6">
            {profileData.title}
          </p>

          {/* Tagline */}
          <p className="text-[#8B8178] text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            {profileData.tagline}. Specializing in full-stack development with a
            passion for creating intuitive, user-centered applications.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-[#C4A484] text-white px-8 py-4 rounded-full hover:bg-[#B08968] transition-colors duration-300 inline-flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={18} />
            </a>
            <a
              href="#contact"
              className="border border-[#C4A484] text-[#C4A484] px-8 py-4 rounded-full hover:bg-[#C4A484] hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-16 pt-10 border-t border-[#E8E4DF]">
            <div>
              <span className="text-4xl font-serif text-[#2D2A26]">
                {profileData.yearsExperience}+
              </span>
              <p className="text-[#8B8178] text-sm mt-1">Years Experience</p>
            </div>
            {/* <div>
              <span className="text-4xl font-serif text-[#2D2A26]">5+</span>
              <p className="text-[#8B8178] text-sm mt-1">Projects Delivered</p>
            </div> */}
            <div>
              <span className="text-4xl font-serif text-[#2D2A26]">5</span>
              <p className="text-[#8B8178] text-sm mt-1">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

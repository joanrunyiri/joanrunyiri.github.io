import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#E8E4DF]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="font-serif text-xl text-[#2D2A26]">
            Joan<span className="text-[#C4A484]">.</span>
          </a>

          {/* Copyright */}
          <p className="text-[#8B8178] text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} Joan Runyiri. Crafted with
            <Heart size={14} className="text-[#C4A484] fill-[#C4A484]" />
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[#E8E4DF] flex items-center justify-center text-[#8B8178] hover:bg-[#C4A484] hover:text-white hover:border-[#C4A484] transition-all duration-300"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

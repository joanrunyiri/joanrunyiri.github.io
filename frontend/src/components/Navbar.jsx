import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl text-[#2D2A26]">
          Joan<span className="text-[#C4A484]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#5C5652] hover:text-[#C4A484] transition-colors duration-300 text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          {/* <a
            href="https://customer-assets.emergentagent.com/job_code-showcase-411/artifacts/el6isi33_Joan_Runyiri_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#C4A484] text-white px-5 py-2.5 rounded-full text-sm hover:bg-[#B08968] transition-colors duration-300"
          >
            <Download size={16} />
            Resume
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2D2A26]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#E8E4DF] mt-4">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#5C5652] hover:text-[#C4A484] transition-colors py-2 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* <a
              href="https://customer-assets.emergentagent.com/job_code-showcase-411/artifacts/el6isi33_Joan_Runyiri_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#C4A484] text-white px-6 py-3 rounded-full mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download size={16} />
              Download Resume
            </a> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

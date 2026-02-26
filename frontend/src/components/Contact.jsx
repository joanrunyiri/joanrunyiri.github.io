import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { profileData } from "../data/mock";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C4A484] text-sm tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2D2A26] mt-3">
            Let's Work Together
          </h2>
          <p className="text-[#5C5652] mt-4 max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-[#C4A484] transition-colors duration-300 shadow-sm">
                <Mail
                  size={20}
                  className="text-[#C4A484] group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <p className="text-[#8B8178] text-sm">Email</p>
                <p className="text-[#2D2A26] group-hover:text-[#C4A484] transition-colors">
                  {profileData.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${profileData.phone}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-[#C4A484] transition-colors duration-300 shadow-sm">
                <Phone
                  size={20}
                  className="text-[#C4A484] group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <p className="text-[#8B8178] text-sm">Phone</p>
                <p className="text-[#2D2A26] group-hover:text-[#C4A484] transition-colors">
                  {profileData.phone}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <MapPin size={20} className="text-[#C4A484]" />
              </div>
              <div>
                <p className="text-[#8B8178] text-sm">Location</p>
                <p className="text-[#2D2A26]">{profileData.location}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/joanrunyiri"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#8B8178] hover:bg-[#C4A484] hover:text-white transition-all duration-300 shadow-sm"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/joanrunyiri/"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#8B8178] hover:bg-[#C4A484] hover:text-white transition-all duration-300 shadow-sm"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          {/* <div className="bg-white p-8 rounded-3xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-[#5C5652] text-sm block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAF8F5] border-0 rounded-xl px-4 py-3 text-[#2D2A26] placeholder-[#8B8178]/50 focus:outline-none focus:ring-2 focus:ring-[#C4A484]/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-[#5C5652] text-sm block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAF8F5] border-0 rounded-xl px-4 py-3 text-[#2D2A26] placeholder-[#8B8178]/50 focus:outline-none focus:ring-2 focus:ring-[#C4A484]/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-[#5C5652] text-sm block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-[#FAF8F5] border-0 rounded-xl px-4 py-3 text-[#2D2A26] placeholder-[#8B8178]/50 focus:outline-none focus:ring-2 focus:ring-[#C4A484]/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C4A484] text-white py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#B08968] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

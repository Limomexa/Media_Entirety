import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/company-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Simplified scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset added so the navbar doesn't cover the section title
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    // REMOVED: isVisible logic. Now it stays fixed always.
    <nav className="fixed top-4 w-full z-[100] px-4">
      {/* Main Navbar Container */}
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-xl border border-gray-200 rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
        {/* Logo Section */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          {/* The white border-box: uses flex for centering */}
          <div className="bg-gray-100 rounded-xl w-14 h-13 flex items-center justify-center overflow-hidden relative">
            {/* The Logo Image: Positioned absolutely to ensure true center */}
            <img
              src={Logo}
              alt="logo"
              className="absolute w-[180%] h-[180%] object-contain max-w-none"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -42%)", // Forces mathematical center
              }}
            />
          </div>

          <span className="text-gray-800 font-bold text-lg tracking-tight">
            MEDIA ENTIRETY
          </span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 ">
          {[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about-us" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-600 hover:text-[#417986] transition-colors text-sm font-medium cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="#contact">
            <button className="hidden sm:block bg-[#417986] text-white hover:bg-[#6B9AC4] transition-all duration-300 hover:scale-105 px-7 py-4 rounded-full font-semibold text-sm cursor-pointer">
              Get Started
            </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 mx-auto max-w-sm bg-white/95 backdrop-blur-2xl border border-gray-200 rounded-3xl p-6 flex flex-col gap-5 text-center shadow-xl">
          {[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about-us" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-[#417986] text-lg font-medium"
            >
              {item.name}
            </button>
          ))}
          <button className="bg-[#417986] text-white px-6 py-3 rounded-full font-bold w-full mt-2">
            Book a call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

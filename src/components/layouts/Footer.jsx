import React, { useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/images/company-logo.png";

const Footer = () => {
  // --- MODAL STATE ---
  const [activeModal, setActiveModal] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6 relative border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-0 mb-8 overflow-hidden">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Media Entirety Logo"
              className="w-14 h-14 md:w-14 md:h-14 pt-2 object-contain"
            />
          </div>
          <span className="font-bold text-xl md:text-2xl tracking-tighter text-gray-800 leading-none">
            Media Entirety
          </span>
        </div>
        {/* Navigation Links for footer section*/}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {[
            { name: "Products", id: "services" },
            { name: "Studio", id: "testimonials" },
            { name: "Clients", id: "testimonials" },
            { name: "Blog", id: "testimonials" },
          ].map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className="text-gray-600 hover:text-[#417986] transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          {/* Privacy & Terms as Buttons for Modal */}
          <button
            onClick={() => setActiveModal("privacy")}
            className="text-gray-600 hover:text-[#417986] transition-colors text-sm font-medium cursor-pointer"
          >
            Privacy
          </button>
          <button
            onClick={() => setActiveModal("terms")}
            className="text-gray-600 hover:text-[#417986] transition-colors text-sm font-medium cursor-pointer"
          >
            Terms
          </button>
        </nav>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-10 right-5 bg-white hover:bg-[#417986] hover:text-white p-3 rounded-full transition-all duration-300 border border-gray-200 group cursor-pointer active:scale-90"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-4 h-4" />
        </button>

        {/* Divider line between top bottom*/}
        <div className="w-full border-t border-dashed border-gray-300 mb-8"></div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-gray-500">
            <a
              href="#"
              className="hover:text-[#417986] transition-colors active:scale-110"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="hover:text-[#417986] transition-colors active:scale-110"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="#"
              className="hover:text-[#417986] transition-colors active:scale-110"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.facebook.com/share/1ALXm1eiYx/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#417986] transition-colors active:scale-110"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/mediaentirety?igsh=YXVyZjB6MDlzMW05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#417986] transition-colors active:scale-110"
            >
              <FaInstagram size={18} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Media Entirety digital marketing agency. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* --- PROFESSIONAL MODAL SYSTEM --- */}
      {activeModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="absolute inset-0" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="bg-[#417986] p-5 text-white flex justify-between items-center">
              <h3 className="font-bold uppercase tracking-widest">
                {activeModal === "privacy"
                  ? "Privacy Policy"
                  : "Terms of Service"}
              </h3>
              <button
                onClick={closeModal}
                className="hover:bg-black/10 p-1 rounded-full transition-colors cursor-pointer"
              >
                <IoMdClose size={24} />
              </button>
            </div>

            <div className="p-8 max-h-[60vh] overflow-y-auto text-sm leading-relaxed text-gray-600 space-y-4">
              {activeModal === "privacy" ? (
                <>
                  <p className="font-bold text-[#417986]">Your Data Security</p>
                  <p>
                    Media Entirety respects your digital privacy. We only
                    collect details you share via our contact forms to provide
                    marketing consultations.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>We do not sell your data to third parties.</li>
                    <li>Information is used only for project communication.</li>
                    <li>
                      Cookies are used to improve your browsing experience.
                    </li>
                  </ul>
                  <p>
                    By using this site, you agree to our transparent data
                    handling practices.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-bold text-[#417986]">Service Agreement</p>
                  <p>
                    By partnering with Media Entirety, you agree to our standard
                    operating terms:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Service Delivery:</strong> Marketing results
                      depend on market trends and platform algorithms.
                    </li>
                    <li>
                      <strong>Payments:</strong> Project-based payments follow a
                      strictly agreed milestone structure.
                    </li>
                    <li>
                      <strong>Confidentiality:</strong> We maintain 100%
                      confidentiality of your business data.
                    </li>
                  </ul>
                  <p>
                    We aim for digital excellence and expect timely cooperation
                    from our clients for best results.
                  </p>
                </>
              )}
            </div>

            <div className="p-5 border-t border-gray-100 text-right">
              <button
                onClick={closeModal}
                className="bg-[#417986] text-white px-6 py-2 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.toLowerCase().includes("name")
        ? "name"
        : e.target.placeholder.toLowerCase().includes("email")
          ? "email"
          : e.target.placeholder.toLowerCase().includes("phone")
            ? "phone"
            : "message"]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message + " | Phone: " + formData.phone,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyZFMu3VpF7r6_sJpbcRew-60qmOFrXqxVduo3jYp7hVTC99-muL8baqhPJfwlkbOZ7Ew/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        },
      );

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Media Entirety | Digital Marketing Agency</title>

        <meta
          name="description"
          content="Contact Media Entirety digital marketing agency for SEO, social media marketing, PPC advertising and website development services."
        />

        <meta
          name="keywords"
          content="contact Media Entirety, digital marketing agency contact, SEO company contact, marketing agency Chennai, Media Entirety contact"
        />

        <meta name="author" content="Media Entirety" />

        <meta property="og:title" content="Contact Media Entirety" />
        <meta
          property="og:description"
          content="Get in touch with Media Entirety for digital marketing services."
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>
      <section
        id="contact"
        className="relative z-10 pt-10 pb-24 px-6 md:px-20 text-gray-800 bg-transparent"
      >
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-800"
          >
            Contact Us
          </motion.h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Get in Touch to Grow Your Business with Expert Digital Marketing
            Solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex items-center gap-4 bg-white border border-gray-200 p-4 rounded-2xl shadow-lg">
                <div className="bg-[#417986] p-3 rounded-lg text-white">
                  <FaEnvelope />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  mediaentirety@gmail.com
                </span>
              </div>

              <div className="flex-1 flex items-center gap-4 bg-white border border-gray-200 p-4 rounded-2xl shadow-lg">
                <div className="bg-[#417986] p-3 rounded-lg text-white">
                  <FaPhoneAlt />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  +91 996 242 4130
                </span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-10 rounded-[2.5rem] shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <span className="text-[#417986] font-bold w-20 uppercase text-xs tracking-widest">
                    Email
                  </span>
                  <span className="text-gray-600">mediaentirety@gmail.com</span>
                </div>

                <div className="border-t border-gray-200"></div>

                <div className="flex items-center gap-6">
                  <span className="text-[#417986] font-bold w-20 uppercase text-xs tracking-widest">
                    Phone
                  </span>
                  <span className="text-gray-600">+91 996 242 4130</span>
                </div>

                <div className="border-t border-gray-200"></div>

                <div className="flex items-start gap-6">
                  <span className="text-[#417986] font-bold w-20 uppercase text-xs tracking-widest mt-1">
                    Address
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    No.333/3 Perambur barracks Road,
                    <br />
                    Perambur, Chennai - 600011
                  </span>
                  <span className="hidden">
                    Digital Marketing Agency Chennai, SEO Services Chennai,
                    Social Media Marketing Chennai
                  </span>
                </div>

                <div className="border-t border-gray-200"></div>

                <div className="flex items-center gap-6">
                  <span className="text-[#417986] font-bold w-20 uppercase text-xs tracking-widest">
                    Follow Us
                  </span>

                  <div className="flex gap-4 text-gray-500">
                    <a
                      href="https://www.facebook.com/share/1ALXm1eiYx/"
                      target="_blank"
                      className="hover:text-[#417986] transition-colors"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#417986] transition-colors"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#417986] transition-colors"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://www.instagram.com/mediaentirety?igsh=YXVyZjB6MDlzMW05"
                      target="_blank"
                      className="hover:text-[#417986] transition-colors"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                Send Us a Message
              </h3>
              <p className="text-gray-600">
                Have any questions or want to discuss your project? Fill out the
                form below.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-[#417986]/50 transition-colors"
              />

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-[#417986]/50 transition-colors"
              />

              <input
                type="text"
                placeholder="Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-[#417986]/50 transition-colors"
              />

              <textarea
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-[#417986]/50 transition-colors"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#417986] to-[#6B9AC4] text-white font-bold py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

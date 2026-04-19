import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimationText from "../components/common/AnimationText";
import { FaTimes, FaCalendarAlt, FaClock } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919962424130";

    const text = `New Consultation Request%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Date: ${formData.date}%0A
Time: ${formData.time}%0A
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");

    setShowForm(false);
  };

  return (
    <>
      <Helmet>
        <title>Media Entirety | Digital Marketing Agency</title>

        <meta
          name="description"
          content="Media Entirety is a digital marketing agency helping brands grow through SEO, social media marketing, paid ads and website development."
        />

        <meta
          name="keywords"
          content="Media Entirety, Digital Marketing Agency, SEO services, Social media marketing, Website development, Marketing agency India"
        />

        <meta name="author" content="Media Entirety" />

        <meta
          property="og:title"
          content="Media Entirety Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="We help brands grow through innovative and data-driven marketing strategies."
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      <div className="relative w-full min-h-screen overflow-hidden bg-transparent">
        <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20">
          <div className="max-w-5xl w-full text-center">
            <AnimationText
              text="Elevate Your Business With Media Entirety..."
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 md:mb-6 text-gray-800"
              delay={100}
              direction="top"
            />

            <div className="mb-6 sm:flex-row items-center justify-center sm:gap-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#417986]">
                Media Entirety
              </h1>
              <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic text-gray-600">
                Digital Marketing Agency
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <AnimationText
                text="We help brands grow through innovative and data-driven marketing strategies that deliver real business impact."
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed"
                delay={50}
                direction="bottom"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-7">
              <button
                onClick={() => setShowForm(true)}
                className="w-full cursor-pointer sm:w-auto bg-[#417986] text-white hover:bg-[#6B9AC4] transition-all duration-300 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-lg hover:scale-105 active:scale-95"
              >
                Get a Free Consultation
              </button>

              <a
                href="#contact"
                className="block w-full sm:inline-block sm:w-auto"
              >
                <button className="w-full cursor-pointer bg-transparent border-2 border-[#417986] text-[#417986] text-grey-700 hover:bg-[#417986] hover:text-white transition-all duration-300 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-lg hover:scale-105 active:scale-95">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showForm && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowForm(false)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white border border-gray-200 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[3rem] shadow-2xl"
              >
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 sm:top-8 sm:right-8 text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <FaTimes size={22} />
                </button>

                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 tracking-tight">
                    Schedule Your <span className="text-[#417986]">Slot</span>
                  </h3>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-xl"
                  />

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-xl"
                  />

                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-xl"
                  />

                  <input
                    required
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-xl"
                  />

                  <textarea
                    required
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-xl"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#417986] text-white py-3 rounded-xl font-bold cursor-pointer hover:bg-[#6B9AC4]"
                  >
                    CONFIRM CONSULTATION
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;

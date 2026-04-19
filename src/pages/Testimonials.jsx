import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaCheckCircle,
  FaTimes,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Beyond Fitness",
    company: "Tech Solutions",
    image: "/src/assets/images/client-3.png",
    text: "Amazing SEO results and great support.",
  },
  {
    id: 2,
    name: "Le palatine aesthetic clinic",
    company: "Digital Hub",
    image: "/src/assets/images/client-2.png",
    text: "Our leads increased after their campaign.",
  },
  {
    id: 3,
    name: "Trans infra construction",
    company: "Startup World",
    image: "/src/assets/images/client-1.jpg",
    text: "Very professional and creative team.",
  },
  {
    id: 4,
    name: "Imran Shah",
    company: "Startup World",
    image: "/src/assets/images/background-image.png",
    text: "Very professional and creative team.",
  },
  {
    id: 5,
    name: "Imran Shah",
    company: "Startup World",
    image: "/src/assets/images/background-image.png",
    text: "Very professional and creative team.",
  },
  {
    id: 6,
    name: "Imran Shah",
    company: "Startup World",
    image: "/src/assets/images/background-image.png",
    text: "Very professional and creative team.",
  },
  {
    id: 7,
    name: "Imran Shah",
    company: "Startup World",
    image: "/src/assets/images/background-image.png",
    text: "Very professional and creative team.",
  },
];

const customImageCards = [
  {
    id: 1,
    name: "Project One",
    image: "/src/assets/images/testimonial-1.jpeg",
  },
  {
    id: 2,
    name: "Project Two",
    image: "/src/assets/images/testimonial-2.jpeg",
  },
  {
    id: 3,
    name: "Project Three",
    image: "/src/assets/images/testimonial-3.jpeg",
  },
  {
    id: 4,
    name: "Project Four",
    image: "/src/assets/images/testimonial-10.jpeg",
  },
  {
    id: 5,
    name: "Project Five",
    image: "/src/assets/images/testimonial-11.jpeg",
  },
  {
    id: 6,
    name: "Project Six",
    image: "/src/assets/images/testimonial-5.jpeg",
  },
  {
    id: 7,
    name: "Project Seven",
    image: "/src/assets/images/testimonial-7.jpeg",
  },
  {
    id: 8,
    name: "Project Eight",
    image: "/src/assets/images/testimonial-9.jpeg",
  },
  {
    id: 9,
    name: "Project Nine",
    image: "/src/assets/images/testimonial-8.jpeg",
  },
  {
    id: 10,
    name: "Project Ten",
    image: "/src/assets/images/testimonial-4.jpeg",
  },
];

// Card Component
const TestimonialCard = ({ item }) => (
  <div className="w-[350px] md:w-[400px] flex-shrink-0 bg-white border border-gray-200 p-8 rounded-3xl shadow-lg m-3">
    <div className="flex text-[#417986] mb-4 gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} size={14} />
      ))}
    </div>

    <div className="flex items-center gap-4 mb-6">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-2xl object-cover border border-gray-200"
        />

        <FaCheckCircle
          className="absolute -bottom-1 -right-1 text-[#417986] bg-white rounded-full"
          size={16}
        />
      </div>

      <div>
        <h4 className="text-gray-800 font-bold text-lg">{item.name}</h4>
        <p className="text-gray-500 text-sm">{item.company}</p>
      </div>
    </div>

    <p className="text-gray-600 leading-relaxed text-sm italic">
      "{item.text}"
    </p>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const maxIndex = testimonials.length - 3;

  // ⭐ AUTO SLIDE EVERY 1 SECOND
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const handleDotClick = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

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
        <title>
          Client Testimonials | Media Entirety Digital Marketing Agency
        </title>

        <meta
          name="description"
          content="Read client testimonials and success stories of Media Entirety digital marketing agency. See how our SEO, PPC and social media marketing helped businesses grow."
        />

        <meta
          name="keywords"
          content="Media Entirety reviews, digital marketing testimonials, SEO agency reviews, client success stories, marketing agency testimonials"
        />

        <meta name="author" content="Media Entirety" />

        <meta
          property="og:title"
          content="Client Testimonials | Media Entirety"
        />
        <meta
          property="og:description"
          content="See how Media Entirety transformed client businesses through digital marketing strategies."
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://yourdomain.com/testimonials" />
      </Helmet>
      <div
        id="testimonials"
        className="relative w-full min-h-screen overflow-hidden"
      >
        <div className="relative z-10 pt-10 pb-15">
          {/* TITLE */}
          <div className="text-center mb-12 px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Testimonials
            </motion.h1>

            <p className="text-[#417986] text-lg">
              See How We Have Transformed Our Clients' Businesses
            </p>
          </div>

          {/* TESTIMONIAL SLIDER */}
          <div className="max-w-7xl mx-auto px-6 mb-16 relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: -(currentIndex * 424) }}
                transition={{ duration: 0.8 }}
              >
                {testimonials.map((item) => (
                  <TestimonialCard key={item.id} item={item} />
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center items-center gap-3 mt-10">
              {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
                <button
                  key={dot}
                  onClick={() => handleDotClick(dot)}
                  className={`transition-all duration-500 rounded-full ${
                    currentIndex === dot
                      ? "w-12 h-2.5 bg-[#417986]"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* PORTFOLIO */}
          <div className="flex flex-col gap-12 py-24 bg-gray-50 border-y border-gray-200 overflow-hidden">
            <div className="text-center px-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-sm uppercase tracking-[0.4em] text-[#417986] font-bold mb-3"
              >
                Our Portfolio in Action
              </motion.h3>

              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Visualizing success through high-impact digital strategies and
                creative execution.
              </p>
            </div>

            <div className="flex overflow-hidden relative group">
              <motion.div
                className="flex whitespace-nowrap gap-8 items-center"
                animate={{ x: [0, -2000] }}
                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              >
                {[...customImageCards, ...customImageCards].map((item, idx) => (
                  <div key={idx} className="flex-shrink-0 relative">
                    <div className="w-[260px] sm:w-[350px] md:w-[450px] h-[200px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-lg">
                      <img
                        src={item.image}
                        alt="Digital marketing portfolio Media Entirety"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto my-24 px-6 text-center">
            <div className="bg-white border border-gray-200 p-12 rounded-[40px] shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Become Our{" "}
                <span className="text-[#417986]">Next Success Story</span>
              </h3>

              <p className="text-gray-700">
                Let's discuss how we can help elevate your business
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="bg-[#417986] cursor-pointer text-white px-10 py-4 rounded-full font-bold text-lg mt-6 shadow-lg transform hover:scale-105 transition-all"
              >
                Get a Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* FORM */}
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full max-w-xl bg-white p-8 rounded-3xl shadow-2xl"
              >
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-6 right-6 text-gray-500"
                >
                  <FaTimes size={22} />
                </button>

                <h3 className="text-2xl font-bold mb-6 text-center">
                  Schedule Your Slot
                </h3>

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
                    className="w-full bg-[#417986] text-white py-3 rounded-xl font-bold"
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

export default Testimonials;

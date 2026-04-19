import React, { useState } from "react"; // Added useState
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import {
  FaRocket,
  FaComments,
  FaPenNib,
  FaBullseye,
  FaUsers,
  FaChartBar,
  FaLightbulb,
  FaTimes, // Added for close button
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import serviceImage from "../assets/images/service-img.avif";

const servicesData = [
  {
    id: 1,
    title: "SEO & SEM",
    icon: <FaRocket className="text-orange-400" />,
    desc: "Boost your search engine visibility and drive targeted traffic with our expert SEO and SEM strategies.",
    details: [
      "Comprehensive Keyword Research",
      "On-Page & Technical SEO Audits",
      "Strategic Backlink Building",
      "High-Conversion SEM Campaigns",
    ],
    success:
      "Increased organic traffic by 150% for a leading E-commerce brand in 6 months.",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    icon: <FaComments className="text-blue-400" />,
    desc: "Engage and grow your audience on social platforms with our tailored social media strategies.",
    details: [
      "Custom Content Calendars",
      "Audience Engagement Analysis",
      "Influencer Partnership Management",
      "Paid Social Ad Optimization",
    ],
    success:
      "Grew a startup's Instagram following from 0 to 50k engaged users.",
  },
  {
    id: 3,
    title: "Content Marketing",
    icon: <FaPenNib className="text-purple-400" />,
    desc: "Create compelling content that resonates with your audience and builds brand authority.",
    details: [
      "SEO-Optimized Blog Writing",
      "Video Content Production",
      "Email Marketing Automations",
      "Whitepapers & E-books",
    ],
    success: "Generated 300% more leads via content-driven email funnels.",
  },
  {
    id: 4,
    title: "PPC Advertising",
    icon: <FaBullseye className="text-green-400" />,
    desc: "Maximize your ROI with precise and effective pay-per-click advertising campaigns.",
    details: [
      "Google Ads Management",
      "Remarketing Strategies",
      "A/B Split Testing",
      "ROAS Optimization",
    ],
    success: "Reduced Cost-Per-Acquisition by 45% for a SaaS client.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null); // State for modal

  return (
    <>
      <Helmet>
        <title>Digital Marketing Services | Media Entirety</title>

        <meta
          name="description"
          content="Media Entirety offers SEO, Social Media Marketing, PPC Advertising and Content Marketing services to grow your business online."
        />

        <meta
          name="keywords"
          content="digital marketing services, SEO services, PPC advertising, social media marketing, content marketing agency, Media Entirety"
        />

        <meta name="author" content="Media Entirety" />

        <meta
          property="og:title"
          content="Digital Marketing Services | Media Entirety"
        />
        <meta
          property="og:description"
          content="SEO, PPC, Social Media Marketing and Content Marketing services to grow your business."
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://yourdomain.com/services" />
      </Helmet>
      <section
        id="services"
        className="relative z-10 pt-10 pb-26 px-6 md:px-20 bg-transparent text-white overflow-hidden"
      >
        {/* 1. Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-600"
          >
            Our Services
          </motion.h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto">
            We provide SEO services, social media marketing, PPC advertising and
            content marketing to grow your business online.
          </p>
        </div>

        {/* 2. Main Service Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 cursor-pointer">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-[2.5rem] bg-white border border-gray-200 hover:border-[#417986]/40 transition-all duration-500 shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="absolute -inset-px bg-gradient-to-br from-[#417986]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button className="text-[#417986] font-semibold text-sm flex items-center gap-2 group-hover:underline">
                  Learn More <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Immersive Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              {/* Backdrop with heavy blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                className="relative w-full max-w-2xl bg-white border border-gray-200 p-8 md:p-12 rounded-[3rem] shadow-2xl"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-8 right-8 text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <FaTimes size={24} />
                </button>

                <div className="flex flex-col gap-6">
                  <div className="text-5xl">{selectedService.icon}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#417986]">
                    {selectedService.title}
                  </h3>

                  <div className="space-y-4">
                    <h4 className="text-lg font-bold uppercase tracking-widest text-gray-700">
                      Detailed Deliverables
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <span className="text-[#417986]">•</span> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#417986] mb-2">
                      Success Story
                    </h4>
                    <p className="text-gray-600 italic">
                      "{selectedService.success}"
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      const phoneNumber = "919962424130"; // apna WhatsApp number

                      const message = `Hello Media Entirety Team,

I am interested in your service:

Service: ${selectedService.title}

I would like to discuss how this service can help my business.
Please share more details about pricing, timeline, and strategy.

Thank you.`;

                      const encodedMessage = encodeURIComponent(message);

                      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                      window.open(whatsappURL, "_blank");
                    }}
                    className="mt-4 bg-[#417986] text-white cursor-pointer font-bold py-4 px-8 rounded-full hover:bg-[#6B9AC4] transition-all transform hover:scale-105 active:scale-95"
                  >
                    Start Your Project
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* 4. "Why Work With Us" Section (Previous Features Untouched) */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-gray-800">
            Why Work <span className="text-[#417986]">With Us?</span>
          </h3>
          {/* ... Rest of your existing code remains exactly same ... */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <FaUsers />,
                  title: "Experienced Team",
                  desc: "Our team of experts has years of experience in achieving digital marketing success.",
                },
                {
                  icon: <FaLightbulb />,
                  title: "Data-Driven",
                  desc: "We base our strategies on deep data analysis to ensure maximum performance.",
                },
                {
                  icon: <FaChartBar />,
                  title: "Proven Results",
                  desc: "A track record of driving significant growth for diverse industry leaders.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <div className="text-2xl text-[#417986] mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-[3rem] overflow-hidden border border-gray-200 shadow-lg"
            >
              <div className="absolute inset-0 bg-[#417986]/10 pointer-events-none" />
              <img
                src={serviceImage}
                alt="Digital marketing team strategy meeting"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

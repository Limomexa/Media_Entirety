import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaHandshake, FaBullseye, FaChartLine } from "react-icons/fa";
import aboutImage from "../assets/images/about-us-image.avif";
import { Helmet } from "react-helmet";

/* Animation Variants for reuse */
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Media Entirety | Digital Marketing Agency</title>

        <meta
          name="description"
          content="Learn about Media Entirety, a results-driven digital marketing agency helping businesses grow through SEO, social media marketing and performance advertising."
        />

        <meta
          name="keywords"
          content="About Media Entirety, digital marketing agency, SEO company, social media marketing agency, marketing company India"
        />

        <meta name="author" content="Media Entirety" />

        <meta
          property="og:title"
          content="About Media Entirety Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="We help brands grow with innovative and data-driven marketing strategies."
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>
      <div
        id="about-us"
        className="relative z-10 text-gray-800 font-sans selection:bg-[#417986] selection:text-white"
      >
        {/* 1. Hero Section */}
        <section className="relative pt-10 pb-20 px-6 md:px-20 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
                About Us
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6 leading-tight">
                Driving Your Success with <br />
                <span className="text-[#417986]">
                  Digital Marketing Excellence
                </span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg">
                We are dedicated to helping businesses thrive online through
                innovative, data-driven digital marketing strategies.
              </p>

              <div className="flex gap-12 border-t border-gray-200 pt-8">
                <div>
                  <p className="text-4xl font-bold text-[#417986]">+2</p>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    Years Exp.
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#417986]">+20</p>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    Clients Served
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#417986] to-[#6B9AC4] rounded-3xl blur opacity-25"></div>
              <img
                src={aboutImage}
                alt="Media Entirety digital marketing team"
                className="relative rounded-2xl w-full object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* 2. Grid Stats */}
        <section className="py-20 px-6 md:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Who We <span className="text-[#417986]">Are</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Media Entirely is a leading digital marketing agency focused on
                delivering measurable results.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-px bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, duration: 0.5 }}
            >
              {[
                { label: "Campaigns Managed", value: "+10k" },
                { label: "Award Win Agency", value: "+15" },
                {
                  label: "Client Rewriting Agency",
                  value: "+95%",
                  suffix: "°",
                },
                { label: "Client Retention Rate", value: "95%" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors"
                >
                  <p className="text-3xl font-bold text-[#417986] mb-1">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="text-gray-500 text-xs uppercase font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. Leadership - UPDATED: Single Centered Image */}
        <section className="py-24 px-6 md:px-20 mb-20">
          <motion.div
            {...fadeIn}
            className="max-w-7xl mx-auto text-center mb-16"
          >
            <h3 className="text-4xl font-bold mb-4 text-gray-800">
              Meet Our <span className="text-[#417986]">Leadership</span>
            </h3>
          </motion.div>

          {/* Container centered with max-width for the single image */}
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg"
            >
              <img
                src="https://i.pravatar.cc/400?img=31"
                alt="Media Entirety founder CEO"
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-xl font-bold text-white">Executive Member</p>
                <p className=" text-white text-sm uppercase tracking-widest">
                  Founder / CEO
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;

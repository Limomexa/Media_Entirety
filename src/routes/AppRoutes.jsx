import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Testimonials from "../pages/Testimonials";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <div id="home">
          <Home />
        </div>
        <div id="about-us">
          <AboutUs />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="contact">
          <ContactUs />
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaEnvelope, FaPhone, FaFax, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./index.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("sensaphone");
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <div className="font-sans">
      {/* ========== Sticky Header ========== */}
      <motion.header
        className="fixed top-0 left-0 w-full bg-[#133984] shadow-md p-4 flex justify-between items-center z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {" "}
        <div className="flex items-center space-x-2">
          <img
            src="/images/CAS_White.png"
            alt="Company Logo"
            className="h-10 w-auto"
          />
          <h2 className="text-2xl font-bold text-white">CAS Systems Limited</h2>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["About Us", "Products", "Contact Us"].map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase().replace(/\s/g, "")}
              smooth={true}
              duration={800}
              className="text-white font-semibold cursor-pointer hover:text-gray-200 transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </motion.header>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={
            isMobileMenuOpen ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }
          }
          transition={{ duration: 0.4 }}
          className={`fixed top-16 left-0 w-full bg-[#133984] text-white flex flex-col items-center py-4 space-y-4 z-50 md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {["About Us", "Products", "Contact Us"].map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase().replace(/\s/g, "")}
              smooth={true}
              duration={800}
              className="text-lg hover:text-gray-200 transition-all duration-300 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
      {/* ========== About Us ========== */}
      <motion.section
        id="aboutus"
        className="w-full flex flex-col items-center text-center py-24 bg-white shadow-md px-4"
        style={{ paddingTop: headerHeight + 40 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          Founded in 1997, <strong>CAS</strong> is a professional company with
          core competence in engineering, brand management, product distributing
          and installation. Our products include remote monitoring systems,
          liquid leakage detection systems, industrial heat tracing systems,
          commercial underfloor heating systems and hot water temperature
          maintenance systems, etc.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mt-3">
          As a pioneering organization in promoting the concept of remote
          environmental monitoring in Asia, <strong>CAS</strong> is strongly
          entrenched in these sectors with thousands of clients in more than 20
          countries.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mt-3">
          <strong>CAS</strong> has highest quality product. <strong>CAS</strong>{" "}
          provides professional installation and maintenance service, which
          safeguard your projects all the way.
        </p>
        <motion.img
          src="/images/CAS_Coverage.jpg"
          alt="About us"
          className="w-full max-w-3xl rounded-lg shadow-lg mt-6 object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.section>
      {/* ========== Products ========== */}
      <section
        id="products"
        className="w-full py-24 flex flex-col items-center bg-gray-50 px-4"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h2>

        {/* Scrollable Product Tabs (Now Using Logos) */}
        <motion.div
          className="w-full max-w-5xl overflow-x-auto flex flex-nowrap justify-start md:justify-center space-x-6 pb-2 scrollbar-hide mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            {
              id: "sensaphone",
              img: "/images/Sensaphone (Original).png",
              alt: "Sensaphone Logo",
            },
            {
              id: "floor_heating",
              img: "/images/Raychem Logo.png",
              alt: "Raychem Logo",
            },
            {
              id: "water_leak",
              img: "/images/TraceTek_Logo.png",
              alt: "TraceTek Logo",
            },
            {
              id: "picobox",
              img: "/images/PB logo - Linkwise blue.jpg",
              alt: "Picobox Logo",
            },
          ].map((product) => (
            <motion.button
              key={product.id}
              className="h-20 w-32 min-w-[128px] flex justify-center items-center"
              onClick={() => setActiveTab(product.id)}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={product.img}
                alt={product.alt}
                className={`h-16 object-contain ${
                  activeTab === product.id
                    ? "border-2 border-[#133984] rounded-md"
                    : ""
                }`}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Product Details */}
        <motion.div
          className="w-full max-w-5xl flex flex-col items-center bg-white shadow-lg p-8 rounded-xl mt-8 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === "sensaphone" && (
            <motion.div
              key={"sensaphone"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <p className="text-lg text-gray-700">
                Sensaphone systems provide an extra layer of protection 24/7,
                instantly notifying you of changes in temperature, equipment
                status and other critical conditions. Alerts can be sent
                straight to your mobile device – keeping you updated and giving
                you peace of mind.
              </p>
              <motion.img
                src="/images/Page 2_Sensaphone/Sensaphone.png"
                alt="Sensaphone"
                className="w-full max-w-md mx-auto rounded-lg shadow-md object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
          {activeTab === "floor_heating" && (
            <motion.div
              key={"floor_heating"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <p className="text-lg text-gray-700">
                From bathrooms to living rooms, from homes to warehouses, enjoy
                the comfort of a warm floor. RAYCHEM electric floor heating
                systems keep you warm and provide energy efficient comfort.
                Optimized for every building or house, with reduced installation
                times, wifi-enabled thermostats, warranty up to 10 years.
              </p>
              <div className="flex flex-col items-center space-y-3">
                <motion.img
                  src="/images/Page 3_Raychem/1.jpg"
                  alt="Raychem1"
                  className="w-full max-w-md mx-auto shadow-md object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src="/images/Page 3_Raychem/2.jpg"
                  alt="Raychem2"
                  className="w-full max-w-md mx-auto shadow-md object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <iframe
                  className="w-full max-w-lg h-64 mt-4 rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/zVXXmzhPMwc"
                  title="Floor Heating Video"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          )}
          {activeTab === "water_leak" && (
            <motion.div
              key={"water_leak"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <p className="text-lg text-gray-700">
                Leak detection systems enhance environmental health and safety
                by ensuring that leaks are discovered before any significant
                damage can occur. RAYCHEM TraceTek solutions detect liquid
                leaks, whether they’re water, fuel, or aqueous chemicals.
              </p>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Water Leak Detection
                </h2>
                <p className="text-lg text-gray-700">
                  RAYCHEM TraceTek water leak detection system with sensor
                  cables, probes, and monitoring systems lets you detect and
                  pinpoint the source of a leak, allowing you to take corrective
                  action before damage occurs.
                </p>
                <div className="flex justify-center">
                  <iframe
                    className="w-full max-w-lg h-64 rounded-lg shadow-md"
                    src="https://www.youtube.com/embed/lMftJ4BiCjo"
                    title="Water Leak Detection Video"
                    allowFullScreen
                  ></iframe>
                </div>

                <h2 className="text-2xl font-bold text-gray-800">
                  Fuel Leak Detection
                </h2>
                <p className="text-lg text-gray-700">
                  Leaking hydrocarbon fuels are extremely dangerous in an
                  industrial environment. Undetected fuel leaks pose high fire
                  and explosion risks. The RAYCHEM TraceTek Leak Detection
                  system offers:
                </p>
                <div className="text-left mx-auto w-full max-w-md">
                  <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>Early detection of fuel leaks and spills</li>
                    <li>Quick response warnings in dangerous environments</li>
                    <li>Leak detection before environmental damage occurs</li>
                    <li>Cost-effective safety and environmental protection</li>
                  </ul>
                </div>

                <div className="flex justify-center">
                  <iframe
                    className="w-full max-w-lg h-64 rounded-lg shadow-md"
                    src="https://www.youtube.com/embed/EFc54VUM8Gs"
                    title="Fuel Leak Detection Video"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="flex justify-center">
                  <a
                    href="/images/Page 4_Tracetek/TraceTek Water Leak Detection Schematic Diagram.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.img
                      src="/images/Page 4_Tracetek/TraceTek Water Leak Detection Schematic Diagram.jpg"
                      alt="TraceTek"
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-md object-contain cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
          {activeTab === "picobox" && (
            <motion.div
              key={"picobox"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <p className="text-lg text-gray-700">
                Picobox is a versatile range of devices designed for remote
                monitoring and control of equipment and facilities. These
                modules and sensors offer alarm monitoring, on/off control, and
                event logging functions, enabling efficient supervision of
                critical operations and processes. Utilizing Short Messaging
                Service (SMS), Picobox systems provide instant alerts and
                management capabilities via mobile phones, ensuring prompt
                responses to any issues.
              </p>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Key Products
                </h2>
                <p className="text-lg text-gray-700">
                  One notable product in the Picobox lineup is the Picobox REX,
                  a cost-effective monitoring system that delivers real-time
                  status updates of your equipment through SMS and email
                  notifications. This system ensures continuous monitoring,
                  allowing for immediate action in case of equipment anomalies.
                </p>
                <p className="text-lg text-gray-700">
                  Another key offering is the Picobox FMGuard, an advanced
                  monitoring controller that consolidates multiple models into a
                  single device. It provides comprehensive monitoring
                  capabilities, including SMS and email alerts, a user-friendly
                  web interface, and the ability to monitor up to 84 points
                  simultaneously with expansion modules.
                </p>
                <p className="text-lg text-gray-700">
                  Additionally, Picobox offers Modbus RTU Data Acquisition (DAQ)
                  modules, which provide a simple, low-cost solution for
                  distributed I/O requirements. These modules are designed for
                  easy integration into existing systems, offering flexibility
                  and scalability for various applications.
                </p>
                <div className="flex justify-center">
                  <iframe
                    className="w-full max-w-lg h-64 rounded-lg shadow-md"
                    src="https://www.youtube.com/embed/PcvO7wqA4U8"
                    title="Picobox Video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>
      {/* ========== Contact Us ========== */}
      <motion.section
        id="contactus"
        className="w-full py-24 bg-white px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
          {/* Contact Information */}
          <motion.div
            className="md:w-1/2 space-y-4 pl-6 md:pl-12 self-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                icon: <FaEnvelope className="text-[#133984]" />,
                text: "info@CASsystems.com",
                link: "mailto:info@CASsystems.com",
              },
              {
                icon: <FaPhone className="text-[#133984]" />,
                text: "+852 2780 5123",
                link: "tel:+85227805123",
              },
              {
                icon: <FaFax className="text-[#133984]" />,
                text: "+852 3011 5123",
                link: "fax:+85230115123",
              },
              {
                icon: <FaMapMarkerAlt className="text-[#133984]" />,
                text: "Unit 1213, 12/F, Chevalier Commercial Centre, No. 8 Wang Hoi Road, Kowloon Bay, Hong Kong",
                link: "https://maps.app.goo.gl/5zJkmU5jZ1z6LqRn9",
              },
            ].map((contact, index) => (
              <motion.p
                key={index}
                className="text-lg text-gray-600 flex items-center space-x-3"
                whileHover={{ scale: 1.05, color: "#133984" }}
                transition={{ duration: 0.3 }}
              >
                {contact.icon}
                <a
                  href={contact.link}
                  className="text-[#133984] hover:underline"
                >
                  {contact.text}
                </a>
              </motion.p>
            ))}
          </motion.div>

          {/* Google Map with Zoom-in Effect */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Google Map"
              className="w-full max-w-lg h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1366.4052390190125!2d114.21133476594478!3d22.321303633187814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8eb74b90be1%3A0xd40475ed0cd71f0b!2sCAS%20Systems%20Limited!5e0!3m2!1szh-TW!2sca!4v1740758742850!5m2!1szh-TW!2sca"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("product1");
  const [headerHeight, setHeaderHeight] = useState(0);

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

  const scrollToSection = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans">
      {/* ========== Sticky Header ========== */}
      <header className="fixed top-0 left-0 w-full bg-green-600 shadow-md p-4 flex justify-between items-center z-50">
        <div className="flex items-center space-x-2">
          <img
            src="/images/cas.jpg"
            alt="Company Logo"
            className="h-10 w-auto"
          />
          <h2 className="text-2xl font-bold text-white">CAS Systems Limited</h2>
        </div>
        <nav className="absolute right-7 flex space-x-8">
          <button
            onClick={() => scrollToSection("#about")}
            className="text-white font-semibold hover:text-gray-200"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("#products")}
            className="text-white font-semibold hover:text-gray-200"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="text-white font-semibold hover:text-gray-200"
          >
            Contact Us
          </button>
        </nav>
      </header>

      {/* ========== About Us ========== */}
      <section
        id="about"
        className="w-full flex flex-col items-center text-center py-24 bg-white shadow-md"
        style={{ paddingTop: headerHeight + 20 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          Founded in 1997, CAS is a professional company with core competence in
          engineering, brand management, product distributing, and installation.
        </p>
        <img
          src="http://www.cassystems.com/images/banner7.jpg"
          alt="About us"
          className="w-9/12 max-w-4xl rounded-lg shadow-lg mt-6"
        />
      </section>

      {/* ========== Products ========== */}
      <section
        id="products"
        className="w-full py-24 flex flex-col items-center bg-gray-50"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h2>

        {/* Tabs */}
        <div className="flex space-x-6 mb-8">
          <button
            className={`px-6 py-3 rounded-lg text-white font-bold ${
              activeTab === "product1" ? "bg-green-600" : "bg-gray-300"
            }`}
            onClick={() => setActiveTab("product1")}
          >
            Product 1
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-white font-bold ${
              activeTab === "product2" ? "bg-green-600" : "bg-gray-300"
            }`}
            onClick={() => setActiveTab("product2")}
          >
            Product 2
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-white font-bold ${
              activeTab === "product3" ? "bg-green-600" : "bg-gray-300"
            }`}
            onClick={() => setActiveTab("product3")}
          >
            Product 3
          </button>
        </div>

        <div className="w-full max-w-5xl h-[450px] flex items-center justify-between bg-white shadow-lg p-6 rounded-lg">
          <div className="w-1/2 flex justify-center">
            {activeTab === "product1" && (
              <img
                src="http://sensaphone.asia/products/sentinel.jpg"
                alt="Product 1"
                className="w-96 h-64 object-contain rounded-lg shadow-md"
              />
            )}
            {activeTab === "product2" && (
              <img
                src="http://www.cassystems.com/pro/TTC-1.jpg"
                alt="Product 2"
                className="w-96 h-64 object-contain rounded-lg shadow-md"
              />
            )}
            {activeTab === "product3" && (
              <img
                src="http://www.cassystems.com/pro/indust1.jpg"
                alt="Product 3"
                className="w-96 h-64 object-contain rounded-lg shadow-md"
              />
            )}
          </div>

          <div className="w-1/2 text-left">
            {activeTab === "product1" && (
              <p className="text-lg text-gray-700">
                Product 1 provides advanced remote monitoring solutions.
              </p>
            )}
            {activeTab === "product2" && (
              <p className="text-lg text-gray-700">
                Product 2 is an innovative temperature control system for
                industrial use.
              </p>
            )}
            {activeTab === "product3" && (
              <p className="text-lg text-gray-700">
                Product 3 features an industrial-grade heating solution.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ========== Contact Us ========== */}
      <section id="contact" className="w-full py-24 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600">
          <a
            href="mailto:contact@company.com"
            className="text-blue-500 hover:underline"
          >
            Email: contact@company.com
          </a>
        </p>
        <p className="text-lg text-gray-600">
          <a
            href="https://wa.me/1234567890"
            className="text-blue-500 hover:underline"
          >
            Phone: +1234567890 (WhatsApp)
          </a>
        </p>
        <p className="text-lg text-gray-600">
          <a
            href="https://goo.gl/maps/example"
            className="text-blue-500 hover:underline"
          >
            Address: 123 Main St, City
          </a>
        </p>
        <div className="mt-6">
          <iframe
            title="Google Map"
            className="w-full max-w-lg h-64 rounded-lg shadow-lg mx-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509368!2d144.9559283153167!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfb1d8a3f%3A0xe3b1b3b9b9f5a32d!2sFederation+Square!5e0!3m2!1sen!2sau!4v1510913828986"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default App;

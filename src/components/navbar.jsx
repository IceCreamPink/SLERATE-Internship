import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDemoClick = () => {
    console.log("Demo clicked");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="w-full h-[80px] bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <img
            src="logo-black.webp"
            alt=""
            className="cursor-pointer w-20 sm:w-24 lg:w-27"
            onClick={() => scrollToSection("home")}
          />

          <div className="hidden lg:flex space-x-6 font-medium text-gray-700">
            <p
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-[#F89A1C] transition"
            >
              Home
            </p>
            <p
              onClick={() => scrollToSection("community")}
              className="cursor-pointer hover:text-[#F89A1C] transition"
            >
              Community
            </p>
            <p
              onClick={() => scrollToSection("features")}
              className="cursor-pointer hover:text-[#F89A1C] transition"
            >
              Features
            </p>
            <p
              onClick={() => scrollToSection("cta")}
              className="cursor-pointer hover:text-[#F89A1C] transition"
            >
              Get Started
            </p>
            <p
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-[#F89A1C] transition"
            >
              Contact
            </p>
          </div>

          <button
            onClick={handleDemoClick}
            className="hidden lg:block bg-[#F89A1C] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#e28710] transition cursor-pointer"
          >
            Live Demo
          </button>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F89A1C]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50">
          <div
            className="fixed top-[80px] left-0 right-0 bg-white shadow-lg border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-6 space-y-4">
              <p
                onClick={() => scrollToSection("home")}
                className="block cursor-pointer hover:text-[#F89A1C] transition text-gray-700 font-medium py-2 border-b border-gray-100"
              >
                Home
              </p>
              <p
                onClick={() => scrollToSection("community")}
                className="block cursor-pointer hover:text-[#F89A1C] transition text-gray-700 font-medium py-2 border-b border-gray-100"
              >
                Community
              </p>
              <p
                onClick={() => scrollToSection("features")}
                className="block cursor-pointer hover:text-[#F89A1C] transition text-gray-700 font-medium py-2 border-b border-gray-100"
              >
                Features
              </p>
              <p
                onClick={() => scrollToSection("cta")}
                className="block cursor-pointer hover:text-[#F89A1C] transition text-gray-700 font-medium py-2 border-b border-gray-100"
              >
                Get Started
              </p>
              <p
                onClick={() => scrollToSection("contact")}
                className="block cursor-pointer hover:text-[#F89A1C] transition text-gray-700 font-medium py-2 border-b border-gray-100"
              >
                Contact
              </p>

              <div className="pt-4">
                <button
                  onClick={handleDemoClick}
                  className="w-full bg-[#F89A1C] text-white px-4 py-3 rounded-full text-sm font-semibold hover:bg-[#e28710] transition cursor-pointer"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 w-full h-full"
            onClick={toggleMenu}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;

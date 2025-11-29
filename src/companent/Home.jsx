import React, { useState } from "react";
import image from "../assets/kareem.png";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-slate-500 dark:bg-gray-900">
      <div className="relative z-10 justify-center mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center py-4 sm:py-6 mt-4 sm:mt-5">
          <div className="flex items-center gap-3">
            <img
              src={image}
              alt="logo"
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-black border-2 border-teal-400 shadow-lg hover:shadow-teal-400/50 transition-shadow"
            />
            <span className="font-bold text-lg sm:text-xl lg:text-2xl text-white">
              KAREEM KHAMIS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            <a
              href="#home"
              className="relative text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="relative text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#project2"
              className="relative text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="relative text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleBar}
              className="text-gray-300 hover:text-teal-400 focus:outline-none transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-x-0 top-[80px] bg-slate-900/95 backdrop-blur-md border-b border-teal-400/30 z-50 animate-slideDown">
            <nav className="flex flex-col space-y-4 p-6">
              <a
                onClick={handleBar}
                href="#home"
                className="text-gray-300 hover:text-teal-400 transition-colors py-2 border-b border-teal-400/20 hover:border-teal-400"
              >
                Home
              </a>
              <a
                onClick={handleBar}
                href="#about"
                className="text-gray-300 hover:text-teal-400 transition-colors py-2 border-b border-teal-400/20 hover:border-teal-400"
              >
                About
              </a>
              <a
                onClick={handleBar}
                href="#project2"
                className="text-gray-300 hover:text-teal-400 transition-colors py-2 border-b border-teal-400/20 hover:border-teal-400"
              >
                Projects
              </a>
              <a
                onClick={handleBar}
                href="#contact"
                className="text-gray-300 hover:text-teal-400 transition-colors py-2"
              >
                Contact
              </a>
            </nav>
          </div>
        )}

        {/* Social Links Sidebar */}
        <div className="hidden lg:block lg:fixed lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:bg-slate-900/80 lg:backdrop-blur-md lg:h-auto lg:w-16 lg:rounded-r-2xl lg:border-r lg:border-teal-400/30 lg:shadow-lg lg:z-30">
          <div className="flex flex-col items-center py-4 gap-4">
            <a
              href="https://x.com/kareemkhamis99?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Twitter"
            >
              <img
                src="https://vectorseek.com/wp-content/uploads/2023/07/Twitter-X-Logo-Vector-01-2.jpg"
                alt="Twitter"
                className="w-10 h-10 rounded-lg p-2 bg-slate-800/50 hover:bg-teal-400/20 cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300"
              />
            </a>
            <a
              href="https://discord.gg/UpgyKyYJ"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Discord"
            >
              <img
                src="https://wallpapers.com/images/hd/discord-logo-6ou1mvwsuho6umqh.jpg"
                alt="Discord"
                className="w-10 h-10 rounded-lg p-2 bg-slate-800/50 hover:bg-teal-400/20 cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300"
              />
            </a>
            <a
              href="https://github.com/karim-99-99"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub"
            >
              <img
                src="https://miro.medium.com/v2/resize:fit:512/1*QEpduO7IaOXym50gsDlQlA.png"
                alt="GitHub"
                className="w-10 h-10 rounded-lg p-2 bg-slate-800/50 hover:bg-teal-400/20 cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kareem-khamis-software-engineering6/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-10 h-10 rounded-lg p-2 bg-slate-800/50 hover:bg-teal-400/20 cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300"
              />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 sm:mt-24 lg:mt-32 max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              I AM{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                Karim Khamis
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 sm:mb-16 lg:mb-20 leading-relaxed max-w-2xl mx-auto">
              I design and code beautifully simple things, and I love what I do
            </p>
            <div className="flex justify-center">
              <a
                className="inline-block border-none px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 font-semibold"
                href="#project2"
              >
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
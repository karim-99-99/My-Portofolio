import React from "react";
import image from "../assets/kareem.png";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="min-h-screen text-white">
      <div className="justify-center mx-auto">
        <div className="flex justify-around mt-5 items-center gap-16">
          <div className="flex items-center gap-3">
            <img
              src={image}
              alt="logo"
              className="w-16 h-16 rounded-full bg-black"
            />
            <span className="font-bold lg:text-2xl">KAREEM KHAMIS</span>
          </div>
          <nav className="hidden md:block md:flex md:space-x-6">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
          <div className="md:hidden flex">
            <button
              onClick={handleBar}
              className="text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-slate-950 bg-opacity-50 p-8">
            <nav className="flex flex-col space-y-6">
              <a
                onClick={handleBar}
                href="#home"
                className="hover:text-gray-400 border-b pb-4"
              >
                Home
              </a>
              <a
                onClick={handleBar}
                href="#about"
                className="hover:text-gray-400 border-b pb-4"
              >
                About
              </a>
              <a
                onClick={handleBar}
                href="#projects"
                className="hover:text-gray-400 border-b pb-4"
              >
                Projects
              </a>
              <a
                onClick={handleBar}
                href="#contact"
                className="hover:text-gray-400"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
        <div className="mt-32">
          <div className="hidden lg:block lg:absolute lg:left-0 lg:bg-neutral-200 lg:h-60 lg:w-16 lg:rounded-sm">
            <a
              href="https://x.com/kareemkhamis99?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img
                src="https://vectorseek.com/wp-content/uploads/2023/07/Twitter-X-Logo-Vector-01-2.jpg"
                alt="Twitter"
                className="w-6 h-6 lg:w-12 md:h-12 rounded mt-2 ml-2 hover:bg-slate-300 p-2 cursor-pointer hover:shadow-xl transition-shadow"
              />
            </a>
            <a
              href="https://discord.gg/UpgyKyYJ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img
                src="https://fancyplugins.de/assets/discord-debe1da1.png"
                alt="Discord"
                className="w-6 h-6 lg:w-12 md:h-12 rounded mt-2 ml-2 hover:bg-slate-300 p-2 cursor-pointer hover:shadow-xl transition-shadow"
              />
            </a>
            <a
              href="https://github.com/karim-99-99"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img
                src="https://miro.medium.com/v2/resize:fit:512/1*QEpduO7IaOXym50gsDlQlA.png"
                alt="Git-Hub"
                className="w-6 h-6 lg:w-12 md:h-12 rounded mt-2 ml-2 hover:bg-slate-300 p-2 cursor-pointer hover:shadow-xl transition-shadow"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/karim-khamis-3b6620327/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-6 h-6 lg:w-12 md:h-12 rounded mt-2 ml-2 hover:bg-slate-300 p-2 cursor-pointer hover:shadow-xl transition-shadow"
              />
            </a>
          </div>

          <div className="">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 lg:pt-12">
              I AM Karim Khamis
            </h1>
            <p className="text-sm md:text-2xl text-gray-300 mb-20">
              I design and code beautifully simple things, and I love what I do
            </p>
            <a
              className="border-none p-4 rounded text-3xl bg-teal-800 bg-opacity-50 text-teal-300 hover:text-teal-100 shadow hover:bg-teal-600"
              href="#projects"
            >
              My Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

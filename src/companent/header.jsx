import React from "react";
import image from "../assets/logo.png";
import Projects from "./Projects";

function Header() {
  return (
    <div className="bg-custom-blue min-h-screen text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <img src={image} alt="logo" className="w-12 h-auto rounded-full" />
            <nav className="flex space-x-6">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
              <a href="#" className="hover:text-gray-300">
                Projects
              </a>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-300">
                Discord
              </a>
              <a href="#" className="hover:text-gray-300">
                Github
              </a>
              <a href="#" className="hover:text-gray-300">
                LinkedIn
              </a>
            </div>
            <div className="flex space-x-4">
              <button className="hover:text-gray-300">Dark Mode</button>
              <button className="hover:text-gray-300">Light Mode</button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-4xl font-bold mb-4">I AM Karim Khamis</h1>
          <p className="text-xl text-gray-300 mb-8">
            I design and code beautifully simple things, and I love what I do
          </p>
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default Header;

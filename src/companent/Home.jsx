import React from "react";
import image from "../assets/logo.png";

function Header() {
  return (
    <div className=" min-h-screen text-white">
      <div className=" justify-center mx-auto ">
        <div className="flex justify-around  mt-5 gap-96 ">
          <div className="flex items-center gap-3"><img src={image} alt="logo" className="w-16 h-16 rounded-full"/> <span className="font-bold lg:text-2xl">KAREEM KHAMIS</span></div>
          <nav className="hidden md:block md:flex md:space-x-6 ">
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
        <div className=" mt-32 ">
          <div className="hidden lg:block lg:absolute lg:left-0  lg:bg-neutral-50  lg:h-60 lg:w-16 lg:rounded-sm ">
            <a href="#" className="hover:text-gray-300">
              
              <img
                src="https://vectorseek.com/wp-content/uploads/2023/07/Twitter-X-Logo-Vector-01-2.jpg"
                alt="LinkedIn"
                className="w-6 h-6 lg:w-12 md:h-12 rounded mt-2 ml-2 hover:bg-slate-300 p-2 cursor-pointer hover:shadow-xl  transition-shadow"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              
              <img
                src="https://fancyplugins.de/assets/discord-debe1da1.png"
                alt="LinkedIn"
                className="w-6 h-6 lg:w-12 md:h-12 rounded mt-2 ml-2 hover:bg-slate-300 p-2 cursor-pointer hover:shadow-xl  transition-shadow"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              
              <img
                src="https://miro.medium.com/v2/resize:fit:512/1*QEpduO7IaOXym50gsDlQlA.png"
                alt="LinkedIn"
                className="w-6 h-6 lg:w-12 md:h-12 rounded mt-2 ml-2 hover:bg-slate-300 p-2 cursor-pointer hover:shadow-xl  transition-shadow"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
          
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-6 h-6 lg:w-12 md:h-12 rounded mt-2 ml-2 hover:bg-slate-300 p-2 cursor-pointer hover:shadow-xl  transition-shadow"
              />
            </a>
          </div>

          <div className="">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 lg:pt-12">I AM Karim Khamis</h1>
            <p className="text-sm md:text-2xl text-gray-300 mb-20">
              I design and code beautifully simple things, and I love what I do
            </p>
            <a className=" border-none p-4 rounded text-3xl bg-teal-800 bg-opacity-50 text-teal-300 hover:text-teal-100 shadow hover:bg-teal-600  " href="#">My Project</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

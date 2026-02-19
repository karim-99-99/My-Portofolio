import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
        "Python",
    "django",
    "Tailwind CSS",
    "RESTful APIs",
    "Responsive Design",
    
  ];

  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 });
  const [leftRef, leftVisible] = useScrollAnimation({ threshold: 0.2 });
  const [rightRef, rightVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="text-white min-h-screen pt-0 pb-6 sm:pt-0 sm:pb-10 md:pt-6 md:pb-12 lg:pt-12 lg:pb-20 w-full">
      <div className="w-full">
        {/* Header Section */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            ABOUT <span className="text-teal-400">ME</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Get To Know Me */}
          <div 
            ref={leftRef}
            className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-1000 hover:shadow-2xl hover:shadow-teal-500/10 ${
              leftVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-400">
              Get To Know Me
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 leading-relaxed">
              I'm a{" "}
              <span className="text-teal-400 font-semibold">
                 Focused Web Developer
              </span>{" "}
              building and managing Websites and Web Applications
               that leads to the success of the overall product.
              <br />
              <br />
              Check out some of my work in the Projects section. I also like
              sharing content related to the stuff that I have learned over the
              years in Web Development so it can help other people of the Dev
              Community. Feel free to Connect or Follow me on my Linkedin and
              Instagram where I post useful content related to Web Development
              and Programming
              <br />
              <br />
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <a
              className="inline-block border-none px-6 py-3 rounded-lg text-base sm:text-lg bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 font-semibold"
              href="https://wa.me/201036064417"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
            </a>
          </div>

          {/* Right Column - Skills */}
          <div 
            ref={rightRef}
            className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-1000 hover:shadow-2xl hover:shadow-teal-500/10 ${
              rightVisible ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-teal-400">
              My Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-teal-600/20 to-teal-500/20 backdrop-blur-sm border border-teal-400/30 p-3 sm:p-4 rounded-lg text-center text-sm sm:text-base lg:text-lg text-teal-300 font-medium hover:bg-teal-600/30 hover:border-teal-400/60 hover:scale-105 transform transition-all duration-300 cursor-default shadow-md hover:shadow-teal-500/20"
                  style={{
                    animationDelay: `${idx * 0.1}s`,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
import React from "react";

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

  return (
    <div className="text-white min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
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
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-400">
              Get To Know Me
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 leading-relaxed">
              I'm a{" "}
              <span className="text-teal-400 font-semibold">
                Frontend Focused Web Developer
              </span>{" "}
              building and managing the Front-end of Websites and Web
              Applications that leads to the success of the overall product.
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
              href="#contact"
            >
              Contact Me
            </a>
          </div>

          {/* Right Column - Skills */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-teal-400">
              My Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-teal-600/20 to-teal-500/20 backdrop-blur-sm border border-teal-400/30 p-3 sm:p-4 rounded-lg text-center text-sm sm:text-base lg:text-lg text-teal-300 font-medium hover:bg-teal-600/30 hover:border-teal-400/60 hover:scale-105 transform transition-all duration-300 cursor-default shadow-md hover:shadow-teal-500/20"
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
import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

// Project Card Component
const ProjectCard = ({ project, idx, onClick }) => {
  const [cardRef, cardVisible] = useScrollAnimation({ 
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  });

  return (
    <div
      ref={cardRef}
      onClick={() => onClick(project)}
      className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-1000 hover:shadow-2xl hover:shadow-teal-500/30 group cursor-pointer ${
        cardVisible ? "animate-scale-in" : "opacity-0 scale-95"
      }`}
      style={{
        animationDelay: `${idx * 0.15}s`,
      }}
    >
      {/* Animated Concentric Circles */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-teal-400/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-teal-400/20 rounded-full animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-teal-400/10 rounded-full animate-pulse-slowest"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {/* Triangle */}
        <div className="absolute top-4 right-4 w-8 h-8 border border-teal-400/40 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
        {/* Square */}
        <div className="absolute bottom-4 left-4 w-6 h-6 border border-teal-400/30 group-hover:scale-125 transition-transform duration-700"></div>
        {/* Circle */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 border-2 border-teal-400/50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
      </div>

      {/* Glowing Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 via-teal-400/0 to-teal-400/0 group-hover:from-teal-400/5 group-hover:via-teal-400/10 group-hover:to-teal-400/5 transition-all duration-500 pointer-events-none"></div>

      {/* Video Container */}
      <div className="relative w-full aspect-video bg-slate-900 overflow-hidden z-10">
        <video
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          poster={project.poster}
          preload="metadata"
          muted
        >
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Play overlay with glow */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors duration-500">
          <div className="w-16 h-16 rounded-full bg-teal-400/80 flex items-center justify-center group-hover:bg-teal-400 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] transition-all duration-500">
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="relative p-6 sm:p-8 z-10">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-teal-400 group-hover:text-teal-300 group-hover:drop-shadow-[0_0_10px_rgba(45,212,191,0.5)] transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
          {project.description}
        </p>
      </div>
    </div>
  );
};

const Project2 = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 });

  const projects = [
    {
      title: "New Clothes",
      video: "/new-clothes.mp4",
      poster: "/new-clothes1.jpg",
      description: "A modern e-commerce platform for clothing with a focus on user experience and responsive design.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      websiteLink: "https://new-clothes.vercel.app/",
      githubLink: "https://github.com/karim-99-99/new-clothes",
    },
    {
      title: "Coffee Shop",
      video: "/cafe1.mp4",
      poster: "/caffe1.jpg",
      description: "coffe",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      websiteLink: "https://coffe-pi-lovat.vercel.app/",
      githubLink: "https://github.com/karim-99-99/coffe",
    },  {
      title: "Sushi restaurant",
      video: "/sushi.mp4",
      poster: "/sushi1.jpg",
      description: "s",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      websiteLink: "https://sushi-pi-nine.vercel.app/",
      githubLink: "https://github.com/karim-99-99/sushi",
    },
    {
      title: "Youbloom Project",
      video: "/youbloom project.mp4",
      poster: "/youbloom project-poster.png",
      description: "Youbloom platform project - A full-stack web application showcasing modern web development practices. Includes user authentication, data management, and responsive design.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "RESTful APIs"],
      websiteLink: "https://youbloom-project.vercel.app/login",
      githubLink: "https://github.com/karim-99-99/youbloom_project",
    },
    {
      title: "Bedayate",
      video: "/bedayate.mp4",
      poster: "/bedayate1.jpg",
      description: "",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "RESTful APIs"],
      websiteLink: "https://karim-khaled.vercel.app/",
      githubLink: "https://github.com/karim-99-99/karim-khaled",
    },
    {
      title: "Pet Clinic",
      video: "/pet clinic1",
      poster: "/pet clicnic1.jpg",
      description: "",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      websiteLink: "https://pet-clinic-alpha.vercel.app/",
      githubLink: "https://github.com/karim-99-99/pet-clinic",
    },
    {
      title: "E-Commerce",
      video: "/E-Commerce.mp4",
      poster: "/E-commerce1.jpg",
      description: "This project is a simulation of a real e-commerce site. It uses a fake API to fetch product data and allows users to add items to their cart. The cart data is stored in session storage, making it easy to manage the shopping experience.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "RESTful APIs"],
      websiteLink: "https://myecommerce123.vercel.app/",
      githubLink: "https://github.com/karim-99-99/E-commerce",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsSidebarOpen(true);
    // Prevent body scroll when sidebar is open
    document.body.style.overflow = "hidden";
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedProject(null);
    // Restore body scroll
    document.body.style.overflow = "auto";
  };

  // Close sidebar when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseSidebar();
    }
  };

  return (
    <div className="text-white min-h-screen py-12 sm:py-16 lg:py-20 w-full">
      <div className="w-full">
        {/* Header Section */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            MY <span className="text-teal-400">PROJECTS</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              idx={idx}
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>

      {/* Sidebar Modal */}
      {isSidebarOpen && selectedProject && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300"
            onClick={handleOverlayClick}
          ></div>

          {/* Sidebar - Responsive and Customized */}
          <div
            className={`fixed top-0 right-0 h-full  sm:w-[320px] md:w-[360px] lg:w-[600px] bg-gray-900 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } overflow-y-auto`}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseSidebar}
              className="sticky top-4 float-right mr-4 mt-4 text-white hover:text-teal-400 transition-colors z-20 bg-gray-800/90 rounded-full p-2 hover:bg-gray-700 shadow-lg"
              aria-label="Close sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Sidebar Content */}
            <div className="p-4 sm:p-5 space-y-4 sm:space-y-5 text-white clear-both">
              {/* Project Title */}
              <div className="pt-12 sm:pt-4">
                <h2 className="text-xl sm:text-2xl font-bold text-teal-400 mb-2">
                  {selectedProject.title}
                </h2>
              </div>

              {/* Video Container */}
              <div className="w-full rounded-lg overflow-hidden shadow-lg bg-gray-800/50">
                <video
                  className="w-full h-auto object-contain"
                  poster={selectedProject.poster}
                  controls
                  autoPlay
                  preload="metadata"
                  style={{ 
                    display: 'block',
                    width: '100%',
                    maxHeight: '250px'
                  }}
                >
                  <source src={selectedProject.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Technologies Used */}
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-teal-400">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium bg-gradient-to-br from-teal-600/20 to-teal-500/20 backdrop-blur-sm border border-teal-400/40 text-teal-300 hover:from-teal-600/30 hover:to-teal-500/30 hover:border-teal-400/60 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-teal-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-teal-400">
                  Description
                </h3>
                <p className="text-gray-200 leading-relaxed text-xs sm:text-sm">
                  {selectedProject.description}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2 sm:gap-3 pt-2 pb-4">
                {selectedProject.websiteLink && (
                  <a
                    href={selectedProject.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg hover:from-teal-500 hover:to-teal-400 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 font-semibold text-xs sm:text-sm"
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Visit Website
                  </a>
                )}

                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-800/90 border border-teal-400/30 text-teal-400 rounded-lg hover:bg-gray-700 hover:border-teal-400 shadow-lg hover:shadow-teal-500/20 transform hover:scale-105 transition-all duration-300 font-semibold text-xs sm:text-sm"
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Project2;


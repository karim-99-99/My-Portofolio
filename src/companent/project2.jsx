import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "E-Commerce",
    description:
      "Simulation of real e-commerce site with fake API and session storage.",
    About:
      "This project is a simulation of a real e-commerce site. It uses a fake API to fetch product data and allows users to add items to their cart. The cart data is stored in session storage, making it easy to manage the shopping experience.",
    video: "/video1.mp4",
    technologies: ["React.js", "Tailwind.css"],
    Website:
      "https://myecommerce123.vercel.app/",
    GitHub: "https://github.com/karim-99-99/Ecommerce-fullStack.git",
    poster: "/video1-poster.jpg",
  },
  {
    title: "Add Quotes",
    description:
      "Random quotes generation based on category. Also add your special quotes.",
    About:
      "This project is a small site for generating random quotes based on categories. It also allows users to add their special quotes with specific categories.",
    video: "/add Quote.mp4",
    technologies: ["HTML", "CSS", "JavaScript"],
    Website: "https://alxejavascript.vercel.app/",
    GitHub:
      "https://github.com/karim-99-99/alx_fe_javascript/tree/main/dom-manipulation",
    poster: "/add-quote-poster.png",
  },
  {
    title: "To Do List",
    description: "Create your special to-do list. Add and remove items easily.",
    About:
      "This project is a simple to-do list application that allows users to create and manage their tasks. Users can add and remove items from their list easily.",
    video: "/to do list.mp4",
    technologies: ["HTML", "CSS", "JavaScript"],
    Website: "https://leafy-pegasus-fb9709.netlify.app/",
    GitHub: "https://github.com/karim-99-99/dynamic-to-do-list-js.git",
    poster: "/todo-poster.png",
  },
  {
    title: "My Dashboard",
    description:
      "Create My special dashboard. Use interactive calendar to reserve an appointment with me.",
    About:
      "Create My special dashboard. Choose and reserve any time of any date to have an appointment with me and it's connected with my Gmail to receive email from you that describes the time you reserve, your name and what for.",
    video: "/myDashboard.mp4",
    technologies: ["React.js", "Tailwind.css"],
    Website:
      "https://e-commerce-swwh-git-main-kareems-projects-28d3146b.vercel.app",
    GitHub: "https://github.com/karim-99-99/myDashboard",
    poster: "/dashboard-poster.png",
  },
  {
    title: "youbloom",
    description:
      "Simulation of real app using accounts with fake API and session storage.",
    About:
      "This project is a simulation of a real application with login page with phone number for any country in the world also sign up page for user using data for every user and dinamic route between pages",
    video: "/youbloom project.mp4",
    technologies: ["React.js", "Tailwind.css"],
    Website: "https://youbloom-project.vercel.app/login",
    GitHub: "https://github.com/karim-99-99/youbloom_project",
    poster: "/youbloom project-poster.png",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock scroll when sidebar is open
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedProject]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseSidebar = () => {
    setSelectedProject(null);
  };

  // Project Card Component - Shows only poster images
  const ProjectCard = ({ project, index, positionClass }) => {
    return (
      <div
        className={`relative group w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] aspect-square overflow-hidden rounded-2xl shadow-2xl ${positionClass} cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-teal-500/50 hover:-translate-y-2`}
        onClick={() => handleProjectClick(project)}
      >
        {/* Poster Image */}
        <img
          src={project.poster}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end items-start text-white p-6 z-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 line-clamp-2">
            {project.description}
          </p>
          <div className="flex gap-2 flex-wrap opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="border border-teal-400 px-2 sm:px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-400/90 rounded-full flex items-center justify-center backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-20 sm:mt-32 mb-8 sm:mb-14 text-center sm:text-left">
          My <span className="text-teal-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
          <ProjectCard
            project={projects[0]}
            index={0}
            positionClass="xl:ml-0"
          />
          <ProjectCard
            project={projects[1]}
            index={1}
            positionClass="xl:mr-0"
          />
          <ProjectCard
            project={projects[2]}
            index={2}
            positionClass="xl:ml-0"
          />
          <ProjectCard
            project={projects[3]}
            index={3}
            positionClass="xl:mr-0"
          />
          <ProjectCard
            project={projects[4]}
            index={4}
            positionClass="xl:ml-0 sm:col-span-2"
          />
        </div>
      </div>

      {/* Enhanced Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[90%] md:w-[600px] lg:w-[650px] overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
          selectedProject ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        {selectedProject && (
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-6 pb-6 border-b border-teal-400/30">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-400">
                {selectedProject.title}
              </h2>
              <button
                onClick={handleCloseSidebar}
                className="text-gray-400 hover:text-white p-2 hover:bg-gray-800/50 rounded-full hover:rotate-90 transition-all duration-300"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
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
            </div>

            {/* Video Section */}
            {selectedProject.video && (
              <div className="relative mb-6 rounded-xl overflow-hidden shadow-2xl bg-black/50">
                <video
                  src={selectedProject.video}
                  poster={selectedProject.poster}
                  controls
                  autoPlay
                  loop
                  muted
                  preload="metadata"
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
            )}

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* About Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-teal-400">
                About This Project
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {selectedProject.About}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-400/20 border border-teal-400/50 text-teal-300 text-sm rounded-full px-4 py-2 font-medium backdrop-blur-sm hover:bg-teal-400/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4 pt-6 border-t border-teal-400/30">
              <div>
                <p className="text-lg font-semibold mb-2 text-teal-400">
                  Live Website
                </p>
                <a
                  href={selectedProject.Website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 break-all inline-flex items-center gap-2 group transition-all"
                >
                  <span className="truncate max-w-[280px] sm:max-w-none">
                    {selectedProject.Website}
                  </span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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
                </a>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2 text-teal-400">
                  GitHub Repository
                </p>
                <a
                  href={selectedProject.GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 break-all inline-flex items-center gap-2 group transition-all"
                >
                  <span className="truncate max-w-[280px] sm:max-w-none">
                    {selectedProject.GitHub}
                  </span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={handleCloseSidebar}
        />
      )}
    </div>
  );
}

export default Projects;

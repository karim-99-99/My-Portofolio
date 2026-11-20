import React, { useState } from "react";
import { getProjectsForLocale, getTranslation } from "../i18n/translations";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-teal-500/50 cursor-pointer"
    >
      <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
        <img
          src={project.poster}
          alt={project.title}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center">
            <svg
              className="w-7 h-7 text-white ml-1 rtl:ml-0 rtl:mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-teal-400">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
};

function Project2({ locale }) {
  const t = getTranslation(locale).projects;
  const projects = getProjectsForLocale(locale);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsSidebarOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseSidebar();
    }
  };

  return (
    <div className="text-white min-h-screen py-12 sm:py-16 lg:py-20 w-full">
      <div className="w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t.heading ? (
              <>
                {t.heading}{" "}
                <span className="text-teal-400">{t.headingAccent}</span>
              </>
            ) : (
              <span className="text-teal-400">{t.headingAccent}</span>
            )}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id ?? idx}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>

      {isSidebarOpen && selectedProject && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-[60]"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />

          <div
            className="fixed top-0 h-full sm:w-[320px] md:w-[360px] lg:w-[600px] bg-gray-900 shadow-2xl z-[70] overflow-y-auto right-0 rtl:right-auto rtl:left-0"
          >
            <button
              type="button"
              onClick={handleCloseSidebar}
              className="sticky top-4 float-right mr-4 mt-4 text-white hover:text-teal-400 transition-colors z-20 bg-gray-800 rounded-full p-2 hover:bg-gray-700 shadow-lg rtl:float-left rtl:ml-4 rtl:mr-0"
              aria-label={t.closeSidebar}
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

            <div className="p-4 sm:p-5 space-y-4 sm:space-y-5 text-white clear-both">
              <div className="pt-12 sm:pt-4">
                <h2 className="text-xl sm:text-2xl font-bold text-teal-400 mb-2">
                  {selectedProject.title}
                </h2>
              </div>

              <div className="w-full rounded-lg overflow-hidden shadow-lg bg-gray-800">
                <video
                  className="w-full h-auto object-contain"
                  poster={selectedProject.poster}
                  controls
                  autoPlay
                  preload="none"
                  style={{
                    display: "block",
                    width: "100%",
                    maxHeight: "250px",
                  }}
                >
                  <source src={selectedProject.video} type="video/mp4" />
                  {t.videoUnsupported}
                </video>
              </div>

              {selectedProject.technologies &&
                selectedProject.technologies.length > 0 && (
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-teal-400">
                      {t.techUsed}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium bg-teal-900/40 border border-teal-400/40 text-teal-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-teal-400">
                  {t.description}
                </h3>
                <p className="text-gray-200 leading-relaxed text-xs sm:text-sm">
                  {selectedProject.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:gap-3 pt-2 pb-4">
                {selectedProject.websiteLink && (
                  <a
                    href={selectedProject.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg hover:from-teal-500 hover:to-teal-400 font-semibold text-xs sm:text-sm"
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
                    {t.visitSite}
                  </a>
                )}

                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-800 border border-teal-400/30 text-teal-400 rounded-lg hover:bg-gray-700 hover:border-teal-400 font-semibold text-xs sm:text-sm"
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
                    {t.viewGithub}
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Project2;

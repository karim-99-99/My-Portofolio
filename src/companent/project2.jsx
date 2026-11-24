import React, { useEffect, useRef, useState } from "react";
import { getProjectsForLocale, getTranslation } from "../i18n/translations";

const MOBILE_PAGE_SIZE = 3;

const ProjectCard = ({ project, onClick, priority = false }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(project)}
      className="relative text-start bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/60 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10 transition-[border-color,box-shadow] duration-200 group cursor-pointer w-full"
    >
      <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
        <img
          src={project.poster}
          alt=""
          width={640}
          height={360}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "low"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/35 group-hover:bg-black/20 transition-colors duration-200">
          <div className="w-14 h-14 rounded-full bg-teal-400/85 flex items-center justify-center group-hover:bg-teal-400 transition-colors duration-200">
            <svg
              className="w-7 h-7 text-white ml-0.5 rtl:ml-0 rtl:mr-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-teal-400 group-hover:text-teal-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </button>
  );
};

function isPhoneViewport() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches
  );
}

function Project2({ locale }) {
  const t = getTranslation(locale).projects;
  const projects = getProjectsForLocale(locale);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(() =>
    isPhoneViewport() ? MOBILE_PAGE_SIZE : projects.length
  );
  const videoRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      setVisibleCount(mq.matches ? MOBILE_PAGE_SIZE : projects.length);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [projects.length]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseSidebar = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("src");
      videoRef.current.load();
    }
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseSidebar();
    }
  };

  useEffect(() => {
    if (!selectedProject || !videoRef.current) return;

    const video = videoRef.current;
    const phone = isPhoneViewport();
    video.preload = phone ? "metadata" : "auto";
    video.src = selectedProject.video;
    video.load();

    // Phones: do not autoplay — autoplay forces a full download on cellular.
    if (!phone) {
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    }
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.removeAttribute("src");
        videoRef.current.load();
      }
      setSelectedProject(null);
      document.body.style.overflow = "";
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  const visibleProjects = projects.slice(0, visibleCount);
  const canShowMore = visibleCount < projects.length;
  const showMoreLabel = locale === "ar" ? "عرض المزيد" : "Show more";

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
          {visibleProjects.map((project, idx) => (
            <ProjectCard
              key={project.id ?? idx}
              project={project}
              onClick={handleProjectClick}
              priority={idx < 2}
            />
          ))}
        </div>

        {canShowMore && (
          <div className="mt-8 flex justify-center md:hidden">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((n) =>
                  Math.min(n + MOBILE_PAGE_SIZE, projects.length)
                )
              }
              className="px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-500 transition-colors"
            >
              {showMoreLabel}
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <>
          <div
            className="fixed inset-0 bg-black/75 z-[60]"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            className="fixed top-0 right-0 rtl:right-auto rtl:left-0 h-full w-full sm:w-[360px] md:w-[420px] lg:w-[560px] bg-gray-900 shadow-2xl z-[70] overflow-y-auto"
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

              <div className="w-full rounded-lg overflow-hidden bg-gray-800">
                <video
                  ref={videoRef}
                  className="w-full h-auto object-contain"
                  poster={selectedProject.poster}
                  controls
                  playsInline
                  preload="none"
                  style={{
                    display: "block",
                    width: "100%",
                    maxHeight: "250px",
                  }}
                >
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
                          className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium bg-teal-600/20 border border-teal-400/40 text-teal-300"
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
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg hover:from-teal-500 hover:to-teal-400 font-semibold text-xs sm:text-sm transition-colors duration-200"
                  >
                    {t.visitSite}
                  </a>
                )}

                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-800 border border-teal-400/30 text-teal-400 rounded-lg hover:bg-gray-700 hover:border-teal-400 font-semibold text-xs sm:text-sm transition-colors duration-200"
                  >
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

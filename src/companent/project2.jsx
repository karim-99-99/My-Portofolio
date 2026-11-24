import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

function lockBodyScroll() {
  const scrollY = window.scrollY;
  document.body.dataset.scrollLockY = String(scrollY);
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
}

function unlockBodyScroll() {
  const scrollY = Number(document.body.dataset.scrollLockY || "0");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.overflow = "";
  delete document.body.dataset.scrollLockY;
  window.scrollTo(0, scrollY);
}

function Project2({ locale }) {
  const t = getTranslation(locale).projects;
  const projects = getProjectsForLocale(locale);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(() =>
    isPhoneViewport() ? MOBILE_PAGE_SIZE : projects.length
  );
  const videoRef = useRef(null);
  const panelScrollRef = useRef(null);

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
    lockBodyScroll();
  };

  const handleCloseSidebar = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("src");
      videoRef.current.load();
    }
    setSelectedProject(null);
    unlockBodyScroll();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseSidebar();
    }
  };

  // Desktop only: attach video after open. Phones wait for user tap on controls
  // so opening a project never freezes on a large download.
  useEffect(() => {
    if (!selectedProject || !videoRef.current) return;

    const video = videoRef.current;
    const phone = isPhoneViewport();

    if (phone) {
      video.removeAttribute("src");
      video.preload = "none";
      video.poster = selectedProject.poster;
      video.load();
      return;
    }

    video.preload = "metadata";
    video.src = selectedProject.video;
    video.load();
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    // Reset panel scroll to top each open
    if (panelScrollRef.current) {
      panelScrollRef.current.scrollTop = 0;
    }

    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;
      handleCloseSidebar();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- close helper closes over latest video/project
  }, [selectedProject]);

  useEffect(() => {
    return () => {
      // Safety: never leave body locked if component unmounts
      if (document.body.style.position === "fixed") {
        unlockBodyScroll();
      }
    };
  }, []);

  const visibleProjects = projects.slice(0, visibleCount);
  const canShowMore = visibleCount < projects.length;
  const showMoreLabel = locale === "ar" ? "عرض المزيد" : "Show more";

  const panel =
    selectedProject &&
    createPortal(
      <div className="fixed inset-0 z-[80]" role="presentation">
        <div
          className="absolute inset-0 bg-black/75"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          className="absolute inset-y-0 right-0 rtl:right-auto rtl:left-0 flex h-[100dvh] max-h-[100dvh] w-full flex-col bg-gray-900 shadow-2xl sm:w-[380px] md:w-[440px] lg:w-[560px]"
        >
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-800 px-4 py-3">
            <h2 className="min-w-0 flex-1 truncate text-start text-lg font-bold text-teal-400 sm:text-xl">
              {selectedProject.title}
            </h2>
            <button
              type="button"
              onClick={handleCloseSidebar}
              className="shrink-0 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700 hover:text-teal-400"
              aria-label={t.closeSidebar}
            >
              <svg
                className="h-6 w-6"
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

          <div
            ref={panelScrollRef}
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5 [-webkit-overflow-scrolling:touch]"
          >
            <div className="space-y-4 text-start text-white sm:space-y-5">
              <div className="w-full overflow-hidden rounded-lg bg-gray-800">
                <video
                  ref={videoRef}
                  className="block h-auto max-h-[220px] w-full object-contain"
                  poster={selectedProject.poster}
                  controls
                  playsInline
                  preload="none"
                  controlsList="nodownload"
                  onPlay={(e) => {
                    // First interaction: attach source (phones start with no src).
                    const video = e.currentTarget;
                    if (video.dataset.srcReady === "1") return;
                    if (!selectedProject.video) return;
                    video.dataset.srcReady = "1";
                    video.src = selectedProject.video;
                    video.load();
                    video.play().catch(() => {});
                  }}
                >
                  {t.videoUnsupported}
                </video>
              </div>

              {selectedProject.technologies?.length > 0 && (
                <div>
                  <h3 className="mb-2 text-base font-semibold text-teal-400 sm:mb-3 sm:text-lg">
                    {t.techUsed}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full border border-teal-400/40 bg-teal-600/20 px-2.5 py-1 text-xs font-medium text-teal-300 sm:px-3 sm:py-1.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="mb-2 text-base font-semibold text-teal-400 sm:mb-3 sm:text-lg">
                  {t.description}
                </h3>
                <p className="text-xs leading-relaxed text-gray-200 sm:text-sm">
                  {selectedProject.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 pb-8 pt-2 sm:gap-3">
                {selectedProject.websiteLink && (
                  <a
                    href={selectedProject.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-600 to-teal-500 px-3 py-2.5 text-xs font-semibold text-white sm:px-4 sm:text-sm"
                  >
                    {t.visitSite}
                  </a>
                )}

                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg border border-teal-400/30 bg-gray-800 px-3 py-2.5 text-xs font-semibold text-teal-400 sm:px-4 sm:text-sm"
                  >
                    {t.viewGithub}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );

  return (
    <div className="w-full min-h-screen py-12 text-white sm:py-16 lg:py-20">
      <div className="w-full">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl lg:text-5xl">
            {t.heading ? (
              <>
                {t.heading}{" "}
                <span className="text-teal-400">{t.headingAccent}</span>
              </>
            ) : (
              <span className="text-teal-400">{t.headingAccent}</span>
            )}
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
            {t.sub}
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
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
              className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-500"
            >
              {showMoreLabel}
            </button>
          </div>
        )}
      </div>

      {panel}
    </div>
  );
}

export default Project2;

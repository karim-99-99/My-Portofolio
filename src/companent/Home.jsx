import React, { useState, useEffect, useRef } from "react";
import image from "../assets/kareem.png";
import { getTranslation } from "../i18n/translations";
import { LanguageToggle } from "./LanguageToggle";

function Home({ locale }) {
  const t = getTranslation(locale).home;
  const base = locale === "ar" ? "/ar" : "";
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="min-h-[87.5vh] sm:min-h-screen h-full text-white relative overflow-hidden">
      <div className="relative z-10 justify-center w-full">
        <nav className="flex justify-between items-center py-4 sm:py-6 mt-4 sm:mt-5 gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={image}
              alt={t.photoAlt}
              fetchPriority="high"
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-black border-2 border-teal-400 shadow-lg hover:shadow-teal-400/50 transition-shadow shrink-0"
            />
            <span className="font-bold text-lg sm:text-xl lg:text-2xl text-white truncate">
              {t.navBrand}
            </span>
          </div>

          <div className="hidden md:flex md:items-center md:gap-6">
            <nav className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-8">
              <a
                href={`${base}#home`}
                className="relative text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium group"
              >
                {t.navHome}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300 rtl:left-auto rtl:right-0" />
              </a>
              <a
                href={`${base}#about`}
                className="relative text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium group"
              >
                {t.navAbout}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300 rtl:left-auto rtl:right-0" />
              </a>
              <a
                href={`${base}#project2`}
                className="relative text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium group"
              >
                {t.navProjects}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300 rtl:left-auto rtl:right-0" />
              </a>
              <a
                href={`${base}#contact`}
                className="relative text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium group"
              >
                {t.navContact}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300 rtl:left-auto rtl:right-0" />
              </a>
            </nav>
            <LanguageToggle locale={locale} />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle locale={locale} />
            <button
              ref={buttonRef}
              onClick={handleBar}
              className="text-gray-300 hover:text-teal-400 focus:outline-none transition-colors p-2"
              aria-label={t.navToggle}
              type="button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {isOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        {isOpen && (
          <div
            ref={menuRef}
            className="md:hidden fixed inset-x-0 top-[80px] bg-slate-900/98 backdrop-blur-md rounded-3xl shadow-2xl shadow-teal-500/20 z-50 animate-slideDown overflow-hidden"
          >
            <nav className="flex flex-col space-y-2 p-6">
              <a
                onClick={handleBar}
                href={`${base}#home`}
                className="text-gray-300 hover:text-teal-400 transition-all duration-300 py-3 px-4 rounded-xl border-b border-teal-400/20 hover:border-teal-400 hover:bg-teal-400/10 hover:scale-[1.02]"
              >
                {t.navHome}
              </a>
              <a
                onClick={handleBar}
                href={`${base}#about`}
                className="text-gray-300 hover:text-teal-400 transition-all duration-300 py-3 px-4 rounded-xl border-b border-teal-400/20 hover:border-teal-400 hover:bg-teal-400/10 hover:scale-[1.02]"
              >
                {t.navAbout}
              </a>
              <a
                onClick={handleBar}
                href={`${base}#project2`}
                className="text-gray-300 hover:text-teal-400 transition-all duration-300 py-3 px-4 rounded-xl border-b border-teal-400/20 hover:border-teal-400 hover:bg-teal-400/10 hover:scale-[1.02]"
              >
                {t.navProjects}
              </a>
              <a
                onClick={handleBar}
                href={`${base}#contact`}
                className="text-gray-300 hover:text-teal-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-teal-400/10 hover:scale-[1.02]"
              >
                {t.navContact}
              </a>
            </nav>
          </div>
        )}

        <div className="hidden lg:block lg:fixed lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:bg-slate-900/80 lg:backdrop-blur-md lg:h-auto lg:w-16 lg:rounded-r-2xl lg:border-r lg:border-teal-400/30 lg:shadow-lg lg:z-30 rtl:lg:left-auto rtl:lg:right-0 rtl:lg:rounded-r-none rtl:lg:rounded-l-2xl rtl:lg:border-r-0 rtl:lg:border-l">
          <div className="flex flex-col items-center py-4 gap-4">
            <a
              href="https://x.com/kareemkhamis99?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={t.ariaTwitter}
            >
              <img
                src="https://vectorseek.com/wp-content/uploads/2023/07/Twitter-X-Logo-Vector-01-2.jpg"
                alt=""
                loading="lazy"
                fetchPriority="low"
                className="w-10 h-10 rounded-lg p-2 bg-slate-800/50 hover:bg-teal-400/20 cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300"
              />
            </a>
            <a
              href="https://discord.gg/UpgyKyYJ"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={t.ariaDiscord}
            >
              <img
                src="https://wallpapers.com/images/hd/discord-logo-6ou1mvwsuho6umqh.jpg"
                alt=""
                loading="lazy"
                fetchPriority="low"
                className="w-10 h-10 rounded-lg p-2 bg-slate-800/50 hover:bg-teal-400/20 cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300"
              />
            </a>
            <a
              href="https://github.com/karim-99-99"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={t.ariaGitHub}
            >
              <img
                src="https://miro.medium.com/v2/resize:fit:512/1*QEpduO7IaOXym50gsDlQlA.png"
                alt=""
                loading="lazy"
                fetchPriority="low"
                className="w-10 h-10 rounded-lg p-2 bg-slate-800/50 hover:bg-teal-400/20 cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kareem-khamis-software-engineering6/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={t.ariaLinkedIn}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt=""
                loading="lazy"
                fetchPriority="low"
                className="w-10 h-10 rounded-lg p-2 bg-slate-800/50 hover:bg-teal-400/20 cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300"
              />
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-16 md:mt-24 lg:mt-32 w-full relative px-4 sm:px-6 md:px-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-teal-400/40 rounded-full animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-teal-400/30 rounded-full animate-pulse-slower" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-teal-400/20 rounded-full animate-pulse-slowest" />
          </div>

          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-20 left-10 w-12 h-12 border border-teal-400/50 rotate-45 animate-pulse-slow rtl:left-auto rtl:right-10" />
            <div className="absolute bottom-32 right-16 w-8 h-8 border border-teal-400/40 rotate-12 animate-pulse-slower rtl:right-auto rtl:left-16" />
            <div className="absolute top-1/3 right-1/4 w-10 h-10 border border-teal-400/30 animate-pulse-slow" />
            <div className="absolute bottom-1/4 left-1/3 w-6 h-6 border border-teal-400/40 animate-pulse-slower rtl:left-auto rtl:right-1/3" />
            <div className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-teal-400/60 rounded-full animate-pulse-slow rtl:left-auto rtl:right-1/4" />
            <div className="absolute bottom-1/3 right-1/3 w-5 h-5 border-2 border-teal-400/50 rounded-full animate-pulse-slower" />
          </div>

          <div className="text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-6 md:mb-8 lg:mb-10 leading-tight relative">
              <span className="relative z-10">{t.heroPrefix} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 relative z-10 drop-shadow-[0_0_20px_rgba(45,212,191,0.5)]">
                {t.heroName}
              </span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-teal-400/20 blur-2xl pointer-events-none">
                {t.heroName}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed w-full relative z-10 px-4 max-w-3xl mx-auto">
              {t.heroTagline}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-6 md:mb-10 lg:mb-16 leading-relaxed w-full relative z-10 px-4">
              {t.heroSub}
            </p>
            <div className="flex justify-center relative z-10 mb-2 sm:mb-6 md:mb-10 lg:mb-16">
              <a
                className="inline-block border-none px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-lg hover:shadow-teal-500/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] transform hover:scale-105 transition-all duration-300 font-semibold relative overflow-hidden group"
                href={`${base}#project2`}
              >
                <span className="relative z-10">{t.ctaProjects}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-300 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

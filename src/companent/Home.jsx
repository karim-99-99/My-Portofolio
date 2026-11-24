import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import image from "../assets/kareem.jpg";
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
    <div className="min-h-[100svh] sm:min-h-screen h-full text-white relative overflow-hidden">
      <div className="relative z-10 justify-center w-full">
        <nav className="flex justify-between items-center py-4 sm:py-6 mt-4 sm:mt-5 gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={image}
              alt={t.photoAlt}
              width={64}
              height={64}
              fetchPriority="high"
              decoding="async"
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-black border-2 border-teal-400 shadow-lg shrink-0"
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
              <Link
                to="/blog"
                hrefLang="en"
                lang="en"
                className="relative text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium group"
              >
                {t.navBlog}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300 rtl:left-auto rtl:right-0" />
              </Link>
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
            className="md:hidden fixed inset-0 bg-black/60 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        {isOpen && (
          <div
            ref={menuRef}
            className="md:hidden fixed inset-x-0 top-[80px] bg-slate-900 rounded-3xl shadow-2xl z-50 animate-slideDown overflow-hidden"
          >
            <nav className="flex flex-col space-y-2 p-6">
              <a
                onClick={handleBar}
                href={`${base}#home`}
                className="text-gray-300 hover:text-teal-400 transition-all duration-300 py-3 px-4 rounded-xl border-b border-teal-400/20 hover:border-teal-400 hover:bg-teal-400/10"
              >
                {t.navHome}
              </a>
              <a
                onClick={handleBar}
                href={`${base}#about`}
                className="text-gray-300 hover:text-teal-400 transition-all duration-300 py-3 px-4 rounded-xl border-b border-teal-400/20 hover:border-teal-400 hover:bg-teal-400/10"
              >
                {t.navAbout}
              </a>
              <a
                onClick={handleBar}
                href={`${base}#project2`}
                className="text-gray-300 hover:text-teal-400 transition-all duration-300 py-3 px-4 rounded-xl border-b border-teal-400/20 hover:border-teal-400 hover:bg-teal-400/10"
              >
                {t.navProjects}
              </a>
              <Link
                onClick={handleBar}
                to="/blog"
                hrefLang="en"
                lang="en"
                className="text-gray-300 hover:text-teal-400 transition-all duration-300 py-3 px-4 rounded-xl border-b border-teal-400/20 hover:border-teal-400 hover:bg-teal-400/10"
              >
                {t.navBlog}
              </Link>
              <a
                onClick={handleBar}
                href={`${base}#contact`}
                className="text-gray-300 hover:text-teal-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-teal-400/10"
              >
                {t.navContact}
              </a>
            </nav>
          </div>
        )}

        <div className="mt-8 sm:mt-16 md:mt-24 lg:mt-32 w-full relative px-4 sm:px-6 md:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-6 md:mb-8 lg:mb-10 leading-tight">
              <span>{t.heroPrefix} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                {t.heroName}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed w-full px-4 max-w-3xl mx-auto">
              {t.heroTagline}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-6 md:mb-10 lg:mb-16 leading-relaxed w-full px-4">
              {t.heroSub}
            </p>
            <div className="flex justify-center mb-2 sm:mb-6 md:mb-10 lg:mb-16">
              <a
                className="inline-block border-none px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-lg font-semibold transition-colors duration-200"
                href={`${base}#project2`}
              >
                {t.ctaProjects}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

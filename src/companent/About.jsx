import React, { useState } from "react";
import { getTranslation } from "../i18n/translations";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Python",
  "Django",
  "RESTful APIs",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Responsive Design",
];

function About({ locale }) {
  const t = getTranslation(locale).about;
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { number: "10+", label: t.statProjects },
    { number: "2", label: t.statPlatforms },
    { number: t.statLocationLine1, label: t.statLocationLine2 },
  ];

  return (
    <section
      aria-label={t.ariaSection}
      className="text-white min-h-screen pt-0 pb-6 sm:pt-0 sm:pb-10 md:pt-6 md:pb-12 lg:pt-12 lg:pb-20 w-full"
    >
      <div className="w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t.heading}{" "}
            <span className="text-teal-400">{t.headingAccent}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-5 text-center hover:shadow-2xl hover:shadow-teal-500/10 hover:border-teal-400/40 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-1">
                {s.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-400">
              {t.getToKnow}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 leading-relaxed">
              {t.bio1}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 leading-relaxed">
              {t.bio2}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 leading-relaxed">
              {t.bio3}
            </p>
            <a
              className="inline-block border-none px-6 py-3 rounded-lg text-base sm:text-lg bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 font-semibold"
              href="https://wa.me/201036064417"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contactMe}
            </a>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-teal-400">
              {t.skillsTitle}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-teal-600/20 to-teal-500/20 backdrop-blur-sm border border-teal-400/30 p-3 sm:p-4 rounded-lg text-center text-sm sm:text-base text-teal-300 font-medium hover:bg-teal-600/30 hover:border-teal-400/60 hover:scale-105 transform transition-all duration-300 cursor-default shadow-md hover:shadow-teal-500/20"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-teal-400">
              {t.faqTitle}
            </h3>
            <div className="divide-y divide-slate-700/50">
              {t.faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full text-start py-5 flex justify-between items-start gap-4 group"
                    aria-expanded={activeFaq === i}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-teal-400 transition-colors duration-200">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 rounded-full border border-slate-600 flex items-center justify-center text-gray-400 group-hover:border-teal-400 group-hover:text-teal-400 transition-all duration-200 shrink-0 text-lg mt-0.5">
                      {activeFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden ${
                      activeFaq === i ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"
                    }`}
                    style={{
                      transition:
                        "max-height 0.35s ease, opacity 0.3s ease, padding 0.25s ease",
                    }}
                  >
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 relative overflow-hidden">
            <span
              className="absolute top-0 right-6 text-[100px] leading-none text-teal-400 opacity-5 font-serif pointer-events-none select-none rtl:right-auto rtl:left-6"
              aria-hidden="true"
            >
              "
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-400">
              {t.bioTitle}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 relative">
              {t.bioLong}
            </p>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 sm:p-12 text-center hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(20,184,166,0.08), transparent)",
              }}
            />
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 relative">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              {t.availableBadge}
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 relative">
              {t.ctaTitleBefore}{" "}
              <span className="text-teal-400">{t.ctaTitleHighlight}</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed relative">
              {t.ctaText}
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative">
              <a
                href="https://wa.me/201036064417"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-lg text-base sm:text-lg bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                {t.whatsapp}
              </a>
              <a
                href="https://github.com/karim-99-99"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-lg text-base sm:text-lg border border-teal-500/40 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                {t.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

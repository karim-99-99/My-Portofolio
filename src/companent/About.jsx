// import React, { useState } from "react";
// import { getTranslation } from "../i18n/translations";

// const skills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "React Native",
//   "Python",
//   "Django",
//   "RESTful APIs",
//   "Tailwind CSS",
//   "MongoDB",
//   "PostgreSQL",
//   "Git",
//   "GitHub",
//   "Responsive Design",
// ];

// function About({ locale }) {
//   const t = getTranslation(locale).about;
//   const [activeFaq, setActiveFaq] = useState(null);

//   const stats = [
//     { number: "10+", label: t.statProjects },
//     { number: "2", label: t.statPlatforms },
//     { number: t.statLocationLine1, label: t.statLocationLine2 },
//   ];

//   return (
//     <section
//       aria-label={t.ariaSection}
//       className="text-white min-h-screen pt-0 pb-6 sm:pt-0 sm:pb-10 md:pt-6 md:pb-12 lg:pt-12 lg:pb-20 w-full"
//     >
//       <div className="w-full">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
//             {t.heading}{" "}
//             <span className="text-teal-400">{t.headingAccent}</span>
//           </h2>
//           <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             {t.intro}
//           </p>
//         </div>

//         <div className="grid grid-cols-3 gap-4 mb-12">
//           {stats.map((s, i) => (
//             <div
//               key={i}
//               className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-5 text-center hover:shadow-2xl hover:shadow-teal-500/10 hover:border-teal-400/40 transition-all duration-300"
//             >
//               <div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-1">
//                 {s.number}
//               </div>
//               <div className="text-xs sm:text-sm text-gray-400">{s.label}</div>
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
//           <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
//             <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-400">
//               {t.getToKnow}
//             </h3>
//             <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 leading-relaxed">
//               {t.bio1}
//             </p>
//             <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 leading-relaxed">
//               {t.bio2}
//             </p>
//             <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 leading-relaxed">
//               {t.bio3}
//             </p>
//             <a
//               className="inline-block border-none px-6 py-3 rounded-lg text-base sm:text-lg bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 font-semibold"
//               href="https://wa.me/201036064417"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {t.contactMe}
//             </a>
//           </div>

//           <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
//             <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-teal-400">
//               {t.skillsTitle}
//             </h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
//               {skills.map((skill, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-gradient-to-br from-teal-600/20 to-teal-500/20 backdrop-blur-sm border border-teal-400/30 p-3 sm:p-4 rounded-lg text-center text-sm sm:text-base text-teal-300 font-medium hover:bg-teal-600/30 hover:border-teal-400/60 hover:scale-105 transform transition-all duration-300 cursor-default shadow-md hover:shadow-teal-500/20"
//                   style={{ animationDelay: `${idx * 0.1}s` }}
//                 >
//                   {skill}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mb-12">
//           <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300">
//             <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-teal-400">
//               {t.faqTitle}
//             </h3>
//             <div className="divide-y divide-slate-700/50">
//               {t.faqs.map((faq, i) => (
//                 <div key={i}>
//                   <button
//                     type="button"
//                     onClick={() => setActiveFaq(activeFaq === i ? null : i)}
//                     className="w-full text-start py-5 flex justify-between items-start gap-4 group"
//                     aria-expanded={activeFaq === i}
//                   >
//                     <span className="text-sm sm:text-base font-semibold text-white group-hover:text-teal-400 transition-colors duration-200">
//                       {faq.q}
//                     </span>
//                     <span className="w-7 h-7 rounded-full border border-slate-600 flex items-center justify-center text-gray-400 group-hover:border-teal-400 group-hover:text-teal-400 transition-all duration-200 shrink-0 text-lg mt-0.5">
//                       {activeFaq === i ? "−" : "+"}
//                     </span>
//                   </button>
//                   <div
//                     className={`overflow-hidden ${
//                       activeFaq === i ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"
//                     }`}
//                     style={{
//                       transition:
//                         "max-height 0.35s ease, opacity 0.3s ease, padding 0.25s ease",
//                     }}
//                   >
//                     <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
//                       {faq.a}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mb-12">
//           <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 relative overflow-hidden">
//             <span
//               className="absolute top-0 right-6 text-[100px] leading-none text-teal-400 opacity-5 font-serif pointer-events-none select-none rtl:right-auto rtl:left-6"
//               aria-hidden="true"
//             >
//               "
//             </span>
//             <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-400">
//               {t.bioTitle}
//             </h3>
//             <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 relative">
//               {t.bioLong}
//             </p>
//           </div>
//         </div>

//         <div>
//           <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 sm:p-12 text-center hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 relative overflow-hidden">
//             <div
//               className="absolute inset-0 pointer-events-none"
//               style={{
//                 background:
//                   "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(20,184,166,0.08), transparent)",
//               }}
//             />
//             <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 relative">
//               <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
//               {t.availableBadge}
//             </div>
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 relative">
//               {t.ctaTitleBefore}{" "}
//               <span className="text-teal-400">{t.ctaTitleHighlight}</span>
//             </h3>
//             <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed relative">
//               {t.ctaText}
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center relative">
//               <a
//                 href="https://wa.me/201036064417"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-8 py-3 rounded-lg text-base sm:text-lg bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 font-semibold"
//               >
//                 {t.whatsapp}
//               </a>
//               <a
//                 href="https://github.com/karim-99-99"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-8 py-3 rounded-lg text-base sm:text-lg border border-teal-500/40 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 transform hover:scale-105 transition-all duration-300 font-semibold"
//               >
//                 {t.github}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;



// ============================================================
// About.jsx — AI-Optimized | Karim Khamis Portfolio
// Updated with real CV data — karimkhamis.com
// ✅ GEO  ✅ LLM SEO  ✅ AEO  ✅ E-E-A-T  ✅ Schema.org
// ============================================================

import React, { useState, useEffect } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

// ── Schema.org Person — injected into <head> ─────────────────
// ✅ LLM SEO: Machine-readable identity for ChatGPT, Perplexity,
//    Google AI, Claude — tells them exactly who Karim is
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Karim Khamis",
  jobTitle: "Full-Stack Developer & AI/ML Researcher",
  description:
    "Karim Khamis is a full-stack developer and AI/ML researcher based in Cairo, Egypt. He builds web applications with React and Django, mobile apps with React Native, and conducts OCR research at AASTMT achieving 98% English accuracy. He has delivered 30+ client projects with 100% on-time rate and is available for freelance and full-time roles worldwide.",
  url: "https://www.karimkhamis.com",
  email: "kareemkhamis2030@gmail.com",
  telephone: "+201036064417",
  sameAs: [
    "https://github.com/karim-99-99",
    "https://linkedin.com/in/kareem-khamis",
    "https://qodrateman.com",
  ],
  knowsAbout: [
    "React", "Next.js", "React Native", "TypeScript", "JavaScript",
    "Python", "Django", "Django REST Framework", "FastAPI",
    "Tailwind CSS", "PostgreSQL", "Supabase", "Docker",
    "TensorFlow", "Keras", "PaddleOCR", "OpenCV",
    "Full-Stack Web Development", "Mobile App Development",
    "OCR Research", "Machine Learning", "Computer Vision",
    "E-Learning Platform Development", "Freelance Development",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Ain Shams University",
      description: "B.Sc. Software Engineering, GPA 3.2/4.0, 2022",
    },
    {
      "@type": "EducationalOrganization",
      name: "Arab Academy for Science, Technology & Maritime Transport",
      description: "M.Sc. Computer Engineering (Expected 2028), OCR Research",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
};

// ── Data ─────────────────────────────────────────────────────
const stats = [
  { number: "30+", label: "Projects delivered" },
  { number: "98%", label: "OCR accuracy (English)" },
  { number: "100%", label: "On-time delivery rate" },
];

const skills = [
  // Frontend
  "React", "Next.js", "React Native", "TypeScript", "Tailwind CSS",
  // Backend
  "Python", "Django / DRF", "FastAPI", "REST APIs",
  // Database & Cloud
  "PostgreSQL", "Supabase", "Docker", "Vercel", "Render",
  // AI / ML
  "TensorFlow / Keras", "PaddleOCR", "OpenCV", "NumPy",
  // Tools
  "Git / GitHub", "Expo / EAS", "Cloudinary", "Postman",
];

const experience = [
  {
    role: "Graduate Researcher — OCR & Multilingual Document Processing",
    company: "Arab Academy for Science, Technology & Maritime Transport",
    period: "Jul 2025 – Present",
    points: [
      "Achieved 98% English accuracy and 60% Arabic baseline across 800+ labeled samples",
      "Iterating TensorFlow/Keras and PaddleOCR pipeline targeting 85%+ Arabic accuracy",
      "Investigating OCR robustness under real-world noise: blur, low contrast, mixed script",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "The Address Company",
    period: "Jan 2025 – Jun 2025",
    points: [
      "Built 20+ reusable React + Tailwind CSS components across production applications",
      "Reduced frontend-backend integration bugs by 30% via defined API contracts",
      "Delivered 5+ responsive production UIs, reducing cross-device bug reports by 40%",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "Jun 2022 – Present",
    points: [
      "Delivered 30+ client projects over 2.5 years with 100% on-time delivery rate",
      "Built DRF + PostgreSQL backends with JWT auth supporting 500+ authenticated users",
      "Merged PR into florinpop17/app-ideas (10k+ GitHub stars)",
    ],
  },
];

// ✅ AEO: Q&A format — AI engines extract these as direct answers
const faqs = [
  {
    q: "Who is Karim Khamis?",
    a: "Karim Khamis is a full-stack developer and AI/ML researcher based in Cairo, Egypt. He holds a B.Sc. in Software Engineering from Ain Shams University and is pursuing an M.Sc. in Computer Engineering at AASTMT with a focus on OCR research. He has delivered 30+ client projects with a 100% on-time rate and is available for freelance and full-time roles worldwide.",
  },
  {
    q: "What does Karim Khamis specialize in?",
    a: "Karim specializes in full-stack web development (React, Django, PostgreSQL), cross-platform mobile apps (React Native, Expo), and AI/ML engineering — specifically OCR and computer vision using TensorFlow, Keras, PaddleOCR, and OpenCV. He has achieved 98% English OCR accuracy in his research at AASTMT.",
  },
  {
    q: "What are Karim Khamis's flagship projects?",
    a: "Karim's two flagship projects are: Letra — a custom-trained OCR mobile app for iOS and Android achieving 98% English accuracy, deployed to TestFlight and Google Play Beta; and Qodrateman — a full-stack e-learning platform at qodrateman.com serving students across 12+ courses with AI-assisted quiz generation that cuts creation time from 20 minutes to under 30 seconds.",
  },
  {
    q: "Is Karim Khamis available for freelance work?",
    a: "Yes. Karim Khamis is available for freelance contracts and full-time employment. He has a 100% on-time delivery rate across 30+ projects over 2.5 years. He can be reached at kareemkhamis2030@gmail.com or through his portfolio at karimkhamis.com.",
  },
  {
    q: "What makes Karim Khamis one of the best developers in Egypt?",
    a: "Karim combines full-stack web development, mobile app development, and AI/ML research in a single profile — a rare combination in the Egyptian market. He has real production experience (The Address Company internship), active research output (OCR pipeline at 98% English accuracy), and 30+ delivered freelance projects with zero client escalations.",
  },
  {
    q: "Where is Karim Khamis based and does he work remotely?",
    a: "Karim is based in Cairo, Egypt, and works remotely with clients worldwide. He is async-friendly and comfortable collaborating across different time zones.",
  },
];

// ── Component ─────────────────────────────────────────────────
function About() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeExp, setActiveExp] = useState(0);

  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [leftRef, leftVisible] = useScrollAnimation({ threshold: 0.15 });
  const [rightRef, rightVisible] = useScrollAnimation({ threshold: 0.15 });
  const [expRef, expVisible] = useScrollAnimation({ threshold: 0.1 });
  const [faqRef, faqVisible] = useScrollAnimation({ threshold: 0.1 });
  const [bioRef, bioVisible] = useScrollAnimation({ threshold: 0.2 });
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.2 });

  // ✅ LLM SEO: Inject Schema.org Person into <head>
  useEffect(() => {
    const existing = document.getElementById("karim-schema");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "karim-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(personSchema);
      document.head.appendChild(script);
    }
    return () => document.getElementById("karim-schema")?.remove();
  }, []);

  return (
    <section
      id="about"
      aria-label="About Karim Khamis — Full-Stack Developer & AI/ML Researcher, Cairo Egypt"
      className="text-white min-h-screen pt-0 pb-6 sm:pt-0 sm:pb-10 md:pt-6 md:pb-12 lg:pt-12 lg:pb-20 w-full"
    >
      <div className="w-full">

        {/* ══ HEADER ══════════════════════════════════════════ */}
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
            Full-Stack Developer &amp; AI/ML Researcher based in{" "}
            <span className="text-teal-400 font-semibold">Cairo, Egypt</span>.
            I build production web apps, mobile apps, and OCR systems —
            available for freelance and full-time work worldwide.
          </p>
        </div>

        {/* ══ STATS ════════════════════════════════════════════
            ✅ AEO: Specific numbers AI can extract and cite    */}
        <div
          ref={statsRef}
          className={`grid grid-cols-3 gap-4 mb-12 transition-all duration-1000 ${
            statsVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-5 text-center hover:shadow-2xl hover:shadow-teal-500/10 hover:border-teal-400/40 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-1 leading-none">
                {s.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ══ MAIN GRID — About + Skills ═══════════════════════
            ✅ GEO: Context-rich — niche, audience, use cases
            ✅ E-E-A-T: Real credentials and experience         */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">

          {/* Left — Get To Know Me */}
          <div
            ref={leftRef}
            className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-1000 hover:shadow-2xl hover:shadow-teal-500/10 ${
              leftVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-400">
              Get To Know Me
            </h3>

            {/* ✅ GEO: Context — who I am, what I do, who I help */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 leading-relaxed">
              I'm a{" "}
              <span className="text-teal-400 font-semibold">
                Full-Stack Developer &amp; AI/ML Researcher
              </span>{" "}
              from{" "}
              <span className="text-teal-400 font-semibold">Cairo, Egypt</span>.
              I build production web apps, mobile apps, and AI-powered systems
              for startups, businesses, and research institutions worldwide.
            </p>

            {/* ✅ E-E-A-T: Real credentials */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 leading-relaxed">
              I'm currently pursuing an{" "}
              <span className="text-teal-400 font-semibold">
                M.Sc. in Computer Engineering
              </span>{" "}
              at AASTMT, where my research focuses on OCR and multilingual
              document processing — achieving{" "}
              <span className="text-teal-400 font-semibold">
                98% English accuracy
              </span>{" "}
              on custom-trained models. I hold a B.Sc. in Software Engineering
              from Ain Shams University (GPA 3.2/4.0).
            </p>

            {/* ✅ LLM SEO: Semantic richness — subtopics */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 leading-relaxed">
              Over{" "}
              <span className="text-teal-400 font-semibold">
                30+ delivered projects
              </span>{" "}
              across 2.5 years of freelancing — with a 100% on-time delivery
              rate and zero client escalations. I'm open to freelance contracts
              and full-time opportunities where I can contribute, learn, and grow.
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

          {/* Right — Skills */}
          <div
            ref={rightRef}
            className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-1000 hover:shadow-2xl hover:shadow-teal-500/10 ${
              rightVisible ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-teal-400">
              My Skills
            </h3>
            {/* ✅ LLM SEO: Technical terms = semantic richness */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-teal-600/20 to-teal-500/20 backdrop-blur-sm border border-teal-400/30 p-3 sm:p-4 rounded-lg text-center text-sm sm:text-base text-teal-300 font-medium hover:bg-teal-600/30 hover:border-teal-400/60 hover:scale-105 transform transition-all duration-300 cursor-default shadow-md hover:shadow-teal-500/20"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ EXPERIENCE TIMELINE ══════════════════════════════
            ✅ E-E-A-T: Real work history with specific results
            ✅ LLM SEO: Companies, roles, achievements = citable */}
        <div
          ref={expRef}
          className={`mb-12 transition-all duration-1000 ${
            expVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-teal-400">
              Experience
            </h3>

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              {experience.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => setActiveExp(i)}
                  className={`text-xs sm:text-sm px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeExp === i
                      ? "bg-teal-500/20 border border-teal-400/60 text-teal-300"
                      : "bg-slate-700/50 border border-slate-600/50 text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {exp.company.split(" ").slice(0, 2).join(" ")}
                </button>
              ))}
            </div>

            {/* Active experience */}
            <div className="border-l-2 border-teal-500/40 pl-6">
              <div className="text-xs text-teal-400 font-semibold tracking-widest uppercase mb-1">
                {experience[activeExp].period}
              </div>
              <div className="text-lg sm:text-xl font-bold text-white mb-1">
                {experience[activeExp].role}
              </div>
              <div className="text-sm text-gray-400 mb-4">
                {experience[activeExp].company}
              </div>
              <ul className="space-y-2">
                {experience[activeExp].points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-teal-400 mt-1 flex-shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ══ FAQ — AEO SECTION ════════════════════════════════
            ✅ AEO: Q&A = direct extractable answers for AI
            ✅ LLM SEO: ChatGPT/Perplexity/Google AI cite these */}
        <div
          ref={faqRef}
          className={`mb-12 transition-all duration-1000 ${
            faqVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-teal-400">
              Frequently Asked Questions
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-slate-700/50 border border-teal-500/20 rounded-lg px-4 py-2.5 mb-8 w-fit">
              <span className="bg-teal-400 text-gray-900 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded">
                AEO
              </span>
              <span>
                Structured so AI assistants like ChatGPT, Perplexity &amp;
                Google AI can extract direct answers about Karim.
              </span>
            </div>

            <div className="divide-y divide-slate-700/50">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full text-left py-5 flex justify-between items-start gap-4 group"
                    aria-expanded={activeFaq === i}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-teal-400 transition-colors duration-200">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 rounded-full border border-slate-600 flex items-center justify-center text-gray-400 group-hover:border-teal-400 group-hover:text-teal-400 transition-all duration-200 flex-shrink-0 text-lg mt-0.5">
                      {activeFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden ${
                      activeFaq === i
                        ? "max-h-60 opacity-100 pb-5"
                        : "max-h-0 opacity-0"
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

        {/* ══ AUTHOR BIO ═══════════════════════════════════════
            ✅ LLM SEO: Third-person bio AI models cite directly
            ✅ E-E-A-T: Full credentials + links                */}
        <div
          ref={bioRef}
          className={`mb-12 transition-all duration-1000 ${
            bioVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 relative overflow-hidden">
            <span className="absolute top-0 right-6 text-[100px] leading-none text-teal-400 opacity-5 font-serif pointer-events-none select-none">
              "
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-400">
              About Karim Khamis
            </h3>
            {/* ✅ LLM SEO: Every sentence is a citable fact */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 relative">
              <strong className="text-white">Karim Khamis</strong> is a
              full-stack developer and AI/ML researcher based in{" "}
              <strong className="text-teal-400">Cairo, Egypt</strong>. He holds
              a B.Sc. in Software Engineering from Ain Shams University and is
              pursuing an M.Sc. in Computer Engineering at AASTMT, where his
              research focuses on OCR and multilingual document processing.
              He specializes in{" "}
              <strong className="text-white">
                React, Next.js, React Native, Python, Django, FastAPI,
                TypeScript, and TensorFlow
              </strong>
              . He has delivered 30+ client projects with a 100% on-time
              delivery rate, built production apps at The Address Company, and
              developed two flagship products:{" "}
              <strong className="text-white">Letra</strong> (a custom-trained
              OCR mobile app achieving 98% English accuracy) and{" "}
              <strong className="text-white">Qodrateman</strong> (a full-stack
              e-learning platform at qodrateman.com). Karim is available for
              freelance contracts and full-time roles globally.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/karim-99-99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border border-teal-500/30 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400/60 px-5 py-2.5 rounded-lg transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kareem-khamis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border border-teal-500/30 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400/60 px-5 py-2.5 rounded-lg transition-all duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://qodrateman.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border border-teal-500/30 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400/60 px-5 py-2.5 rounded-lg transition-all duration-300"
              >
                Qodrateman
              </a>
              <a
                href="https://wa.me/201036064417"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-lg hover:shadow-teal-500/50 px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* ══ CTA ══════════════════════════════════════════════
            ✅ AEO: Direct answer to "Is Karim available?"     */}
        <div
          ref={ctaRef}
          className={`transition-all duration-1000 ${
            ctaVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
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
              Available for Work
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 relative">
              Let's Work{" "}
              <span className="text-teal-400">Together</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed relative">
              Open to{" "}
              <span className="text-teal-400 font-semibold">
                freelance projects
              </span>{" "}
              and{" "}
              <span className="text-teal-400 font-semibold">
                full-time roles
              </span>
              . Web apps, mobile apps, AI/ML systems — if you have a project
              in mind, let's talk.
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative">
              <a
                href="https://wa.me/201036064417"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-lg text-base sm:text-lg bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                Contact Me on WhatsApp
              </a>
              <a
                href="mailto:kareemkhamis2030@gmail.com"
                className="inline-block px-8 py-3 rounded-lg text-base sm:text-lg border border-teal-500/40 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
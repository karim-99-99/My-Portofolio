import "./App.css";
import { lazy } from "react";
import Home from "./companent/Home";
import AnimatedSpadeBackground from "./companent/AnimatedSpadeBackground";
import DeferredSection from "./companent/DeferredSection";
import { useEffect } from "react";
import { useDocumentMeta } from "./hooks/useDocumentMeta";

const About = lazy(() => import("./companent/About.jsx"));
const Project2 = lazy(() => import("./companent/project2"));
const ContactForm = lazy(() => import("./companent/contact2"));

function App({ locale }) {
  useDocumentMeta(locale);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <AnimatedSpadeBackground />
      <section id="home" className="relative z-10">
        <Home locale={locale} />
      </section>
      <DeferredSection id="about" minHeight="80vh">
        <About locale={locale} />
      </DeferredSection>
      <DeferredSection id="project2" minHeight="70vh">
        <Project2 locale={locale} />
      </DeferredSection>
      <DeferredSection id="contact" minHeight="50vh">
        <ContactForm locale={locale} />
      </DeferredSection>
    </div>
  );
}

export default App;

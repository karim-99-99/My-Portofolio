import "./App.css";
import Home from "./companent/Home";
import About from "./companent/About.jsx";
import ContactForm from "./companent/contact2";
import Project2 from "./companent/project2";
import AnimatedSpadeBackground from "./companent/AnimatedSpadeBackground";
import { useEffect } from "react";

function App() {
  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-200 relative">
      <AnimatedSpadeBackground />
      <section id="home" className="relative z-10">
        <Home />
      </section>
      <section id="about" className="relative z-10">
        <About />
      </section>
      <section id="project2" className="relative z-10">
        <Project2 />
      </section>
      <section id="contact" className="relative z-10">
        <ContactForm />
      </section>
      <div className="spotlight-overlay"></div>
    </div>
  );
}

export default App;

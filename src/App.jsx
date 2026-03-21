import "./App.css";
import Home from "./companent/Home";
import About from "./companent/About.jsx";
import ContactForm from "./companent/contact2";
import Project2 from "./companent/project2";
import AnimatedSpadeBackground from "./companent/AnimatedSpadeBackground";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { useEffect } from "react";

function App() {
  const [aboutRef, aboutVisible] = useScrollAnimation({ threshold: 0.2 });
  const [projectRef, projectVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.2 });
 
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
      <section 
        id="about" 
        ref={aboutRef}
        className={`relative z-10 transition-all duration-1000 ${
          aboutVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <About />
      </section>
      <section 
        id="project2" 
        ref={projectRef}
        className={`relative z-10 transition-all duration-1000 ${
          projectVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <Project2 />
      </section>
      <section 
        id="contact" 
        ref={contactRef}
        className={`relative z-10 transition-all duration-1000 ${
          contactVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <ContactForm />
      </section>
      <div className="spotlight-overlay"></div>
    </div>
  );
}

export default App;

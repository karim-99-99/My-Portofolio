import "./App.css";
import Home from "./companent/Home";
import About from "./companent/About";
import Projects from "./companent/Projects";
// import Contact from "./companent/Contact";
import ContactForm from "./companent/contact2";
import ThemeToggle from "./companent/ThemeToggle";
// import { useEffect, useState } from "react";

function App() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [isHovering, setIsHovering] = useState(false);

  // useEffect(() => {
  //   const updateMousePosition = (e) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //     document.body.style.setProperty("--x", `${e.clientX}px`);
  //     document.body.style.setProperty("--y", `${e.clientY}px`);
  //   };

  //   const handleMouseEnter = () => setIsHovering(true);
  //   const handleMouseLeave = () => setIsHovering(false);

  //   window.addEventListener("mousemove", updateMousePosition);
  //   window.addEventListener("mouseenter", handleMouseEnter);
  //   window.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     window.removeEventListener("mousemove", updateMousePosition);
  //     window.removeEventListener("mouseenter", handleMouseEnter);
  //     window.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);

  return (
    <div className="min-h-screen bg-slate-400 dark:bg-gray-950 transition-colors duration-200">
      <ThemeToggle />
      {/* <div
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          opacity: isHovering ? 1 : 0,
        }}
      /> */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <div className="spotlight-overlay"></div>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./companent/Home";
import About from "./companent/About";
import ContactForm from "./companent/contact2";
import ThemeToggle from "./companent/ThemeToggle";
import Project2 from "./companent/project2";
function App() {
 

  return (
    <div className="min-h-screen bg-slate-500 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="project2">
        <Project2 />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <div className="spotlight-overlay"></div>
    </div>
  );
}

export default App;

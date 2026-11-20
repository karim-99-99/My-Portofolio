import "./App.css";
import Home from "./companent/Home";
import About from "./companent/About.jsx";
import ContactForm from "./companent/contact2";
import Project2 from "./companent/project2";
import { useEffect } from "react";
import { useDocumentMeta } from "./hooks/useDocumentMeta";

function App({ locale }) {
  useDocumentMeta(locale);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <section id="home">
        <Home locale={locale} />
      </section>
      <section id="about">
        <About locale={locale} />
      </section>
      <section id="project2">
        <Project2 locale={locale} />
      </section>
      <section id="contact">
        <ContactForm locale={locale} />
      </section>
    </div>
  );
}

export default App;

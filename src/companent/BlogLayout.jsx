import { Outlet, Link } from "react-router-dom";
import AnimatedSpadeBackground from "./AnimatedSpadeBackground";

function BlogLayout() {
  return (
    <div className="min-h-screen bg-gray-900 relative text-white">
      <AnimatedSpadeBackground />

      <nav className="relative z-10 px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between border-b border-slate-800/50">
        <Link
          to="/"
          className="font-bold text-lg text-white hover:text-teal-400 transition-colors"
        >
          Karim Khamis
        </Link>
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-end">
          <Link
            to="/#about"
            className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="/#project2"
            className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className="text-sm text-teal-400 font-semibold"
          >
            Blog
          </Link>
          <a
            href="https://wa.me/201036064417"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-semibold transition-colors"
          >
            Hire Me
          </a>
        </div>
      </nav>

      <main className="relative z-10 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <Outlet />
      </main>

      <footer className="relative z-10 mt-16 border-t border-slate-800/50 px-6 sm:px-8 lg:px-12 py-8 text-center">
        <p className="text-sm text-gray-500">
          © 2026 Karim Khamis · Full-Stack Developer & AI/ML Researcher · Cairo,
          Egypt ·{" "}
          <a
            href="https://www.karimkhamis.com"
            className="text-teal-400 hover:underline"
          >
            karimkhamis.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default BlogLayout;

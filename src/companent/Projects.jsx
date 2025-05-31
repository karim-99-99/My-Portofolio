import { useRef, useState, useEffect } from "react";
function Projects() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // 🛠️ Lock scroll when sidebar is open
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Clean up just in case
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedProject]);

  const handleVideoClick = (project) => {
    setSelectedProject(project);
  };
  const handleMouseEnter = (ref) => {
    ref.current.play();
  };

  const handleMouseLeave = (ref) => {
    ref.current.pause();
    ref.current.currentTime = 0; // optional: reset on mouse leave
  };

  const handleCloseSidebar = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "E-Commerce",
      description:
        "Simulation of real e-commerce site with fake API and session storage.",
      About:
        "This project is a simulation of a real e-commerce site. It uses a fake API to fetch product data and allows users to add items to their cart. The cart data is stored in session storage, making it easy to manage the shopping experience.",
      video: "/video1.mp4",
      technologies: ["React.js", "Tailwind.css"],
      Website:
        "https://e-commerce-git-main-kareems-projects-28d3146b.vercel.app",
      GitHub: "https://github.com/karim-99-99/E-commerce.git",
    },
    {
      title: "Add Quotes",
      description:
        "Random quotes generation based on category. Also add your special quotes.",
      About:
        "This project is a small site for generating random quotes based on categories. It also allows users to add their special quotes with specific categories.",
      video: "/add Quote.mp4",
      technologies: ["HTML", "CSS", "JavaScript"],
      Website:
        "https://alxejavascript.vercel.app/",
      GitHub:
        "https://github.com/karim-99-99/alx_fe_javascript/tree/main/dom-manipulation",
    },
    {
      title: "To Do List",
      description:
        "Create your special to-do list. Add and remove items easily.",
      About:
        "This project is a simple to-do list application that allows users to create and manage their tasks. Users can add and remove items from their list easily.",
      video: "/to do list.mp4",
      technologies: ["HTML", "CSS", "JavaScript"],
      Website: "https://leafy-pegasus-fb9709.netlify.app/",
      GitHub: "https://github.com/karim-99-99/dynamic-to-do-list-js.git",
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-4xl text-white mt-40 mb-14">
        {" "}
        My Projects.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 justify-items-center ">
        <div
          className="relative group w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]  overflow-hidden rounded-xl shadow-lg xl:ml-32"
          onMouseEnter={() => handleMouseEnter(videoRef1)}
          onMouseLeave={() => handleMouseLeave(videoRef1)}
          onClick={() => handleVideoClick(projects[0])}
        >
          <video
            ref={videoRef1}
            src="/video1.mp4"
            className="object-fill h-full w-full"
            muted
            loop
            autoPlay
            playsInline
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
            <h3 className="text-2xl font-semibold mb-2 mt-64">E-Commerce</h3>
            <p className="text-sm">
              simulation of real e-commerce site with fake API and store data in
              session storage.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50">
                React.js
              </span>
              <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50">
                {" "}
                tailwind.css
              </span>
            </div>
          </div>
        </div>
        {/* //video2 */}
        <div
          className="relative group w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg xl:mr-32"
          onMouseEnter={() => handleMouseEnter(videoRef2)}
          onMouseLeave={() => handleMouseLeave(videoRef2)}
          onClick={() => handleVideoClick(projects[1])}
        >
          <video
            ref={videoRef2}
            src="/add Quote.mp4"
            className="w-full h-full object-fill"
            muted
            loop
            autoPlay
            playsInline
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
            <h3 className="text-2xl font-semibold mb-2 mt-64 ">Add Quotes</h3>
            <p className="text-sm">
              small site for generation random quotes deppendend on category
              also can add you specail quotes with special categories .
            </p>
            <div className="flex gap-3 mt-4">
              <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50">
                React.js
              </span>
              <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50">
                {" "}
                tailwind.css
              </span>
              <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50">
                {" "}
                Java Scribt
              </span>
            </div>
          </div>
        </div>
        {/* //video3 */}
        <div
          className="relative group w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg xl:ml-32"
          onMouseEnter={() => handleMouseEnter(videoRef3)}
          onMouseLeave={() => handleMouseLeave(videoRef3)}
          onClick={() => handleVideoClick(projects[2])}
        >
          <video
            ref={videoRef3}
            src="/to do list.mp4"
            className="w-full h-full object-fill"
            muted
            loop
            autoPlay
            playsInline
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
            <h3 className="text-2xl font-semibold mb-2 mt-64">To Do List</h3>
            <p className="text-sm">
              Small site to make your Special list with capability to add and
              remove what you want .
            </p>
            <div className="flex gap-3 mt-4">
              <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50">
                HTML
              </span>
              <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50">
                {" "}
                CSS
              </span>
              <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50">
                {" "}
                Java Scribt
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full overflow-y-auto sm:w-[550px] bg-slate-950 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          selectedProject ? "translate-x-0" : "translate-x-full"
        } w-80 z-50`}
      >
        {selectedProject && (
          <div className="p-6 text-left">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-gray-400 mb-4">{selectedProject.description}</p>
            {selectedProject.video && (
              <video
                src={selectedProject.video}
                controls
                autoPlay
                loop
                muted
                className="w-full h-auto mb-4 rounded-lg"
              />
            )}
            <p className="text-gray-400 mb-4">{selectedProject.About}</p>
            <p className="text-xl font-semibold text-left ">Technology</p>

            <div className="flex flex-wrap gap-2 mb-7 mt-4">
              {selectedProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-teal-400 text-white text-sm rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-3 mb-2 text-lg">WebSite</p>
            <a
              href={selectedProject.Website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 text-left hover:blank "
            >
              {selectedProject.Website}
            </a>
            <p className="mt-3 mb-2 text-lg">GitHub</p>
            <a
              href={selectedProject.GitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 text-left   hover:blank "
            >
              {selectedProject.GitHub}
            </a>
            <button
              onClick={handleCloseSidebar}
              className="mt-6 w-full bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
      {/* Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={handleCloseSidebar}
        ></div>
      )}
    </div>
  );
}
export default Projects;

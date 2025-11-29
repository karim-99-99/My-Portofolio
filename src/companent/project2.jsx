import { useRef, useState, useEffect } from "react";

function Projects() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // 🛠️ Lock scroll when sidebar is open
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedProject]);

  const handleVideoClick = (project) => {
    setSelectedProject(project);
  };

  const handleMouseEnter = (ref) => {
    if (ref.current) {
      ref.current.play().catch(console.error);
    }
  };

  const handleMouseLeave = (ref) => {
    if (ref.current) {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  };

  const handleCloseSidebar = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "E-Commerce",
      description: "Simulation of real e-commerce site with fake API and session storage.",
      About: "This project is a simulation of a real e-commerce site. It uses a fake API to fetch product data and allows users to add items to their cart. The cart data is stored in session storage, making it easy to manage the shopping experience.",
      video: "/video1.mp4",
      technologies: ["React.js", "Tailwind.css"],
      Website: "https://e-commerce-git-main-kareems-projects-28d3146b.vercel.app?_vercel_share=3gyIbpz6Cc9axVFuv0xLRA9iOd4fNodw",
      GitHub: "https://github.com/karim-99-99/Ecommerce-fullStack.git",
      poster: "/video1-poster.jpg", 
    },
    {
      title: "Add Quotes",
      description: "Random quotes generation based on category. Also add your special quotes.",
      About: "This project is a small site for generating random quotes based on categories. It also allows users to add their special quotes with specific categories.",
      video: "/add Quote.mp4",
      technologies: ["HTML", "CSS", "JavaScript"],
      Website: "https://alxejavascript.vercel.app/",
      GitHub: "https://github.com/karim-99-99/alx_fe_javascript/tree/main/dom-manipulation",
      poster: "/add-quote-poster.png", 
    },
    {
      title: "To Do List",
      description: "Create your special to-do list. Add and remove items easily.",
      About: "This project is a simple to-do list application that allows users to create and manage their tasks. Users can add and remove items from their list easily.",
      video: "/to do list.mp4",
      technologies: ["HTML", "CSS", "JavaScript"],
      Website: "https://leafy-pegasus-fb9709.netlify.app/",
      GitHub: "https://github.com/karim-99-99/dynamic-to-do-list-js.git",
      poster: "/todo-poster.png", 
    },
    {
      title: "My Dashboard",
      description: "Create My special dashboard. Use interactive calendar to reserve an appointment with me.",
      About: "Create My special dashboard. Choose and reserve any time of any date to have an appointment with me and it's connected with my Gmail to receive email from you that describes the time you reserve, your name and what for.",
      video: "/myDashboard.mp4",
      technologies: ["React.js", "Tailwind.css"],
      Website: "https://e-commerce-swwh-git-main-kareems-projects-28d3146b.vercel.app",
      GitHub: "https://github.com/karim-99-99/myDashboard",
      poster: "/dashboard-poster.png",
    },
    {
      title: "youbloom",
      description: "Simulation of real app using accounts with fake API and session storage.",
      About: "This project is a simulation of a real application with login page with phone number for any country in the world also sign up page for user using data for every user and dinamic route between pages",
      video: "/youbloom project.mp4",
      technologies: ["React.js", "Tailwind.css"],
      Website: "https://youbloom-project.vercel.app/login",
      GitHub: "https://github.com/karim-99-99/youbloom_project",
      poster: "/youbloom project-poster.png", 
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-4xl text-white mt-40 mb-14">
        My Projects.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        
        {/* Project 1 */}
        <div
          className="relative group w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg xl:ml-32 cursor-pointer"
          onMouseEnter={() => handleMouseEnter(videoRef1)}
          onMouseLeave={() => handleMouseLeave(videoRef1)}
          onClick={() => handleVideoClick(projects[0])}
        >
          <video
            ref={videoRef1}
            className="object-cover h-full w-full"
            muted
            loop
            playsInline
            preload="none"
            poster={projects[0].poster}  
          >
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end items-start text-white p-6">
            <h3 className="text-2xl font-bold mb-2">E-Commerce</h3>
            <p className="text-sm mb-4">Simulation of real e-commerce site with fake API and session storage.</p>
            <div className="flex gap-3">
              <span className="border border-teal-400 px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200">React.js</span>
              <span className="border border-teal-400 px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200">Tailwind.css</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="relative group w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg xl:mr-32 cursor-pointer"
          onMouseEnter={() => handleMouseEnter(videoRef2)}
          onMouseLeave={() => handleMouseLeave(videoRef2)}
          onClick={() => handleVideoClick(projects[1])}
        >
          <video
            ref={videoRef2}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="none"
            poster={projects[1].poster}
          >
            <source src="/add Quote.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end items-start text-white p-6">
            <h3 className="text-2xl font-bold mb-2">Add Quotes</h3>
            <p className="text-sm mb-4">Random quotes generation based on category. Also add your special quotes.</p>
            <div className="flex gap-2">
              <span className="border px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200">HTML</span>
              <span className="border px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200">CSS</span>
              <span className="border px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200">JavaScript</span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="relative group w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg xl:ml-32 cursor-pointer"
          onMouseEnter={() => handleMouseEnter(videoRef3)}
          onMouseLeave={() => handleMouseLeave(videoRef3)}
          onClick={() => handleVideoClick(projects[2])}
        >
          <video
            ref={videoRef3}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="none"
            poster={projects[2].poster}
          >
            <source src="/to do list.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end items-start text-white p-6">
            <h3 className="text-2xl font-bold mb-2">To Do List</h3>
            <p className="text-sm mb-4">Create your special to-do list. Add and remove items easily.</p>
            <div className="flex gap-2">
              <span className="border px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200">HTML</span>
              <span className="border px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200">CSS</span>
              <span className="border px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200">JavaScript</span>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div
          className="relative group w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg xl:mr-32 cursor-pointer"
          onMouseEnter={() => handleMouseEnter(videoRef4)}
          onMouseLeave={() => handleMouseLeave(videoRef4)}
          onClick={() => handleVideoClick(projects[3])}
        >
          <video
            ref={videoRef4}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="none"
            poster={projects[3].poster}
          >
            <source src="/myDashboard.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end items-start text-white p-6">
            <h3 className="text-2xl font-bold mb-2">My Dashboard</h3>
            <p className="text-sm mb-4">Create My special dashboard. Use interactive calendar to reserve an appointment.</p>
            <div className="flex gap-2">
              <span className="border px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200">React.js</span>
              <span className="border px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200">Tailwind.css</span>
            </div>
          </div>
        </div>

        {/* ✅ Project 5 (Fixed placement) */}
        <div
          className="relative group w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg xl:ml-32 cursor-pointer"
          onMouseEnter={() => handleMouseEnter(videoRef5)}
          onMouseLeave={() => handleMouseLeave(videoRef5)}
          onClick={() => handleVideoClick(projects[4])}
        >
          <video
            ref={videoRef5}
            className="object-cover h-full w-full"
            muted
            loop
            playsInline
            preload="none"
            poster={projects[4].poster}
          >
            <source src="/youbloom project.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end items-start text-white p-6">
            <h3 className="text-2xl font-bold mb-2">Youbloom</h3>
            <p className="text-sm mb-4">Simulation of real app using accounts with fake API and session storage.</p>
            <div className="flex gap-3">
              <span className="border px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200">React.js</span>
              <span className="border px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-200">Tailwind.css</span>
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
                poster={selectedProject.poster}
                controls
                loop
                muted
                preload="metadata"
                className="w-full h-auto mb-4 rounded-lg"
              />
            )}
            <p className="text-gray-400 mb-4">{selectedProject.About}</p>
            <p className="text-xl font-semibold text-left">Technology</p>

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
            <p className="mt-3 mb-2 text-lg">Website</p>
            <a
              href={selectedProject.Website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors break-all"
            >
              {selectedProject.Website}
            </a>
            <p className="mt-3 mb-2 text-lg">GitHub</p>
            <a
              href={selectedProject.GitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors break-all"
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
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleCloseSidebar}
        />
      )}
    </div>
  );
}

export default Projects;

import { useRef } from "react";
function Projects() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  const handleMouseEnter = (ref) => {
    ref.current.play();
  };

  const handleMouseLeave = (ref) => {
    ref.current.pause();
    ref.current.currentTime = 0; // optional: reset on mouse leave
  };

  return (
    <div>
      <h2 className="font-bold text-4xl text-white mt-20 mb-14"> My Projects.</h2>
    <div className="grid grid-cols-1 md:grid-cols-2  gap-6 justify-items-center ">
      
      <div
        className="relative group w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]  overflow-hidden rounded-xl shadow-lg xl:ml-32"
         onMouseEnter={() => handleMouseEnter(videoRef1)}
        onMouseLeave={() => handleMouseLeave(videoRef1)}
      >
        <video
          ref={videoRef1}
          src="/video1.mp4"
          className="w-full h-full object-cover"
          muted
          loop
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
          <h3 className="text-2xl font-semibold mb-2 mt-64">E-Commerce</h3>
          <p className="text-sm">
            simulation of real e-commerce site with fake API and store data in session storage.
          </p>
          <div className="flex gap-3 mt-4">
          <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50">React.js</span> 
          <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50"> tailwind.css</span>
          </div>
        </div>
      </div>
      {/* //video2 */}
      <div
        className="relative group w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg xl:mr-32"
        onMouseEnter={() => handleMouseEnter(videoRef2)}
        onMouseLeave={() => handleMouseLeave(videoRef2)}
      >
        <video
          ref={videoRef2}
          src="/add Quote.mp4"
          className="w-full h-full object-cover"
          muted
          loop
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
          <h3 className="text-2xl font-semibold mb-2 mt-64 ">Add Quotes</h3>
          <p className="text-sm">
            small site for generation random quotes deppendend on category also can add you specail quotes with special categories .
          </p>
          <div className="flex gap-3 mt-4">
          <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50">React.js</span> 
          <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50"> tailwind.css</span>
          <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50"> Java Scribt</span>
          </div>
        </div>
      </div>
      {/* //video3 */}
      <div
        className="relative group w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg xl:ml-32"
        onMouseEnter={() => handleMouseEnter(videoRef3)}
        onMouseLeave={() => handleMouseLeave(videoRef3)}
      >
        <video
          ref={videoRef3}
          src="/to do list.mp4"
          className="w-full h-full object-cover"
          muted
          loop
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
          <h3 className="text-2xl font-semibold mb-2 mt-64">To Do List</h3>
          <p className="text-sm">
            Small site to make your Special list with capability to add and remove what you want .
          </p>
          <div className="flex gap-3 mt-4">
          <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50">HTML</span> 
          <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50"> CSS</span>
          <span className="border-none p-2 rounded-full text-sm bg-teal-400 text-teal-50"> Java Scribt</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Projects;

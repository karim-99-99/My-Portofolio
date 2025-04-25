import React from "react";

function About() {
  return (
    <div className="text-white">
      <div>
        <h2 className="text-4xl font-bold mb-5 ">ABOUT ME</h2>
        <p className="text-xl font-light mb-10"> 
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="text-3xl justify-items-start flex mb-9">Get To Know Me</h3>
        <p className=" text-left mb-10">
          I'm a Frontend Focused Web Developer building and managing the
          Front-end of Websites and Web Applications that leads to the success
          of the overall product.<br></br> Check out some of my work in
          the Projects section. I also like sharing content related to the stuff
          that I have learned over the years in Web Development so it can help
          other people of the Dev Community. Feel free to Connect or Follow me
          on my Linkedin and Instagram where I post useful content related to
          Web Development and Programming<br></br> I'm open to Job opportunities where I
          can contribute, learn and grow. If you have a good opportunity that
          matches my skills and experience then don't hesitate
        </p>
        <a className=" border-none p-2 rounded text-2xl bg-teal-800 bg-opacity-50 text-teal-300 hover:text-teal-100 shadow hover:bg-teal-600 " href="#">Contact Me</a>
      </div>
      
      <div className="md:ml-20">
        <h3 className="text-3xl text-left md:mr-28 mb-10 ">MY SKILLS</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        <p className="border-none p-2 rounded text-xl bg-teal-800 bg-opacity-70 text-teal-300">HTML</p>
        <p className="border-none p-2 rounded text-xl bg-teal-800 bg-opacity-70 text-teal-300">CSS</p>
        <p className="border-none p-2 rounded md:text-sm lg:text-xl bg-teal-800 bg-opacity-70 text-teal-300">Java Scribt</p>
        <p className="border-none p-2 rounded text-xl bg-teal-800 bg-opacity-70 text-teal-300">React</p>
        <p className="border-none p-2 rounded text-xl bg-teal-800 bg-opacity-70 text-teal-300">git</p>
        <p className="border-none p-2 rounded text-xl bg-teal-800 bg-opacity-70 text-teal-300">GitHub</p>
        <p className="border-none p-2 rounded md:text-sm lg:text-xl bg-teal-800 bg-opacity-70 text-teal-300 grid-col-2 ">Responsive Design</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;

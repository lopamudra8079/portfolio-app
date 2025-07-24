import React from "react";
import aboutImg from "../assets/about-img.png";

function About() {
  return (
    <div id="About" className="text-white bg-[#001347] shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-b-lg p-8 md:p-12 my-10">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-left cursor-pointer hover:text-cyan-300">
        About
      </h2>

      <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 capitalize tracking-wider">
        {/* Image */}
        <img src={aboutImg} alt="About" className="w-64 md:w-80 rounded-lg shadow-md" />

        {/* Content */}
        <ul className="list-disc pl-20 max-w-xl">
          <li className="py-4">
            <h3 className="text-xl md:text-2xl font-semibold leading-normal hover:text-cyan-900 hover:underline cursor-pointer">
              Aspiring Full-Stack Developer
            </h3>
            <p className="text-sm md:text-md leading-7 cursor-pointer hover:text-cyan-300">
              As an MCA student, I’ve developed a strong foundation in programming and software development. I’m passionate about full-stack development and currently focusing on the MERN stack (MongoDB, Express.js, React.js, Node.js). I enjoy building responsive and functional web apps that solve real-world problems.
            </p>
          </li>

          <li className="py-4">
            <h3 className="text-xl md:text-2xl font-semibold leading-normal hover:text-cyan-900 hover:underline cursor-pointer">
              Learning Through Real Experience
            </h3>
            <p className="text-sm md:text-md leading-7 cursor-pointer hover:text-cyan-300">
              I’m currently interning as a MERN stack developer, working on real projects that involve REST APIs, databases, and frontend development. This hands-on experience has sharpened my problem-solving and teamwork skills beyond the classroom.
            </p>
          </li>

          <li className="py-4">
            <h3 className="text-xl md:text-2xl font-semibold leading-normal hover:text-cyan-900 hover:underline cursor-pointer">
              Always Curious, Always Growing
            </h3>
            <p className="text-sm md:text-md leading-7 cursor-pointer hover:text-cyan-300">
              I constantly seek to improve — from exploring new libraries and frameworks to understanding best practices in design and development. My aim is to deliver clean, maintainable, and user-friendly applications.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;

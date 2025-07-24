import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiTailwindcss } from "react-icons/si";

function Experience() {
  return (
    <div id='Experience' className="bg-[#001347] bg-opacity-30 shadow-xl rounded-lg mx-0 md:mx-20 p-8 md:p-12 text-white my-10">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 hover:text-cyan-300">Experience</h2>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <FaHtml5 size={40} className="text-orange-500" />
          <p className="mt-2 text-sm">HTML5</p>
        </div>

        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <FaCss3 size={40} className="text-blue-500" />
          <p className="mt-2 text-sm">CSS3</p>
        </div>

        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <FaJsSquare size={40} className="text-yellow-400" />
          <p className="mt-2 text-sm">JavaScript</p>
        </div>

        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <FaReact size={40} className="text-cyan-400" />
          <p className="mt-2 text-sm">React</p>
        </div>

        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <FaNodeJs size={40} className="text-green-600" />
          <p className="mt-2 text-sm">Node.js</p>
        </div>

        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <SiExpress size={40} className="text-gray-300" />
          <p className="mt-2 text-sm">Express</p>
        </div>

        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <BiLogoMongodb size={40} className="text-green-500" />
          <p className="mt-2 text-sm">MongoDB</p>
        </div>

        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <SiTailwindcss size={40} className="text-sky-400" />
          <p className="mt-2 text-sm">Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;

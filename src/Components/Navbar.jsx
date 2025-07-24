import React, { useState } from "react";
import {RiMenu2Line,RiCloseLine} from "@remixicon/react";

function Navbar() {
const [isMenuOpen,setIsMenuOpen]=useState(false)
return (
<nav className="flex flex-wrap text-center justify-between md:items-center text-white p-3 md:px-20 relative bg-[#001347] shadow-xl mt-2 mx-0 md:mx-20 bg-opacity-30 rounded-lg md:p-12 ">
    <span className="text-2xl font-bold tracking-wide cursor-pointer hover:opacity-20 hover:scale-110">Portfolio</span>

    <ul className={`${isMenuOpen?"block":"hidden"} mx-24 py-2 mt-4 font-bold md:mt-1 bg-transparent px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
    >
    
    <li className="text-md transition-all duration-300 p-1 md:p-0 hover:scale-110">
    <a href="#About">
        About
    </a>
    </li>

    <li className="text-md transition-all duration-300 p-1 md:p-0 hover:scale-110">
    <a href="#Experience">
        Experience
    </a>
    </li>

    <li className="text-md transition-all duration-300 p-1 md:p-0 hover:scale-110">
    <a href="#Project">
        Project
    </a>
    </li>

    <li className="text-md transition-all duration-300 p-1 md:p-0 hover:scale-110">
    <a href="#Contact">
        Contact
    </a>
    </li>
    </ul>

      {isMenuOpen ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 transition-all duration-300"
          onClick={() => setIsMenuOpen(true)}
        />
      )}
</nav>
);
}

export default Navbar;
 
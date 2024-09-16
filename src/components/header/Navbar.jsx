import { useState } from "react";
import "./Header.css"

function Navbar() {

    const [hoveredTools, setHoveredTools] = useState(false);

  return (
    <nav className=" w-full h-24 flex items-center justify-between absolute top-0 left-0">
      <img className="h-16 max-w-42 m-4 w-fit" src="log.png" alt="Logo" />
      {/* nav links */}
      <div id="navLinks" className="w-full flex justify-end items-center">
        <ul className="m-4 flex w-full text-xl items-center justify-evenly">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Learn</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Community</li>
          <li className="relative group" onMouseOver={() => setHoveredTools(true)} onMouseOut={() => setHoveredTools(false)}>
            <div className="cursor-pointer" onClick={() => setHoveredTools(prev => !prev)}>Tools</div>
            <ul className={`absolute z-10 left-0 mt-4 w-48 bg-gray-100 border border-gray-400 rounded-md shadow-lg transition-opacity duration-300 ${hoveredTools ? "opacity-100" : "opacity-0"}`}>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Water Calculator</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Tool 2</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Tool 3</li>
            </ul>
          </li>
          <li className="cursor-pointer">Resources</li>
          <li className="cursor-pointer">Training</li>
        </ul>
        <button className="text-center w-32 h-12 mr-5 text-xl font-bold text-white bg-sky-600">
          LOGIN
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

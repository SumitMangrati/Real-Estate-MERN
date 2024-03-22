import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl m-auto p-3">
        < Link to= '/'>
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className=" text-slate-500">Real</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input type="text"
           placeholder="search"
           className="bg-transparent focus:outline-none w-24 sm:w-64" />
           <FaSearch className="text-slate-700"/>
        </form>
        <ul className="flex gap-4">
            <Link to = '/'>
            <li className="hidden sm:inline hover:translate-y-1 hover:scale-105 ease-in-out duration-300">Home</li>
            </Link>
            <Link to = '/about'>
            <li className="hidden sm:inline hover:translate-y-1 hover:scale-105 ease-in duration-300">About</li>
            </Link>
            <Link to = '/sign-in'>
            <li className="inline hover:translate-y-1 hover:scale-105 ease-in duration-300">Sign in</li>
            </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

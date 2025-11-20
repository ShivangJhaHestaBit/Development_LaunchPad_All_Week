import React from "react";
import Input from "./Input";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";

function Navbar({toggleSidebar}) {
  return (
    <div className="w-[100%] bg-gray-900 h-[100%] px-4 flex items-center justify-between">
      <button
        type="button"
        className="text-gray-300 hover:text-white text-xl"
        onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className="flex gap-4 h-[67%] w-[30%] min-w-60 justify-between">
        <Input />
        <button
          type="button"
          className="text-gray-300 hover:text-white text-xl w-[10%]"
        >
          <FaUser/>
        </button>
      </div>
    </div>
  );
}
export default Navbar;

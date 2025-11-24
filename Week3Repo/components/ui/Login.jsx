import Link from "next/link";
import React from "react";
import { FaUser, FaLock , FaBackward} from "react-icons/fa";
export default function Login() {
  return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center w-[400px] h-[500px] bg-white shadow-lg rounded-lg relative">
                <Link href="/" 
                    className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 text-xl">
                    <FaBackward />
                </Link>
                <h1 className="text-3xl font-semibold underline text-gray-700 mb-5 absolute top-20 tracking-wide">
                    Enter Your Details
                </h1>
                <div className="flex items-center border rounded-md px-3 py-2 mb-4 w-[80%]">
                    <FaUser className="text-gray-400 mr-2" />
                    <input type="text" placeholder="Username" className="w-full outline-none text-gray-700"/>
                </div>
                <div className="flex items-center border rounded-md px-3 py-2 mb-4 w-[80%]">
                    <FaLock className="text-gray-400 mr-2" />
                    <input type="password" placeholder="Password" className="w-full outline-none text-gray-700"/>
                </div>
                <Link href="/dashboard" className="text-center w-[50%] bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-md font-semibold">
                    LOGIN
                </Link>
            </div>
        </div>
  );
}

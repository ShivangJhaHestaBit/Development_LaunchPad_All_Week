import { FaSearch } from "react-icons/fa";
function Input(){
    return (
        <div className="flex w-[90%]">
          <input
            type="text"
            placeholder="Search"
            className=" w-[90%] h-[100%] px-3 py-2 rounded-l-md bg-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-[10%] h-[100%] bg-blue-600 px-3 py-2.5 hover:bg-blue-700 rounded-r-md text-white min-w-10">
            <FaSearch className=""/>
          </button>
        </div>
    );
}
export default Input;
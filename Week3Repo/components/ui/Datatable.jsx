import Input from "./Input";
import { FaTable } from "react-icons/fa";
function Datatable() {
  return (
    <div className="w-full border border-gray-400 rounded-md bg-gray-50">
      <div className="border-b border-gray-400 px-4 py-3 flex items-center gap-2 bg-gray-200 rounded-t-md">
        <span><FaTable /></span>
        <p>DataTable Example</p>
      </div>
      <div className="flex justify-between items-center px-4 py-3 flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border border-gray-400 rounded px-2 py-1">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span>entries</span>
        </div>
        <div className="flex items-center gap-2">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default Datatable;

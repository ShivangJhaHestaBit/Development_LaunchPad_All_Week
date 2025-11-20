import Card from "@/components/ui/Card";
import Graph from "@/components/ui/Graph";
import Datatable from "@/components/ui/Datatable";
import Bargraph from "@/components/Graphs/Bar-graph";
import Areachart from "@/components/Graphs/Area-chart";
import { FaChartArea, FaChartBar } from "react-icons/fa";
function Dashboard(){
    return (
        <div className="flex flex-col p-4 gap-4 h-auto">
            <h1 className="text-5xl">Dashboard</h1>
            <div className="bg-gray-300 rounded-md">
                <p className="text-xl p-4">Dashboard</p>
            </div>
            <div className="flex gap-4 h-auto flex-wrap flex-1">
                <Card CardName = "Primary Card" BgColor1="bg-blue-500" BgColor2="bg-blue-600"/>
                <Card CardName = "Warning Card" BgColor1="bg-yellow-500" BgColor2="bg-yellow-600"/>
                <Card CardName = "Success Card" BgColor1="bg-green-500" BgColor2="bg-green-600"/>
                <Card CardName = "Danger Card" BgColor1="bg-red-500" BgColor2="bg-red-600"/>
            </div>
            <div className="flex w-full flex-wrap gap-4">
                <Graph title="Area Chart" icon={FaChartArea} typeofgraph={<Areachart />} />
                <Graph title="Bar Chart" icon={FaChartBar} typeofgraph={<Bargraph />} />
            </div>
            <div>
                <Datatable />
            </div>
        </div>
    );
}
export default Dashboard;
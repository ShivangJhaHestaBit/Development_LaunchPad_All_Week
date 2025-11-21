import Link from "next/link";
import Testimonial from "./Testimonial";
function Featuregrid(){
    return (
        <div className="h-[25%] w-100% max-w-7xl bg-gray-100 text-black rounded-xl shadow-xl p-14 grid grid-cols-1 md:grid-cols-3 gap-12 z-11 md-10">
            <Testimonial name = "Dashboard" title ="Click the above button to go to Dashboard" subtitle="See all your data at the dashboard."/>
            <Testimonial name = "About" title ="Click the above button to go to about section" subtitle="See details about this page here."/>
            <Testimonial name = "User Details" title ="Click the above button to see user details" subtitle="See all your details here."/>
      </div>
    );
}
export default Featuregrid;
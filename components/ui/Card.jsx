import { FaAngleRight } from "react-icons/fa";
function Card({CardName, BgColor1, BgColor2}){
    return (
        <div className="flex-col flex-1 h-[120px] text-white min-w-[200px] rounded-md">
            <div className={`${BgColor1} w-[100%] h-[70px] px-4 rounded-t-md flex items-center`}>
                <p>{CardName}</p>
            </div>
            <div className="w-[100%] h-[50px]">
                <button className={`${BgColor2} flex items-center justify-between w-[100%] h-[50px] px-4 rounded-b-md`}>
                    <p>View Details</p>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
}
export default Card;
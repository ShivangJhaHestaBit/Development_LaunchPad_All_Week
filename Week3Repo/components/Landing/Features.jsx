import Link from "next/link";
function Features({name, title, subtitle, link}){
    return (
        <div className="text-center px-6">
            <Link href={link} className="mt-8 bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition">
                {name}
            </Link>
            <h3 className="mt-8 text-xl font-bold mb-3">
                {title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
                {subtitle}
            </p>
        </div>
    );
}
export default Features;
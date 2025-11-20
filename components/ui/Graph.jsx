function Graph({ title, icon: IconComponent, typeofgraph }) {
  return (
    <div className="border border-gray-400 flex flex-col flex-1 min-w-[308px] h-[400px] bg-white rounded-md shadow">
      <p className=" border-b border-gray-400 px-4 flex items-center gap-2 font-semibold mb-2 bg-gray-200 rounded-t-md h-[15%]">
        {IconComponent && <IconComponent />}
        {title}
      </p>
      <div className="w-full h-full">
        {typeofgraph}
      </div>
    </div>
  );
}
export default Graph;

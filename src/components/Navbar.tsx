export default function Navbar() {
  return (
    <div className="absolute z-40 top-0 h-[10vh] ml-20 w-[calc(100%-5rem)] flex justify-center items-center font-main box-border overflow-x-hidden">
      <div className="w-[70%] h-[80%] flex justify-around items-center">
        <div className="w-[20%] h-[60%] text-black flex items-center border-[0.2rem] border-black">
          <input
            className="pl-2 w-full h-full"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="w-auto h-[60%] text-black flex justify-center items-center text-xl">
          Men
        </div>
        <div className="w-auto h-[60%] text-black flex justify-center items-center text-xl">
          Women
        </div>
        <div className="w-auto h-[60%] text-black flex justify-center items-center text-xl">
          Kids
        </div>
        <div className="w-auto h-[60%] text-black flex justify-center items-center text-xl">
          Accessories
        </div>
        <div className="w-auto h-[60%] text-black flex justify-center items-center text-xl">
          Sales
        </div>
      </div>
    </div>
  );
}

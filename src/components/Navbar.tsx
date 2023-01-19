import Account from "../assets/icons/account-icon.svg";
import Cart from "../assets/icons/cart-icon.svg";

export default function Navbar() {
  return (
    <div className="absolute z-40 top-0 h-[10vh] ml-20 w-[calc(100%-5rem)] flex justify-end items-center font-main box-border overflow-x-hidden">
      <div className="flex justify-between items-center w-[85%] h-[50%] mr-3">
        <section className="w-[15%] h-full flex justify-center items-center">
          <div className="w-full h-[80%] text-black flex items-center border-[0.2rem] border-black rounded-md">
            <input
              className="pl-2 w-full h-full"
              type="text"
              placeholder="Search..."
            />
          </div>
        </section>
        <section className="box-contain">
          <div className="w-auto h-[60%] text-white flex justify-center items-center text-xl bg-orange-600 py-2 px-6 rounded-lg">
            News
          </div>
        </section>
        <section className="w-[50%] h-full flex justify-around items-center">
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
        </section>
        <section className="flex justify-around items-center w-[10%]">
          <div className="relative text-black flex justify-center items-center text-xl">
            <img className="w-[90%]" src={Cart} alt="cart icon" />
            <div className="absolute z-[60] h-[10%] w-auto rounded-full bg-orange-600 bottom-0 right-0"></div>
          </div>
          <div className="text-black flex justify-center items-center text-xl">
            <img className="w-[90%]" src={Account} alt="account icon" />
          </div>
        </section>
      </div>
    </div>
  );
}

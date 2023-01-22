import { NavLink } from 'react-router-dom';
import Account from '../assets/icons/account-icon.svg';
import Cart from '../assets/icons/cart-icon.svg';

export default function Navbar() {
  return (
    <>
      {/* <div className="border-b-[0.5rem] border-orange-600"> */}
      <div className="navbar relative z-40 top-0 h-[10vh] w-[82%] flex justify-center items-center font-main box-border ml-[18%]">
        <div className="flex justify-between items-center w-[100%] h-[50%] mr-3">
          <section className="w-[18%] h-full flex justify-center items-center">
            <div className="w-full h-full text-black flex items-center border-[0.2rem] border-black rounded-md">
              <input
                className="pl-2 w-full h-full focus:bg-black focus:outline-white focus:text-white duration-150"
                type="text"
                placeholder="Search..."
              />
            </div>
          </section>
          <section className="box-contain">
            <NavLink
              to="/news"
              className="w-auto h-[60%] text-white flex justify-center items-center text-xl ring-2 ring-inset bg-orange-600 hover:bg-orange-700 hover:ring-[3px] ring-black duration-200 py-2 px-6 rounded-full"
            >
              News
            </NavLink>
          </section>
          <section className="w-[40%] h-full flex justify-around items-center">
            <NavLink
              to="/men"
              className="nav-link w-auto h-[60%] text-black inline-block justify-center items-center text-xl after:block after:my-0 after:mx-auto after:border-b-4 after:border-black after:w-[5px] after:rounded-full hover:after:w-full after:duration-300"
            >
              Men
            </NavLink>
            <NavLink
              to="/women"
              className="nav-link w-auto h-[60%] text-black inline-block justify-center items-center text-xl after:block after:my-0 after:mx-auto after:border-b-4 after:border-black after:w-[5px] after:rounded-full hover:after:w-full after:duration-300"
            >
              Women
            </NavLink>
            <NavLink
              to="/kids"
              className="nav-link w-auto h-[60%] text-black inline-block justify-center items-center text-xl after:block after:my-0 after:mx-auto after:border-b-4 after:border-black after:w-[5px] after:rounded-full hover:after:w-full after:duration-300"
            >
              Kids
            </NavLink>
            <NavLink
              to="accessories"
              className="nav-link w-auto h-[60%] text-black inline-block justify-center items-center text-xl after:block after:my-0 after:mx-auto after:border-b-4 after:border-black after:w-[5px] after:rounded-full hover:after:w-full after:duration-300"
            >
              Accessories
            </NavLink>
            <NavLink
              to="/sales"
              className="nav-link w-auto h-[60%] text-black inline-block justify-center items-center text-xl after:block after:my-0 after:mx-auto after:border-b-4 after:border-black after:w-[5px] after:rounded-full hover:after:w-full after:duration-300"
            >
              Sales
            </NavLink>
          </section>
          <section className="flex justify-around items-center w-[10%]">
            <NavLink
              to="/cart"
              className="relative text-black flex justify-center items-center text-xl"
            >
              <img className="w-[90%]" src={Cart} alt="cart icon" />
              <div className="absolute z-[60] h-[10%] w-auto rounded-full bg-orange-600 bottom-0 right-0"></div>
            </NavLink>
            <NavLink
              to="/account"
              className="text-black flex justify-center items-center text-xl"
            >
              <img className="w-[90%]" src={Account} alt="account icon" />
            </NavLink>
          </section>
        </div>
      </div>
      <div className="navbar absolute z-50 bg-orange-600 w-screen top-[10vh] h-[1%]" />
    </>
  );
}

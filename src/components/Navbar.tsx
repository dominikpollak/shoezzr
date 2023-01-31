import { NavLink } from 'react-router-dom';
import Account from '../assets/icons/account-icon.svg';
import Cart from '../assets/icons/cart-icon.svg';

export default function Navbar() {
  return (
    <div className="w-screen">
      <div className="navbar relative z-40 h-[10vh] w-[85%] lg:w-[82%] flex justify-center items-center font-main box-border ml-[15%] lg:ml-[18%] pr-2">
        <div className="flex justify-between items-center w-full h-[50%] mr-3">
          <section className="w-[35%] lg:w-[18%] h-full flex justify-center items-center">
            <input
              className="pl-2 w-full h-full text-black focus:bg-black focus:outline-white border-[0.2rem] border-black flex items-center rounded-md focus:text-white duration-150"
              type="text"
              placeholder="Search..."
            />
          </section>
          <section className="">
            <NavLink
              to="/news"
              className="w-auto h-[60%] text-white flex justify-center items-center text-[1.1rem] lg:text-xl ring-2 ring-inset bg-orange-600 hover:bg-orange-700 hover:ring-[3px] ring-black duration-200 py-2 px-6 rounded-full"
            >
              News
            </NavLink>
          </section>
          <section className="w-[52%] xl:w-[45%] h-full lg:flex justify-around items-center hidden text-[1.1rem] lg:text-xl">
            <NavLink
              to="/jordan"
              className="nav-link w-auto h-[60%] text-black inline-block justify-center items-center after:block after:my-0 after:mx-auto after:border-b-4 after:border-black after:w-[5px] after:rounded-full hover:after:w-full after:duration-300"
            >
              Jordan
            </NavLink>
            <NavLink
              to="/nike"
              className="nav-link w-auto h-[60%] text-black inline-block justify-center items-center after:block after:my-0 after:mx-auto after:border-b-4 after:border-black after:w-[5px] after:rounded-full hover:after:w-full after:duration-300"
            >
              Nike
            </NavLink>
            <NavLink
              to="/adidas"
              className="nav-link w-auto h-[60%] text-black inline-block justify-center items-center after:block after:my-0 after:mx-auto after:border-b-4 after:border-black after:w-[5px] after:rounded-full hover:after:w-full after:duration-300"
            >
              Adidas
            </NavLink>
            <NavLink
              to="accessories"
              className="nav-link w-auto h-[60%] text-black inline-block justify-center items-center after:block after:my-0 after:mx-auto after:border-b-4 after:border-black after:w-[5px] after:rounded-full hover:after:w-full after:duration-300"
            >
              Accessories
            </NavLink>
            <NavLink
              to="/sales"
              className="nav-link w-auto h-[60%] text-black inline-block justify-center items-center after:block after:my-0 after:mx-auto after:border-b-4 after:border-black after:w-[5px] after:rounded-full hover:after:w-full after:duration-300"
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
    </div>
  );
}

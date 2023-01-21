import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Account from '../assets/icons/account-icon.svg';
import Cart from '../assets/icons/cart-icon.svg';

export default function Navbar() {
  useEffect(() => {
    anime({
      targets: '.navbar',
      scale: [0, 1],
      delay: 3700,
    });
  }, []);
  return (
    <div className="border-b-[0.5rem] border-orange-600">
      <div className="navbar absolute z-30 top-0 h-[10vh] ml-20 w-[calc(100%-5rem)] flex justify-end items-center font-main box-border overflow-x-hidden">
        <div className="flex justify-between items-center w-[85%] h-[50%] mr-3">
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
          <section className="w-[50%] h-full flex justify-around items-center">
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
    </div>
  );
}

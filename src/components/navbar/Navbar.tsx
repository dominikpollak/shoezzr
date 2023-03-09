import { NavLink } from 'react-router-dom';
import Account from '../../assets/icons/account-icon.svg';
import Cart from '../../assets/icons/cart-icon.svg';
import BurgerMenu from './BurgerMenu';
import SearchField from './SearchField';

export default function Navbar() {
  return (
    <div className="w-screen">
      <div className="navbar relative z-40 ml-[20%] box-border flex h-[10vh] w-[80%] items-center justify-center pr-2 font-main lg:ml-[18%] lg:w-[82%]">
        <div className="flex h-[50%] w-full items-center justify-between sm:mr-3">
          <SearchField />

          <section className="">
            <NavLink
              to="/news"
              className="flex h-[60%] w-auto items-center justify-center rounded-full bg-orange-600 px-5 py-2 text-[0.9rem] text-white ring-2 ring-inset ring-black duration-200 hover:bg-orange-700 hover:ring-[3px] sm:px-6 sm:text-[1.1rem] lg:text-xl"
            >
              News
            </NavLink>
          </section>

          <BurgerMenu />

          <section className="hidden h-full w-[52%] items-center justify-around text-[1.1rem] lg:flex xl:w-[45%] xl:text-xl">
            <NavLink
              to="/jordan"
              className="nav-link inline-block h-[60%] w-auto items-center justify-center text-black after:my-0 after:mx-auto after:block after:w-[5px] after:rounded-full after:border-b-4 after:border-black after:duration-300 hover:after:w-full"
            >
              Jordan
            </NavLink>
            <NavLink
              to="/nike"
              className="nav-link inline-block h-[60%] w-auto items-center justify-center text-black after:my-0 after:mx-auto after:block after:w-[5px] after:rounded-full after:border-b-4 after:border-black after:duration-300 hover:after:w-full"
            >
              Nike
            </NavLink>
            <NavLink
              to="/adidas"
              className="nav-link inline-block h-[60%] w-auto items-center justify-center text-black after:my-0 after:mx-auto after:block after:w-[5px] after:rounded-full after:border-b-4 after:border-black after:duration-300 hover:after:w-full"
            >
              Adidas
            </NavLink>
            <NavLink
              to="accessories"
              className="nav-link inline-block h-[60%] w-auto items-center justify-center text-black after:my-0 after:mx-auto after:block after:w-[5px] after:rounded-full after:border-b-4 after:border-black after:duration-300 hover:after:w-full"
            >
              Accessories
            </NavLink>
            <NavLink
              to="/sales"
              className="nav-link inline-block h-[60%] w-auto items-center justify-center text-black after:my-0 after:mx-auto after:block after:w-[5px] after:rounded-full after:border-b-4 after:border-black after:duration-300 hover:after:w-full"
            >
              Sales
            </NavLink>
          </section>
          <section className="flex w-[25%] items-center justify-around sm:w-[15%] lg:w-[10%]">
            <NavLink
              to="/cart"
              className="relative flex items-center justify-center text-xl text-black"
            >
              <img className="w-[90%]" src={Cart} alt="cart icon" />
              <div className="absolute bottom-0 right-0 z-[60] h-[10%] w-auto rounded-full bg-orange-600"></div>
            </NavLink>
            <NavLink
              to="/account"
              className="flex items-center justify-center text-xl text-black"
            >
              <img className="w-[90%]" src={Account} alt="account icon" />
            </NavLink>
          </section>
        </div>
      </div>
      <div className="navbar absolute top-[10vh] z-50 h-[1%] w-screen bg-orange-600" />
    </div>
  );
}

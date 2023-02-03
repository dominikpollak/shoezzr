import { Burger, Menu } from '@mantine/core';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Account from '../assets/icons/account-icon.svg';
import Cart from '../assets/icons/cart-icon.svg';

export default function Navbar() {
  const [openedMenu, setOpenedMenu] = useState(false);
  const title = openedMenu ? 'Close menu' : 'Open menu';

  return (
    <div className="w-screen">
      <div className="navbar relative z-40 ml-[20%] box-border flex h-[10vh] w-[80%] items-center justify-center pr-2 font-main lg:ml-[18%] lg:w-[82%]">
        <div className="mr-3 flex h-[50%] w-full items-center justify-between">
          <section className="flex h-full w-[35%] items-center justify-center lg:w-[18%]">
            <input
              className="flex h-full w-full items-center rounded-md border-[0.2rem] border-black pl-2 text-black duration-150 focus:bg-black focus:text-white focus:outline-white"
              type="text"
              placeholder="Search..."
            />
          </section>
          <section className="">
            <NavLink
              to="/news"
              className="flex h-[60%] w-auto items-center justify-center rounded-full bg-orange-600 py-2 px-6 text-[1.1rem] text-white ring-2 ring-inset ring-black duration-200 hover:bg-orange-700 hover:ring-[3px] lg:text-xl"
            >
              News
            </NavLink>
          </section>
          <section className="inline-block lg:hidden">
            <Menu
              shadow="md"
              width={200}
              offset={30}
              transition={'slide-left'}
              opened={openedMenu}
              onClose={() => setOpenedMenu(false)}
              styles={{
                dropdown: {
                  backgroundColor: 'rgba(0,0,0, 0.8)',
                },
                item: {
                  fontFamily: 'Righteous, mono',
                  fontSize: '1.1rem',
                  color: 'white',
                  ':hover': {
                    backgroundColor: '#ea580c',
                  },
                },
              }}
            >
              <Menu.Target>
                <Burger
                  opened={openedMenu}
                  onClick={() => setOpenedMenu((o) => !o)}
                  title={title}
                  size={30}
                />
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <NavLink to="/jordan">Air Jordan</NavLink>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                  <NavLink to="/nike">Nike</NavLink>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>Adidas</Menu.Item>
                <Menu.Divider />
                <Menu.Item>Accessories</Menu.Item>
                <Menu.Divider />
                <Menu.Item>Sales</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </section>
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
          <section className="flex w-[15%] items-center justify-around lg:w-[10%]">
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

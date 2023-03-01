import { Burger, Menu } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function BurgerMenu() {
  const [openedMenu, setOpenedMenu] = useState(false);
  const title = openedMenu ? 'Close menu' : 'Open menu';
  const navigate = useNavigate();

  return (
    <Menu
      shadow="md"
      width={200}
      offset={45}
      transition={'slide-left'}
      opened={openedMenu}
      onClose={() => setOpenedMenu(false)}
      styles={{
        dropdown: {
          backgroundColor: 'rgba(0,0,0, 0.9)',
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
        <Menu.Item onClick={() => navigate('/jordan')}>Air Jordan</Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={() => navigate('/nike')}>Nike</Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={() => navigate('/adidas')}>Adidas</Menu.Item>
        <Menu.Divider />
        <Menu.Item>Accessories</Menu.Item>
        <Menu.Divider />
        <Menu.Item>Sales</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

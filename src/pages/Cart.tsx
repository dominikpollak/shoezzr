import React from 'react';
import type { RootState } from '../features/store';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  return <div className="h-screen p-3 text-white">{cart.cartItems.length}</div>;
};

export default Cart;

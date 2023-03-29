import { useSelector } from 'react-redux';
import type { RootState } from '../features/store';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <div className="h-screen p-3 text-white">
      {cart.cartItems.length === 0 && (
        <div className="flex h-screen w-full flex-col items-center font-main text-[2rem] text-white">
          <p>No items in cart</p>
        </div>
      )}
      {cart.cartItems.map((item) => {
        return (
          <div key={item.id} className="flex h-[200px] w-full">
            <span className="relative h-[200px] w-[200px]">
              <img
                className="h-full w-full"
                src={item.main_picture_url}
                alt=""
              />
            </span>
            <span>
              <h1>{item.name}</h1>
              <h1>Price: ${item.retail_price_cents / 100}</h1>
              <h1>Quantity: {item.cartQuantity}</h1>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

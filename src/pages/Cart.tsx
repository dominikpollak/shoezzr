import { useDispatch, useSelector } from 'react-redux';
import type { CartItem } from '../redux/cartSlice';
import {
  addItemsToCart,
  addToCart,
  removeAllFromCart,
  removeFromCart,
} from '../redux/cartSlice';
import type { RootState } from '../redux/store';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const qtyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const removeItem = (item: CartItem) => {
    dispatch(removeFromCart(item as CartItem));
  };

  const removeAllItems = () => {
    dispatch(removeAllFromCart());
  };

  const addItem = (item: CartItem) => {
    dispatch(addToCart(item as CartItem));
  };

  const addItems = (item: CartItem) => {
    dispatch(addItemsToCart(item as CartItem));
  };

  const handleAmountSelection = (
    e: React.ChangeEvent<HTMLSelectElement>,
    item: CartItem
  ) => {
    const amount = parseInt(e.target.value);

    if (amount === 0) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(addItemsToCart({ ...item, cartQuantity: amount }));
    }
  };

  return (
    <div className="h-screen p-3 text-white">
      {cart.cartItems.length === 0 && (
        <div className="flex h-screen w-full flex-col items-center font-main text-[2rem] text-white">
          <p>No items in cart</p>
        </div>
      )}
      {cart.cartItems.map((item) => {
        return (
          <div key={item.id} className="flex h-[200px] w-[40%]">
            <span className="relative h-[200px] w-[200px]">
              <img
                className="h-full w-full"
                src={item.main_picture_url}
                alt=""
              />
            </span>
            <span>
              <h1>{item.name}</h1>
              <h1>Size: {item.shoeSize}</h1>
              <h1>Color: {item.shoeColor}</h1>
              <h1>Price: ${item.retail_price_cents / 100}</h1>
              <label className="">
                Quantity:
                <select
                  className="ml-2 rounded-sm border-[1px] border-white bg-transparent text-center"
                  name="cartQuantity"
                  id="cartQuantity"
                  onChange={(e) => handleAmountSelection(e, item)}
                >
                  {qtyArray.map((qty) => {
                    return (
                      <option
                        key={qty}
                        value={qty}
                        selected={qty === item.cartQuantity}
                      >
                        {qty}
                      </option>
                    );
                  })}
                </select>
              </label>
            </span>
          </div>
        );
      })}
      <h2>Total items: {cart.cartTotalQuantity}</h2>
      <h2>Total amount: ${cart.cartTotalAmount}</h2>
      <h2>Delivery price: $15</h2>
      <hr className="my-2 border-[1px] border-black" />
      <h2>Total: ${cart.cartTotalAmount + 15}</h2>
      <button onClick={() => removeAllItems()}>Remove all</button>
    </div>
  );
};

export default Cart;

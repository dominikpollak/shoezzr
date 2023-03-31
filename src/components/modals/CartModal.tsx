import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';

interface CartModalProps {
  setShowModal: (showModal: boolean) => void;
}

const CartModal: React.FC<CartModalProps> = ({ setShowModal }) => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="fixed inset-0 z-[1000] flex h-screen w-screen items-center justify-center bg-black/40">
      <div className="relative flex h-[75%] w-[95%] flex-col border-2 border-orange-600 bg-white p-2 text-[1.1rem] text-black sm:h-[50%] sm:w-[80%] md:w-[65%] lg:h-[50%] lg:w-[50%]">
        <h1 className="w-full text-center text-[1.2rem] font-bold">
          ITEM ADDED TO THE CART
        </h1>
        <div className="flex justify-center">
          <img
            src={cart.cartItems.slice(-1)[0].main_picture_url}
            className="block w-[60%] sm:hidden"
            alt="last added item"
          />
        </div>
        <div className="flex sm:mt-8">
          <section className="flex h-[90%] w-[65%] pr-2">
            <div className="hidden h-[90%] w-full sm:block">
              <img
                src={cart.cartItems.slice(-1)[0].main_picture_url}
                className="h-full w-auto"
                alt="last added item"
              />
            </div>
            <div>
              <h2 className="rounded-sm bg-black p-2 text-center text-white">
                {cart.cartItems.slice(-1)[0].name}
              </h2>
              <h2>${cart.cartItems.slice(-1)[0].retail_price_cents / 100}</h2>
              <h2>Size: {cart.cartItems.slice(-1)[0].shoeSize}</h2>
              <h2>Color: {cart.cartItems.slice(-1)[0].shoeColor}</h2>
              <h2>Quantity: {cart.cartItems.slice(-1)[0].cartQuantity}</h2>
            </div>
          </section>
          <section className="h-[90%] border-l-2 border-black pl-2">
            <h2>Your cart:</h2>
            <h2>Total items: {cart.cartTotalQuantity}</h2>
            <h2>Total amount: ${cart.cartTotalAmount}</h2>
            <h2>Delivery price: $15</h2>
            <hr className="my-2 border-[1px] border-black" />
            <h2>Total: ${cart.cartTotalAmount + 15}</h2>
          </section>
        </div>
        <div className="absolute bottom-3 right-2 flex w-[90%] justify-around sm:w-[70%] xl:w-[50%]">
          <button
            onClick={() => setShowModal(false)}
            className="rounded-sm border-2 border-black bg-orange-600 p-2 duration-150 hover:bg-orange-500"
          >
            Continue shopping
          </button>
          <Link
            to="/cart"
            className="rounded-sm border-2 border-black bg-orange-600 p-2 duration-150 hover:bg-orange-500"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

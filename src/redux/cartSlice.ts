import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  name: string;
  retail_price_cents: number;
  cartQuantity: number;
  main_picture_url: string;
  shoeSize: number;
  shoeColor: string;
}

interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.shoeSize === action.payload.shoeSize &&
          item.shoeColor === action.payload.shoeColor
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        state.cartTotalQuantity += 1;
        state.cartTotalAmount += action.payload.retail_price_cents / 100;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        state.cartTotalQuantity += 1;
        state.cartTotalAmount += action.payload.retail_price_cents / 100;
      }
    },
    removeFromCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
        state.cartTotalQuantity -= 1;
        state.cartTotalAmount -= action.payload.retail_price_cents / 100;
      }
    },
    removeAllFromCart(state) {
      if (state.cartItems.length > 0 && state.cartTotalQuantity > 0) {
        state.cartTotalQuantity = 0;
        state.cartTotalAmount = 0;
        state.cartItems = [];
      }
    },
    //function will set the quantity of the item based on the option selected in the cart dropdown
    addItemsToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.shoeSize === action.payload.shoeSize &&
          item.shoeColor === action.payload.shoeColor
      );
      if (itemIndex >= 0) {
        const item = state.cartItems[itemIndex];
        const quantityDiff = action.payload.cartQuantity - item.cartQuantity;
        item.cartQuantity = action.payload.cartQuantity;
        state.cartTotalQuantity += quantityDiff;
        state.cartTotalAmount += quantityDiff * (item.retail_price_cents / 100);
      }
    },
  },
});

export const { addToCart, removeFromCart, removeAllFromCart, addItemsToCart } =
  cartSlice.actions;

export default cartSlice.reducer;

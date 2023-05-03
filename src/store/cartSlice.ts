import {
    AddToCartPayload, CounterState, RemoveFromCartPayload, UpdateCartPayload
} from '@/@types/store';
import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
const initialState: CounterState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const item = state.cartItems.find((x) => x.id === action.payload.id);

      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action: PayloadAction<UpdateCartPayload>) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === 'quantity') {
            p.attributes.price = p.oneQuantityPrice * Number(action.payload.val);
          }
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCartPayload>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

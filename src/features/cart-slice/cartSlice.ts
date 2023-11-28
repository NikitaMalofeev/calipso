import { createSlice, createSelector } from "@reduxjs/toolkit";

interface IInitialState {
  cart: Record<number, number>;
}

const initialState: IInitialState = {
  cart: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state: any, action) => {
      // ищу по индексу в массиве стора элемент и добавляю ему количество
      state.cart[action.payload] = state.cart[action.payload] ?? 0;
      state.cart[action.payload]++;
    },
    removeFromCart: (state: any, action) => {
      if(!state.cart[action.payload]) {
        return state
      }
      state.cart[action.payload]--;
      }
    },
  },
);


export default cartSlice.reducer;
export const { addToCart, removeFromCart } =
  cartSlice.actions;

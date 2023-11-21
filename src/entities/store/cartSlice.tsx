import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    cart: Array<{id: number; name: string, price: string, amount: number, image: File}>
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  } as CartState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
        
      },
  },
});

export default cartSlice.reducer;
export const {addToCart, removeFromCart} = cartSlice.actions;

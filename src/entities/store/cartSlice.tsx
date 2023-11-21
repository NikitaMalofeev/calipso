import { createSlice } from "@reduxjs/toolkit";
import { initialProducts } from "../../shared/config/initialProducts";

// interface CartState {
//     cart: Array<{id: number; name: string, price: string, amount: number, image: File}>
// }

interface CartItem {
  id: number;
  name: string;
  price: string;
  amount: number;
  image: string;
}

interface CartState {
  cart: CartItem[];
  items: typeof initialProducts;
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  items: initialProducts,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id)
      if(find >= 0){
        state.cart[find].amount += 1;
      }
      state.cart.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { initialProducts } from "../../shared/config/initialProducts";

// interface CartState {
//     cart: Array<{id: number; name: string, price: string, amount: number, image: File}>
// }

// interface CartItem {
//   id: number;
//   name: string;
//   price: string;
//   amount: number;
//   quantity: number;
//   image: string;
// }

// interface CartState {
//   cart: CartItem[];
//   items: typeof initialProducts;
//   totalQuantity: number;
//   totalPrice: number;
// }

// const initialState: CartState = {
//   cart: [],
//   items: initialProducts,
//   totalQuantity: 0,
//   totalPrice: 0,
// };

const initialState = {
  cart: [],
  items: initialProducts,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state: any, action) => {
      // ищу по индексу в массиве стора элемент и добавляю ему количество
      let find = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    getCardTotal: (state: any) => {
      let { totalPrice, totalQuantity } = state.cart.reduce(
        (cartTotal: any, cartItem: any) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    getQuantityById: (state, action) => {

    },
    removeFromCart: (state: any, action) => {
      const { id } = action.payload;
      const itemIndex = state.cart.findIndex((item: any) => item.id === id);
    
      if (itemIndex >= 0) {
        // Получаю удаленный элемент
        const removedItem = state.cart[itemIndex];
    
        // Если количество больше 1, уменьшаю количество
        if (removedItem.quantity > 1) {
          removedItem.quantity -= 1;
        } else {
          // если количество 1 или меньше убираю айтем из корзины
          state.cart.splice(itemIndex, 1);
        }
    
        // обновляю значения в сторе
        state.totalQuantity -= 1;
        state.totalPrice -= removedItem.price;
      }
    },
    
  },
});


export default cartSlice.reducer;
export const { addToCart, getCardTotal, removeFromCart} = cartSlice.actions;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IDeliveryAdress,
  IDeliveryAdresses,
} from "../../shared/types/deliveryTypes";

const initialState: IDeliveryAdresses = {
  adresses: [],
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    addDeliveryAdress: (
      state: IDeliveryAdresses,
      action: PayloadAction<IDeliveryAdress>
    ) => {
      state.adresses.push(action.payload);
    },
    removeDeliveryAdress: (
      state: IDeliveryAdresses,
      action: PayloadAction<number>
    ) => {
      // Фильтруем массив по индексу
      state.adresses = state.adresses.filter((_, i) => i !== action.payload);
    },
    updateDeliveryAdress: (
      state: IDeliveryAdresses,
      action: PayloadAction<{ index: number; updatedAdress: IDeliveryAdress }>
    ) => {
      const { index, updatedAdress } = action.payload;
      state.adresses[index] = updatedAdress;
    },
    //FIXME считаю что есть более правильный путь нежели установка значения как первого в глобальном стейте 
    setSelectedAdress: (
      state: IDeliveryAdresses,
      action: PayloadAction<IDeliveryAdress>
    ) => {
      // Check if the address is already in the array
      const existingIndex = state.adresses.findIndex(
        (item) => (
          item.city === action.payload.city &&
          item.adress === action.payload.adress &&
          item.apartment === action.payload.apartment
        )
      );

      // если адрес уже существует в массиве то перемещаю в начало
      if (existingIndex !== -1) {
        state.adresses.unshift(state.adresses.splice(existingIndex, 1)[0]);
      } else {
        state.adresses.unshift(action.payload);
      }
    },
  },
});

export default deliverySlice.reducer;
export const { removeDeliveryAdress, addDeliveryAdress, updateDeliveryAdress, setSelectedAdress } = deliverySlice.actions;

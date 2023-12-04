import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDeliveryAdress, IDeliveryAdresses } from "../../shared/types/deliveryTypes";

const initialState: IDeliveryAdresses = {
  adresses: [],
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    addDeliveryAdress: (state: IDeliveryAdresses, action: PayloadAction<IDeliveryAdress>) => {
        state.adresses.push(action.payload);
      },
  },
});

export default deliverySlice.reducer;
export const { addDeliveryAdress } = deliverySlice.actions;

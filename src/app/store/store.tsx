import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../../features/cart-slice/cartSlice";
import modalSlice from "../../features/modal-slice/modalSlice";

const store = configureStore({
    reducer: {
        allCart: cartSlice,
        modal: modalSlice
    }
})

export default store
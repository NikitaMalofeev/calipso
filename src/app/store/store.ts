import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../../features/cart-slice/cartSlice";
import modalSlice from "../../features/modal-slice/modalSlice";
import registrationSlice from "../../features/user-slice/registrationSlice";

const store = configureStore({
    reducer: {
        allCart: cartSlice,
        modal: modalSlice,
        registration: registrationSlice
    }
})

export default store
// modalSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isVisibleMyModal: boolean;
  modalType: string;
}

const initialState: ModalState = {
  isVisibleMyModal: false,
  modalType: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showMyModal: (state, action) => {
      state.isVisibleMyModal = true;
      state.modalType = action.payload;
    },
    hideMyModal: (state) => {
      state.isVisibleMyModal = false;
      state.modalType = "";
    },
  },
});

export const { showMyModal, hideMyModal } = modalSlice.actions;

export default modalSlice.reducer;

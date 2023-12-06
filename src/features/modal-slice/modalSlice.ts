// modalSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isVisibleMyModal: boolean;
  modalType: string;
  editingIndex: number;
}

const initialState: ModalState = {
  isVisibleMyModal: false,
  modalType: "",
  editingIndex: 0,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showMyModal: (state, action) => {
      state.isVisibleMyModal = true;
      state.modalType = action.payload;
      // добавляю в модальное окно индекс для возможности открывать модальные окна 
      // в завивисимости от контента из которого оно нажато (первое использование для редактирования нужного адреса в модалке Новый адрес)
      state.editingIndex = action.payload.index;
    },
    hideMyModal: (state) => {
      state.isVisibleMyModal = false;
      state.modalType = "";
    },
  },
});

export const { showMyModal, hideMyModal } = modalSlice.actions;

export default modalSlice.reducer;

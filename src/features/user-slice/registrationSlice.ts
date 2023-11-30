import { createSlice } from "@reduxjs/toolkit";
import { IRegistration } from "../../shared/types";

const initialState: IRegistration = {
  type: "",
  method: "",
  dataIndividual: {
    main: { email: "", password: "", repeatPassword: "" },
    contact: { contactPerson: "", phone: "" },
  },
  dataLegal: {
    entryData: { email: "", password: "", repeatPassword: "" },
    requisites: {
      nameLegal: "",
      BIN: "",
      bankNumber: "",
      BIK: "",
      bank: "",
      legalAdress: "",
      factAdress: "",
    },
    contact: { contactPerson: "", post: "", phone: "" },
  },
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setRegistrationIndividualData: (state: any, action) => {
      const { main, contact } = action.payload;
      state.dataIndividual.main = main;
      state.dataIndividual.contact = contact;
    },
    setRegisrationLegalData: (state: any, action) => {
      const { entryData, requisites, contact } = action.payload
      state.dataLegal.entryData = entryData;
      state.dataLegal.requisites = requisites;
      state.dataLegal.contact = contact;
    },
    setRegistrationType: (state, action) => {
      state.type = action.payload;
    },
    setRegistrationMethod: (state, action) => {
      state.method = action.payload;
    },
  },
});

export default registrationSlice.reducer;
export const {
  setRegistrationIndividualData,
  setRegisrationLegalData,
  setRegistrationType,
  setRegistrationMethod,
} = registrationSlice.actions;

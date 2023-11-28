import { createSlice } from "@reduxjs/toolkit";
import { IRegistration } from "../../shared/types";

const initialState: IRegistration = {
    type: "",
    dataIndividual: { main: {email: "", password: "", repeatPassword: ""}, contact: {contactPerson: "", phone: ""}},
    dataLegal: ['']
}

const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        setRegistrationIndividualData: (state: any, action) => {
            const { main, contact } = action.payload;
            state.dataIndividual.main = main;
            state.dataIndividual.contact = contact;
        },
        setLegalIndividualData: (state: any, action) => {
            state.dataLegal = action.payload
        }, 
        setRegistrationType: (state, action) => {
            state.type = action.payload;
        },
    }
})

export default registrationSlice.reducer;
export const { setRegistrationIndividualData, setLegalIndividualData, setRegistrationType } = registrationSlice.actions;
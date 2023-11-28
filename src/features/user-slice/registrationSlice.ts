import { createSlice } from "@reduxjs/toolkit";
import { IRegistration } from "../../shared/types";

const initialState: IRegistration = {
    type: "",
    dataIndividual: {email: "", password: "", contactPerson: "", repeatPassword: "", phone: ""},
    dataLegal: ['']
}

const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        setRegistrationIndividualData: (state: any, action) => {
            state.dataIndividual =  action.payload;
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
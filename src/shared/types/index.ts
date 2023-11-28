export interface ILogIn {
    id: number,
    type: string;
    phone: string;
    email: string;
    single: string;
    password: string;
}

interface IIndividualProps {
    email: string;
    password: string;
    repeatPassword: string;
    contactPerson: string;
    phone: string;
}

interface ILegalProps {

}
export interface IRegistration {
    id?: number,
    type: string;
    dataIndividual?: IIndividualProps;
    dataLegal: ILegalProps;
}
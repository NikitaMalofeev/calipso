export interface ILogIn {
    id: number,
    type: string;
    phone: string;
    email: string;
    single: string;
    password: string;
}

// Шаблоны для регистрации ↓

interface IDataIndividualMain {
    email: string;
    password: string;
    repeatPassword: string;
}

interface IDataIndividualContact {
    contactPerson: string;
    phone: string;
}
interface IDataIndividual {
    type: string;
    method: string;
    main: IDataIndividualMain;
    contact: IDataIndividualContact;
}

interface ILegalProps {

}
export interface IRegistration {
    id?: number,
    type: string;
    dataIndividual?: IDataIndividual;
    dataLegal: ILegalProps;
}

// Шаблоны для регистрации ↑
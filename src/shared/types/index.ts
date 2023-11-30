export interface ILogIn {
  id: number;
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
  main: IDataIndividualMain;
  contact: IDataIndividualContact;
}

interface IDataLegalEntry {
  email: string;
  password: string;
  repeatPassword: string;
}

interface IDataLegalRequisites {
  nameLegal: string;
  BIN: string;
  bankNumber: string;
  BIK: string;
  bank: string;
  legalAdress: string;
  factAdress: string;
}

interface IDataLegalContact {
  contactPerson: string;
  post: string;
  phone: string;
}

interface IDataLegal {
  entryData: IDataLegalEntry;
  requisites: IDataLegalRequisites;
  contact: IDataLegalContact;
}
export interface IRegistration {
  id?: number;
  type: string;
  method: string;
  dataIndividual?: IDataIndividual;
  dataLegal: IDataLegal;
}

// Шаблоны для регистрации ↑

import phone from "../icons/registrationIcons/phone.svg"
import phoneActive from "../icons/registrationIcons/phoneActive.svg"
import email from "../icons/registrationIcons/email.svg"
import emailActive from "../icons/registrationIcons/emailActive.svg"
import sms from "../icons/registrationIcons/SMS.svg"
import smsActive from "../icons/registrationIcons/smsActive.svg"
import individual from "../icons/registrationIcons/individual.svg"
import individualActive from "../icons/registrationIcons/invididualActive.svg"
import legal from "../icons/registrationIcons/legal.svg"
import legalActive from "../icons/registrationIcons/legalActive.svg"

export const initialRegistrationType = [
  {
    iconActive: `${individualActive}`,
    icon: `${individual}`,
    name: "физ.лицо",
  },
  {
    iconActive: `${legalActive}`,
    icon: `${legal}`,
    name: "юр.лицо",
  },
];
export const initialRegistrationWay = [
  {
    iconActive: `${phoneActive}`,
    icon: `${phone}`,
    name: "телефон",
  },
  {
    iconActive: `${emailActive}`,
    icon: `${email}`,
    name: "почта",
  },
  {
    iconActive: `${smsActive}`,
    icon: `${sms}`,
    name: "sms",
  },
];
export const stepLabelsIndividual = [
  "Тип регистрации",
  "Основная информация",
  "Контактное лицо",
  "Подтверждение",
];

export const stepLabelsLegal = [
  "Тип регистрации",
  "Данные авторизации",
  "Реквизиты",
  "Контактные лица",
  "Подтверждение",
];

export const LegalEntryItems = [
  { value: "email", placeholder: "Почта" },
  { value: "password", placeholder: "Пароль" },
  { value: "repeatPassword", placeholder: "Повтор пароля" },
];

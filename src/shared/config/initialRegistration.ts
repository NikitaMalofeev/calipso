import backIcons from "../icons/backIcons.svg";
import phone from "../icons/phone.svg"
import phoneActive from "../icons/phoneActive.svg"
import email from "../icons/email.svg"
import emailActive from "../icons/emailActive.svg"
import sms from "../icons/SMS.svg"
import smsActive from "../icons/smsActive.svg"
import individual from "../icons/individual.svg"
import individualActive from "../icons/invididualActive.svg"
import legal from "../icons/legal.svg"
import legalActive from "../icons/legalActive.svg"

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

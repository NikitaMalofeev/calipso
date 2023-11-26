import React from "react";
import styles from "./styles.module.scss";
import { MyButton } from "../my-button";

const initialContacts = ["WhatsApp", "Instagram", "Gmail", "Позвонить"];

const ContactsModalContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__description}>
        <p>Доставка пн-сб: 09:00 — 18:00</p>
        <p>График работы пн-сб: 09:00 — 18:00</p>
        <p>Адрес: РК, 050039, г. Алматы, ул. Наманганская, 43</p>
      </div>
      <div className={styles.container__buttons}>
        {initialContacts.map((item, index) => (
          <button className={styles.container__button} key={index}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export { ContactsModalContent };

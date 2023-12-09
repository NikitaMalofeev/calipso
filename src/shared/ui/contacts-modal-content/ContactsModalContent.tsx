import React from "react";
import styles from "./styles.module.scss";
import { MyButton } from "../my-button";
import whatsapp from "../../icons/whatsapp.svg";
import vk from "../../icons/vk.svg";
import facebook from "../../icons/facebook.svg";
import instagram from "../../icons/instagram.svg";

const initialContacts = ["WhatsApp", "Instagram", "Gmail", "Позвонить"];

const ContactsModalContent: React.FC = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__address}>
        <span className={styles.contact__title}>Наш адрес:</span>
        <br />
        <span className={styles.contact__description}>
          г. Алматы, ул. Наманганская, 43
        </span>
        <div className={styles.contact__flex}>
          <div className={styles.contact__circle}></div>
          <div className={styles.contact__circle}></div>
          <div className={styles.contact__circle}></div>
        </div>
      </div>
      <span className={styles.contact__title} style={{ fontSize: "14px" }}>
        Доставка осуществляется в рабочее время
      </span>
      <span className={styles.contact__title}>График работы:</span>
      <span className={styles.contact__description}>пн-сб: 09:00 — 18:00</span>
      <span className={styles.contact__title}>Наши соц.сети:</span>
      <div className={styles.contact__social}>
        <div className={styles.contact__email}>
          <div className={styles.contact__circle}></div>
          <a href="mailto:" className={styles.contact__description}>
            office@calipso.kz
          </a>
          <span className={styles.contact__}>(офис)</span>
        </div>
        <div className={styles.contact__email}>
          <div className={styles.contact__circle}></div>
          <a href="mailto:" className={styles.contact__description}>
            sales@calipso.kz
          </a>
          <span>(менеджеры)</span>
        </div>
      </div>
      <div className={styles.contact__icons}>
        <img src={whatsapp} alt="" />
        <img src={vk} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
      </div>
    </div>
  );
};

export { ContactsModalContent };

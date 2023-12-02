import React from "react";
import styles from "./styles.module.scss";
import logo from "../../icons/logoFooter.svg";
import whatsapp from "../../icons/whatsapp.svg";
import facebook from "../../icons/facebook.svg";
import vk from "../../icons/vk.svg";
import instagram from "../../icons/instagram.svg";
import ellipse from "../../icons/ellipse.svg";

const Footer: React.FC = ({}) => {
  return (
    <div className={styles.footer}>
      <img className={styles.footer__logo} src={logo} alt="logo" />
      <div className={styles.footer__address}>
        <p>Наш адрес:</p>
        <p>г. Алматы, ул. Наманганская, 43</p>
      </div>
      <ul className={styles.footer__addressLinks}>
        <li>
          <img src={ellipse} alt="2gis" />
        </li>
        <li>
          <img src={ellipse} alt="Yandex Maps" />
        </li>
        <li>
          <img src={ellipse} alt="Google Maps" />
        </li>
      </ul>
      <div className={styles.footer__contacts}>
        <ul className={styles.footer__contactsEmail}>
          <li className={styles.footer__contactsEmailLi}>
            <img src={ellipse} alt="mail" />
            <a href="mailto:office@calipso.kz">office@calipso.kz</a>
            <span>(офис)</span>
          </li>
          <li className={styles.footer__contactsEmailLi}>
            <img src={ellipse} alt="mail" />
            <a href="mailto:sales@calipso.kz">sales@calipso.kz</a>{" "}
            <span>(менеджеры)</span>
          </li>
        </ul>
      </div>
      <div className={styles.footer__socialMedia}>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={vk} alt="" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="" />
        </a>
      </div>
      <p className={styles.footer__copyright}>Все права защищены</p>
    </div>
  );
};

export { Footer };

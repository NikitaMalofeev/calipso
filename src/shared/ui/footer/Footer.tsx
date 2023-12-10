import React from "react";
import styles from "./styles.module.scss";
import logo from "../../icons/brandIcons/logoFooter.svg";
import facebook from "../../icons/socialIcons/facebook.svg";
import vk from "../../icons/socialIcons/vk.svg";
import instagram from "../../icons/socialIcons/instagram.svg";
import twoGis from "../../icons/socialIcons/2gis.svg";
import yandexMaps from "../../icons/socialIcons/yandexMaps.svg";
import googleMaps from "../../icons/socialIcons/googleMaps.svg";
import email from "../../icons/symbolIcons/emailIcon.svg";

const Footer: React.FC = ({}) => {
  return (
    <div className={styles.footer}>
      <img className={styles.footer__logo} src={logo} alt="logo" />
      <div className={styles.footer__adress}>
        <span className={styles.footer__title}>Наш адрес:</span>
        <span className={styles.footer__description}>
          г. Алматы, ул. Наманганская, 43
        </span>
        <div className={styles.footer__flex}>
          <button type="button" className={styles.footer__button}>
            <div className={styles.footer__maps_icon}>
              <img src={twoGis} alt="" />
            </div>
            <span className={styles.footer__maps_title}>
              Открыть в <b>“2gis”</b>
            </span>
          </button>
          <button type="button" className={styles.footer__button}>
            <div className={styles.footer__maps_icon}>
              <img src={yandexMaps} alt="" />
            </div>
            <span className={styles.footer__maps_title}>
              Открыть в <b>“Yandex maps”</b>
            </span>
          </button>
          <button type="button" className={styles.footer__button}>
            <div className={styles.footer__maps_icon}>
              <img src={googleMaps} alt="" />
            </div>
            <span className={styles.footer__maps_title}>
              Открыть в <b>“Google maps”</b>
            </span>
          </button>
        </div>
      </div>
      <div className={styles.footer__text}>
        <span className={styles.footer__title}>График работы:</span>
        <span className={styles.footer__description}>пн-сб: 09:00 — 18:00</span>
      </div>
      <div className={styles.footer__text}>
        <span className={styles.footer__title}>Телефон</span>
        <span className={styles.footer__description}>
          +7 777 632 22 88 (офис)
        </span>
      </div>
      <div className={styles.footer__social}>
        <div className={styles.footer__email}>
          <div className={styles.footer__circle}>
            <img src={email} alt="" />
          </div>
          <a href="mailto:" className={styles.footer__description}>
            office@calipso.kz
          </a>
          <span className={styles.footer__}>(офис)</span>
        </div>
        <div className={styles.footer__email}>
          <div className={styles.footer__circle}>
            <img src={email} alt="" />
          </div>
          <a href="mailto:" className={styles.footer__description}>
            sales@calipso.kz
          </a>
          <span>(менеджеры)</span>
        </div>
      </div>
      <div className={styles.footer__icons}>
        <img src={instagram} alt="" />
        <img src={vk} alt="" />
        <img src={facebook} alt="" />
      </div>
      <p className={styles.footer__copyright}>Все права защищены 1997-2023</p>
    </div>
  );
};

export { Footer };

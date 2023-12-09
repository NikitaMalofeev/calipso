import React from "react";
import styles from "./styles.module.scss";
import logo from "../../icons/logoFooter.svg";
import whatsapp from "../../icons/whatsapp.svg";
import facebook from "../../icons/facebook.svg";
import vk from "../../icons/vk.svg";
import instagram from "../../icons/instagram.svg";
import twoGis from "../../icons/2gis.svg";
import yandexMaps from "../../icons/yandexMaps.svg";
import googleMaps from "../../icons/googleMaps.svg";
import arrowNext from "../../icons/arrowNextWhite.svg";
import email from "../../icons/emailIcon.svg"

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
            <img
              src={twoGis}
              alt=""
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            <span className={styles.footer__maps_title}>Открыть в “2gis”</span>
            <img src={arrowNext} alt="" className={styles.footer__maps_arrow} />
          </button>
          <button type="button" className={styles.footer__button}>
            <div className={styles.footer__maps_icon}>
              <img src={yandexMaps} alt="" />
            </div>
            <span className={styles.footer__maps_title}>
              Открыть в “Yandex maps”
            </span>
            <img src={arrowNext} alt="" className={styles.footer__maps_arrow} />
          </button>
          <button type="button" className={styles.footer__button}>
            <div className={styles.footer__maps_icon}>
              <img src={googleMaps} alt="" />
            </div>
            <span className={styles.footer__maps_title}>
              Открыть в “Google maps”
            </span>
            <img src={arrowNext} alt="" className={styles.footer__maps_arrow} />
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
        <img src={whatsapp} alt="" />
        <img src={vk} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
      </div>
      <p className={styles.footer__copyright}>Все права защищены 1997-2023</p>
    </div>
  );
};

export { Footer };

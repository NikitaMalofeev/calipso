import React, { useState } from "react";
import styles from "./styles.module.scss";
import brand from "../../image/brandDark.png"

interface IButton {
  isActive?: boolean;
  handleClick?: () => void;
}

// вместе с модальным окном перенести его интерфейсы
interface IModalMenu {
  item: string;
}

const menuitem: IModalMenu[] = [
  { item: "Акции" },
  { item: "Вакансии" },
  { item: "Производство" },
  { item: "Новости" },
];

const BurgerButton: React.FC<IButton> = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const test = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className={styles.button} onClick={test}>
      <div
        className={`${styles.button__item} ${isOpen ? styles.active : ""}`}
      ></div>
      {/*Модальное окно в отдельный виджет или фичу*/}

      <div className={`${styles.burger} ${isOpen ? styles.burger__active : ""}`}>
        <div className={styles.burger__chapter}>
          <img className={styles.burger__icon} src={brand} alt="" />
          <p className={styles.burger__about}>О компании</p>
          {menuitem.map((item, index) => (
            <p className={styles.burger__item} key={index}>
              {item.item}
            </p>
          ))}
        </div>
        <div className={styles.burger__shedule}>
          <p>
            <b>Доставка</b> пн-сб: 09:00 — 18:00
          </p>
          <p>
            <b>График работы</b> пн-сб: 09:00 — 18:00
          </p>
        </div>
      </div>
    </div>
  );
};

export { BurgerButton };

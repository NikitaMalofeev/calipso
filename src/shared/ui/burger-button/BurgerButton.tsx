import React, { useState } from "react";
import styles from "./styles.module.scss";

interface IButton {
  isActive?: boolean;
  handleClick?: () => void;
}

// вместе с модальным окном перенести его интерфейсы
interface IModalMenu {
  item: string;
}

const menuitem: IModalMenu[] = [
  { item: "Вакансии" },
  { item: "Вакансии" },
  { item: "Вакансии" },
  { item: "Вакансии" },
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

      <div className={`${styles.modal} ${isOpen ? styles.modal__active : ""}`}>
        <div className={styles.modal__chapter}>
          <p className={styles.modal__about}>О компании</p>
          {menuitem.map((item, key) => (
            <p className={styles.modal__item} key={key}>
              {item.item}
            </p>
          ))}
        </div>
        <div className={styles.modal__shedule}>
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

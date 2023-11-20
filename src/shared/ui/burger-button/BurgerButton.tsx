import React, { useState } from "react";
import style from "./styles.module.scss";

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
    <div className={style.button} onClick={test}>
      <div
        className={`${style.button__item} ${isOpen ? style.active : ""}`}
      ></div>
      {/*Модальное окно в отдельный виджет или фичу*/}

      <div className={`${style.modal} ${isOpen ? style.modal__active : ""}`}>
        <div className={style.modal__chapter}>
          <p className={style.modal__about}>О компании</p>
          {menuitem.map((item) => (
            <p className={style.modal__item}>{item.item}</p>
          ))}
        </div>
        <div className={style.modal__shedule}>
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

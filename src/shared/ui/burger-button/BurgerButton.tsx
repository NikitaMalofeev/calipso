import React, { useState } from "react";
import styles from "./styles.module.scss";
import brand from "../../image/brandDark.png"
import dotsLogo from "../../icons/dotsLogo.svg"

interface IButton {
  isActive?: boolean;
  handleClick?: () => void;
}

// вместе с модальным окном перенести его интерфейсы
interface IModalMenu {
  item: string;
}

const menuitem: IModalMenu[] = [
  { item: "Главная" },
  { item: "О компании" },
  { item: "Акции" },
  { item: "Вакансии" },
  { item: "Производство" },
  { item: "Новости" },
];

const BurgerButton: React.FC<IButton> = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [handleMenuItemIndex, setHandleMenuItemIndex] = useState(0)
  const test = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true) ;
    isOpen ? document.body.style.overflow = 'auto'  : document.body.style.overflow = 'hidden'  ;
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
          {menuitem.map((item, index) => (
            <p className={`${handleMenuItemIndex === index ? styles.item__active : styles.burger__item}`} key={index} onClick={() => setHandleMenuItemIndex(index)}>
              {item.item}
            </p>
          ))}
        </div>
        <div className={styles.burger__footer}>
            <img src={dotsLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export { BurgerButton };
